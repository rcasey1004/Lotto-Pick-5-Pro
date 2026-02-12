// The "App Brain" - Minimal Service Worker for Installation
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Just lets the app load normally
    event.respondWith(fetch(event.request));
});
