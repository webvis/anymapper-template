const build = [
  "/anymapper-template-temp/build/app/immutable/start-a62dcee6.js",
  "/anymapper-template-temp/build/app/immutable/layout.svelte-b029755b.js",
  "/anymapper-template-temp/build/app/immutable/error.svelte-35e77f88.js",
  "/anymapper-template-temp/build/app/immutable/pages/index.svelte-20376a77.js",
  "/anymapper-template-temp/build/app/immutable/assets/pages/index.svelte-ed6c9b33.css",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-cyrillic-ext-400-normal-b3140dd3.woff2",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-all-400-normal-0d19eb5d.woff",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-cyrillic-400-normal-046b609f.woff2",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-greek-ext-400-normal-8659ae46.woff2",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-greek-400-normal-1f8b3a07.woff2",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-latin-ext-400-normal-b6331a25.woff2",
  "/anymapper-template-temp/build/app/immutable/assets/fira-mono-latin-400-normal-a2f9dbe8.woff2",
  "/anymapper-template-temp/build/app/immutable/chunks/index-fd292fd9.js",
  "/anymapper-template-temp/build/app/immutable/chunks/index-a23f9d21.js"
];
const files = [
  "/anymapper-template-temp/build/favicon.png",
  "/anymapper-template-temp/build/logo_512.png",
  "/anymapper-template-temp/build/manifest.json",
  "/anymapper-template-temp/build/robots.txt",
  "/anymapper-template-temp/build/svelte-welcome.png",
  "/anymapper-template-temp/build/svelte-welcome.webp"
];
const version = "1659617722097";
const worker = self;
const FILES = `cache${version}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${version}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
