var cacheVersion = "version1";
var cacheURLs = [

	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/data/restaurants.json',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'/'

];

/**
 * @description Step 2: Add three event listeners for the different states of
 * the service worker: install, activate and fetch.
 *
 * The install event listens for the installation and decides
 * what happens when the service worker is installed successfully or when the
 * installation fails. The square brackets around the [Service Worker] show
 * that the messages come directly from the service worker. */
self.addEventListener('install', function(event) {
	console.log("Service Worker was installed");

	/**
	 * @description The install has to wait until the promise within waitUntil()
	 * is resolved
	 */
	event.waitUntil(
		/**
		 * @description Step 4: The browser opens the caches corresponding to the
		 * cacheName and adds all the files of the array "cacheFiles".
		 */
		caches.open(cacheVersion).then(function(cache) {
			console.log("Cashing the files from the URLs provided");
			return cache.addAll(cacheURLs);
		})
	)
})

/**
 * @description Activate the service worker and listen for the activation.
 */
self.addEventListener('activate', function(event) {
	console.log("Service Worker is now active");

	event.waitUntil(
		/**
		 * @description Loop through all the keys of the caches to compare them
		 * later.
		 */
		caches.keys().then(function(cacheURLs) {
			return Promise.all(cacheNames.map(function(thisCachedURL) {
				/**
				 * @description Compare the cache names. If they are not equal, delete
				 * the old caches to update the cache with the new caches.
				 */
				if (thisCachedURL !== cacheVersion) {
					console.log("Removing the Cache files from the URLs - ", thisCachedURL);
					return caches.delete(thisCachedURL);
				}
			}))
		})
	)
})

/**
 * @description Fetch the data from the given URL.
 */
self.addEventListener('fetch', function(event) {
	console.log("Fething", event.request.url);
	/**
	 * @description Check in the cache if the cached URL/file and the requested
	 * URL/file match. Then respond appropriately to the outcome.
	 */
	event.respondWith(
		caches.match(event.request)
			.then(function(output) {
				/**
				 * @description If the requested URL/file is found in the cache, log out
				 * a message and return the cached version.
				 * There is no need to fetch it again!
				 */
				 if (output) {
					console.log("Cache files matched", event.request.url);
					return output;
				}
				/**
				 * @description If the requested URL/file is not in the cache yet, go
				 * ahead and fetch the file!
				 */
				return fetch(event.request);
			})
			.catch(function(error) {
				console.log("Oops, a Fatal error has occured - ", error);
			})
	)
})
