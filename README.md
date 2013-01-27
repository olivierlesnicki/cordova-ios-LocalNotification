Cordova Local Notification Plugin
=================================

A Cordova 2.3.0+ plugin to create local notifications on iOs by Olivier Lesnicki.

Installing the plugin
---------------------

1. Place LocalNotification.m and LocalNotification.h in your `Plugins` folder
2. Place cordova.localNotification.js in your `www` folder
3. Link your index page to cordova.localNotification.js
4. In config.xml add the following within the `<plugins>` tag

    	<plugin name="LocalNotification" value="LocalNotification" />


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