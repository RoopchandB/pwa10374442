
//	Installing the Service Worker 
self.addEventListener('install', function(event) { 
	console.log('[Service Worker] Installing Service Worker...', event);
	event.waitUntil(
		caches.open('static')  // Saving the files in cache for offline usage
			.then(function(cache){
				console.log('[Service Worker] Precaching App Shell');
				cache.addAll([
					'/',
					'index.html',
					'thank_you.html',
					'book_seats.html',
					'theatre_view.html',
					'css/style.css',
					'css/theatre_view.css',
					'js/app.js',
					'js/custom.js',
					'movie.json',
					'js/material-select.js',
					'js/material.js',
					'https://fonts.googleapis.com/icon?family=Material+Icons',
					'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
					'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
					'https://college-movies.herokuapp.com/',
					'images/movie.png',
					'images/thumbsup.png',
					'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
					'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
					'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
				]);
			})
	)
});

//  Activating the Service Worker
self.addEventListener('activate', function(event) { 
	console.log('[Service Worker] Activating Service Worker...', event);
	return self.clients.claim();
});

// Fetching the file resources using the Fetch Api
self.addEventListener('fetch', function(event) { 
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
					return response;
				}else{
					return fetch(event.response);
				}
			})
	);
});
