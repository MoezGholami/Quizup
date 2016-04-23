$(document).ready(function () {

    window.onload = function() {
        canvas  = document.getElementById('timer'),
            seconds = document.getElementById('counter'),
            ctx     = canvas.getContext('2d'),
            sec     = 10,
            countdown = sec;
            ctx.lineWidth = 10;
        //ctx.strokeStyle = "#528f20";
    }

    var questionNumber = 0;
    var questionBank = new Array();
    var stage = "#game1";
    var stage2 = new Object;
    var questionLock = false;
    var numberOfQuestions;
    var score = 0;
	var startAngle = 0;
    var time       = 0;
    var intv = setInterval(  function(){
            ctx.strokeStyle = "#" + (~~(Math.random() * 255)).toString(16) + (~~(Math.random() * 255)).toString(16) + (~~(Math.random() * 255)).toString(16);

            var endAngle = (Math.PI * time * 2 / sec);
ctx.beginPath();
            ctx.arc(65, 35, 30, startAngle , endAngle);
           ctx.stroke();
ctx.closePath();
//ctx.fill();	                
//startAngle = endAngle;


            //for minute
            countdown--;
            if ( countdown > 60){
                seconds.innerHTML = Math.floor(countdown/60);
                seconds.innerHTML += ":" + countdown%60;
            }
            else{
                seconds.innerHTML = countdown;
            }

            if (questionNumber >= numberOfQuestions) { clearInterval(intv), $("#timer, #counter").remove(), $("#timers").prepend('<img id="theImg" src="http://ivojonkers.com/votify/upvote.png" />'); }
	else if(++time > sec,countdown == 0)
		changeQuestion();
        }, 1000);

    var data = gon.questions;
    for (i = 0 ; i < data.length ; i++) {
        questionBank[i] = new Array;
        questionBank[i][0] = data[i].questionTitle;
        questionBank[i][1] = data[i].choice1;
        questionBank[i][2] = data[i].choice2;
        questionBank[i][3] = data[i].choice3;
        questionBank[i][4] = data[i].choice4;
        questionBank[i][5] = data[i].answer;
    }
    numberOfQuestions = questionBank.length;

    displayQuestion();


    function displayQuestion() {
        sec     = 10,
        countdown = sec;

        var q1 = questionBank[questionNumber][1];
        var q2 = questionBank[questionNumber][2];;
        var q3 = questionBank[questionNumber][3];
	    var q4 = questionBank[questionNumber][4];
        var answer = questionBank[questionNumber][5];
        $(stage).append('<div class="questionText">' + questionBank[questionNumber][0] + '</div><div id="1" class="option">' + q1 + '</div><div id="2" class="option">' + q2 + '</div><div id="3" class="option">' + q3 + '</div>'+ '</div><div id="3" class="option">' + q4 + '</div>');

        $('.option').click(function () {

            if (questionLock == false) {
                questionLock = true;
                //correct answer
                if (this.id == answer) {
                    $(stage).append('<div class="feedback1">CORRECT</div>');
                    score = score + time;
                }
                else 
                    $(stage).append('<div class="feedback2">WRONG</div>');
                setTimeout(function () {
                    changeQuestion()
                }, 1000);
            }
         })
    }//display question



    function changeQuestion() {
			time = 0;
		startAngle = 0;
		ctx.clearRect(20, 0, canvas.width+20, canvas.height+10);
        questionNumber++;

        if (stage == "#game1") {
            stage2 = "#game1";
            stage = "#game2";
        }
        else {
            stage2 = "#game2";
            stage = "#game1";
        }

        if (questionNumber < numberOfQuestions) {
            displayQuestion();
        } else {
            displayFinalSlide();
        }

        $(stage2).animate({"right": "+=800px"}, "slow", function () {
            $(stage2).css('right', '-800px');
            $(stage2).empty();
        });
        $(stage).animate({"right": "+=800px"}, "slow", function () {
            questionLock = false;
        });
    }//change question


    function displayFinalSlide() {
        $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: ' + numberOfQuestions + '<br>Score: ' + score + '</div>');
        $.ajax({
            url: '/update_user_score_in_category',
            data: {'score':score},
            dataType: 'json',
            success : function(result){
                alert(result);
            }
        });
    }//display final slide



});//doc ready
