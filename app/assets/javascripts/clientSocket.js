var clientSocket={};

clientSocket.getIdIntOfElement=function(element)
{
	if (typeof element !== 'undefined' && element != undefined &&
		element.innerHTML != undefined
		&& element.innerHTML.trim().length != 0)
		return parseInt(element.innerHTML.trim());
	return undefined;
};

clientSocket.fayePort=9292;
clientSocket.webSocketAdr=undefined;
clientSocket.hostname=window.location.hostname;
clientSocket.current_uid=undefined;
clientSocket.opponent_uid=undefined;
clientSocket.current_cid=undefined;
clientSocket.socketAdapter=undefined;
clientSocket.lastOnlineFindingRequestTime=undefined;
clientSocket.isGettingInvitationFromUser=false;
clientSocket.isQuzzing=false;
clientSocket.IAmFirst=true;
clientSocket.invitationTimeout=10;
clientSocket.processOpponentAnswer=undefined;
clientSocket.messageType={
	askType:'askType',
	answerType:'answerType',
	acceptType:'acceptType',
	refuseType:'refuseType',
	oneQuestionStatus:'oneQuestionStatusType'
};
clientSocket.channelType={
	category:'category',
	user:'user'
};

clientSocket.updateOnlineButtonView=function(searching)
{
	if(document.getElementById('loading_img')!=null) {
		if (searching == true) {
			document.getElementById('loading_img').style.display = 'initial';
			document.getElementById('online_quizz_button').disabled = true;
		}
		else {
			document.getElementById('loading_img').style.display = 'none';
			document.getElementById('online_quizz_button').disabled = false;
		}
	}
};

clientSocket.init=function()
{
	if (clientSocket.hostname == 'localhost')
		clientSocket.webSocketAdr = 'http://localhost:' + clientSocket.fayePort + '/faye';
	else
		clientSocket.webSocketAdr = 'http://' + hostname + ':' + clientSocket.fayePort + '/faye';

	clientSocket.socketAdapter = new Faye.Client(clientSocket.webSocketAdr);
	clientSocket.socketAdapter.setHeader('Access-Control-Allow-Origin', '*');

	clientSocket.current_cid = clientSocket.getIdIntOfElement(document.getElementById('current_category_id_container'));
	clientSocket.current_uid = clientSocket.getIdIntOfElement(document.getElementById('current_user_id_container'));
	clientSocket.opponent_uid = clientSocket.getIdIntOfElement(document.getElementById('other_user_id_container'));

	if(clientSocket.opponent_uid!=undefined && clientSocket.opponent_uid!=0)
		clientSocket.isQuzzing=true;
	if(typeof document.getElementById("IAMSecond") !== 'undefined' &&
		document.getElementById("IAMSecond")!=undefined)
		clientSocket.IAmFirst = false;

	if (clientSocket.current_cid != undefined)
		clientSocket.socketAdapter.subscribe('/categories/' + clientSocket.current_cid,
			function(dataString)
			{
				if(dataString!=null)
					clientSocket.processCategoryChannelData(JSON.parse(dataString));
			});
	if (clientSocket.current_uid != undefined)
		clientSocket.socketAdapter.subscribe('/users/' + clientSocket.current_uid,
			function(dataString)
			{
				if(dataString!=null)
					clientSocket.processThisUserChannelData(JSON.parse(dataString));
			});
	if(clientSocket.IAmFirst && clientSocket.isQuzzing
		&& document.getElementById('whole_quizz_container')!=undefined)
	{
		clientSocket.sendAcceptForOpponent();
	}

	clientSocket.updateOnlineButtonView(false);
};

clientSocket.generateMessageString=function(messageType, channelName, dataObject)
{
	var message={};
	if(dataObject.time==null)
		dataObject.time=Date.now();
	dataObject.messageType=messageType;
	dataObject.sender=clientSocket.current_uid;
	message.channel=channelName;
	message.data=JSON.stringify(dataObject);
	return 'message='+JSON.stringify(message);
};

clientSocket.generateCategoryMessageString=function(messageType, dataObject)
{
	return clientSocket.generateMessageString(messageType,
								'/categories/'+clientSocket.current_cid
								,dataObject);
};

clientSocket.generateSpecificMessageString=function(messageType, pairId, dataObject)
{
	return clientSocket.generateMessageString(messageType,
										'/users/'+pairId
										, dataObject);
};

clientSocket.sendRawMessageString=function(message_str, failure, success)
{
	var request=new XMLHttpRequest();
	request.onreadystatechange = function()
	{
		if(request.readyState==4)
			if(request.status!=200) {
				failure();
			}
			else success();
	};
	request.open("POST", clientSocket.webSocketAdr, true);
	request.send(message_str);
};

clientSocket.processCategoryChannelData = function (dataObject)
{
	if(dataObject.messageType==clientSocket.messageType.askType)
		clientSocket.processAskData(dataObject);
};

