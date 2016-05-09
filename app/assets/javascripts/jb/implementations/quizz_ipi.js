// JavaScript Document

/*global isMobile, Audio, Quizz_jb,$, Animation_jb, Timer_jb,lg*/
/*jslint vars:true, plusplus:true */

var img_json;

function startQuiz() {"use strict";
	var chrome_bool = navigator.userAgent.indexOf('Chrome') !== -1, safari_bool = navigator.userAgent.indexOf('Safari') !== -1 && !chrome_bool, ie_bool = navigator.userAgent.indexOf('MSIE') !== -1, mozilla_bool = (navigator.userAgent.indexOf('Mozilla') !== -1 && !ie_bool && !safari_bool), falseSound, trueSound, quizz, clock, timer;
	if (safari_bool) {
		if (isMobile.any()) {
			falseSound = new Audio('/assets/mauvais_1.mp3');

			trueSound = new Audio('/assets/bon_1.mp3');
		}
	} else {

		falseSound = document.createElement('audio');
		falseSound.setAttribute('src', '/assets/mauvais_1.mp3');

		if (mozilla_bool) {
			falseSound.setAttribute('src', '/assets/mauvais_1.ogg');

		}
		trueSound = document.createElement('audio');
		trueSound.setAttribute('src', '/assets/bon_1.mp3');

		if (mozilla_bool) {
			trueSound.setAttribute('src', '/assets/bon_1.ogg');

		}

	}
	quizz = new Quizz_jb($('#data'), $('#content'), $('#userTracks'), $('#endScreen'), 5);
	$('#timer').height(36);
	clock = new Animation_jb("/assets/clock.png", img_json);
	timer = new Timer_jb($('#timer'), 10, clock);

	quizz.onQuestionAnswer = function() {
		var answer_time = timer.reset();
		timer.stop();

		if (falseSound !== undefined) {

			if (!quizz.success_bool) {

				falseSound.play();

			} else {
				trueSound.play();

			}
		}
		return answer_time;

	};
	quizz.onStartQuestion = function() {

		timer.start();

	};
	timer.onTimerFinish = function() {
		$('#timer').addClass('timeOut');
		quizz.timeOut();

	};
	quizz.start();
}


$(document).ready(function() {"use strict";
	$('a').attr('target', '_blank');
	startQuiz();
	$('.response').addClass('button');
});

