/*!
 * Cordova 2.3.0+ LocalNotification plugin
 * Original author: Olivier Lesnicki
 */

window.addNotification = function() {
                           
    var options = {
                
        date            : (new Date().getTime()) / 1000 + 10,
        alertBody       : "Hello Kitty",
        repeatInterval  : "",
        soundName       : "",
        badge           : 0,
        notificationId  : 48,
        callBack        : function(){alert("Hello World!")}
                
    };
                        
    cordova.exec(
        options.callBack, 
        null, 
        "LocalNotification" , 
        "addNotification"   , 
        [
            options.date            ,
            options.alertBody       ,
            options.repeatInterval  ,
            options.soundName       ,
            options.notificationId  ,
            options.callBack
        ]
    );
                    
};
    
window.cancelNotification = function(str, callback) {
    cordova.exec(null, null, "LocalNotification", "cancelNotification", null);
};
    
window.cancelAllNotifications = function(str, callback) {
    cordova.exec(null, null, "LocalNotification", "cancelAllNotifications", null);
};
             