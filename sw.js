const C='wodio-v3';
const SHELL=['/','/index.html','/manifest.webmanifest','/favicon.svg','/favicon-32.png','/icon-192.png','/icon-512.png','/apple-touch-icon.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).catch(()=>{}).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url); if(u.hostname.endsWith('supabase.co')) return;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>{ const cp=r.clone(); caches.open(C).then(c=>c.put('/index.html',cp)); return r; }).catch(()=>caches.match('/index.html').then(r=>r||caches.match('/'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>{
    const net=fetch(req).then(r=>{ if(r&&(r.ok||r.type==='opaque')){ const cp=r.clone(); caches.open(C).then(c=>c.put(req,cp)); } return r; }).catch(()=>hit);
    return hit||net;
  }));
});
