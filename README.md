Cordova Local Notification Plugin
=================================

A Cordova 2.2.0+ plugin to create local notifications on iOs by Olivier Lesnicki.

Using the plugin
----------------

    window.LocalNotification({
        fireDate        : new Date(),
        alertBody       : "This is a local notification.",
        repeatInterval  : "daily" ,
        soundName       : ""   ,
        badge           : 0    ,
        notificationId  : 123  ,
        callBack        : function(notificationId){ 
        	alert("Hello World! This alert was triggered by notification" + notificationId); 
        }    		
    });