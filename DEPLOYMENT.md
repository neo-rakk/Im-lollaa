# DEPLOYMENT.md & DATABASE.md & SECURITY.md & SEO.md

## 1. Déploiement & Configuration Domaine (im-lolla.com)

- **Domaine canonique :** `https://im-lolla.com`
- **Redirection 301 :**
  - `http://im-lolla.com` ➔ `https://im-lolla.com`
  - `https://www.im-lolla.com` ➔ `https://im-lolla.com`
- **Enregistrements DNS recommandés :**
  - A / AAAA pointant vers l'infrastructure d'hébergement
  - CNAME pour sous-domaines éventuels
  - TXT SPF : `v=spf1 include:_spf.im-lolla.com ~all`
  - TXT DMARC : `v=DMARC1; p=none; rua=mailto:dmarc@im-lolla.com`

---

## 2. Base de Données (Schéma & RLS)

- `profiles` : Données de présentation, biographie courte/longue trilingue, formation.
- `social_accounts` : Plateformes, handles, vérification, URLs.
- `stats` : Métriques vérifiées (`platform`, `metric`, `numeric_value`, `display_value`, `source`, `verified_at`).
- `tv_projects` : Émissions audiovisuelles (`title`, `slug`, `role`, `year`, `description`, `gallery`).
- `beauty_articles` : Publications du Beauty Edit (`title`, `slug`, `excerpt`, `content`, `category`, `is_sponsored`, `sponsor_name`).
- `collaboration_requests` : Demandes de marques (`company_name`, `contact_name`, `email`, `phone`, `project_type`, `deliverables`, `budget_range`, `status`, `internal_notes`).
- `press_requests` & `contact_requests` : Sollicitations médias et messages généraux.
- `admin_audit_logs` : Journal d'audit pour chaque action sensible.

---

## 3. Sécurité & Conformité

- Protection anti-spam par champ honeypot invisible sur les formulaires.
- Validation des formats de pièces jointes (PDF, DOCX, PPTX, JPG, PNG, max 10 Mo).
- Protection contre l'usurpation d'identité avec mise en avant du nom de domaine officiel `im-lolla.com`.
- Aucune donnée privée de brief n'est rendue publique.
- Pas de secrets commités dans le code source.

---

## 4. Stratégie SEO & Données Structurées

- Balisage OpenGraph et Twitter Cards pour tous les partages sociaux.
- Données structurées Schema.org JSON-LD injectées pour `Person` (Khaoula Kebbache / Lola) et `WebSite`.
- Mots-clés cibles : *Lola Khaoula Kebbache, Lola Algérie, im_lollaa, Lola Miss Fashion DZ, Khaoula Kebbache animatrice, Khaoula Kebbache créatrice de contenu*.