img_json = {
	"frames" : [{
		"filename" : "reveil instance 10000",
		"frame" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10001",
		"frame" : {
			"x" : 49,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10002",
		"frame" : {
			"x" : 98,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10003",
		"frame" : {
			"x" : 147,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10004",
		"frame" : {
			"x" : 196,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10005",
		"frame" : {
			"x" : 245,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10006",
		"frame" : {
			"x" : 294,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10007",
		"frame" : {
			"x" : 343,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10008",
		"frame" : {
			"x" : 392,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10009",
		"frame" : {
			"x" : 441,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10010",
		"frame" : {
			"x" : 0,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10011",
		"frame" : {
			"x" : 49,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10012",
		"frame" : {
			"x" : 98,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10013",
		"frame" : {
			"x" : 147,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10014",
		"frame" : {
			"x" : 196,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10015",
		"frame" : {
			"x" : 245,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10016",
		"frame" : {
			"x" : 294,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10017",
		"frame" : {
			"x" : 343,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10018",
		"frame" : {
			"x" : 392,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10019",
		"frame" : {
			"x" : 441,
			"y" : 56,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10020",
		"frame" : {
			"x" : 0,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10021",
		"frame" : {
			"x" : 49,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10022",
		"frame" : {
			"x" : 98,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10023",
		"frame" : {
			"x" : 147,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10024",
		"frame" : {
			"x" : 196,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10025",
		"frame" : {
			"x" : 245,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10026",
		"frame" : {
			"x" : 294,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10027",
		"frame" : {
			"x" : 343,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10028",
		"frame" : {
			"x" : 392,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10029",
		"frame" : {
			"x" : 441,
			"y" : 112,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10030",
		"frame" : {
			"x" : 0,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10031",
		"frame" : {
			"x" : 49,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10032",
		"frame" : {
			"x" : 98,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10033",
		"frame" : {
			"x" : 147,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10034",
		"frame" : {
			"x" : 196,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10035",
		"frame" : {
			"x" : 245,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10036",
		"frame" : {
			"x" : 294,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10037",
		"frame" : {
			"x" : 343,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10038",
		"frame" : {
			"x" : 392,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10039",
		"frame" : {
			"x" : 441,
			"y" : 168,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10040",
		"frame" : {
			"x" : 0,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10041",
		"frame" : {
			"x" : 49,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10042",
		"frame" : {
			"x" : 98,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10043",
		"frame" : {
			"x" : 147,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10044",
		"frame" : {
			"x" : 196,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10045",
		"frame" : {
			"x" : 245,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10046",
		"frame" : {
			"x" : 294,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10047",
		"frame" : {
			"x" : 343,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10048",
		"frame" : {
			"x" : 392,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10049",
		"frame" : {
			"x" : 441,
			"y" : 224,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10050",
		"frame" : {
			"x" : 0,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10051",
		"frame" : {
			"x" : 49,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10052",
		"frame" : {
			"x" : 98,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10053",
		"frame" : {
			"x" : 147,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10054",
		"frame" : {
			"x" : 196,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10055",
		"frame" : {
			"x" : 245,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10056",
		"frame" : {
			"x" : 294,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10057",
		"frame" : {
			"x" : 343,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10058",
		"frame" : {
			"x" : 392,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10059",
		"frame" : {
			"x" : 441,
			"y" : 280,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10060",
		"frame" : {
			"x" : 0,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10061",
		"frame" : {
			"x" : 49,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10062",
		"frame" : {
			"x" : 98,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10063",
		"frame" : {
			"x" : 147,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10064",
		"frame" : {
			"x" : 196,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10065",
		"frame" : {
			"x" : 245,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10066",
		"frame" : {
			"x" : 294,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10067",
		"frame" : {
			"x" : 343,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10068",
		"frame" : {
			"x" : 392,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10069",
		"frame" : {
			"x" : 441,
			"y" : 336,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10070",
		"frame" : {
			"x" : 0,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10071",
		"frame" : {
			"x" : 49,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10072",
		"frame" : {
			"x" : 98,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10073",
		"frame" : {
			"x" : 147,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10074",
		"frame" : {
			"x" : 196,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10075",
		"frame" : {
			"x" : 245,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10076",
		"frame" : {
			"x" : 294,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10077",
		"frame" : {
			"x" : 343,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10078",
		"frame" : {
			"x" : 392,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10079",
		"frame" : {
			"x" : 441,
			"y" : 392,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10080",
		"frame" : {
			"x" : 0,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10081",
		"frame" : {
			"x" : 49,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10082",
		"frame" : {
			"x" : 98,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10083",
		"frame" : {
			"x" : 147,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10084",
		"frame" : {
			"x" : 196,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10085",
		"frame" : {
			"x" : 245,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10086",
		"frame" : {
			"x" : 294,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10087",
		"frame" : {
			"x" : 343,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10088",
		"frame" : {
			"x" : 392,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10089",
		"frame" : {
			"x" : 441,
			"y" : 448,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10090",
		"frame" : {
			"x" : 0,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10091",
		"frame" : {
			"x" : 49,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10092",
		"frame" : {
			"x" : 98,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10093",
		"frame" : {
			"x" : 147,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10094",
		"frame" : {
			"x" : 196,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10095",
		"frame" : {
			"x" : 245,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10096",
		"frame" : {
			"x" : 294,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10097",
		"frame" : {
			"x" : 343,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10098",
		"frame" : {
			"x" : 392,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10099",
		"frame" : {
			"x" : 441,
			"y" : 504,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10100",
		"frame" : {
			"x" : 0,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10101",
		"frame" : {
			"x" : 49,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10102",
		"frame" : {
			"x" : 98,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10103",
		"frame" : {
			"x" : 147,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10104",
		"frame" : {
			"x" : 196,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10105",
		"frame" : {
			"x" : 245,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10106",
		"frame" : {
			"x" : 294,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10107",
		"frame" : {
			"x" : 343,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10108",
		"frame" : {
			"x" : 392,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10109",
		"frame" : {
			"x" : 441,
			"y" : 560,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10110",
		"frame" : {
			"x" : 0,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10111",
		"frame" : {
			"x" : 49,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10112",
		"frame" : {
			"x" : 98,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10113",
		"frame" : {
			"x" : 147,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10114",
		"frame" : {
			"x" : 196,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10115",
		"frame" : {
			"x" : 245,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10116",
		"frame" : {
			"x" : 294,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10117",
		"frame" : {
			"x" : 343,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10118",
		"frame" : {
			"x" : 392,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10119",
		"frame" : {
			"x" : 441,
			"y" : 616,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10120",
		"frame" : {
			"x" : 0,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10121",
		"frame" : {
			"x" : 49,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10122",
		"frame" : {
			"x" : 98,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10123",
		"frame" : {
			"x" : 147,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10124",
		"frame" : {
			"x" : 196,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10125",
		"frame" : {
			"x" : 245,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}, {
		"filename" : "reveil instance 10126",
		"frame" : {
			"x" : 294,
			"y" : 672,
			"w" : 49,
			"h" : 56
		},
		"rotated" : false,
		"trimmed" : false,
		"spriteSourceSize" : {
			"x" : 0,
			"y" : 0,
			"w" : 49,
			"h" : 56
		},
		"sourceSize" : {
			"w" : 49,
			"h" : 56
		}
	}],
	"meta" : {
		"app" : "Adobe Flash CS6",
		"version" : "12.0.2.529",
		"image" : "clock.png",
		"format" : "RGBA8888",
		"size" : {
			"w" : 512,
			"h" : 1024
		},
		"scale" : "1"
	}
};
