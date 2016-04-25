var Timer_jb = function(display_$, time_sec, animation) {"use strict";

	var context = this, startTime_mil = time_sec * 1000, originalTime_mil = startTime_mil, intervalTime_mil = 23, interval, conversions = new Conversions_jb(), animation_bool = animation != undefined;

	if (animation_bool) {
		display_$.append(animation.tag_$);

	}
	this.onTimerFinish = function() {

	};
	this.start = function() {

		clearInterval(interval);
		interval = setInterval(function() {
			updateTimer();
		}, intervalTime_mil);

	};
	this.stop = function() {

		clearInterval(interval);

	};
	function display(num_mil) {

		if (animation_bool) {

			animation.gotoAndStop(Math.ceil((originalTime_mil - num_mil) / originalTime_mil * animation.totalFrames));

		} else {

			display_$.text(conversions.numberToTime(num_mil, conversions.PARAM_SECONDES));

		}

	}


	this.reset = function() {
		clearInterval(interval);
		startTime_mil = originalTime_mil;
		updateTimer();

	};

	function updateTimer() {

		display(startTime_mil);
		startTime_mil -= intervalTime_mil;
		if (startTime_mil <= 0) {

			display(0);
			context.onTimerFinish();
			clearInterval(interval);

		}

	}

};
