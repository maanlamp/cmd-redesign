'use strict';

const cacheName = 'cmd-amsterdam-v1';

const cacheAssets = [
    '/',
    'css/home.css',
    'css/generic.css',
    '/read/cmd',
    '/read/vakken',
    '/read/doorgroeien',
    '/read/offline'
    // Cache JavaScript later
];

// Call Install Event
self.addEventListener('install', function(e) {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches.open(cacheName) // Open the caches.
            .then(function(cache) {
                console.log('Service Worker: Caching files');
                cache.addAll(cacheAssets); // Save files.
            })
            .then(function() {
                self.skipWaiting(); // Force service worker to be active.
            })
    );
});

// Call Activate Event
self.addEventListener('activate', function(e) {
    console.log('Service Worker: Activated');

    // Remove unwanted caches when site becomes online again.
    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache); // Clear all files in cache.
                    }
                })
            );
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', function(e) {
    console.log('Service Worker: Fetching');

    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone(); // Store a copy of the cached files.
            caches
                .open(cacheName) // Open right cache container.
                .then(cache => {
                    cache.put(e.request.url, resClone); // Save files with key value pairs.
                })
            return res;
        })
        
        // If no caches are found. Catch the error.
        .catch(err => {
            return caches.match(e.request.url).then(res => { // If it did find the cache.
                if (res) {
                    return res;
                } else {
                    // Otherwise. Return the offline page.
                    return caches.open(cacheName).then(cache => {
                        return cache.match('/read/offline').then(response => {
                            return response;
                        });
                    });
                }
            });
        })
    );
});