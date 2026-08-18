"use strict";

const CACHE_PREFIX = "home-maintenance-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v38-2026-08-18`;
const CORE_PATHS = [
  "./",
  "./index.html",
  "./styles.css",
  "./version.js",
  "./update-manager.js",
  "./recipes.js",
  "./app.js",
  "./features.js",
  "./offline.js",
  "./assets/house-background.jpg",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
const CORE_ASSETS = CORE_PATHS.map(path => new URL(path, self.location.href).href);
const INDEX_URL = new URL("./index.html", self.location.href).href;
const APP_ROOT_URL = new URL("./", self.location.href).href;

async function refreshCore() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(CORE_ASSETS.map(async asset => {
    try {
      const request = new Request(asset, { cache: "reload" });
      const response = await fetch(request);
      if (response && response.ok) await cache.put(request, response.clone());
    } catch (_) {
      // Keep the existing cached copy if the network is unavailable.
    }
  }));
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  const sameOrigin = requestUrl.origin === self.location.origin;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const network = await fetch(request);
        if (network && network.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(INDEX_URL, network.clone());
        }
        return network;
      } catch (_) {
        return (await caches.match(INDEX_URL)) || (await caches.match(APP_ROOT_URL)) || Response.error();
      }
    })());
    return;
  }

  if (!sameOrigin) return;

  event.respondWith((async () => {
    const cached = await caches.match(request);
    const networkPromise = fetch(request).then(async response => {
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    });

    if (cached) {
      event.waitUntil(networkPromise.catch(() => undefined));
      return cached;
    }

    try {
      return await networkPromise;
    } catch (_) {
      return Response.error();
    }
  })());
});

self.addEventListener("message", event => {
  if (event.data?.type !== "REFRESH_CORE") return;
  event.waitUntil((async () => {
    await refreshCore();
    event.ports?.[0]?.postMessage({ ok: true, cache: CACHE_NAME });
  })());
});
