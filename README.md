# WÓD'IO · seu treino diário

App web (PWA) de treino. Roda no navegador, sem build: é só servir esta pasta.

## Estrutura

```
wodio/
├── index.html              ← arquivo principal (marcação + splash + tema inicial)
├── manifest.webmanifest    ← manifesto do PWA
└── assets/
    ├── css/styles.css      ← todo o CSS (era o <style> do index)
    ├── js/parsers.js       ← parsers de treino, relógio, grupos musculares, BODYDATA
    ├── js/app.js           ← aplicação (Supabase, telas, Strava, push…)
    └── icons/              ← favicons, apple-touch-icon, ícones do PWA, vetor original
```

`parsers.js` precisa carregar antes de `app.js` (ordem já definida no `index.html`).

Dependências externas (CDN): Google Fonts, Chart.js 4.4.1, Supabase JS 2.45.4, e sob demanda Tesseract.js 5.1.1 e PDF.js 3.11.174.

## Rodar localmente

```bash
python -m http.server 5173
```

Abra http://localhost:5173.

## Pendente

- `sw.js` (service worker) é registrado pelo app, mas o arquivo não veio junto. Sem ele, notificações push não funcionam. Coloque-o na raiz desta pasta, ao lado do `index.html`.
