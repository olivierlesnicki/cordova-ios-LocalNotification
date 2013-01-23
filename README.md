Cordova Local Notification Plugin
=================================

A Cordova 2.2.0+ plugin to create local notifications on iOs by Olivier Lesnicki.

Using the plugin
----------------

	// Schedules a local notification to be triggered after 5 seconds

    window.addNotification({
		fireDate        : Math.round(new Date().getTime()/1000 + 5),
		alertBody       : "This is a local notification.",
		repeatInterval  : "" ,
		soundName       : ""   ,
		badge           : 0    ,
		notificationId  : 123  ,
		callBack        : function(notificationId){ 
			alert("Hello World! This alert was triggered by notification" + notificationId); 
		}    		
	});