import {
  ProfileData,
  SocialAccount,
  StatItem,
  TVProject,
  BeautyArticle,
  GalleryItem,
  CollaborationRequest,
  ContactRequest,
  PressRequest,
  SiteSettings,
  AuditLogItem
} from '../types';
import { editorialAssets } from './assets';

export const initialProfile: ProfileData = {
  public_name: 'LOLA',
  professional_name: 'Khaoula Kebbache',
  officialDomain: 'https://im-lolla.com',
  tagline: {
    fr: 'Créatrice · Présentatrice TV · Beauté & Cosmétologie · Média',
    ar: 'صانعة محتوى · مقدمة برامج تلفزيونية · خبيرة تجميل وعطور · إعلام',
    en: 'Creator · Television Presenter · Beauty & Cosmetology · Media'
  },
  heroBadge: {
    fr: 'SITE WEB OFFICIEL',
    ar: 'الموقع الرسمي المعتمد',
    en: 'OFFICIAL WEBSITE'
  },
  short_bio: {
    fr: 'Créatrice de contenu et animatrice de télévision, Lola (Khaoula Kebbache) façonne un pont élégant entre l’univers des médias, la haute beauté et les collaborations d’envergure.',
    ar: 'صانعة محتوى وإعلامية ومقدمة برامج تلفزيونية، تجمع لولا (خولة كباش) بين الأناقة الرفيعة وعالم الإعلام والتجميل الاحترافي والشراكات النوعية.',
    en: 'Content creator and television presenter, Lola (Khaoula Kebbache) builds an inspiring bridge between broadcast media, high beauty, and strategic brand partnerships.'
  },
  long_bio: {
    fr: 'Figure emblématique de la création contemporaine et de l’audiovisuel, Khaoula Kebbache, connue sous le nom de Lola, s’est imposée par son exigence esthétique et son professionnalisme. Titulaire d’une formation spécialisée en cosmétologie, coiffure et esthétique, maquillage et parfumerie, elle aborde l’industrie de la beauté avec une rigueur technique et scientifique rare. Présentatrice télévisuelle remarquée, notamment aux commandes de Miss Fashion DZ, elle insuffle énergie, naturel et distinction à chacun de ses projets.',
    ar: 'تعد خولة كباش، المعروفة إعلامياً باسم لولا، من أبرز الوجوه الإبداعية والإعلامية الصاعدة. بفضل تكوينها الأكاديمي المتخصص في علم التجميل، تصفيف الشعر والعناية الجمالية، المكياج الاحترافي وفنون العطور، استطاعت تقديم محتوى جمالي مبني على المعرفة الدقيقة. كما أثبتت تميزها كمقدمة برامج تلفزيونية من خلال قيادتها لبرنامج Miss Fashion DZ، حيث تميزت بالحضور التلفزيوني القوي والإطلالة الراقية.',
    en: 'A prominent figure in contemporary creative media and television, Khaoula Kebbache, professionally known as Lola, is recognized for her aesthetic precision and media charisma. Formally trained in cosmetology, hairdressing, aesthetic skincare, makeup artistry, and perfumery, she engages the beauty industry with genuine technical mastery. As a distinguished television host—notably presenting Miss Fashion DZ—she brings dynamic presence and natural sophistication to every production.'
  },
  education: [
    {
      fr: 'Diplôme & Spécialisation en Cosmétologie & Soins Cutanés',
      ar: 'شهادة ودراسة متخصصة في علم التجميل والعناية بالبشرة',
      en: 'Specialized Qualification in Cosmetology & Dermal Science'
    },
    {
      fr: 'Formation en Coiffure Haute Définition & Esthétique',
      ar: 'تكوين احترافي في تصفيف الشعر المتقدم والجماليات',
      en: 'Advanced Hairstyling & Aesthetic Craftsmanship'
    },
    {
      fr: 'Certificat en Maquillage Professionnel & Techniques Studio',
      ar: 'شهادة في المكياج الاحترافي وتقنيات التصوير التلفزيوني',
      en: 'Professional Makeup Artistry & Studio Lighting Techniques'
    },
    {
      fr: 'Expertise en Parfumerie & Pyramides Olfactives',
      ar: 'تخصص في صناعة العطور والهرم العطري',
      en: 'Fine Fragrance Formulations & Olfactory Architecture'
    }
  ],
  disciplines: [
    {
      id: '01',
      number: '01',
      title: {
        fr: 'CRÉATION DE CONTENU',
        ar: 'صناعة المحتوى الرقمي',
        en: 'CONTENT CREATION'
      },
      description: {
        fr: 'Storytelling éditorial, esthétique raffinée et formats soignés captivant une audience engagée.',
        ar: 'سرد بصري متفرد، إخراج فني أنيق ومحتوى يخاطب ذائقة المتابعين باحترافية.',
        en: 'Editorial storytelling, elevated aesthetics, and premium formats connecting with a discerning audience.'
      },
      image: editorialAssets.hero
    },
    {
      id: '02',
      number: '02',
      title: {
        fr: 'TÉLÉVISION & PRÉSENTATION',
        ar: 'التقديم التلفزيوني والإعلام',
        en: 'TELEVISION & BROADCASTING'
      },
      description: {
        fr: 'Présentation de grands formats télévisés, aisance en direct et animation d’émissions mode et divertissement.',
        ar: 'إدارة البرامج التلفزيونية في أوقات الذروة، تمكن في البث المباشر وحضور إعلامي متزن.',
        en: 'Prime-time television hosting, live broadcast poise, and leading major fashion entertainment programs.'
      },
      image: editorialAssets.tvStudio
    },
    {
      id: '03',
      number: '03',
      title: {
        fr: 'BEAUTÉ & COSMÉTOLOGIE',
        ar: 'عالم التجميل والعطور',
        en: 'BEAUTY & COSMETOLOGY'
      },
      description: {
        fr: 'Expertise diplômée en cosmétologie, rituels de soin, formulations et parfumerie d’exception.',
        ar: 'دراية تخصصية بعلم التركيبات التجميلية، العناية بالبشرة، والروائح العطرية النادرة.',
        en: 'Accredited expertise in cosmetic formulation, restorative skincare rituals, and fine fragrance.'
      },
      image: editorialAssets.beautyCosmetics
    },
    {
      id: '04',
      number: '04',
      title: {
        fr: 'COLLABORATIONS DE MARQUE',
        ar: 'الشراكات مع العلامات التجارية',
        en: 'BRAND COLLABORATIONS'
      },
      description: {
        fr: 'Partenariats sur-mesure, ambassadrice de marque, lancements de prestige et campagnes d’impact.',
        ar: 'حملات ترويجية راقية، تمثيل تجاري استراتيجي، وربط حقيقي بين العلامة والجمهور.',
        en: 'Bespoke brand ambassadorships, prestigious product launches, and strategic visual campaigns.'
      },
      image: editorialAssets.fashionColonnade
    }
  ],
  location: {
    fr: 'Algérie / International',
    ar: 'الجزائر / التواجد الدولي',
    en: 'Algeria / International'
  }
};

