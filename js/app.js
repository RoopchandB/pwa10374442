$(function(){
	// Button to enable notification
	var enable_notificationsButton  = $('.enable-notifications');

	// Checking if Service Worker is supported by the Browser
	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker
	    .register('sw.js')
	    .then(function() {
	      console.log('Service worker registered!');
	    });
	}

	// Displaying Notification using the Service Worker
function displayConfirmNotification(){
	if ( 'serviceWorker' in navigator){
		var options = {
		body : 'You Successfully registered to our Notification Services'
		};
		navigator.serviceWorker.ready
			.then(function(swreg){
				swreg.showNotification('Successfully Subscribed (from SW)', options);
			});
	}
}

//  Checking if Notification Service is Supported by the browser, if yes than ask the user to enable the notifications
if('Notification' in window){
	$(enable_notificationsButton).css('display','block');
	$(enable_notificationsButton).on('click', function(){
		Notification.requestPermission(function(res){
			console.log('User Choice', res);
			if(res !== 'granted'){
				console.log('No Notification Permission Granted');
			}else{
				displayConfirmNotification();
			}
		});
	});
}


});
