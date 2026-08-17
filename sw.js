const CACHE = 'impostore-v20';
const CORE = ['./', './index.html', './style.css', './script.js', './data/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Un asset irraggiungibile non deve far fallire l'intera installazione.
    await Promise.all(CORE.map(url => cache.add(url).catch(() => {})));
    // Cache all packet files listed in manifest
    try {
      const manifest = await fetch('./data/manifest.json').then(r => r.json());
      await Promise.all(manifest.map(name => cache.add(`./data/${name}.json`).catch(() => {})));
    } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Only handle GET requests for same-origin resources
  if (req.method !== 'GET') return;
  let url;
  try {
    url = new URL(req.url);
  } catch (_) {
    return;
  }
  if (url.origin !== self.location.origin) return;

  e.respondWith((async () => {
    try {
      const response = await fetch(req);
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy)).catch(() => {});
      }
      return response;
    } catch (_) {
      // Offline: ignoreSearch serve perché index.html richiede style.css?v=NN
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      if (req.mode === 'navigate') {
        const shell = await caches.match('./index.html', { ignoreSearch: true });
        if (shell) return shell;
      }
      return new Response('Offline', {
        status: 503,
        statusText: 'Offline',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