export const initialSocialAccounts: SocialAccount[] = [
  {
    id: 'soc-1',
    platform: 'instagram',
    label: 'Instagram',
    handle: '@im_lollaa',
    url: 'https://www.instagram.com/im_lollaa',
    is_verified: true,
    is_public: true,
    sort_order: 1
  },
  {
    id: 'soc-2',
    platform: 'tiktok',
    label: 'TikTok',
    handle: '@im_lollaa',
    url: 'https://www.tiktok.com/@im_lollaa',
    is_verified: true,
    is_public: true,
    sort_order: 2
  },
  {
    id: 'soc-3',
    platform: 'youtube',
    label: 'YouTube',
    handle: 'Lola Official',
    url: 'https://www.youtube.com/',
    is_verified: false,
    is_public: true,
    sort_order: 3
  }
];

export const initialStats: StatItem[] = [
  {
    id: 'stat-1',
    platform: 'Instagram',
    metric: 'Followers',
    numeric_value: 600000,
    display_value: '+600K',
    source: 'verified_by_owner',
    verified_at: '2026-09-28',
    visible_publicly: true
  },
  {
    id: 'stat-2',
    platform: 'Audiovisuel',
    metric: 'Diffusion Prime-Time',
    numeric_value: 1,
    display_value: 'Prime-Time TV',
    source: 'official_api',
    verified_at: '2026-09-28',
    visible_publicly: true
  },
  {
    id: 'stat-3',
    platform: 'Beauté',
    metric: 'Spécialisations Certifiées',
    numeric_value: 4,
    display_value: '4 Domaines d’Excellence',
    source: 'verified_by_owner',
    verified_at: '2026-09-28',
    visible_publicly: true
  }
];

