# ARCHITECTURE.md — Conception Technique & Système

## 1. Principes d'Architecture

L'application est architecturée autour des principes de haute performance, d'accessibilité universelle et d'indépendance vis-à-vis du code source pour la gestion éditoriale.

```text
Navigateur Client (Desktop / Mobile / Tablette)
       │
       ▼
React 19 + TypeScript + Vite + Tailwind CSS
       │
       ├── Top Bar Contract (Wordmark, 5 Liens Textes, Sélecteur Langue + CTA)
       ├── i18n Engine (FR / AR avec dir="rtl" / EN)
       ├── State & Persistence (AppContext + LocalStorage + Audit Log)
       ├── Modules Publics (Hero, Intro, Disciplines, On Air, Beauty Edit, Collaborate, Gallery, Press, Contact)
       └── Console Administrative Sécurisée (/admin)
```

## 2. Tokens de Design System

- **Palette chromatique :**
  - Noir profond : `#0B0B0B`
  - Ivoire / Off-White : `#F7F3EE`
  - Nude / Beige rosé très léger : `#E8DDD4`
  - Champagne / Taupe : `#C7B8A8`
  - Accent Bronze : `#B79A7E`
  - Blanc pur : `#FFFFFF`
- **Typographie :**
  - Serif : *Cormorant Garamond* (grands titres, citations éditoriales, signature de marque)
  - Sans-serif : *Plus Jakarta Sans* (navigation, formulaires, métadonnées, lisibilité)
  - Arabe : *Noto Naskh Arabic* (calligraphie élégante pour le mode RTL)

## 3. Règle Anti-Slop & Zero-Pill

- Aucune métadonnée n'est enfermée dans des pilules ou badges bonbon colorés. Les métadonnées utilisent des séparateurs typographiques discrets (`·` ou `/`).
- Les filtres interactifs sont de véritables boutons `<button>` munis d'écouteurs d'événements.
