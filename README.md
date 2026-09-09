# Dra. Ana Paula Machado - Direito da Saúde

Landing page do escritório, construída com Vite + React + TypeScript + Tailwind CSS.

## Rodar localmente

```sh
npm install
npm run dev
```

O site abre em `http://localhost:8080`.

## Build de produção

```sh
npm run build
```

A saída fica em `dist/`.

## Estrutura

- `index.html` — shell da página, contém o snippet do Google Tag Manager (`GTM-PHXZ5FC5`)
- `src/App.tsx` — monta as seções e inicializa as animações (AOS)
- `src/components/` — uma seção por arquivo (Navbar, Hero, Services, HowWeWork, Testimonials, Faq, Contact, Footer, WhatsAppWidget)
- `src/lib/whatsapp.ts` — número do WhatsApp e helper que monta os links `wa.me`
- `public/img/` — logo, banner e favicon
- `public/CNAME` — domínio customizado (`apmachadoadv.com.br`) para GitHub Pages
- `gtm/` — export do container GTM (GA4, Meta Pixel, Google Ads e rastreio de cliques no WhatsApp)

## Rastreamento

Todas as tags (GA4, Meta Pixel, Google Ads) disparam via Google Tag Manager. Cada bloco da página
tem um atributo `data-gtm-section` usado pelo GTM para identificar de qual seção veio o clique no WhatsApp.