export const initialTVProjects: TVProject[] = [
  {
    id: 'tv-1',
    slug: 'miss-fashion-dz',
    title: {
      fr: 'MISS FASHION DZ',
      ar: 'ميس فاشن ديزاد',
      en: 'MISS FASHION DZ'
    },
    role: {
      fr: 'Animatrice Principale & Présentatrice TV',
      ar: 'المقدمة الرئيسية ومنشطة البرنامج',
      en: 'Lead Presenter & Prime-Time Host'
    },
    year: '2025 / 2026',
    description: {
      fr: 'Grand rendez-vous télévisuel mettant à l’honneur le style, la haute couture, les créateurs émergents et l’élégance contemporaine. Lola pilote l’émission en direct et sur plateau avec dynamisme et naturel.',
      ar: 'برنامج تلفزيوني جماهيري بارز يسلط الضوء على صناعة الموضة وتصميم الأزياء الراقية والمواهب الشابة. تدير لولا فقرات البرنامج بحضور متميز وتفاعل استثنائي مع الضيوف والجمهور.',
      en: 'Flagship television broadcast celebrating fashion innovation, emerging couturiers, and modern elegance. Lola hosts the live studio show with dynamic screen presence and editorial flair.'
    },
    details: {
      fr: 'Format : Prime Time Télévisuel hebdomadaire. Rôle : Animation de plateau, interviews des jurés et créateurs, conduite des défilés et présentations thématiques.',
      ar: 'نوعية البرنامج: بث تلفزيوني أسبوعي في وقت الذروة. الدور: إدارة البلاطو، محاورة لجان التحكيم والمصممين، وتقديم العروض الاستعراضية.',
      en: 'Format: Weekly Prime-Time Television Series. Role: Stage hosting, celebrity jury and designer interviews, runway presentations, and backstage spotlight.'
    },
    coverImage: editorialAssets.tvStudio,
    backdropImage: editorialAssets.tvStudio,
    gallery: [
      editorialAssets.tvStudio,
      editorialAssets.fashionColonnade,
      editorialAssets.officialPortrait
    ],
    featured: true,
    published: true,
    sort_order: 1,
    externalUrl: 'https://www.instagram.com/miss_fashiondz/'
  }
];

