self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('image-cache').then((cache) => {
        return cache.addAll([
          '/path/to/your-image-1.jpg',
          '/path/to/your-image-2.png',
          // Add more image URLs to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  