const C='75h-v10',F=['./','./index.html','./manifest.json','./icon.svg','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
self.addEventListener('message',e=>{if(e.data&&e.data.type==='notify')self.registration.showNotification(e.data.title,{body:e.data.body,icon:'icon.svg',tag:e.data.tag,badge:'icon.svg'})});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():self.clients.openWindow('./')))});