export const initialBeautyArticles: BeautyArticle[] = [
  {
    id: 'art-1',
    slug: 'haute-parfumerie-pyramide-olfactive',
    category: 'fragrance',
    title: {
      fr: 'L’Art de la Haute Parfumerie : Décrypter la Pyramide Olfactive',
      ar: 'فن صناعة العطور الراقية: فك أسرار الهرم العطري',
      en: 'The Art of Haute Perfumery: Decoding the Olfactory Pyramid'
    },
    excerpt: {
      fr: 'Notes de tête, cœur et sillage : comment choisir une fragrance signature qui sublime votre sillage au fil des heures.',
      ar: 'النفحات العليا، قلب العطر والقاعدة: كيف تختار عطرك المميز الذي يدوم ويتناغم مع شخصيتك على مدار اليوم.',
      en: 'Top notes, heart chords, and lingering sillage: how to curate a signature fragrance that evolves gracefully through time.'
    },
    content: {
      fr: `La parfumerie n’est pas un simple geste esthétique ; c’est une architecture sensorielle. En tant que diplômée en parfumerie et cosmétologie, j'aborde les fragrances comme des compositions harmoniques.
      
      1. Les Notes de Tête : La Première Impression
      Vives, hespéridées ou aromatiques (bergamote, mandarine, poivre rose), elles éveillent les sens durant les quinze premières minutes.
      
      2. Le Cœur : L'Identité de la Fragrance
      Fleurs nobles (rose de Damas, jasmin sambac, fleur d'oranger) ou épices chaleureuses, le cœur s'installe pendant plusieurs heures et constitue la véritable signature du parfum.
      
      3. Le Fond : Le Sillage Inoubliable
      Bois de santal, oud précieux, ambre gris et muscs blancs scellent le parfum sur la peau et laissent une empreinte mémorable.`,
      ar: `العطور ليست مجرد لمسة جمالية عابرة، بل هي هندسة حسية متكاملة. من خلال دراستي وتكويني في فن العطور وعلم التجميل، أرى في كل قارورة عطراً حكاية متوازنة.
      
      1. النفحات الافتتاحية: الانطباع الأول
      تعتمد على الحمضيات والروائح المنعشة كالبرغموت واليوسفي، وتدوم خلال الدقائق الأولى لتلفت الانتباه.
      
      2. قلب العطر: الهوية الحقيقية
      زهور نادرة كالياسمين والورد الدمشقي، تمنح العطر شخصيته الفريدة وتستقر لساعات على البشرة.
      
      3. قاعدة العطر: الأثر والدوام
      العود النادر، الصندل، خشب الأرز والعنبر، وهي المكونات التي تثبت العطر وتمنحه ذلك السحر الخالد.`,
      en: `Perfumery is not merely an accessory; it is an architectural art of the senses. Drawing from my formal education in perfumery and cosmetology, I approach fragrances as harmonic compositions.
      
      1. Top Notes: The Immediate Invitation
      Sparkling citrus, bergamot, or rare pink peppercorns greet the senses during the opening fifteen minutes.
      
      2. Heart Notes: The Show’s Core Identity
      Noble Damascus rose, sambac jasmine, or warm spices blossom over the subsequent hours, revealing the true narrative.
      
      3. Base Notes: The Unforgettable Trail
      Creamy sandalwood, rare agarwood (oud), ambergris, and soft musks bond with skin chemistry, leaving a lingering, sophisticated memory.`
    },
    coverImage: editorialAssets.beautyCosmetics,
    readTime: {
      fr: '4 min de lecture',
      ar: '٤ دقائق قراءة',
      en: '4 min read'
    },
    publishedAt: '2026-09-20',
    isSponsored: false,
    status: 'published',
    tags: ['Parfumerie', 'Sillage', 'Cosmétologie']
  },
  {
    id: 'art-2',
    slug: 'barriere-cutanee-actifs-dermiques',
    category: 'skin',
    title: {
      fr: 'Barrière Cutanée & Éclat : Les Actifs Essentiels Validés par la Science',
      ar: 'حاجز البشرة والنضارة: المكونات الفعالة المعتمدة علمياً',
      en: 'Skin Barrier Resilience: Science-Backed Active Formulations'
    },
    excerpt: {
      fr: 'Céramides, niacinamide, acide hyaluronique : comment restaurer le film hydrolipidique face aux agressions extérieures.',
      ar: 'السيراميد، النياسيناميد وحمض الهيالورونيك: كيف نعيد بناء الحاجز الطبيعي للبشرة في مواجهة العوامل البيئية.',
      en: 'Ceramides, niacinamide, and multi-molecular hyaluronic acid: preserving the hydrolipidic shield against urban stressors.'
    },
    content: {
      fr: `Une peau éclatante commence par une barrière cutanée saine et équilibrée. Dans ma pratique de la cosmétologie, je privilégie toujours la physiologie cutanée avant les effets de mode éphémères.
      
      - L'Hydratation Intracellulaire : Combiner des acides hyaluroniques de différents poids moléculaires.
      - La Restauration Lipidique : Intégrer les céramides biomimétiques et le squalane végétal.
      - L'Apaisement Anti-Inflammatoire : La niacinamide à 4-5% pour unifier le teint et calmer les rougeurs.`,
      ar: `نضارة البشرة الحقيقية تبدأ من توازن حاجزها الواقي. في منهجيتي المعتمدة في علم التجميل، أضع صحة البشرة واستجابتها الطبيعية فوق الصيحات المؤقتة.
      
      - الترطيب العميق: استخدام حمض الهيالورونيك بأوزان جزيئية متعددة لترطيب كل طبقات البشرة.
      - ترميم الدهون الأساسية: السيراميد والسكوالين النباتي للحفاظ على مرونة الجلد.
      - التهدئة ومكافحة الالتهاب: النياسيناميد بنسبة مدروسة لتوحيد لون البشرة والحد من الاحمرار.`,
      en: `True radiant skin begins with a fortified, resilient epidermal barrier. In my cosmetology practice, dermal physiology always precedes transient trends.
      
      - Multi-Depth Hydration: Layering low and high molecular weight hyaluronic acids.
      - Lipid Replenishment: Incorporating bio-identical ceramides and botanical squalane.
      - Calming Tone Regulation: Formulating with 4-5% niacinamide to soothe reactive redness.`
    },
    coverImage: editorialAssets.beautyCosmetics,
    readTime: {
      fr: '5 min de lecture',
      ar: '٥ دقائق قراءة',
      en: '5 min read'
    },
    publishedAt: '2026-09-15',
    isSponsored: false,
    status: 'published',
    tags: ['Skincare', 'Dermatologie', 'Cosmétologie']
  },
  {
    id: 'art-3',
    slug: 'backstage-teint-studio-haute-definition',
    category: 'makeup',
    title: {
      fr: 'Backstage TV : Les Secrets d’un Teint Parfait sous les Projecteurs',
      ar: 'كواليس التلفزيون: أسرار إطلالة البشرة المثالية تحت إضاءة الاستوديو',
      en: 'Television Backstage: The Secrets to Flawless 4K Studio Complexion'
    },
    excerpt: {
      fr: 'Les techniques de pro pour un maquillage longue durée qui résiste à la chaleur des éclairages et sublime la caméra 4K.',
      ar: 'تقنيات المحترفين لمكياج طويل الثبات يقاوم حرارة الأضواء ويمنح البشرة مظهراً طبيعياً تحت عدسات البث فائق الدقة.',
      en: 'Professional artistry methods ensuring all-day longevity under hot studio rigs while preserving luminous natural skin.'
    },
    content: {
      fr: `Les plateaux de télévision imposent des contraintes techniques extrêmes : chaleur des projecteurs, caméras ultra-haute définition qui révèlent chaque texture, et heures continues de tournage.
      
      Mon protocole en trois étapes :
      1. Préparation cutanée ultra-légère sans silicones lourds.
      2. Correction ciblée par micro-touches sans effet masque.
      3. Fixation par poudres micronisées aux micro-minéraux translucides.`,
      ar: `تفرض استوديوهات البث التلفزيوني تحديات تقنية عالية: حرارة الكشافات، ودقة الكاميرات التي تبرز أدق التفاصيل، وساعات التصوير الطويلة.
      
      بروتوكولي الخاص في ثلاثة محاور:
      1. تحضير البشرة بمرطبات مائية خفيفة خالية من السيليكون الثقيل.
      2. تصحيح دقيق بالفرشاة دون تكثيف الطبقات.
      3. تثبيت البودرة الميكرونية الدقيقة لمنع اللمعان مع الحفاظ على حيوية الوجه.`,
      en: `Broadcast stages present demanding optical conditions: intense studio lighting, 4K sensor clarity, and uninterrupted hours of live filming.
      
      My signature three-step protocol:
      1. Ultra-lightweight hydration prep free of heavy occlusive silicones.
      2. Micro-targeted pinpoint correction to preserve authentic skin dimension.
      3. Setting with micronized translucent minerals for an invisible matte glow.`
    },
    coverImage: editorialAssets.officialPortrait,
    readTime: {
      fr: '3 min de lecture',
      ar: '٣ دقائق قراءة',
      en: '3 min read'
    },
    publishedAt: '2026-09-08',
    isSponsored: false,
    status: 'published',
    tags: ['Makeup', 'Studio', 'TV']
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      fr: 'Haute Couture Éditoriale — Série Noir & Bronze',
      ar: 'أزياء راقية تحريرية — سلسلة الأسود والبرونز',
      en: 'Haute Couture Editorial — Noir & Bronze Series'
    },
    category: 'editorial',
    imageUrl: editorialAssets.hero,
    altText: {
      fr: 'Portrait éditorial de Lola en tailleur noir minimaliste',
      ar: 'صورة تحريرية للولا بإطلالة سوداء راقية',
      en: 'Editorial portrait of Lola in minimalist black tailoring'
    },
    credit: 'Direction Artistique Officielle',
    copyright: '© Lola / Khaoula Kebbache',
    date: '2026',
    featured: true,
    sort_order: 1
  },
  {
    id: 'gal-2',
    title: {
      fr: 'Plateau Miss Fashion DZ — Enregistrement Prime Time',
      ar: 'بلاطو برنامج ميس فاشن ديزاد — تسجيل البث الرئيسي',
      en: 'Miss Fashion DZ Stage — Prime Time Broadcast'
    },
    category: 'television',
    imageUrl: editorialAssets.tvStudio,
    altText: {
      fr: 'Plateau de l’émission télévisée Miss Fashion DZ animée par Lola',
      ar: 'استوديو برنامج ميس فاشن ديزاد تقديم لولا',
      en: 'Miss Fashion DZ studio set hosted by Lola'
    },
    credit: 'Production Audiovisuelle',
    copyright: '© Miss Fashion DZ / Lola',
    date: '2025 / 2026',
    featured: true,
    sort_order: 2
  },
  {
    id: 'gal-3',
    title: {
      fr: 'The Lola Beauty Edit — Rituels & Cosmétologie',
      ar: 'مختارات لولا للجمال — مستحضرات وعطور فاخرة',
      en: 'The Lola Beauty Edit — Rituals & Fine Fragrance'
    },
    category: 'beauty',
    imageUrl: editorialAssets.beautyCosmetics,
    altText: {
      fr: 'Flacons de parfum et sérums sur pierre de travertin',
      ar: 'قوارير عطور ومستحضرات تجميل على حجر الترافرتين',
      en: 'Perfume flacons and botanical serums on travertine stone'
    },
    credit: 'Studio Beauté',
    copyright: '© Lola Beauty Edit',
    date: '2026',
    featured: true,
    sort_order: 3
  },
  {
    id: 'gal-4',
    title: {
      fr: 'Portrait Officiel — Khaoula Kebbache',
      ar: 'البورتريه الرسمي — خولة كباش',
      en: 'Official Studio Portrait — Khaoula Kebbache'
    },
    category: 'portraits',
    imageUrl: editorialAssets.officialPortrait,
    altText: {
      fr: 'Portrait officiel de présentation de Lola Khaoula Kebbache',
      ar: 'البورتريه المعتمد للولا خولة كباش',
      en: 'Official presentation portrait of Lola Khaoula Kebbache'
    },
    credit: 'Studio Officiel',
    copyright: '© Lola Management',
    date: '2026',
    featured: true,
    sort_order: 4
  },
  {
    id: 'gal-5',
    title: {
      fr: 'Architecture & Colonnades — Échappée Stylistique',
      ar: 'هندسة معمارية وأزياء — إطلالة كلاسيكية',
      en: 'Architectural Colonnades — Classical Style Series'
    },
    category: 'fashion',
    imageUrl: editorialAssets.fashionColonnade,
    altText: {
      fr: 'Série photographique mode et architecture',
      ar: 'سلسلة صور فوتوغرافية تدمج الأزياء بالمعمار',
      en: 'Fashion and architectural series by twilight'
    },
    credit: 'Photographie Éditoriale',
    copyright: '© Lola / Khaoula Kebbache',
    date: '2026',
    featured: true,
    sort_order: 5
  }
];

