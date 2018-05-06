// ==UserScript==
// @name Steam Discovery Auto Refresh
// @namespace https://github.com/woctezuma/Steam-Discovery-Auto-Refresh
// @version 1
// @description Helper functions for automatically refreshing the main page of Steam Discovery
// @author Wok
// @match *://store.steampowered.com/explore/
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @updateURL https://raw.githubusercontent.com/woctezuma/Steam-Discovery-Auto-Refresh/master/steam-discovery-auto-refresh.user.js
// @downloadURL https://raw.githubusercontent.com/woctezuma/Steam-Discovery-Auto-Refresh/master/steam-discovery-auto-refresh.user.js
// @grant none
// @run-at document-end
// ==/UserScript==
(function() {
    'use strict';

    console.log('Steam Discovery Auto Refresh Loaded - Will try to refresh automatically...');
    
	try {                           
      
            // Reference for tiemouts: https://stackoverflow.com/a/23346553/
      
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent ("click", true, true);            
            
            // Reference: https://stackoverflow.com/a/41206336

            var elA = document.getElementById('refresh_queue_btn')
            
            setTimeout(function() {
              elA.dispatchEvent (evt);
            }, 3000);                                            
            
            // Reference: https://stackoverflow.com/a/6379763
            
            //--- contains is case-sensitive.
            var attackLink          = $('a#discovery_queue_start_link');
           
            //--- Click the link if its action was overridden by JavaScript.
           
            var elB = attackLink[0]

            setTimeout(function() {
              elB.dispatchEvent (evt);                
             }, 3000);

	    setTimeout(function() {
		location.reload();
	    }, 5000);
            
	}
	catch(err) {
		console.log('Error refreshing.');
	}
})();
