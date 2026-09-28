/**
 * Editorial Image Assets & High-Fidelity Visual Generators
 * Strict compliance with CDC:
 * - Luxury palette (#0B0B0B, #F7F3EE, #E8DDD4, #C7B8A8, #B79A7E)
 * - Zero-Broken-Image Policy: Every image slot is self-contained and visually pristine
 */

// Bespoke SVG data URIs with rich lighting, film grain, and editorial geometry
export const editorialAssets = {
  // Hero: Haute Couture Silhouette with Warm Champagne Lighting
  hero: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
    <defs>
      <radialGradient id="heroGlow" cx="65%" cy="40%" r="55%">
        <stop offset="0%" stop-color="%23b79a7e" stop-opacity="0.35"/>
        <stop offset="45%" stop-color="%232a241f" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="%230b0b0b" stop-opacity="1"/>
      </radialGradient>
      <linearGradient id="warmRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%23e8ddd4" stop-opacity="0.2"/>
        <stop offset="50%" stop-color="%23b79a7e" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="%230b0b0b" stop-opacity="0.95"/>
      </linearGradient>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.07 0"/>
        <feComposite in2="SourceGraphic" in="gl" operator="over"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="%230b0b0b"/>
    <rect width="100%" height="100%" fill="url(%23heroGlow)"/>
    
    <!-- Architectural grid lines -->
    <line x1="200" y1="0" x2="200" y2="900" stroke="%23c7b8a8" stroke-opacity="0.08" stroke-width="1"/>
    <line x1="800" y1="0" x2="800" y2="900" stroke="%23c7b8a8" stroke-opacity="0.05" stroke-width="1"/>
    <line x1="1400" y1="0" x2="1400" y2="900" stroke="%23c7b8a8" stroke-opacity="0.08" stroke-width="1"/>
    <line x1="0" y1="750" x2="1600" y2="750" stroke="%23c7b8a8" stroke-opacity="0.06" stroke-width="1"/>
    
    <!-- Editorial Silhouette of Lola in sculptural tailoring -->
    <g transform="translate(820, 140)">
      <path d="M 280 80 C 260 40, 290 0, 340 10 C 380 20, 390 60, 370 110 C 350 150, 310 160, 290 140 Z" fill="%231a1614" stroke="%23b79a7e" stroke-width="1.5" stroke-opacity="0.4"/>
      <!-- Soft face profile glow -->
      <path d="M 330 45 Q 365 75 350 115 Q 320 135 295 125" fill="none" stroke="%23e8ddd4" stroke-width="2" stroke-opacity="0.65"/>
      <!-- Neck & Collar Line -->
      <path d="M 315 135 L 305 180 L 220 220 L 140 450 L 110 760 L 520 760 L 480 390 L 390 200 L 335 155 Z" fill="%2312100e" stroke="%23b79a7e" stroke-width="1" stroke-opacity="0.3"/>
      <!-- Tailored Lapel lines -->
      <path d="M 305 180 L 315 320 L 220 220 Z" fill="%23221e1a" stroke="%23c7b8a8" stroke-width="1" stroke-opacity="0.4"/>
      <path d="M 335 180 L 315 320 L 390 200 Z" fill="%23221e1a" stroke="%23c7b8a8" stroke-width="1" stroke-opacity="0.4"/>
      <line x1="315" y1="320" x2="315" y2="600" stroke="%23b79a7e" stroke-width="1.5" stroke-opacity="0.4"/>
      <!-- Bronze lighting spill -->
      <ellipse cx="420" cy="280" rx="140" ry="240" fill="%23b79a7e" fill-opacity="0.12" filter="blur(40px)"/>
    </g>

    <!-- Editorial typography accent in backdrop -->
    <text x="80" y="830" font-family="'Cormorant Garamond', Georgia, serif" font-size="120" font-weight="300" fill="%23c7b8a8" fill-opacity="0.07" letter-spacing="12">BEYOND SOCIAL</text>
  </svg>`,

  // TV / Studio: Miss Fashion DZ Studio Stage
  tvStudio: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
    <defs>
      <linearGradient id="tvBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%231c1713"/>
        <stop offset="60%" stop-color="%230b0b0b"/>
        <stop offset="100%" stop-color="%23050505"/>
      </linearGradient>
      <linearGradient id="spotLight" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stop-color="%23b79a7e" stop-opacity="0.5"/>
        <stop offset="80%" stop-color="%23b79a7e" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="%230b0b0b" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23tvBg)"/>
    
    <!-- Studio Runway perspective lines -->
    <polygon points="500,280 700,280 950,675 250,675" fill="%23161311" stroke="%23b79a7e" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="600" y1="280" x2="600" y2="675" stroke="%23e8ddd4" stroke-opacity="0.3" stroke-dasharray="8 8"/>
    
    <!-- Overhead Spotlights & Lighting Rig -->
    <polygon points="400,0 600,280 200,280" fill="url(%23spotLight)"/>
    <polygon points="800,0 600,280 1000,280" fill="url(%23spotLight)"/>
    <circle cx="600" cy="280" r="45" fill="%23b79a7e" fill-opacity="0.2"/>
    
    <!-- Broadcast Camera Silhouette in foreground -->
    <g transform="translate(140, 420)">
      <rect x="0" y="40" width="120" height="70" rx="6" fill="%231f1c1a" stroke="%23c7b8a8" stroke-width="1" stroke-opacity="0.4"/>
      <rect x="120" y="55" width="45" height="40" fill="%232c2724"/>
      <circle cx="165" cy="75" r="24" fill="%230b0b0b" stroke="%23b79a7e" stroke-width="2"/>
      <line x1="60" y1="110" x2="10" y2="250" stroke="%232c2724" stroke-width="4"/>
      <line x1="60" y1="110" x2="60" y2="250" stroke="%232c2724" stroke-width="4"/>
      <line x1="60" y1="110" x2="110" y2="250" stroke="%232c2724" stroke-width="4"/>
      <circle cx="20" cy="50" r="5" fill="%23ff3344"/>
    </g>
    
    <!-- On Air Typography Screen -->
    <rect x="460" y="140" width="280" height="90" rx="4" fill="%231a1512" stroke="%23b79a7e" stroke-width="1.5" stroke-opacity="0.6"/>
    <text x="600" y="180" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="600" fill="%23f7f3ee" text-anchor="middle" letter-spacing="4">MISS FASHION DZ</text>
    <text x="600" y="208" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="%23b79a7e" text-anchor="middle" letter-spacing="3">BROADCAST · PRIME TIME</text>
  </svg>`,

  // Beauty Edit: Luxury Cosmetics & Flacon Still Life
  beautyCosmetics: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750" width="100%" height="100%">
    <defs>
      <linearGradient id="beautyBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%231e1915"/>
        <stop offset="50%" stop-color="%23120f0d"/>
        <stop offset="100%" stop-color="%230b0b0b"/>
      </linearGradient>
      <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="%23e8ddd4" stop-opacity="0.3"/>
        <stop offset="25%" stop-color="%23ffffff" stop-opacity="0.6"/>
        <stop offset="50%" stop-color="%23c7b8a8" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="%23b79a7e" stop-opacity="0.35"/>
      </linearGradient>
      <linearGradient id="goldCap" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="%238a6e50"/>
        <stop offset="50%" stop-color="%23e8ddd4"/>
        <stop offset="100%" stop-color="%23b79a7e"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23beautyBg)"/>
    
    <!-- Stone Podium Table -->
    <polygon points="120,520 880,520 950,750 50,750" fill="%23221d18" stroke="%23b79a7e" stroke-width="1" stroke-opacity="0.3"/>
    
    <!-- Luxury Perfume Flacon -->
    <g transform="translate(320, 260)">
      <!-- Bottle Body -->
      <rect x="40" y="90" width="130" height="170" rx="8" fill="url(%23glass)" stroke="%23e8ddd4" stroke-width="1.5" stroke-opacity="0.5"/>
      <!-- Amber Liquid within -->
      <rect x="48" y="130" width="114" height="122" rx="4" fill="%23b79a7e" fill-opacity="0.25"/>
      <!-- Bottle Neck -->
      <rect x="85" y="60" width="40" height="30" fill="url(%23goldCap)"/>
      <!-- Flacon Cap -->
      <rect x="75" y="15" width="60" height="45" rx="3" fill="url(%23goldCap)" stroke="%23ffffff" stroke-width="1" stroke-opacity="0.3"/>
      <!-- Minimalist Label -->
      <rect x="65" y="145" width="80" height="55" fill="%23f7f3ee" fill-opacity="0.95"/>
      <text x="105" y="172" font-family="'Cormorant Garamond', serif" font-size="14" font-weight="700" fill="%230b0b0b" text-anchor="middle" letter-spacing="2">LOLA</text>
      <text x="105" y="188" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="600" fill="%23b79a7e" text-anchor="middle" letter-spacing="1.5">PARFUM</text>
    </g>
    
    <!-- Serum Dropper Bottle -->
    <g transform="translate(540, 310)">
      <!-- Bottle Body -->
      <rect x="30" y="80" width="90" height="150" rx="10" fill="%231a1614" stroke="%23c7b8a8" stroke-width="1.5" stroke-opacity="0.4"/>
      <!-- Pipette Collar & Bulb -->
      <rect x="52" y="55" width="46" height="25" fill="url(%23goldCap)"/>
      <path d="M 60 55 C 60 30, 90 30, 90 55 Z" fill="%23e8ddd4"/>
      <rect x="45" y="125" width="60" height="50" fill="%23f7f3ee" fill-opacity="0.1" stroke="%23b79a7e" stroke-width="0.75"/>
      <text x="75" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="%23e8ddd4" text-anchor="middle" letter-spacing="1">BEAUTY EDIT</text>
    </g>

    <text x="100" y="120" font-family="'Cormorant Garamond', Georgia, serif" font-size="32" font-weight="300" fill="%23c7b8a8" fill-opacity="0.4" letter-spacing="6">THE BEAUTY EDIT</text>
  </svg>`,

  // Official Portrait: Neutral Studio Setting with Editorial Polish
  officialPortrait: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
    <defs>
      <radialGradient id="portraitGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="%232b231d"/>
        <stop offset="70%" stop-color="%23120f0d"/>
        <stop offset="100%" stop-color="%230b0b0b"/>
      </radialGradient>
      <linearGradient id="skinShade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%23e8ddd4"/>
        <stop offset="100%" stop-color="%23c7b8a8"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23portraitGlow)"/>
    
    <!-- Editorial frame border -->
    <rect x="30" y="30" width="740" height="740" fill="none" stroke="%23b79a7e" stroke-width="1" stroke-opacity="0.25"/>
    
    <!-- Stylized Portrait Silhouette -->
    <g transform="translate(240, 160)">
      <!-- Hair Volume -->
      <path d="M 120 40 C 40 40, -10 120, 10 240 C 20 310, 60 380, 50 480 L 290 480 C 280 380, 320 310, 330 240 C 350 120, 300 40, 220 40 Z" fill="%2314110f" stroke="%23b79a7e" stroke-width="1.5" stroke-opacity="0.4"/>
      <!-- Face Contour -->
      <path d="M 80 150 C 80 100, 120 70, 170 70 C 220 70, 260 100, 260 150 C 260 220, 220 280, 170 280 C 120 280, 80 220, 80 150 Z" fill="url(%23skinShade)" fill-opacity="0.85"/>
      <!-- Soft Neck & Shoulders -->
      <path d="M 140 270 L 140 330 L 30 380 L -30 520 L 370 520 L 310 380 L 200 330 L 200 270 Z" fill="%231c1714" stroke="%23b79a7e" stroke-width="1" stroke-opacity="0.3"/>
      <!-- Minimalist Golden Earring -->
      <circle cx="85" cy="200" r="14" fill="none" stroke="%23b79a7e" stroke-width="3"/>
      <circle cx="255" cy="200" r="14" fill="none" stroke="%23b79a7e" stroke-width="3"/>
    </g>
    
    <text x="400" y="720" font-family="'Cormorant Garamond', Georgia, serif" font-size="22" font-weight="600" fill="%23f7f3ee" text-anchor="middle" letter-spacing="4">KHAOULA KEBBACHE</text>
    <text x="400" y="744" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="500" fill="%23b79a7e" text-anchor="middle" letter-spacing="2">OFFICIAL PORTRAIT</text>
  </svg>`,

  // Editorial Fashion: Colonnades & Runway
  fashionColonnade: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="100%" height="100%">
    <defs>
      <linearGradient id="colBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="%231a1512"/>
        <stop offset="50%" stop-color="%23100e0c"/>
        <stop offset="100%" stop-color="%230b0b0b"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23colBg)"/>
    
    <!-- Architectural Classical Arches -->
    <g stroke="%23b79a7e" stroke-opacity="0.25" stroke-width="1.5" fill="none">
      <path d="M 100 1200 L 100 400 Q 250 200 400 400 L 400 1200"/>
      <path d="M 400 1200 L 400 400 Q 550 200 700 400 L 700 1200"/>
      <path d="M 700 1200 L 700 400 Q 850 200 1000 400 L 1000 1200"/>
      <line x1="50" y1="400" x2="850" y2="400"/>
    </g>

    <!-- Fashion Model Walk -->
    <g transform="translate(360, 480)">
      <ellipse cx="90" cy="50" rx="35" ry="45" fill="%232c251f" stroke="%23b79a7e" stroke-width="1" stroke-opacity="0.5"/>
      <path d="M 60 95 L 40 220 L -20 480 L 200 480 L 140 220 L 120 95 Z" fill="%231a1614" stroke="%23c7b8a8" stroke-width="1.2" stroke-opacity="0.4"/>
      <path d="M 40 220 L 80 580 L 95 580 L 60 320" stroke="%23e8ddd4" stroke-width="2" stroke-opacity="0.6"/>
      <path d="M 140 220 L 110 580 L 125 580 L 130 320" stroke="%23e8ddd4" stroke-width="2" stroke-opacity="0.6"/>
    </g>

    <text x="80" y="1120" font-family="'Cormorant Garamond', Georgia, serif" font-size="44" font-weight="300" fill="%23f7f3ee" fill-opacity="0.6" letter-spacing="4">EDITORIAL</text>
    <text x="80" y="1150" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="%23b79a7e" letter-spacing="3">HAUTE COUTURE · SERIES 01</text>
  </svg>`
};