export const initialCollaborations: CollaborationRequest[] = [
  {
    id: 'req-101',
    companyName: 'Maison de Beauté Haute Ligne',
    contactName: 'Camille Reynaud',
    email: 'direction@maisonbeauteparis.com',
    phone: '+33 1 42 68 00 00',
    country: 'France',
    projectType: 'Brand Ambassador / Campagne Beauté',
    description: 'Lancement d’une nouvelle gamme de parfums de niche et soins cutanés haut de gamme. Nous souhaitons proposer à Lola d’incarner l’égérie média et digitale pour la zone Europe & Maghreb.',
    deliverables: 'Campagne vidéo TV & digitale, shooting officiel, présence événementielle au lancement à Paris.',
    desiredDate: 'Novembre 2026',
    budgetRange: '50 000 € – 100 000 €',
    website: 'https://maisonbeauteparis.com',
    attachmentName: 'Brief_Lancement_Parfum_2026.pdf',
    status: 'REVIEWING',
    createdAt: '2026-09-27T14:32:00Z',
    internalNotes: 'Dossier qualifié, correspond parfaitement aux qualifications en cosmétologie et parfumerie.'
  },
  {
    id: 'req-102',
    companyName: 'Festival Médias & Télévision Méditerranée',
    contactName: 'Karim Bensalem',
    email: 'production@mediamediterranee.org',
    phone: '+213 21 00 11 22',
    country: 'Algérie',
    projectType: 'Event Hosting / Animation Cérémonie',
    description: 'Invitation pour animer la grande soirée de gala de clôture retransmise en direct.',
    deliverables: 'Animation de la soirée de gala en direct (2h30), interviews sur tapis rouge.',
    desiredDate: 'Décembre 2026',
    budgetRange: 'Sur devis institutionnel',
    website: 'https://mediamediterranee.org',
    status: 'CONTACTED',
    createdAt: '2026-09-25T09:15:00Z',
    internalNotes: 'Proposition de planning transmise par l’agent.'
  }
];

