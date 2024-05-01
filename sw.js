const CACHE_NAME = `ohm-v1`;
const CACHEABLE_RESOURCES = ["/", "ohm.css", "ohm.js", "lang.js", "sw.js", "error.html"];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(CACHEABLE_RESOURCES);
  })().then(() => {
    self.skipWaiting()
  })
  )
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get from the cache.
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      return cachedResponse;
    } else {
      try {
        // If was not in the cache, try the network.
        const fetchResponse = await fetch(event.request);

        // Save in the cache and return it.
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        return await cache.match('/error.html');
        // 
      }
    }
  })());
});
