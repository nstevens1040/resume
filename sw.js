self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nstevens1040-store').then((cache) => cache.addAll([
      './index.html',
      './favicon.ico',
      './favicon.svg',
      './logo_preview_.png',
      './Nicholas Stevens - Technical Support Engineer.pdf',
      './Nicholas Stevens - Technical Support Engineer.docx'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
