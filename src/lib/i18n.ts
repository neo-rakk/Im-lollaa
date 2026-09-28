import { Language } from '../types';

export const translations = {
  fr: {
    // Navigation
    nav: {
      about: 'À PROPOS',
      onAir: 'SUR LE PETIT ÉCRAN',
      beauty: 'CARNET BEAUTÉ',
      collaborate: 'COLLABORER',
      gallery: 'ARCHIVES VISUELLES',
      press: 'ESPACE PRESSE',
      mediaKit: 'MEDIA KIT',
      contact: 'CONTACT',
      workWithLola: 'COLLABORER AVEC LOLA',
      menu: 'MENU',
      close: 'FERMER',
      admin: 'ADMINISTRATION',
      languageLabel: 'LANGUE'
    },

    // Hero
    hero: {
      subtitle: 'KHAOULA KEBBACHE',
      role: 'CRÉATRICE · PRÉSENTATRICE TV · EXPERTE BEAUTÉ · MÉDIA',
      roleItems: ['CRÉATRICE', 'PRÉSENTATRICE TV', 'EXPERTE BEAUTÉ', 'MÉDIA'],
      discover: 'DÉCOUVRIR LE PARCOURS',
      workCta: 'COLLABORER AVEC LOLA',
      tagline: 'LOLA — FIGURE PUBLIQUE & TÉLÉVISION',
      scroll: 'DÉFILER POUR DÉCOUVRIR',
      officialSite: 'KHAOULA KEBBACHE · SITE OFFICIEL'
    },

    // Qui est Lola (The Person Behind Lola)
    intro: {
      kicker: 'L’UNIVERS & LA PERSONNALITÉ',
      title: 'QUI EST LOLA (KHAOULA KEBBACHE)',
      p1: 'Personnalité publique, animatrice de télévision et créatrice de contenu, Lola (Khaoula Kebbache) incarne une vision moderne de l’élégance, du lifestyle et des médias audiovisuels.',
      p2: 'Diplômée en cosmétologie, coiffure, esthétique, maquillage et parfumerie, elle associe une expertise technique rigoureuse à une présence médiatique naturelle.',
      p3: 'Au-delà des réseaux sociaux, son travail se déploie à travers des émissions télévisées à forte audience, des formats éditoriaux exigeants et des collaborations de marque prestigieuses.',
      statsLabel: 'COMMUNAUTÉ OFFICIELLE VÉRIFIÉE',
      statsSubtext: 'Instagram @im_lollaa · Source vérifiée',
      credentialsTitle: 'FORMATIONS & EXPERTISES CERTIFIÉES',
      readBioCta: 'LIRE LA BIOGRAPHIE COMPLÈTE & LE PARCOURS',
      portraitLabel: 'PORTRAIT OFFICIEL'
    },

    // Disciplines
    disciplines: {
      kicker: 'DOMAINES D’EXPERTISE',
      title: 'QUATRE AXES D’EXCELLENCE',
      subtitle: 'SAVOIR-FAIRE & RAYONNEMENT MÉDIATIQUE',
      item1Title: 'CRÉATION DE CONTENU',
      item1Desc: 'Direction artistique soignée, storytelling visuel et formats éditoriaux premium captivant une large audience fidèle.',
      item2Title: 'TÉLÉVISION & PRÉSENTATION',
      item2Desc: 'Animation de plateaux télévisés, maîtrise du direct, interviews et conduite d’émissions de mode et de divertissement.',
      item3Title: 'BEAUTÉ & COSMÉTOLOGIE',
      item3Desc: 'Maîtrise scientifique et esthétique des soins de la peau, de la haute parfumerie, de la coiffure et du maquillage professionnel.',
      item4Title: 'COLLABORATIONS DE MARQUE',
      item4Desc: 'Campagnes d’ambassadrice, lancements de prestige et partenariats éditoriaux en accord avec ses valeurs et son élégance.'
    },

    // Sur le petit écran (On Air)
    onAir: {
      kicker: 'TÉLÉVISION · PRÉSENTATION · AUDIOVISUEL',
      title: 'SUR LE PETIT ÉCRAN',
      subtitle: 'Émissions phares, plateaux télévisés et apparitions médiatiques.',
      tagArchive: 'ARCHIVES DE DIFFUSION',
      tagFeatured: 'ÉMISSION TÉLÉVISÉE MAJEURE',
      roleLabel: 'RÔLE',
      roleValue: 'Animatrice principale / Présentatrice TV',
      yearLabel: 'DIFFUSION',
      yearValue: 'Programme Télévisé Prime Time',
      formatLabel: 'FORMAT',
      formatValue: 'Grand Plateau Télévisé Hebdomadaire',
      desc: 'Émission télévisée phare consacrée à la haute couture, à l’élégance et aux talents émergents de la mode. Lola y assure l’animation avec distinction, naturel et présence scénique.',
      viewProject: 'DÉCOUVRIR L’ÉMISSION',
      watchBackstage: 'COULISSES DU TOURNAGE',
      officialShowPage: 'PAGE OFFICIELLE DE L’ÉMISSION'
    },

    // Carnet Beauté (Beauty Edit)
    beauty: {
      kicker: 'LE CARNET BEAUTÉ & CONSEILS',
      title: 'LE CARNET BEAUTÉ DE LOLA',
      subtitle: 'Analyses cosmétologiques, secrets de maquillage studio et haute parfumerie.',
      readArticle: 'LIRE L’ARTICLE',
      allArticles: 'TOUS LES ARTICLES',
      backToArticles: 'RETOUR AU CARNET BEAUTÉ',
      tagsLabel: 'Thématiques :',
      authorTitle: 'Diplômée en Cosmétologie, Esthétique & Parfumerie',
      categories: {
        all: 'TOUS',
        skin: 'SOINS DE LA PEAU',
        makeup: 'MAQUILLAGE',
        hair: 'COIFFURE',
        fragrance: 'PARFUMERIE',
        beauty: 'BEAUTÉ GLOBALE',
        lifestyle: 'STYLE DE VIE'
      },
      sponsored: 'EN PARTENARIAT AVEC'
    },

    // Collaborer (Collaborate Section)
    collaborate: {
      kicker: 'RELATIONS PROFESSIONNELLES & MARQUES',
      title: 'COLLABORER AVEC LOLA',
      desc: 'Marques de prestige, maisons de beauté, chaînes de télévision et organisateurs d’événements : découvrez les formats de collaboration sur-mesure développés avec Lola et son management officiel.',
      cta: 'DÉPOSER UN DOSSIER DE PROJET',
      consultMediaKit: 'CONSULTER LE MEDIA KIT',
      formatsTitle: 'FORMATS DE COLLABORATION PROPOSÉS',
      formatsList: [
        'Égérie & Ambassadrice de Marque',
        'Campagne Cosmétique & Beauté',
        'Lancement de Produit Exclusif',
        'Présentation Télévisée & Audiovisuel',
        'Animation d’Événements & Galas',
        'Éditoriaux & Haute Couture'
      ],
      confidentialNotice: 'Chaque demande est examinée sous protocole de confidentialité par le management de Lola.',
      modalTitle: 'PROPOSITION DE COLLABORATION PROFESSIONNELLE',
      modalSubtitle: 'Chaque proposition fait l’objet d’une analyse approfondie par le management officiel de Lola.',
      company: 'Société ou Marque',
      contactName: 'Nom du Responsable',
      email: 'Email Professionnel',
      phone: 'Téléphone (avec indicatif pays)',
      country: 'Pays / Siège social',
      projectType: 'Type de collaboration',
      description: 'Présentation détaillée du projet',
      deliverables: 'Livrables souhaités (campagne, TV, présence événementielle)',
      desiredDate: 'Période ou date de lancement',
      budgetRange: 'Budget prévisionnel estimé',
      website: 'Site internet ou profil officiel de la marque',
      attachment: 'Brief ou document PDF de présentation (max 10 Mo)',
      consent: 'J’atteste formuler cette demande à des fins professionnelles pour le compte de l’entité mentionnée.',
      submit: 'TRANSMETTRE LA PROPOSITION',
      submitting: 'TRANSMISSION EN COURS...',
      successTitle: 'PROPOSITION TRANSMISE AVEC SUCCÈS',
      successDesc: 'Votre projet a été remis au management de Lola. Notre équipe vous recontactera sous 48 à 72 heures ouvrées.',
      statusNew: 'Transmis au management',
      returnHome: 'RETOUR AU SITE PRINCIPAL',
      types: [
        'Égérie & Ambassadrice de Marque',
        'Campagne Publicitaire & Digitale',
        'Lancement de Produit Exclusif',
        'Campagne Beauté & Cosmétologie',
        'Contenu Créatif & Éditorial',
        'Production Télévisée & Audiovisuelle',
        'Animation d’Événements & Cérémonies',
        'Série Mode & Haute Couture',
        'Autre projet sur-mesure'
      ],
      budgets: [
        'Moins de 10 000 €',
        '10 000 € – 25 000 €',
        '25 000 € – 50 000 €',
        '50 000 € – 100 000 €',
        'Plus de 100 000 €',
        'Budget sur devis / À convenir'
      ],
      errors: {
        required: 'Veuillez renseigner tous les champs obligatoires.',
        consent: 'Veuillez confirmer l’attestation professionnelle pour soumettre votre demande.',
        fileSize: 'Le fichier dépasse la taille maximale autorisée (10 Mo).'
      }
    },

    // Galerie (Visual Archive)
    gallery: {
      kicker: 'PORTFOLIO VISUEL',
      title: 'ARCHIVES VISUELLES',
      subtitle: 'SÉRIES ÉDITORIALES, TOURNAGES & PORTRAITS OFFICIELS',
      all: 'TOUT',
      editorial: 'ÉDITORIAL',
      beauty: 'BEAUTÉ',
      fashion: 'MODE',
      television: 'TÉLÉVISION',
      events: 'ÉVÉNEMENTS',
      backstage: 'COULISSES',
      portraits: 'PORTRAITS',
      close: 'Fermer la vue (Échap)',
      prev: 'Photo précédente',
      next: 'Photo suivante',
      viewOriginal: 'Agrandir'
    },

    // Presse & Media Kit
    press: {
      kicker: 'SALLE DE PRESSE & JOURNALISTES',
      title: 'ESPACE PRESSE & MEDIA KIT',
      subtitle: 'DOCUMENTS OFFICIELS & DEMANDES D’INTERVIEWS',
      desc: 'Téléchargez les portraits officiels haute définition libres de droit presse, la biographie agréée et le media kit complet.',
      downloadMediaKit: 'TÉLÉCHARGER LE MEDIA KIT (PDF)',
      downloadPressPack: 'RÉCUPÉRER LE KIT PRESSE',
      officialBio: 'BIOGRAPHIE OFFICIELLE',
      pressContactTitle: 'CONTACTER LE SERVICE DE PRESSE',
      pressFormName: 'Nom & Prénom',
      pressFormMedia: 'Média ou Titre de presse',
      pressFormEmail: 'Email presse professionnel',
      pressFormCountry: 'Pays du média',
      pressFormTopic: 'Sujet de l’interview ou de l’article',
      pressFormDeadline: 'Date limite de parution (Deadline)',
      pressFormMessage: 'Questions envisagées ou détail du projet',
      pressSubmit: 'ENVOYER LA DEMANDE PRESSE',
      pressSuccess: 'Votre demande d’interview a été transmise au service presse de Lola.',
      accessPressBtn: 'ACCÉDER À L’ESPACE PRESSE',
      card1Title: 'Media Kit Professionnel',
      card1Badge: 'ÉDITION 2026',
      card1Format: 'DOCUMENT PDF',
      card1Desc: 'Dossier de présentation complet : communauté vérifiée, formats de diffusion TV, expertises cosmétiques et opportunités de partenariat.',
      card2Title: 'Dossier de Presse & Visuels HD',
      card2Badge: 'SALLE DE PRESSE',
      card2Format: 'KIT AGRÉÉ',
      card2Desc: 'Portraits de studio haute définition, biographie officielle trilingue et contacts directs pour reportages et interviews.',
      feature1: 'Portraits de studio et visuels de tournage en haute définition',
      feature2: 'Biographie officielle trilingue validée par le management',
      feature3: 'Fiche descriptive de l’émission télévisée Miss Fashion DZ',
      readBio: 'CONSULTER',
      downloadBtn: 'TÉLÉCHARGER'
    },

    // Réseaux sociaux & présence publique
    social: {
      kicker: 'CANAUX OFFICIELS DE LOLA',
      title: 'PRÉSENCE NUMÉRIQUE',
      verified: 'COMPTE CERTIFIÉ',
      sourceNote: 'Statistiques publiques vérifiées par l’équipe de Lola.',
      instagram: 'Instagram Officiel',
      tiktok: 'TikTok Officiel',
      youtube: 'YouTube Officiel',
      audienceLabel: 'Audience vérifiée :',
      joinOfficialAccount: 'REJOINDRE LE COMPTE OFFICIEL'
    },

    // Contact
    contact: {
      kicker: 'PRENDRE CONTACT AVEC L’ÉQUIPE',
      title: 'CONTACTER LE MANAGEMENT DE LOLA',
      subtitle: 'COMMUNICATION OFFICIELLE & SÉCURISÉE',
      generalTab: 'CONTACT GÉNÉRAL & PUBLIC',
      proTab: 'RELATIONS PROFESSIONNELLES & MARQUES',
      name: 'Votre nom complet',
      namePlaceholder: 'ex : Sarah Benali',
      email: 'Votre adresse email',
      emailPlaceholder: 'votre.email@domaine.com',
      subject: 'Objet de votre message',
      subjectPlaceholder: 'Indiquez le sujet de votre message',
      message: 'Votre message',
      messagePlaceholder: 'Écrivez votre message à l’attention de l’équipe de Lola...',
      send: 'ENVOYER LE MESSAGE',
      sending: 'TRANSMISSION EN COURS...',
      success: 'Votre message a bien été transmis à l’équipe officielle de Lola.',
      sendAnother: 'Envoyer un autre message',
      addressesTitle: 'Adresses Officielles Dédiées',
      addressesDesc: 'Pour un traitement optimal, chaque demande est adressée directement au pôle concerné.',
      generalEmailLabel: 'RELATIONS PUBLIQUES & AUDIENCE',
      collabEmailLabel: 'PARTENARIATS & MARQUES',
      pressEmailLabel: 'SERVICE PRESSE & MÉDIAS',
      proBriefBtn: 'DÉPOSER UN BRIEF MARQUE SUR-MESURE'
    },

    // Modals spécifiques
    modals: {
      about: {
        badge: 'BIOGRAPHIE OFFICIELLE',
        title: 'À Propos de Lola (Khaoula Kebbache)',
        subtitle: 'KHAOULA KEBBACHE · CRÉATRICE · PRÉSENTATRICE TV · EXPERTE BEAUTÉ',
        quote: '« Créatrice, animatrice de télévision et passionnée par l’art de la haute beauté, Lola bâtit des passerelles authentiques entre les médias, le raffinement et les marques d’exception. »',
        commitmentText: 'Chacune de ses interventions, chaque tournage télévisuel et chaque projet éditorial s’inscrit dans une quête permanente d’excellence, de respect du public et de mise en valeur des savoir-faire.',
        credentialsHeader: 'DIPLÔMES SCIENTIFIQUES & SPÉCIALISATIONS BEAUTÉ',
        verifiedNotice: 'Biographie et informations validées sous le contrôle direct du management officiel.',
        workWithLola: 'COLLABORER AVEC LOLA'
      },
      tv: {
        badge: 'FICHE OFFICIELLE DE PRODUCTION TÉLÉVISUELLE',
        stageLabel: 'PLATEAU TÉLÉVISÉ PRIME TIME',
        stageSub: 'ÉMISSION MODE, CRÉATION & ÉLÉGANCE',
        roleExecutive: 'RÔLE EXÉCUTIF',
        periodStatus: 'PÉRIODE & DIFFUSION',
        formatLabel: 'FORMAT & PROGRAMMATION',
        formatValue: 'Prime Time Télévisuel Hebdomadaire',
        presentationTitle: 'Présentation du Programme Télévisé',
        galleryTitle: 'Galerie & Photographies de Plateau',
        archiveNotice: 'Archives audiovisuelles officielles enregistrées pour le compte de Lola.',
        officialShowBtn: 'PAGE OFFICIELLE DE L’ÉMISSION',
        proposeTvBtn: 'PROPOSER UN PROJET AUDIOVISUEL'
      },
      mediaKit: {
        badge: 'MEDIA KIT OFFICIEL · ÉDITION 2026',
        printBtn: 'IMPRIMER / EXPORTER (PDF)',
        title: 'LOLA',
        subtitle: 'KHAOULA KEBBACHE',
        role: 'CRÉATRICE · PRÉSENTATRICE TV · EXPERTE BEAUTÉ · MÉDIA',
        statsInsta: 'INSTAGRAM OFFICIEL',
        statsTv: 'DIFFUSION TÉLÉVISÉE',
        statsTvValue: 'Prime Time',
        statsTvSub: 'Animatrice Principale TV',
        statsCosmetics: 'EXPERTISE BEAUTÉ',
        statsCosmeticsValue: 'Diplômée',
        statsCosmeticsSub: 'Cosmétologie & Parfumerie',
        qualificationsTitle: 'Diplômes & Savoir-Faire Techniques',
        formatsTitle: 'Modalités de Collaboration Disponibles',
        format1Title: 'Égérie & Ambassadrice de Marque',
        format1Desc: 'Contrats d’ambassadrice, campagnes d’envergure, shootings éditoriaux et présences officielles.',
        format2Title: 'Campagnes Beauté & Cosmétologie',
        format2Desc: 'Mise en avant experte de rituels de soin, formulations et parfums d’exception avec caution scientifique.',
        format3Title: 'Production Télévisée & Événements',
        format3Desc: 'Animation de cérémonies, présentation de galas de prestige et formats audiovisuels sur-mesure.'
      }
    },

    // Footer
    footer: {
      rights: 'Tous droits réservés.',
      officialSite: 'Site Officiel — Khaoula Kebbache',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      cookies: 'Gestion des cookies',
      domainNotice: 'Canal officiel exclusif : im-lolla.com',
      antiPhishing: 'Toute communication officielle n’émane que du domaine officiel im-lolla.com.',
      bioSummary: 'Khaoula Kebbache (Lola) — Animatrice de télévision, créatrice de contenu et experte diplômée en cosmétologie, coiffure et haute parfumerie. Retrouvez ici son parcours, ses projets audiovisuels et ses collaborations.',
      navigationTitle: 'NAVIGATION',
      socialTitle: 'RÉSEAUX OFFICIELS',
      languagesTitle: 'LANGUES',
      backToTop: 'HAUT DE PAGE'
    },

    // Cookies banner
    cookies: {
      message: 'Ce site officiel utilise des cookies techniques stricts pour garantir une navigation fluide, sécurisée et préserver votre vie privée.',
      accept: 'ACCEPTER',
      decline: 'REFUSER',
      policy: 'En savoir plus'
    }
  },

  ar: {
    // Navigation
    nav: {
      about: 'عن لولا',
      onAir: 'على الشاشة',
      beauty: 'عالم الجمال',
      collaborate: 'التعاون والشراكات',
      gallery: 'الأرشيف البصري',
      press: 'الصحافة والإعلام',
      mediaKit: 'الملف الإعلامي',
      contact: 'اتصل بنا',
      workWithLola: 'تعاون مع لولا',
      menu: 'القائمة',
      close: 'إغلاق',
      admin: 'لوحة التحكم',
      languageLabel: 'اللغة'
    },

    // Hero
    hero: {
      subtitle: 'خولة كباش',
      role: 'صانعة محتوى · مقدمة برامج تلفزيونية · خبيرة تجميل · إعلام',
      roleItems: ['صانعة محتوى', 'مقدمة برامج تلفزيونية', 'خبيرة تجميل', 'إعلام'],
      discover: 'اكتشف مسيرة لولا',
      workCta: 'تعاون مع لولا',
      tagline: 'لولا — شخصية عامة وإعلامية',
      scroll: 'مرر لأسفل للاستكشاف',
      officialSite: 'خولة كباش · الموقع الرسمي المعتمد'
    },

    // Qui est Lola (The Person Behind Lola)
    intro: {
      kicker: 'الهوية والمسيرة',
      title: 'من هي لولا (خولة كباش)',
      p1: 'شخصية عامة ومقدمة برامج تلفزيونية وصانعة محتوى متميزة، تجسد لولا (خولة كباش) رؤية راقية ومواكبة للأناقة، الجمال والإعلام التلفزيوني الحديث.',
      p2: 'حاصلة على شهادات ودراسات متخصصة في علم التجميل، تصفيف الشعر، العناية بالبشرة، المكياج الاحترافي وهندسة العطور، تجمع بين الدقة العلمية والحضور الإعلامي الواثق.',
      p3: 'إلى جانب حضورها الرقمي الواسع، يبرز تميزها من خلال برامج تلفزيونية في أوقات الذروة، مقالات جمالية متخصصة وشراكات استراتيجية مع كبرى العلامات التجارية.',
      statsLabel: 'قاعدة جماهيرية موثقة رسمياً',
      statsSubtext: 'إنستغرام @im_lollaa · بيانات معتمدة',
      credentialsTitle: 'الشهادات والتخصصات العلمية المعتمدة',
      readBioCta: 'قراءة السيرة الذاتية والمسيرة المهنية الكاملة',
      portraitLabel: 'البورتريه الرسمي'
    },

    // Disciplines
    disciplines: {
      kicker: 'مجالات التميز والعمل',
      title: 'أربعة محاور رئيسية للإبداع',
      subtitle: 'خبرة تخصصية وحضور إعلامي رفيع',
      item1Title: 'صناعة المحتوى الرقمي',
      item1Desc: 'إخراج فني متقن، سرد بصري ملهم ومحتوى يربط بين الذوق الرفيع واحتياجات المتابعين بدقة واحترافية.',
      item2Title: 'التقديم والظهور التلفزيوني',
      item2Desc: 'إدارة البرامج التلفزيونية في أوقات الذروة، تمكن في البث المباشر، ومحاورة الشخصيات في عالم الموضة والترفيه.',
      item3Title: 'عالم التجميل والعطور',
      item3Desc: 'دراية علمية بالتركيبات التجميلية، العناية المتطورة بالبشرة، تسريحات الشعر الفاخرة وعطور النيش العالمية.',
      item4Title: 'الشراكات مع العلامات التجارية',
      item4Desc: 'تمثيل العلامات المرموقة، إطلاق المنتجات الحصرية وحملات أصيلة تتماشى مع معايير الأناقة والاحترافية.'
    },

    // Sur le petit écran (On Air)
    onAir: {
      kicker: 'تلفزيون · تقديم · إعلام',
      title: 'على الشاشة التلفزيونية',
      subtitle: 'البرامج التلفزيونية الرسمية والإطلالات الإعلامية الرائدة.',
      tagArchive: 'أرشيف البث التلفزيوني',
      tagFeatured: 'برنامج تلفزيوني رئيسي',
      roleLabel: 'الدور',
      roleValue: 'المقدمة الرئيسية / منشطة البرنامج',
      yearLabel: 'البث',
      yearValue: 'برنامج تلفزيوني في أوقات الذروة',
      formatLabel: 'نوعية البرنامج',
      formatValue: 'بث تلفزيوني أسبوعي في وقت الذروة',
      desc: 'برنامج تلفزيوني رائد يحتفي بعالم الموضة والأناقة والتصاميم الراقية والمواهب الشابة، تقوده لولا بحضور واثق وتفاعل مميز مع الجمهور ولجان التحكيم.',
      viewProject: 'تفاصيل البرنامج',
      watchBackstage: 'كواليس التصوير',
      officialShowPage: 'الصفحة الرسمية للبرنامج'
    },

    // Carnet Beauté (Beauty Edit)
    beauty: {
      kicker: 'مجلة الجمال التحريرية',
      title: 'مختارات لولا للجمال',
      subtitle: 'تحليلات في علم التجميل، أسرار مكياج التصوير التلفزيوني وأرقى العطور.',
      readArticle: 'قراءة المقال',
      allArticles: 'جميع المقالات',
      backToArticles: 'العودة إلى مجلة الجمال',
      tagsLabel: 'المواضيع :',
      authorTitle: 'حاصلة على شهادات في علم التجميل، العناية بالبشرة والعطور',
      categories: {
        all: 'الكل',
        skin: 'العناية بالبشرة',
        makeup: 'المكياج',
        hair: 'الشعر والتصفيف',
        fragrance: 'العطور الفاخرة',
        beauty: 'الجمال الشامل',
        lifestyle: 'أسلوب الحياة'
      },
      sponsored: 'بالتعاون مع'
    },

    // Collaborer (Collaborate Section)
    collaborate: {
      kicker: 'العلاقات المهنية والشراكات',
      title: 'التعاون والشراكات مع لولا',
      desc: 'للعلامات التجارية المرموقة، القنوات التلفزيونية، وكالات الإنتاج ومنظمي الفعاليات الدولية: يمكنكم تقديم مقترح مشروع احترافي لتتم دراسته من قبل إدارة أعمال لولا.',
      cta: 'تقديم ملف المشروع',
      consultMediaKit: 'الاطلاع على الملف الإعلامي',
      formatsTitle: 'صيغ التعاون المتاحة',
      formatsList: [
        'سفيرة رسمية للعلامة التجارية',
        'حملات مستحضرات التجميل والعناية',
        'إطلاق وترويج المنتجات الحصرية',
        'التقديم التلفزيوني والإنتاج الإعلامي',
        'تقديم الحفلات والمهرجانات الرسمية',
        'جلسات التصوير والأزياء الراقية'
      ],
      confidentialNotice: 'تتم معالجة جميع الطلبات بسرية تامة ومباشرة عبر إدارة الأعمال الرسمية للولا.',
      modalTitle: 'طلب تعاون وشراكة رسمية',
      modalSubtitle: 'تتم دراسة كل مقترح مشروع بعناية من طرف الفريق الإداري المعتمد للولا.',
      company: 'اسم الشركة أو العلامة التجارية',
      contactName: 'اسم المسؤول / جهة الاتصال',
      email: 'البريد الإلكتروني المهني',
      phone: 'رقم الهاتف (مع الرمز الدولي)',
      country: 'الدولة / المقر الرئيسي',
      projectType: 'نوع الشراكة المقترحة',
      description: 'شرح مفصل لأهداف ومحاور المشروع',
      deliverables: 'المخرجات المطلوبة (تلفزيون، فعاليات، تصوير، محتوى رقمي)',
      desiredDate: 'الفترة الزمنية أو موعد الإطلاق المقترح',
      budgetRange: 'الميزانية التقديرية المخصصة',
      website: 'الموقع الإلكتروني أو الحساب الرسمي',
      attachment: 'ملف الشرح بصيغة PDF (أقصى حد 10 ميغابايت)',
      consent: 'أقر بأن هذا الطلب مهني ومرتبط بنشاط تجاري أو إعلامي موثق.',
      submit: 'إرسال الملف الرسمي',
      submitting: 'جارٍ إرسال الملف...',
      successTitle: 'تم استلام مقترحكم بنجاح',
      successDesc: 'تمت إحالة ملفكم إلى إدارة أعمال لولا الرسمية. سيقوم فريقنا بالتواصل معكم خلال 48 إلى 72 ساعة عمل.',
      statusNew: 'قيد المراجعة الإدارية',
      returnHome: 'العودة إلى الموقع الرئيسي',
      types: [
        'سفيرة وتمثيل العلامة التجارية',
        'حملة إعلانية ورقمية متكاملة',
        'إطلاق وترويج منتج فاخر',
        'حملة تجميل وعناية بالبشرة',
        'إنتاج محتوى إبداعي وتحريري',
        'إنتاج وتقديم تلفزيوني',
        'إدارة وتقديم فعاليات ومهرجانات',
        'جلسات تصوير وأزياء راقية',
        'مشروع مخصص آخر'
      ],
      budgets: [
        'أقل من 10,000 يورو',
        '10,000 – 25,000 يورو',
        '25,000 – 50,000 يورو',
        '50,000 – 100,000 يورو',
        'أكثر من 100,000 يورو',
        'ميزانية حسب دراسة المشروع'
      ],
      errors: {
        required: 'يرجى ملء جميع الحقول المطلوبة.',
        consent: 'يرجى تأكيد الإقرار المهني لإتمام الإرسال.',
        fileSize: 'حجم الملف يتجاوز الحد الأقصى المسموح به (10 ميغابايت).'
      }
    },

    // Galerie (Visual Archive)
    gallery: {
      kicker: 'المعرض البصري',
      title: 'الأرشيف البصري الرسمي',
      subtitle: 'جلسات تصوير تحريرية، كواليس الإنتاج وبورتريهات رسمية',
      all: 'الكل',
      editorial: 'تحريري',
      beauty: 'جمال',
      fashion: 'أزياء',
      television: 'تلفزيون',
      events: 'فعاليات',
      backstage: 'كواليس',
      portraits: 'بورتريه',
      close: 'إغلاق (Esc)',
      prev: 'الصورة السابقة',
      next: 'الصورة التالية',
      viewOriginal: 'تكبير الصورة'
    },

    // Presse & Media Kit
    press: {
      kicker: 'الصحافة والإعلاميون',
      title: 'الصحافة والملف الإعلامي',
      subtitle: 'مواد رسمية معتمدة وطلبات المقابلات الصحفية',
      desc: 'تحميل الصور الرسمية عالية الدقة المعتمدة للنشر، السيرة الذاتية الرسمية والملف الإعلامي الشامل.',
      downloadMediaKit: 'تحميل الملف الإعلامي (PDF)',
      downloadPressPack: 'تحميل الحقيبة الصحفية',
      officialBio: 'السيرة الذاتية الرسمية',
      pressContactTitle: 'التواصل مع قسم الصحافة',
      pressFormName: 'الاسم الكامل',
      pressFormMedia: 'المؤسسة الإعلامية أو المجلة',
      pressFormEmail: 'البريد الإلكتروني الصحفي المهني',
      pressFormCountry: 'دولة الوسيلة الإعلامية',
      pressFormTopic: 'موضوع المقابلة أو التقرير الصحفي',
      pressFormDeadline: 'الموعد النهائي للنشر',
      pressFormMessage: 'تفاصيل الاستفسار أو الأسئلة المقترحة',
      pressSubmit: 'إرسال الطلب الصحفي',
      pressSuccess: 'تم إرسال طلبكم الصحفي بنجاح إلى الفريق الإعلامي للولا.',
      accessPressBtn: 'دخول المركز الصحفي',
      card1Title: 'الملف الإعلامي المهني',
      card1Badge: 'نسخة 2026',
      card1Format: 'ملف PDF جاهز',
      card1Desc: 'ملخص شامل للمؤسسات والعلامات: أرقام المتابعة الموثقة، مسيرة الظهور التلفزيوني، والتخصصات الجمالية المعتمدة.',
      card2Title: 'الحقيبة الصحفية والصور عالية الدقة',
      card2Badge: 'المركز الصحفي',
      card2Format: 'ملف معتمد',
      card2Desc: 'صور استوديو بدقة فائقة مرخصة للنشر، سيرة ذاتية بثلاث لغات، وتواصل مباشر مع الإدارة الإعلامية.',
      feature1: 'صور استوديو وكواليس تلفزيونية بدقة فائقة مرخصة للنشر',
      feature2: 'سيرة ذاتية رسمية بثلاث لغات (العربية، الفرنسية، الإنجليزية)',
      feature3: 'بطاقة تعريفية متكاملة لبرنامج ميس فاشن ديزاد Miss Fashion DZ',
      readBio: 'قراءة السيرة',
      downloadBtn: 'تحميل'
    },

    // Réseaux sociaux & présence publique
    social: {
      kicker: 'المنصات الرسمية للولا',
      title: 'التواجد الرقمي',
      verified: 'حساب رسمي موثق',
      sourceNote: 'إحصائيات رسمية موثقة ومعتمدة من فريق لولا.',
      instagram: 'إنستغرام الرسمي',
      tiktok: 'تيك توك الرسمي',
      youtube: 'يوتيوب الرسمي',
      audienceLabel: 'الجمهور الموثق :',
      joinOfficialAccount: 'متابعة الحساب الرسمي'
    },

    // Contact
    contact: {
      kicker: 'تواصل مع فريق العمل',
      title: 'تواصل مع إدارة أعمال لولا',
      subtitle: 'قناة اتصال رسمية وآمنة',
      generalTab: 'استفسارات الجمهور العام',
      proTab: 'الشراكات المهنية والعلامات التجارية',
      name: 'الاسم الكامل',
      namePlaceholder: 'مثال: سارة بن علي',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'name@domain.com',
      subject: 'الموضوع',
      subjectPlaceholder: 'موضوع رسالتكم',
      message: 'الرسالة',
      messagePlaceholder: 'اكتبوا رسالتكم الموجهة إلى فريق عمل لولا...',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال رسالتكم بنجاح إلى الفريق الرسمي للولا.',
      sendAnother: 'إرسال رسالة أخرى',
      addressesTitle: 'عناوين التواصل الرسمية المباشرة',
      addressesDesc: 'لضمان سرعة الاستجابة، يتم توجيه كل رسالة مباشرة إلى القسم المختص.',
      generalEmailLabel: 'العلاقات العامة والجمهور',
      collabEmailLabel: 'الشراكات والعلامات التجارية',
      pressEmailLabel: 'الصحافة ووسائل الإعلام',
      proBriefBtn: 'تقديم مقترح شراكة تجارية'
    },

    // Modals spécifiques
    modals: {
      about: {
        badge: 'السيرة الذاتية الرسمية',
        title: 'عن لولا (خولة كباش)',
        subtitle: 'خولة كباش · صانعة محتوى · مقدمة برامج تلفزيونية · خبيرة تجميل وعطور',
        quote: '«صانعة محتوى وإعلامية تلفزيونية وشغوفة بفنون الجمال الرفيع، تبني لولا جسوراً حقيقية بين الإعلام، الرقي والشراكات الاستثنائية.»',
        commitmentText: 'يرتكز عملها على التزام صارم بالجودة: كل إطلالة تلفزيونية، كل مقال وكل شراكة تهدف لتقديم محتوى يحترم ذائقة الجمهور ويبرز أفضل المعايير المهنية.',
        credentialsHeader: 'المؤهلات العلمية والتخصصات المعتمدة في الجمال',
        verifiedNotice: 'جميع البيانات والسير الذاتية معتمدة ومحدثة تحت إشراف إدارة الأعمال الرسمية.',
        workWithLola: 'تعاون مع لولا'
      },
      tv: {
        badge: 'البطاقة التعريفية الرسمية للإنتاج التلفزيوني',
        stageLabel: 'استوديو البث التلفزيوني في وقت الذروة',
        stageSub: 'برنامج الأناقة، الموضة والتصاميم الراقية',
        roleExecutive: 'المهمة والدور',
        periodStatus: 'الفترة الزمنية والبث',
        formatLabel: 'نوعية البرنامج والتوقيت',
        formatValue: 'برنامج تلفزيوني أسبوعي في وقت الذروة',
        presentationTitle: 'تفاصيل البرنامج التلفزيوني',
        galleryTitle: 'معرض صور وكواليس الاستوديو',
        archiveNotice: 'أرشيف تلفزيوني موثق ومسجل لحساب أعمال لولا الرسمية.',
        officialShowBtn: 'الصفحة الرسمية للبرنامج',
        proposeTvBtn: 'تقديم مقترح إنتاج تلفزيوني'
      },
      mediaKit: {
        badge: 'الملف الإعلامي الرسمي · نسخة 2026',
        printBtn: 'طباعة / تصدير (PDF)',
        title: 'لولا',
        subtitle: 'خولة كباش',
        role: 'صانعة محتوى · مقدمة برامج تلفزيونية · خبيرة تجميل وعطور · إعلام',
        statsInsta: 'إنستغرام الرسمي',
        statsTv: 'البث التلفزيوني',
        statsTvValue: 'وقت الذروة',
        statsTvSub: 'المقدمة الرئيسية للبرنامج',
        statsCosmetics: 'الخبرة التجميلية',
        statsCosmeticsValue: 'شهادات معتمدة',
        statsCosmeticsSub: 'علم التجميل والعطور الفاخرة',
        qualificationsTitle: 'المؤهلات العلمية والخبرات التخصصية',
        formatsTitle: 'صيغ الشراكات والتعاون المتاحة',
        format1Title: 'سفيرة رسمية للعلامة التجارية',
        format1Desc: 'عقود سنوية، حملات إعلانية واسعة، جلسات تصوير مخصصة ومشاركات رسمية.',
        format2Title: 'حملات التجميل والعطور الفاخرة',
        format2Desc: 'تسليط الضوء على الروتينات والتركيبات المبتكرة بأسلوب علمي مقنع.',
        format3Title: 'الإنتاج والتقديم التلفزيوني والفعاليات',
        format3Desc: 'إدارة وتنشيط المهرجانات، حفلات الجوائز والإنتاجات المرئية الراقية.'
      }
    },

    // Footer
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      officialSite: 'الموقع الرسمي — خولة كباش',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      cookies: 'إدارة ملفات تعريف الارتباط',
      domainNotice: 'النطاق الرسمي الحصري: im-lolla.com',
      antiPhishing: 'تنبيه: تصدر المراسلات الرسمية حصراً من النطاق im-lolla.com.',
      bioSummary: 'خولة كباش (لولا) — مقدمة برامج تلفزيونية، صانعة محتوى وخبيرة معتمدة في علم التجميل، تصفيف الشعر وفنون العطور. اكتشفوا مسيرتها الرسمية، إنتاجاتها التلفزيونية وشراكاتها الراقية.',
      navigationTitle: 'التنقل في الموقع',
      socialTitle: 'المنصات الرسمية',
      languagesTitle: 'اللغات',
      backToTop: 'أعلى الصفحة'
    },

    // Cookies banner
    cookies: {
      message: 'يستخدم هذا الموقع الرسمي ملفات تعريف ارتباط فنية فقط لضمان تجربة تصفح سريعة، آمنة ومحترمة لخصوصيتكم.',
      accept: 'موافق',
      decline: 'رفض',
      policy: 'تفاصيل أكثر'
    }
  },

  en: {
    // Navigation
    nav: {
      about: 'ABOUT',
      onAir: 'ON SCREEN',
      beauty: 'BEAUTY NOTEBOOK',
      collaborate: 'COLLABORATE',
      gallery: 'VISUAL ARCHIVE',
      press: 'PRESS ROOM',
      mediaKit: 'MEDIA KIT',
      contact: 'CONTACT',
      workWithLola: 'WORK WITH LOLA',
      menu: 'MENU',
      close: 'CLOSE',
      admin: 'ADMIN PORTAL',
      languageLabel: 'LANGUAGE'
    },

    // Hero
    hero: {
      subtitle: 'KHAOULA KEBBACHE',
      role: 'CREATOR · TELEVISION PRESENTER · BEAUTY EXPERT · MEDIA',
      roleItems: ['CREATOR', 'TV PRESENTER', 'BEAUTY EXPERT', 'MEDIA'],
      discover: 'DISCOVER HER JOURNEY',
      workCta: 'WORK WITH LOLA',
      tagline: 'LOLA — BROADCAST PERSONALITY & CREATIVE VOICE',
      scroll: 'SCROLL TO EXPLORE',
      officialSite: 'KHAOULA KEBBACHE · OFFICIAL SITE'
    },

    // Qui est Lola (The Person Behind Lola)
    intro: {
      kicker: 'THE PERSON & THE VISION',
      title: 'MEET LOLA (KHAOULA KEBBACHE)',
      p1: 'Public personality, television host, and content creator, Lola (Khaoula Kebbache) embodies a contemporary standard of editorial elegance, beauty mastery, and broadcast media.',
      p2: 'Holding professional qualifications in cosmetology, aesthetics, hairstyling, makeup artistry, and perfumery, she pairs scientific precision with a natural, magnetic screen presence.',
      p3: 'Beyond digital platforms, her universe unfolds across prime-time television broadcasts, curated editorial writings, and strategic luxury brand partnerships.',
      statsLabel: 'OFFICIALLY VERIFIED COMMUNITY',
      statsSubtext: 'Instagram @im_lollaa · Verified source',
      credentialsTitle: 'CERTIFIED QUALIFICATIONS & AREAS OF MASTERY',
      readBioCta: 'READ FULL BIOGRAPHY & JOURNEY',
      portraitLabel: 'OFFICIAL PORTRAIT'
    },

    // Disciplines
    disciplines: {
      kicker: 'CORE DISCIPLINES',
      title: 'FOUR PILLARS OF EXCELLENCE',
      subtitle: 'MULTIDISCIPLINARY EXPERTISE & MEDIA POISE',
      item1Title: 'CONTENT CREATION',
      item1Desc: 'High-end artistic direction, refined visual storytelling, and engaging editorial formats reaching a devoted international audience.',
      item2Title: 'TELEVISION & BROADCASTING',
      item2Desc: 'Live studio hosting, broadcast interviews, and leading prime-time fashion and entertainment productions with grace and charisma.',
      item3Title: 'BEAUTY & COSMETOLOGY EXPERTISE',
      item3Desc: 'In-depth formulation knowledge, dermatology-aligned skincare rituals, haute perfumery insights, and professional artistry.',
      item4Title: 'BRAND COLLABORATIONS',
      item4Desc: 'Global ambassadorships, prestigious product launches, and tailored campaigns crafted with authenticity and commercial rigor.'
    },

    // Sur le petit écran (On Air)
    onAir: {
      kicker: 'TELEVISION · BROADCAST · MEDIA',
      title: 'ON SCREEN',
      subtitle: 'Flagship television productions and broadcast achievements.',
      tagArchive: 'BROADCAST ARCHIVE',
      tagFeatured: 'MAJOR TELEVISION SERIES',
      roleLabel: 'ROLE',
      roleValue: 'Lead Presenter / Prime-Time TV Host',
      yearLabel: 'BROADCAST',
      yearValue: 'Prime-Time Television Series',
      formatLabel: 'FORMAT',
      formatValue: 'Weekly Live Studio Prime Time Show',
      desc: 'Flagship television broadcast celebrating haute couture, emerging designers, and modern elegance, hosted and energized by Lola with charisma and poise.',
      viewProject: 'VIEW SHOW PROFILE',
      watchBackstage: 'EXPLORE BACKSTAGE',
      officialShowPage: 'OFFICIAL SHOW PAGE'
    },

    // Carnet Beauté (Beauty Edit)
    beauty: {
      kicker: 'THE BEAUTY NOTEBOOK & ADVICE',
      title: 'THE LOLA BEAUTY NOTEBOOK',
      subtitle: 'Cosmetological insights, camera-ready studio techniques, and haute perfumery.',
      readArticle: 'READ ARTICLE',
      allArticles: 'ALL ARTICLES',
      backToArticles: 'BACK TO BEAUTY NOTEBOOK',
      tagsLabel: 'Topics:',
      authorTitle: 'Accredited in Cosmetology, Aesthetics & Fine Fragrance',
      categories: {
        all: 'ALL',
        skin: 'SKINCARE',
        makeup: 'MAKEUP',
        hair: 'HAIRSTYLING',
        fragrance: 'PERFUMERY',
        beauty: 'TOTAL BEAUTY',
        lifestyle: 'LIFESTYLE'
      },
      sponsored: 'IN PARTNERSHIP WITH'
    },

    // Collaborer (Collaborate Section)
    collaborate: {
      kicker: 'BRAND & CORPORATE RELATIONS',
      title: 'COLLABORATE WITH LOLA',
      desc: 'Luxury brands, beauty houses, television networks, and event producers: discover bespoke partnership formats developed in collaboration with Lola and her official management.',
      cta: 'SUBMIT PROJECT BRIEF',
      consultMediaKit: 'VIEW MEDIA KIT',
      formatsTitle: 'AVAILABLE COLLABORATION FORMATS',
      formatsList: [
        'Brand Ambassadorship',
        'Beauty & Cosmetics Campaign',
        'Exclusive Product Launch',
        'Television & Broadcast Hosting',
        'Gala & Event Ceremonies',
        'Haute Couture & Editorials'
      ],
      confidentialNotice: 'Every inquiry is evaluated under strict non-disclosure protocols by Lola’s management.',
      modalTitle: 'PROFESSIONAL COLLABORATION PROPOSAL',
      modalSubtitle: 'Each project proposal is carefully analyzed by Lola’s official management.',
      company: 'Company / Brand Name',
      contactName: 'Contact Person Name',
      email: 'Corporate Email',
      phone: 'Phone Number (with country code)',
      country: 'Country / Headquarters',
      projectType: 'Collaboration Type',
      description: 'Project Scope & Narrative',
      deliverables: 'Expected Deliverables (TV, digital, live event, shoot)',
      desiredDate: 'Target Date / Launch Window',
      budgetRange: 'Estimated Budget Range',
      website: 'Brand Website or Official Social Handle',
      attachment: 'Brief or Pitch PDF Document (max 10 MB)',
      consent: 'I confirm this inquiry is submitted for legitimate professional evaluation on behalf of the named organization.',
      submit: 'SUBMIT OFFICIAL PROPOSAL',
      submitting: 'SUBMITTING PROPOSAL...',
      successTitle: 'PROPOSAL SUCCESSFULLY RECEIVED',
      successDesc: 'Your proposal has been routed to Lola’s executive management. Expect a response within 48 to 72 business hours.',
      statusNew: 'Submitted to Management',
      returnHome: 'RETURN TO MAIN SITE',
      types: [
        'Brand Ambassadorship',
        'Advertising & Digital Campaign',
        'Exclusive Product Launch',
        'Beauty & Skincare Campaign',
        'Creative & Editorial Content',
        'Television & Media Production',
        'Live Events & Award Ceremonies',
        'Haute Couture Editorial Series',
        'Other Bespoke Project'
      ],
      budgets: [
        'Under €10,000',
        '€10,000 – €25,000',
        '€25,000 – €50,000',
        '€50,000 – €100,000',
        'Over €100,000',
        'Tailored quote / To be agreed'
      ],
      errors: {
        required: 'Please fill out all required fields.',
        consent: 'Please accept the professional statement before submitting.',
        fileSize: 'File size exceeds the 10 MB maximum limit.'
      }
    },

    // Galerie (Visual Archive)
    gallery: {
      kicker: 'VISUAL PORTFOLIO',
      title: 'VISUAL ARCHIVE',
      subtitle: 'EDITORIAL SERIES, BROADCAST SETS & APPROVED PORTRAITS',
      all: 'ALL',
      editorial: 'EDITORIAL',
      beauty: 'BEAUTY',
      fashion: 'FASHION',
      television: 'TELEVISION',
      events: 'EVENTS',
      backstage: 'BACKSTAGE',
      portraits: 'PORTRAITS',
      close: 'Close (Esc)',
      prev: 'Previous photo',
      next: 'Next photo',
      viewOriginal: 'Zoom in'
    },

    // Presse & Media Kit
    press: {
      kicker: 'PRESS ROOM & JOURNALISTS',
      title: 'PRESS ROOM & MEDIA KIT',
      subtitle: 'OFFICIAL ASSETS & INTERVIEW REQUESTS',
      desc: 'Download verified high-definition portraits approved for press use, the authorized biography, and complete media kit statistics.',
      downloadMediaKit: 'DOWNLOAD MEDIA KIT (PDF)',
      downloadPressPack: 'DOWNLOAD PRESS PACK',
      officialBio: 'OFFICIAL BIOGRAPHY',
      pressContactTitle: 'CONTACT PRESS RELATIONS',
      pressFormName: 'Full Name',
      pressFormMedia: 'Media Outlet / Publication',
      pressFormEmail: 'Professional Press Email',
      pressFormCountry: 'Country of Publication',
      pressFormTopic: 'Interview or Feature Topic',
      pressFormDeadline: 'Publication Deadline',
      pressFormMessage: 'Proposed Questions or Project Details',
      pressSubmit: 'SEND PRESS REQUEST',
      pressSuccess: 'Your press inquiry has been received by Lola’s media office.',
      accessPressBtn: 'ENTER PRESS SUITE',
      card1Title: 'Professional Media Kit',
      card1Badge: '2026 EDITION',
      card1Format: 'EXPORTABLE PDF',
      card1Desc: 'Complete profile for brands and producers: verified audience figures, prime-time television track record, and beauty qualifications.',
      card2Title: 'Press Pack & HD Portraits',
      card2Badge: 'PRESS ROOM',
      card2Format: 'OFFICIAL SUITE',
      card2Desc: 'High-resolution press-approved studio portraits, trilingual biography, and direct access for interviews.',
      feature1: 'High-resolution studio portraits and broadcast set captures',
      feature2: 'Authorized trilingual biography (FR / AR / EN)',
      feature3: 'Television profile and background on Miss Fashion DZ',
      readBio: 'READ BIO',
      downloadBtn: 'DOWNLOAD'
    },

    // Réseaux sociaux & présence publique
    social: {
      kicker: 'LOLA’S OFFICIAL CHANNELS',
      title: 'DIGITAL PRESENCE',
      verified: 'VERIFIED ACCOUNT',
      sourceNote: 'Audience statistics validated directly by Lola’s team.',
      instagram: 'Official Instagram',
      tiktok: 'Official TikTok',
      youtube: 'Official YouTube',
      audienceLabel: 'Verified audience:',
      joinOfficialAccount: 'JOIN OFFICIAL ACCOUNT'
    },

    // Contact
    contact: {
      kicker: 'CONNECT WITH THE TEAM',
      title: 'CONNECT WITH LOLA’S MANAGEMENT',
      subtitle: 'OFFICIAL & SECURE COMMUNICATION',
      generalTab: 'GENERAL & AUDIENCE ENQUIRIES',
      proTab: 'PROFESSIONAL & BRAND INQUIRIES',
      name: 'Full Name',
      namePlaceholder: 'e.g. Sarah Mitchell',
      email: 'Email Address',
      emailPlaceholder: 'your.name@domain.com',
      subject: 'Subject',
      subjectPlaceholder: 'Reason for your inquiry',
      message: 'Message',
      messagePlaceholder: 'Write your message to Lola’s team...',
      send: 'SEND MESSAGE',
      sending: 'TRANSMITTING...',
      success: 'Your message has been safely sent to Lola’s official management.',
      sendAnother: 'Send another message',
      addressesTitle: 'Direct Official Channels',
      addressesDesc: 'To ensure efficient handling, communications are directed to the respective departments.',
      generalEmailLabel: 'PUBLIC RELATIONS & GENERAL',
      collabEmailLabel: 'BRAND PARTNERSHIPS',
      pressEmailLabel: 'PRESS & BROADCAST MEDIA',
      proBriefBtn: 'SUBMIT BESPOKE BRAND INQUIRY'
    },

    // Modals spécifiques
    modals: {
      about: {
        badge: 'OFFICIAL BIOGRAPHY',
        title: 'About Lola (Khaoula Kebbache)',
        subtitle: 'KHAOULA KEBBACHE · CREATOR · TV HOST · BEAUTY EXPERT',
        quote: '“Creator, television host, and passionate advocate for high beauty craftsmanship, Lola builds genuine bridges between media poise, modern elegance, and distinguished brands.”',
        commitmentText: 'Her creative ethos is anchored in uncompromising quality: every televised project, editorial writing, and brand alliance is approached with dedication to her audience and respect for artisanal heritage.',
        credentialsHeader: 'SCIENTIFIC QUALIFICATIONS & ACCREDITED BEAUTY EXPERTISE',
        verifiedNotice: 'Biography and career records validated under direct oversight of official management.',
        workWithLola: 'WORK WITH LOLA'
      },
      tv: {
        badge: 'OFFICIAL TELEVISION PRODUCTION PROFILE',
        stageLabel: 'PRIME-TIME TELEVISION SET',
        stageSub: 'HIGH FASHION, CREATION & MODERN ELEGANCE',
        roleExecutive: 'EXECUTIVE ROLE',
        periodStatus: 'PERIOD & BROADCAST',
        formatLabel: 'FORMAT & PROGRAMMING',
        formatValue: 'Weekly Live Studio Prime Time Show',
        presentationTitle: 'Television Series Overview',
        galleryTitle: 'Broadcast Studio & Backstage Gallery',
        archiveNotice: 'Official broadcast archive cataloged on behalf of Lola.',
        officialShowBtn: 'OFFICIAL SHOW PROFILE',
        proposeTvBtn: 'PROPOSE BROADCAST PROJECT'
      },
      mediaKit: {
        badge: 'OFFICIAL MEDIA KIT · 2026 EDITION',
        printBtn: 'PRINT / EXPORT (PDF)',
        title: 'LOLA',
        subtitle: 'KHAOULA KEBBACHE',
        role: 'CREATOR · TELEVISION PRESENTER · BEAUTY EXPERT · MEDIA',
        statsInsta: 'OFFICIAL INSTAGRAM',
        statsTv: 'BROADCAST MEDIA',
        statsTvValue: 'Prime Time',
        statsTvSub: 'Lead Television Host',
        statsCosmetics: 'BEAUTY MASTERY',
        statsCosmeticsValue: 'Accredited',
        statsCosmeticsSub: 'Cosmetology & Fine Fragrance',
        qualificationsTitle: 'Qualifications & Technical Mastery',
        formatsTitle: 'Available Collaboration Formats',
        format1Title: 'Brand Ambassadorship',
        format1Desc: 'Annual contracts, 360° global campaigns, bespoke editorial shoots, and official appearances.',
        format2Title: 'Beauty & Skincare Campaigns',
        format2Desc: 'Expert endorsement of active skincare rituals, formulations, and fine perfumery with scientific credibility.',
        format3Title: 'Television & Live Event Hosting',
        format3Desc: 'Gala hosting, award ceremony moderation, and custom prime-time broadcast productions.'
      }
    },

    // Footer
    footer: {
      rights: 'All rights reserved.',
      officialSite: 'Official Website — Khaoula Kebbache',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Preferences',
      domainNotice: 'Exclusive official domain: im-lolla.com',
      antiPhishing: 'All official correspondence originates solely from @im-lolla.com.',
      bioSummary: 'Khaoula Kebbache (Lola) — Television presenter, content creator, and certified expert in cosmetology, aesthetic styling, and haute perfumery. Discover her journey, broadcast productions, and collaborations.',
      navigationTitle: 'NAVIGATION',
      socialTitle: 'OFFICIAL CHANNELS',
      languagesTitle: 'LANGUAGES',
      backToTop: 'BACK TO TOP'
    },

    // Cookies banner
    cookies: {
      message: 'This official website uses essential technical cookies strictly for performance, security, and respectful privacy management.',
      accept: 'ACCEPT',
      decline: 'DECLINE',
      policy: 'Learn More'
    }
  }
};
