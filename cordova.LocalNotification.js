/*!
 * Cordova 2.3.0+ LocalNotification plugin
 * Original author: Olivier Lesnicki
 */

window.addNotification = function(options) {
    
    var defaults = {
                
        fireDate        : new Date(),
        alertBody       : "This is a local notification.",
        repeatInterval  : "" ,
        soundName       : "" ,
        badge           : 0  ,
        notificationId  : 1  ,
        callBack        : function(notificationId){ alert(notificationId); }
                
    };
    
    if(options){
        for (var key in defaults) {
            if (typeof options[key] !== "undefined"){
            defaults[key] = options[key];
            }
        }
    }
    
    if (typeof defaults.fireDate == 'object') {
        defaults.fireDate = Math.round(defaults.fireDate.getTime()/1000 + 10);
    }    
                        
    cordova.exec(
        function(notificationId) {
            window.setTimeout(function(){
                if(typeof defaults.callBack == 'function'){
                    defaults.callBack(notificationId);
                }
            }, 1);
        }, 
        null, 
        "LocalNotification" , 
        "addNotification"   , 
        [
            defaults.fireDate        ,
            defaults.alertBody       ,
            defaults.repeatInterval  ,
            defaults.soundName       ,
            defaults.notificationId
        ]
    );
                    
};
    
window.cancelNotification = function(str, callback) {
    cordova.exec(null, null, "LocalNotification", "cancelNotification", null);
};
    
window.cancelAllNotifications = function(str, callback) {
    cordova.exec(null, null, "LocalNotification", "cancelAllNotifications", null);
};
      