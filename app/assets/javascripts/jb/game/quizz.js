// JavaScript Document

/*jslint vars:true, plusplus:true */
/*global $, getClickEvent, isMobile */

var Quizz_jb = function(content_$, display_$, userTrack_$, endScreen_$, questions_num) {"use strict";
	var context = this, questionSet_$;

	this.questions_num = questions_num;
	this.userTrack_$ = userTrack_$;
	this.questions_$ = content_$;
	this.display_$ = display_$;
	this.answer_num = 0;
	this.endScreen_$ = endScreen_$;
	this.success_bool = false;
	this.current_question_rival_answer = 0;
	this.onStartQuestion = function() {
	};
	this.onQuestionAnswer = function() {
	};

	content_$.hide();
	content_$.find('.solution').hide();

	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var endOfGame = function() {
		var answers = new Array();
		var feedBack_num;
		var feedBackList_$ = $(endScreen_$.children('.feedBackEnd'));
		content_$.append(display_$.children());
		var score_num = 0;
		for(var i = 0 ; i < content_$.children('[success_bool="true"]').length ; i++){
			// score_num += 
			console.log($(content_$.children('[answer_time]')[i]).attr('answer_time'));
			score_num += 10 - Math.round(parseInt($(content_$.children('[answer_time]')[i]).attr('answer_time'))/1000);
		}
		for(var i = 0 ; i < content_$.children('[question-id]').length ; i++){
			console.log($(content_$.children('[question-id]')[i]).attr('resp'));
			var qid = $(content_$.children('[question-id]')[i]).attr('question-id');
			var resp = $(content_$.children('[question-id]')[i]).attr('resp');
			answers.push({'qid': qid, 'resp': resp});	
		}
		console.log(answers);
		score_num *= 2;
		$.ajax({
            url: '/show_results',
            data: {'score':score_num, 'url': $(location).attr('href'), 'questions': answers},
            dataType: 'html',
            success : function(result){
                // alert(result);
            }
        });
		display_$.show();
		display_$.append(context.endScreen_$);
		endScreen_$.css('visibility', 'visible');
		var address = $(location).attr('href');
		if(address.indexOf("make_quiz") > -1){
			console.log("make_quize");
			endScreen_$.find('#result1').attr('data-perc', score_num);
			endScreen_$.find('#result2').attr('data-perc', "0");
			endScreen_$.find('#pic1').attr('src', "/assets/www.png");
			endScreen_$.find('#pic2').attr('src', "");
			endScreen_$.find('#score1').text("امتیاز: " + score_num + "/100");
			endScreen_$.find('#score2').text("امتیاز: 0/100");
		}
		else if(address.indexOf("reload_quiz") > -1){
			var scored = getParameterByName("score", $(location).attr('href'));
			endScreen_$.find('#result1').attr('data-perc', score_num );
			endScreen_$.find('#result2').attr('data-perc', scored);
			if(parseInt(scored) > parseInt(score_num)){
				endScreen_$.find('#pic1').attr('src', "/assets/FF.png");
				endScreen_$.find('#pic2').attr('src', "/assets/www.png");						
			}
			else{
				endScreen_$.find('#pic1').attr('src', "/assets/www.png");
				endScreen_$.find('#pic2').attr('src', "/assets/FF.png");						
			}
			endScreen_$.find('#score1').text("امتیاز: " + score_num + "/100");
			endScreen_$.find('#score2').text("امتیاز: " + scored + "/100");
		}
	$(function() {
		
		$('.progressbar').each(function(){
				var t = $(this);
				var dataperc = t.attr('data-perc'),
						barperc = Math.round(dataperc*5.56);
				console.log(dataperc);
				t.find('.bar').animate({width:barperc}, dataperc*25);
				t.find('.label').append('<div class="perc"></div>');
				
				function perc() {
					var length = t.find('.bar').css('width'),
						perc = Math.round(parseInt(length)/5.56),
						labelpos = (parseInt(length)-2);
					t.find('.label').css('left', labelpos);
					t.find('.perc').text(perc+'%');
				}
				perc();
				setInterval(perc, 0); 
			});
		});


		$('#timer').hide();
		endScreen_$.show(600);

		if (!isMobile.any()) {
			$('#endNav a').height($($('#endNav a')[0]).height());
		}
			
	};
	var selectQuestion = function() {

		if (context.answer_num === context.questions_num) {
			endOfGame();

		} else {
			var selectionList_$ = context.questions_$.children('[selected_bool="false"]');
			var selectedQuestion_$ = $(selectionList_$[0]);
			selectedQuestion_$.attr("selected_bool", "true");
			context.afficheQuestion(selectedQuestion_$);
		}
	};

	var displayFeedBack = function(success_bool, event) {
		questionSet_$.attr("success_bool", success_bool);
		var responseList_$ = $(questionSet_$.find(".response"));
		var startPoint = {};
		var text_str = $('#' + String(success_bool)).text();
		text_str = text_str.toUpperCase();

		if (event) {
			startPoint.x = event.pageX;
			startPoint.y = event.pageY - 70;

		} else {
			startPoint.x = $('body').width() / 2;
			startPoint.y = 400;

		}
		startPoint.x -= 40;

		responseList_$.unbind();
		context.answer_num++;

		var feedBack_$ = $('<div/>');
		var score_num = 0;
		var answer_time = context.onQuestionAnswer();
		console.log("ddd" + answer_time);
		if(success_bool === true){
		 	questionSet_$.attr("answer_time", answer_time);
		 	console.log(questionSet_$.attr("answer_time"));
			
			for(var i = 0 ; i < content_$.children('[success_bool="true"]').length ; i++){
				// score_num += 
				score_num += 10 - Math.round(parseInt($(content_$.children('[answer_time]')[i]).attr('answer_time'))/1000);
			}
			score_num += 10 - Math.round(parseInt(answer_time)/1000);
		}

		feedBack_$.addClass('feedBack');
		feedBack_$.css('background-image', "url(/assets/mark86x86000" + Number(2 + Number(success_bool)) + ".jpg)");
		feedBack_$.text(score_num*2 + "%");

		context.display_$.append(feedBack_$);
		feedBack_$.css('left', startPoint.x).css('top', startPoint.y - 50).css('rotation', 45);
		feedBack_$.fadeIn(30);
		feedBack_$.animate({

			rotate : 30,
			top : 100

		}, 600, null, function() {

			feedBack_$.fadeOut(400, function() {
				feedBack_$.remove();
				var trackImg_$ = $(context.userTrack_$.find ('img')[context.answer_num - 1]);
				var img_num = Number(success_bool) + 2;
				trackImg_$.attr("src", "/assets/mark000" + img_num + ".jpg");
				trackImg_$.addClass('filled');
				display_$.delay(1000).fadeOut(600, selectQuestion);

			});

		});
	};
	this.timeOut = function() {
		displayFeedBack(false);
	};
	this.afficheQuestion = function(selectedQuestion_$) {
		
		questionSet_$ = selectedQuestion_$;
		var solution_$ = questionSet_$.find(".solution");
		var responseList_$ = $(questionSet_$.find(".response"));
		var question_$ = $(questionSet_$.find(".question"));
		var reponse_num = Number(solution_$.text());
		content_$.append(display_$.children());
		display_$.fadeIn(400);
		display_$.append(questionSet_$);
		responseList_$.hide();

		function showReponse() {
			responseList_$.each(function(index, element) {
				var speed_num = 100;
				var button_$ = $(element);

				button_$.hide();
				button_$.css("top", 30).css("opacity", 0).delay(400 + 300 * index).show().animate({
					top : 0,
					opacity : 1
				}, speed_num, context.onStartQuestion);

			});
		}

		showReponse();

		responseList_$.bind(getClickEvent(), function(event) {

			responseList_$.removeClass('button');
			var button_$ = $(this);
			var selected_num = button_$.index();

			var success_bool = context.success_bool = selected_num === reponse_num;
			questionSet_$.attr('resp', selected_num.toString());
			if (success_bool) {
				button_$.addClass("true");
			} else {
				button_$.removeClass('button');
				button_$.addClass("false");
				$(responseList_$[reponse_num - 1]).addClass('missedTrue');

			}
			var address = $(location).attr('href');
			if(address.indexOf("reload_quiz") > -1){
				var answers = JSON.parse(gon.question_answer);
				console.log(questionSet_$.attr("question-id"));
				console.log(answers);
				console.log(answers[questionSet_$.attr("question-id")]-1);
				$(responseList_$[answers[questionSet_$.attr("question-id")]-1]).addClass('rival-answer');
				console.log(responseList_$);
			}
			responseList_$.not('.rival-answer').not('.true').not('.false').not('.missedTrue').addClass('unsellectedFalse');
			displayFeedBack(success_bool, event);
		});
	};

	var init = function() {
		var IMG_WIDTH = 24, display_time = 0, n;
		context.answer_num = 0;

		$('#timer').show(600);

		$(context.questions_$.children()).attr("success_bool", "false").attr("selected_bool", "false");
		context.questions_$.find('.response').removeClass('true').removeClass('false').removeClass('missedTrue').removeClass('unsellectedFalse').addClass('button');
		context.userTrack_$.empty();

		var space_pix = Math.floor((context.userTrack_$.width() - (IMG_WIDTH * context.questions_num)) / (questions_num ));
		for ( n = 0; n < context.questions_num; n++) {
			var img_$ = $("<img src='/assets/mark0001.jpg' alt='progress'>");

			context.userTrack_$.append(img_$);
			if (n < context.questions_num - 1) {
				img_$.css('margin-left', space_pix);
			}

		}
		context.userTrack_$.fadeIn(4000, selectQuestion);
	};

	this.start = function() {
		init();

	};

};
