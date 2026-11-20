# Reineke – Link-Seite

Link-Seite zur EP „Zum Wohle der Musik“, gebaut mit [Astro](https://astro.build).

## Loslegen

```sh
npm install
npm run dev      # lokale Vorschau auf http://localhost:4321
npm run build    # fertige Seite landet in dist/
npm run preview  # gebaute Seite lokal ansehen
```

## Was wo liegt

| Datei | Inhalt |
| --- | --- |
| `src/data/site.ts` | Alle Texte und Links (EP, Spotify, Apple Music) |
| `src/pages/index.astro` | Die Link-Seite |
| `src/pages/impressum.astro` | Impressum (bewusst nur „auf Anfrage“, Kontakt über Instagram) |
| `src/pages/datenschutz.astro` | Datenschutzerklärung |
| `src/components/FlyingBananas.astro` | Fliegende Bananen im Hintergrund |
| `src/styles/global.css` | Farben, Schriften, Hintergrund |
| `src/assets/cover.jpg` | EP-Cover (wird beim Build optimiert) |
| `public/` | Bananen-Grafik, Favicon |

## Hosting

GitHub Pages. `.github/workflows/deploy.yml` baut und veröffentlicht die Seite bei jedem Push auf `main`.

Einmalig im Repo auf GitHub einstellen:

1. Settings → Pages → Source: „GitHub Actions“.
2. Settings → Pages → Custom domain: `reinekefunk.de`, danach „Enforce HTTPS“ aktivieren.
3. Beim Domain-Anbieter die DNS-Einträge für GitHub Pages setzen (A-Records auf die GitHub-IPs, siehe GitHub-Doku „Managing a custom domain“).

Schriften sind selbst gehostet – keine Google Fonts, keine Cookies, kein Tracking.
