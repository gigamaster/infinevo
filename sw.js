/* Simple Service Worker for PWA */
const CACHE_NAME = 'docsify-cache-v1';
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
