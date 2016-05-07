
/*global console */

function trace (string){"use strict"; 
	

    if (typeof(console) !== "undefined" && console.log !== undefined)
    {

        try
        {
            //console.log.apply(console, arguments);
        }
        catch (e)
        {
        }
    }
}

var isMobile = {
    Android: function() {
   "use strict"; 
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
   "use strict"; 
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
   "use strict"; 
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
    "use strict"; 
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
   "use strict"; 
        //return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        return true; 
    }
};
function getClickEvent(){
	  "use strict"; 

		return "mousedown"; 

	}
	
	
	