export const initialPressRequests: PressRequest[] = [
  {
    id: 'press-201',
    name: 'Sarah Amrani',
    media: 'Revue Médias & Tendances Mag',
    email: 's.amrani@tendancesmag.com',
    country: 'France / Maghreb',
    topic: 'Grand entretien sur le parcours audiovisuel et la réussite de Miss Fashion DZ.',
    deadline: '15 Octobre 2026',
    message: 'Nous préparons un dossier spécial sur les nouvelles voix de l’animation télévisuelle et souhaitons dédier 4 pages à Lola.',
    createdAt: '2026-09-26T11:20:00Z',
    status: 'NEW'
  }
];

export const initialContactRequests: ContactRequest[] = [
  {
    id: 'cnt-301',
    type: 'general',
    name: 'Yasmine L.',
    email: 'yasmine.l@gmail.com',
    subject: 'Félicitations pour l’émission Miss Fashion DZ',
    message: 'Bravo pour votre élégance et votre professionnalisme à la présentation de l’émission, vous êtes une véritable source d’inspiration !',
    createdAt: '2026-09-28T08:12:00Z',
    status: 'NEW'
  }
];

export const initialSiteSettings: SiteSettings = {
  siteTitle: 'LOLA — Official Website | Khaoula Kebbache',
  tagline: 'LOLA — BEYOND SOCIAL',
  generalEmail: 'hello@im-lolla.com',
  collabEmail: 'collab@im-lolla.com',
  pressEmail: 'press@im-lolla.com',
  maintenanceMode: false,
  maintenanceMessage: 'Le site officiel de Lola est actuellement en maintenance pour mise à jour éditoriale.',
  defaultOgImage: 'https://im-lolla.com/og-image.jpg'
};

export const initialAuditLogs: AuditLogItem[] = [
  {
    id: 'log-1',
    user: 'admin@im-lolla.com',
    action: 'INITIAL_SYSTEM_BOOT',
    entity: 'SiteSettings',
    entityId: 'settings-1',
    timestamp: '2026-09-28T09:30:00Z'
  },
  {
    id: 'log-2',
    user: 'admin@im-lolla.com',
    action: 'VERIFIED_AUDIENCE_UPDATE',
    entity: 'Stats',
    entityId: 'stat-1',
    timestamp: '2026-09-28T09:35:00Z'
  }
];