clientSocket.processThisUserChannelData = function (dataObject)
{
	if(dataObject.messageType==clientSocket.messageType.refuseType)
		clientSocket.processRefuseData();
	else if(dataObject.messageType==clientSocket.messageType.answerType)
		clientSocket.processAnswerData(dataObject);
	else if(dataObject.messageType==clientSocket.messageType.acceptType)
		clientSocket.processChallengeAccept(dataObject);
	else if(dataObject.messageType==clientSocket.messageType.oneQuestionStatus)
		if (clientSocket.processOpponentAnswer != undefined)
			clientSocket.processOpponentAnswer(dataObject);
};

clientSocket.sendMyAnswerData=function(myChoiceNumber, myAnswerTime, successCallback)
{
	var messageString=clientSocket.generateSpecificMessageString(
		clientSocket.messageType.oneQuestionStatus,
		clientSocket.opponent_uid, {choice: parseInt(myChoiceNumber), time: parseInt(myAnswerTime)});
	clientSocket.sendRawMessageString(messageString,
					function(){alert('fatal error');},
					successCallback);
};

clientSocket.processChallengeAccept=function(data)
{
	document.location.href='http://'+window.location.host+((data.quizUrl).replace(RegExp('___', 'g'), '&'));
};

clientSocket.processAnswerData=function(data)
{
	if(clientSocket.isQuzzing)
		clientSocket.sendRawMessageString(
			clientSocket.generateSpecificMessageString(clientSocket.messageType.refuseType,
				data.sender, {})
			,function(){}, function(){}
		);
	else
	{
		clientSocket.opponent_uid=data.sender;
		document.location.href='http://'+window.location.host+'/make_quiz?id='+clientSocket.current_cid
		+'&isOnline=1&current_uid='+clientSocket.current_uid
		+'&opponent_uid='+clientSocket.opponent_uid;
	}
};

clientSocket.sendMakeQuizzRequest=function(failure, success)
{
	var request=new XMLHttpRequest();
	request.onreadystatechange = function()
	{
		if(request.readyState==4)
			if(request.status!=200) {
				failure();
			}
			else success(request.responseText);
	};
	request.open("GET",
		'http://'+window.location.host+'/make_quiz?id='+clientSocket.current_cid
		+'&isOnline=1&current_uid='+clientSocket.current_uid
		+'&opponent_uid='+clientSocket.opponent_uid
		,
		true);
	request.send();
};

clientSocket.processRefuseData=function()
{
	clientSocket.onlineQuezzAnswerError();
};

clientSocket.processAskData=function(data)
{
	clientSocket.IAmFirst=false;
	if(data.messageType!=clientSocket.messageType.askType)
		return ;
	else if(data.sender==clientSocket.current_uid)
		return ;
	else if(! clientSocket.isGettingInvitationFromUser)
	{
		clientSocket.isGettingInvitationFromUser=true;
		var invitationResult=confirm('آیا می خواهید کوییز دهید؟');
		if(invitationResult==true)
		{
			clientSocket.opponent_uid=data.sender;
			clientSocket.isGettingInvitationFromUser=false;
			clientSocket.sendRawMessageString(
										clientSocket.generateSpecificMessageString(
											clientSocket.messageType.answerType,
											data.sender, {})
				, clientSocket.handleOnlineMatchError,
				function()
				{
					clientSocket.updateOnlineButtonView(true);
					setTimeout(clientSocket.onlineQuezzAnswerError,
					1000*clientSocket.invitationTimeout);
				}
			);
		}
		else
		{
			clientSocket.isGettingInvitationFromUser=false;
		}
	}
};

clientSocket.sendAcceptForOpponent=function()
{
	var message_str=clientSocket.generateSpecificMessageString(
		clientSocket.messageType.acceptType,
		clientSocket.opponent_uid, {quizUrl:document.getElementById('url_for_second').innerHTML.replace(RegExp('&amp;','g'), '___')}
	);
	clientSocket.sendRawMessageString(message_str
		, function(){alert('fatal error');}, function(){});
};

clientSocket.handleOnlineMatchError=function()
{
	alert('نشد که بشه');
	clientSocket.updateOnlineButtonView(false);
};

clientSocket.onlineQuezzAnswerError=function()
{
	if(clientSocket.isQuzzing!=true && clientSocket.isGettingInvitationFromUser!=true)
		if(document.getElementById('loading_img').style.display != 'none')
		{
			alert('دیگه دیر گفتی');
			clientSocket.updateOnlineButtonView(false);
		}
};

clientSocket.onlineQuizzRequestTimeout=function()
{
	if(clientSocket.isQuzzing!=true && clientSocket.isGettingInvitationFromUser!=true)
	{
		alert('کسی پیدا نشد');
		clientSocket.updateOnlineButtonView(false);
	}
};

clientSocket.askForOnlineMatch=function()
{
	clientSocket.lastOnlineFindingRequestTime=Date.now();
	var requestString=clientSocket.generateCategoryMessageString(
		clientSocket.messageType.askType, {
			time:clientSocket.lastOnlineFindingRequestTime
		});
	clientSocket.sendRawMessageString(requestString, clientSocket.handleOnlineMatchError
									, function()
									{
										clientSocket.updateOnlineButtonView(true);
										setTimeout(clientSocket.onlineQuizzRequestTimeout,
												1000*clientSocket.invitationTimeout);
									});
};

$(function()
{
	if(clientSocket.webSocketAdr==undefined)
		clientSocket.init();
});
