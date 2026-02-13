// Service Worker: Required for Installation
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Allows the app to load from the web normally
    event.respondWith(fetch(event.request));
});
