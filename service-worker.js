//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v10';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'apropos.html',
    'contact.html',
    'index.html',
    'portfolio.html',
    'reception.html',
    'js/script.js',
    'css/Animation.css',
    'css/index.css',
    'css/style.css'  
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});


self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('https://omika17.github.io/Interface/index.html');
                    });
            })
    );
}); 