// L'appli s'ouvre même sans réseau (chambre froide) ; les inventaires partent dès que le réseau revient.
const CACHE = "inventaire-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Ressources externes (police, Sortable) : réseau d'abord, cache en secours.
  if (url.origin !== location.origin) {
    e.respondWith(caches.open(CACHE).then(async c => {
      try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }
      catch (err) { const m = await c.match(e.request); return m || Response.error(); }
    }));
    return;
  }
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then(m => m || caches.match("./index.html"))));
});
