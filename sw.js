// WÓD'IO · service worker (v7, para a estrutura com assets/)
// Arquivos do próprio site: rede primeiro, cache só sem internet (evita misturar index novo com JS antigo).
// Bibliotecas de CDN: cache primeiro, atualizando por trás.
const C='wodio-v7';
const SHELL=['/','/index.html','/manifest.webmanifest','/assets/css/styles.css','/assets/js/parsers.js','/assets/js/app.js','/assets/icons/favicon.svg','/assets/icons/favicon-32.png','/assets/icons/icon-192.png','/assets/icons/icon-512.png','/assets/icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).catch(()=>{}).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url); if(u.hostname.endsWith('supabase.co')) return;
  const guarda=(chave,r)=>{ if(r&&(r.ok||r.type==='opaque')){ const cp=r.clone(); caches.open(C).then(c=>c.put(chave,cp)); } return r; };
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>guarda('/index.html',r)).catch(()=>caches.match('/index.html').then(r=>r||caches.match('/'))));
    return;
  }
  if(u.origin===self.location.origin){
    e.respondWith(fetch(req).then(r=>guarda(req,r)).catch(()=>caches.match(req)));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>{
    const net=fetch(req).then(r=>guarda(req,r)).catch(()=>hit);
    return hit||net;
  }));
});
self.addEventListener('push',e=>{ let d={}; try{ d=e.data?e.data.json():{}; }catch(_){ d={body:e.data&&e.data.text()}; }
  e.waitUntil(self.registration.showNotification(d.title||"WÓD'IO",{body:d.body||'Bora treinar!',icon:'/assets/icons/icon-192.png',badge:'/badge-96.png',tag:'chamado-5h',renotify:true,data:{url:d.url||'/'}})); });
self.addEventListener('notificationclick',e=>{ e.notification.close(); const url=(e.notification.data&&e.notification.data.url)||'/';
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{ for(const w of ws){ if('focus' in w) return w.focus(); } return clients.openWindow(url); })); });
