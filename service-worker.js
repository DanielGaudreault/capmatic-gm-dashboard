const cacheName = 'capmatic-gm-signature-v1';
const urlsToCache = ['/', '/index.html', '/css/style.css', '/js/main.js', '/css/animation.css', '/js/animation.js'];

self.addEventListener('install", function() {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(urlsToCache));
    });

    self.addEventListener('fetch', function(event) {
        event.respondWith(
        caches.match(event.request').then(response => response || fetch(event.request))
        );
    });
