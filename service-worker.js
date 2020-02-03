/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.setConfig({ debug: true });

workbox.core.setCacheNameDetails({
    prefix: 'ratp-pwa',
    suffix: 'v1',
    precache: 'precache-cache',
    runtime: 'runtime-cache',
});

workbox.routing.registerRoute(
    new RegExp('/.*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'ratp-pwa-cache',
    })
);

workbox.routing.registerRoute(
    new RegExp('^https:\/\/api-ratp\.pierre-grimaud\.fr\/v3\/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'ratp-pwa-data-cache',
    })
);

/* // CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = 'data-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/styles/inline.css',
  '/images/icons/metro-128x128.png',
  '/images/icons/metro-64x64.png',
  '/images/icons/metro-256x256.png',
  '/images/icons/metro-512x512.png',
  '/images/ic_add_white_24px.svg',
  '/images/ic_refresh_white_24px.svg',
  '/images/ic_install.svg',
  '/scripts/app.js'

];

self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install");
  // CODELAB: Precache static resources here.
  evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
          console.log("[ServiceWorker] Pre-caching offline page");
          return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  console.log("[ServiceWorker] Activate");
  evt.waitUntil(
      caches.keys().then(keyList => {
          return Promise.all(keyList.map(key => {
                  if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                      console.log("[ServiceWorker] Removing old cache", key);
                      return caches.delete(key);
                  }
              })
          );
      })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  if (evt.request.url.includes('https://api-ratp.pierre-grimaud.fr/v3/schedules/')) {
      console.log('[Service Worker] Fetch (data)', evt.request.url);
      evt.respondWith(
          caches.open(DATA_CACHE_NAME).then((cache) => {
              return fetch(evt.request)
                  .then((response) => {
                      // If the response was good, clone it and store it in the cache.
                      if (response.status === 200) {
                          cache.put(evt.request.url, response.clone());
                      }
                      return response;
                  }).catch((err) => {
                      // Network request failed, try to get it from the cache.
                      return cache.match(evt.request);
                  });
          }));
      return;
  }
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
          return cache.match(evt.request)
              .then((response) => {
                  return response || fetch(evt.request);
              });
      })
  );

}); */


