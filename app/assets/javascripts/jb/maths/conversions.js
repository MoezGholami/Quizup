function Conversions_jb() {"use strict";
	this.PARAM_MINUTES = "minutes";
	this.PARAM_SECONDES = "secondes";
	this.numberToTime = function(millisecondes, valeur_param) {
		var heures_num = Math.floor(millisecondes / 36000000);
		var minutes_num = Math.floor((millisecondes % 3600000) / 60000);
		var secondes_num = Math.floor((millisecondes % 60000) / 1000);
		var centiemes_num = Math.floor((millisecondes % 1000) / 10);
		var heures_str = this.numberToString(heures_num, 2);
		var minutes_str = this.numberToString(minutes_num, 2);
		var secondes_str = this.numberToString(secondes_num, 2);
		var centiemes_str = this.numberToString(centiemes_num, 2);
		var result_str = centiemes_str;
		if (valeur_param === "secondes" || valeur_param === "minutes") {
			result_str = secondes_str + ":" + result_str;

		}
		if (valeur_param === "minutes") {
			result_str = minutes_str + ":" + result_str;

		}

		return result_str;
	};
	this.numberToString = function(number, stringLength) {
		var string = String(number);
		while (string.length < stringLength) {

			string = "0" + string;

		}
		return string;

	}
}
