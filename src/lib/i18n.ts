import { Language } from '../types';

export const translations = {
  fr: {
    // Navigation
    nav: {
      about: 'À PROPOS',
      onAir: 'ON AIR',
      beauty: 'BEAUTY EDIT',
      collaborate: 'COLLABORER',
      gallery: 'GALERIE',
      press: 'PRESSE',
      mediaKit: 'MEDIA KIT',
      contact: 'CONTACT',
      workWithLola: 'COLLABORER AVEC LOLA',
      menu: 'MENU',
      close: 'FERMER',
      admin: 'ESPACE ADMIN'
    },
    // Hero
    hero: {
      subtitle: 'KHAOULA KEBBACHE',
      role: 'CREATOR · PRESENTER · BEAUTY · MEDIA',
      discover: 'DÉCOUVRIR LOLA',
      workCta: 'COLLABORER AVEC LOLA',
      tagline: 'LOLA — BEYOND SOCIAL',
      scroll: 'DÉFILER POUR DÉCOUVRIR'
    },
    // The Person Behind Lola
    intro: {
      kicker: 'L’UNIVERS & LA PERSONNALITÉ',
      title: 'THE PERSON BEHIND LOLA',
      p1: 'Personnalité publique, animatrice de télévision et créatrice de contenu, Lola (Khaoula Kebbache) incarne une vision moderne de l’élégance, du lifestyle et des médias audiovisuels.',
      p2: 'Diplômée en cosmétologie, coiffure, esthétique, maquillage et parfumerie, elle associe une expertise technique rigoureuse à une présence médiatique naturelle.',
      p3: 'Au-delà des plateformes sociales, son univers se déploie à travers des productions télévisées de premier plan, des formats éditoriaux exigeants et des collaborations de marque ciblées.',
      statsLabel: 'COMMUNAUTÉ OFFICIELLE VÉRIFIÉE'
    },
    // Disciplines
    disciplines: {
      kicker: 'DOMAINES D’EXPERTISE',
      title: 'QUATRE AXES MAJEURS',
      item1Title: 'CRÉATION DE CONTENU',
      item1Desc: 'Direction artistique soignée, storytelling visuel et formats éditoriaux premium engageant une audience francophone, arabophone et internationale.',
      item2Title: 'TÉLÉVISION & PRÉSENTATION',
      item2Desc: 'Animation de plateaux télévisés, maîtrise du direct, interviews et conduite de grands formats de divertissement et de mode.',
      item3Title: 'EXPERTISE BEAUTÉ & COSMÉTOLOGIE',
      item3Desc: 'Maîtrise scientifique et esthétique des soins cutanés, de la haute parfumerie, de la coiffure et du maquillage professionnel.',
      item4Title: 'COLLABORATIONS DE MARQUE',
      item4Desc: 'Campagnes d’ambassadrice, lancements de produits exclusifs et partenariats éditoriaux en harmonie avec ses valeurs et son univers.'
    },
    // On Air Section
    onAir: {
      kicker: 'TÉLÉVISION · PRÉSENTATION · MÉDIA',
      title: 'ON AIR',
      subtitle: 'Projets télévisuels et productions audiovisuelles officielles.',
      showTitle: 'MISS FASHION DZ',
      roleLabel: 'RÔLE',
      roleValue: 'Animatrice principale / Présentatrice TV',
      yearLabel: 'DIFFUSION',
      yearValue: 'Programme Télévisé Prime Time',
      desc: 'Émission télévisée phare dédiée à la mode, au stylisme, à l’élégance et aux nouveaux talents de la haute couture. Lola y assure la présentation et l’animation avec aisance et dynamisme.',
      viewProject: 'CONSULTER LA FICHE ÉMISSION',
      watchBackstage: 'VOIR LES COULISSES'
    },
    // Beauty Edit Section
    beauty: {
      kicker: 'MINI-MAGAZINE ÉDITORIAL',
      title: 'THE LOLA BEAUTY EDIT',
      subtitle: 'Conseils, analyses cosmétologiques, sélections et rituels d’excellence.',
      readArticle: 'LIRE L’ARTICLE',
      categories: {
        all: 'TOUS',
        skin: 'SKINCARE',
        makeup: 'MAKEUP',
        hair: 'COIFFURE',
        fragrance: 'PARFUMERIE',
        beauty: 'BEAUTÉ GLOBALE',
        lifestyle: 'LIFESTYLE'
      },
      sponsored: 'EN PARTENARIAT AVEC'
    },
    // Collaborate Section
    collaborate: {
      kicker: 'RELATIONS MARQUES & INSTITUTIONNELS',
      title: 'COLLABORER AVEC LOLA',
      desc: 'Marques, agences, diffuseurs, productions audiovisuelles et organisateurs d’événements : soumettez votre projet professionnel pour une étude personnalisée par le management officiel de Lola.',
      cta: 'DÉPOSER UN BRIEF PROJET',
      modalTitle: 'PROPOSITION DE COLLABORATION PROFESSIONNELLE',
      company: 'Société / Marque',
      contactName: 'Nom du contact référent',
      email: 'Email professionnel',
      phone: 'Téléphone (avec indicatif pays)',
      country: 'Pays / Siège',
      projectType: 'Type de collaboration',
      description: 'Description détaillée du projet',
      deliverables: 'Livrables attendus (ex: posts, TV, présence événementielle)',
      desiredDate: 'Période ou date souhaitée',
      budgetRange: 'Fourchette budgétaire prévisionnelle',
      website: 'Site web ou profil de marque',
      attachment: 'Brief ou document PDF (max 10 Mo)',
      consent: 'J’atteste que cette demande est formulée à titre strictement professionnel et consensuel.',
      submit: 'TRANSMETTRE LA DEMANDE OFFICIELLE',
      successTitle: 'DEMANDE ENREGISTRÉE AVEC SUCCÈS',
      successDesc: 'Votre proposition a bien été transmise à l’équipe officielle de Lola. Un retour vous sera adressé sous 48 à 72 heures ouvrées.',
      statusNew: 'Transmise au management'
    },
    // Gallery Section
    gallery: {
      kicker: 'PORTFOLIO VISUEL',
      title: 'GALERIE ÉDITORIALE',
      all: 'TOUT',
      editorial: 'ÉDITORIAL',
      beauty: 'BEAUTÉ',
      fashion: 'MODE',
      television: 'TÉLÉVISION',
      events: 'ÉVÉNEMENTS',
      backstage: 'BACKSTAGE',
      portraits: 'PORTRAITS',
      close: 'Fermer la vue (Échap)',
      prev: 'Image précédente',
      next: 'Image suivante'
    },
    // Press & Media Kit
    press: {
      kicker: 'ESPACE JOURNALISTES & PROFESSIONNELS',
      title: 'PRESS & MEDIA KIT',
      desc: 'Téléchargez les éléments graphiques officiels, biographies vérifiées, photos en haute définition et le media kit pour vos publications.',
      downloadMediaKit: 'TÉLÉCHARGER LE MEDIA KIT (PDF)',
      downloadPressPack: 'RÉCUPÉRER LE KIT PRESSE',
      officialBio: 'BIOGRAPHIE OFFICIELLE',
      pressContactTitle: 'CONTACTER LE SERVICE DE PRESSE',
      pressFormName: 'Nom & Prénom',
      pressFormMedia: 'Média / Organe de presse',
      pressFormEmail: 'Email presse professionnel',
      pressFormTopic: 'Objet de la demande d’interview / article',
      pressFormDeadline: 'Date limite / Deadline de publication',
      pressFormMessage: 'Votre message / questions prévues',
      pressSubmit: 'ENVOYER LA DEMANDE PRESSE',
      pressSuccess: 'Votre demande presse a été transmise au service communication.'
    },
    // Social presence
    social: {
      kicker: 'PRÉSENCE NUMÉRIQUE',
      title: 'CANAUX OFFICIELS',
      verified: 'COMPTE CERTIFIÉ',
      sourceNote: 'Statistiques publiques vérifiées par l’équipe de Lola.',
      instagram: 'Instagram Officiel',
      tiktok: 'TikTok Officiel',
      youtube: 'YouTube Officiel'
    },
    // Contact
    contact: {
      kicker: 'PRENDRE CONTACT',
      title: 'CONTACTEZ L’ÉQUIPE DE LOLA',
      generalTab: 'CONTACT GÉNÉRAL & PUBLIC',
      proTab: 'RELATIONS PROFESSIONNELLES & MARQUES',
      name: 'Votre nom complet',
      email: 'Votre adresse email',
      subject: 'Objet de votre message',
      message: 'Votre message',
      send: 'ENVOYER LE MESSAGE',
      success: 'Votre message a bien été envoyé à l’équipe officielle.'
    },
    // Legal & Footer
    footer: {
      rights: 'Tous droits réservés.',
      officialSite: 'Site Officiel — Khaoula Kebbache',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      cookies: 'Gestion des cookies',
      domainNotice: 'Domaine officiel exclusif : im-lolla.com',
      antiPhishing: 'Toute communication officielle n’émane que du domaine officiel im-lolla.com.'
    },
    // Cookie banner
    cookies: {
      message: 'Ce site officiel utilise des cookies techniques stricts pour garantir une navigation fluide, sécurisée et respecter votre vie privée.',
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
      gallery: 'معرض الصور',
      press: 'الصحافة والإعلام',
      mediaKit: 'الملف الإعلامي',
      contact: 'اتصل بنا',
      workWithLola: 'تعاون مع لولا',
      menu: 'القائمة',
      close: 'إغلاق',
      admin: 'لوحة التحكم'
    },
    // Hero
    hero: {
      subtitle: 'خولة كباش',
      role: 'صانعة محتوى · مقدمة برامج · خبيرة تجميل · إعلام',
      discover: 'اكتشف عالم لولا',
      workCta: 'تعاون مع لولا',
      tagline: 'لولا — ما وراء منصات التواصل',
      scroll: 'مرر لأسفل للاكتشاف'
    },
    // The Person Behind Lola
    intro: {
      kicker: 'الهوية والشخصية',
      title: 'الشخصية وراء لولا',
      p1: 'شخصية إعلامية ومقدمة برامج تلفزيونية وصانعة محتوى متميزة، تجسد لولا (خولة كباش) رؤية معاصرة للأناقة، الموضة والإعلام التلفزيوني الراقي.',
      p2: 'حاصلة على تكوين متخصص في علم التجميل، تصفيف الشعر، العناية بالبشرة، المكياج الاحترافي وصناعة العطور، تجمع بين المهارة التقنية الدقيقة والحضور التلفزيوني الجذاب.',
      p3: 'بعيداً عن الأرقام المجردة، تقدم لولا تجربة متكاملة تشمل الإنتاج التلفزيوني الرائد، المقالات التحريرية والشراكات الاستراتيجية مع كبرى العلامات التجارية.',
      statsLabel: 'إحصائيات رسمية موثقة'
    },
    // Disciplines
    disciplines: {
      kicker: 'مجالات التميز والعمل',
      title: 'أربعة محاور رئيسية',
      item1Title: 'صناعة المحتوى الرقمي',
      item1Desc: 'إخراج فني رفيع المستوى، سرد بصري ملهم ومحتوى يربط بين الجمال والأناقة لجمهور واسع عبر المنطقة والعالم.',
      item2Title: 'التقديم والظهور التلفزيوني',
      item2Desc: 'إدارة الاستوديوهات والبرامج الحوارية التلفزيونية، تغطية فعاليات الموضة والتحكم الاحترافي في البث المباشر.',
      item3Title: 'عالم التجميل والعطور',
      item3Desc: 'دراية علمية وعملية بالتركيبات التجميلية، العناية بالبشرة، تسريحات الشعر الفاخرة وعطور النيش العالمية.',
      item4Title: 'الشراكات مع العلامات التجارية',
      item4Desc: 'تمثيل العلامات المرموقة، إطلاق المنتجات الجديدة وحملات إعلانية أصيلة تتماشى مع معايير الجودة والاحترافية.'
    },
    // On Air Section
    onAir: {
      kicker: 'تلفزيون · تقديم · إعلام',
      title: 'على الشاشة',
      subtitle: 'الإنتاجات والبرامج التلفزيونية الرسمية.',
      showTitle: 'MISS FASHION DZ',
      roleLabel: 'الدور',
      roleValue: 'المقدمة الرئيسية / منشطة البرنامج',
      yearLabel: 'البث',
      yearValue: 'برنامج تلفزيوني في أوقات الذروة',
      desc: 'برنامج تلفزيوني رائد يحتفي بالموضة والأناقة والتصاميم الراقية والمواهب الشابة، تقوده لولا بحضور واثق وإطلالة مبهرة.',
      viewProject: 'تفاصيل البرنامج',
      watchBackstage: 'كواليس التصوير'
    },
    // Beauty Edit Section
    beauty: {
      kicker: 'مجلة تحريرية رقمية',
      title: 'مختارات لولا للجمال',
      subtitle: 'نصائح، تحليلات في علم التجميل، وروتينات مخصصة للعناية الفاخرة.',
      readArticle: 'قراءة المقال',
      categories: {
        all: 'الكل',
        skin: 'العناية بالبشرة',
        makeup: 'المكياج',
        hair: 'الشعر والتصفيف',
        fragrance: 'العطور الفاخرة',
        beauty: 'الجمال المتكامل',
        lifestyle: 'أسلوب الحياة'
      },
      sponsored: 'برعاية'
    },
    // Collaborate Section
    collaborate: {
      kicker: 'العلاقات المهنية والشراكات',
      title: 'التعاون مع لولا',
      desc: 'للعلامات التجارية، وكالات الإعلانات، المنتجين ومنظمي الفعاليات الدولية: يمكنكم تقديم مقترح مشروع احترافي لتتم دراسته مباشرة من طرف إدارة الأعمال الرسمية.',
      cta: 'تقديم ملف التعاون',
      modalTitle: 'طلب تعاون مهني رسمي',
      company: 'اسم الشركة أو العلامة التجارية',
      contactName: 'اسم المسؤول / جهة الاتصال',
      email: 'البريد الإلكتروني المهني',
      phone: 'رقم الهاتف (مع الرمز الدولي)',
      country: 'الدولة / المقر الرئيسي',
      projectType: 'نوع الشراكة المقترحة',
      description: 'شرح مفصل لأهداف المشروع',
      deliverables: 'المخرجات المطلوبة (تلفزيون، فعاليات، تصوير)',
      desiredDate: 'الفترة الزمنية المقترحة',
      budgetRange: 'الميزانية التقديرية',
      website: 'الموقع الإلكتروني أو الحساب الرسمي',
      attachment: 'ملف الشرح بصيغة PDF (أقصى حد 10 ميغابايت)',
      consent: 'أقر بأن هذا الطلب مهني ومرتبط بنشاط تجاري أو إعلامي موثق.',
      submit: 'إرسال الطلب الرسمي',
      successTitle: 'تم استلام طلبكم بنجاح',
      successDesc: 'تمت إحالة مقترحكم إلى الفريق الإداري الرسمي للولا. سيتم التواصل معكم خلال 48 إلى 72 ساعة عمل.',
      statusNew: 'قيد المراجعة الإدارية'
    },
    // Gallery Section
    gallery: {
      kicker: 'المعرض البصري',
      title: 'أرشيف الصور التحريرية',
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
      next: 'الصورة التالية'
    },
    // Press & Media Kit
    press: {
      kicker: 'المساحة الصحفية والإعلامية',
      title: 'الصحافة والملف الإعلامي',
      desc: 'تحميل الصور الرسمية عالية الدقة، السيرة الذاتية المعتمدة والملف الإعلامي الشامل للنشر الصحفي.',
      downloadMediaKit: 'تحميل الملف الإعلامي (PDF)',
      downloadPressPack: 'تحميل الحقيبة الصحفية',
      officialBio: 'السيرة الذاتية الرسمية',
      pressContactTitle: 'التواصل مع قسم الصحافة',
      pressFormName: 'الاسم الكامل',
      pressFormMedia: 'المؤسسة الإعلامية أو المجلة',
      pressFormEmail: 'البريد الإلكتروني الصحفي',
      pressFormTopic: 'موضوع المقال أو المقابلة',
      pressFormDeadline: 'الموعد النهائي للنشر',
      pressFormMessage: 'تفاصيل الاستفسار أو الأسئلة',
      pressSubmit: 'إرسال الطلب الصحفي',
      pressSuccess: 'تم إرسال طلبكم بنجاح إلى الفريق الإعلامي.'
    },
    // Social presence
    social: {
      kicker: 'التواجد الرقمي',
      title: 'المنصات الرسمية',
      verified: 'حساب رسمي موثق',
      sourceNote: 'أرقام وإحصائيات موثقة ومعتمدة من فريق لولا.',
      instagram: 'إنستغرام الرسمي',
      tiktok: 'تيك توك الرسمي',
      youtube: 'يوتيوب الرسمي'
    },
    // Contact
    contact: {
      kicker: 'تواصل معنا',
      title: 'فريق عمل لولا في خدمتكم',
      generalTab: 'استفسارات الجمهور العام',
      proTab: 'الشراكات المهنية والإعلامية',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      success: 'تم إرسال رسالتكم بنجاح.'
    },
    // Legal & Footer
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      officialSite: 'الموقع الرسمي — خولة كباش',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      cookies: 'سياسة ملفات تعريف الارتباط',
      domainNotice: 'النطاق الرسمي الحصري: im-lolla.com',
      antiPhishing: 'تنبيه: جميع المراسلات الرسمية تصدر حصراً من النطاق im-lolla.com.'
    },
    // Cookie banner
    cookies: {
      message: 'يستخدم هذا الموقع الرسمي ملفات تعريف ارتباط فنية فقط لضمان تصفح آمن وسريع والحفاظ على خصوصيتكم.',
      accept: 'موافق',
      decline: 'رفض',
      policy: 'تفاصيل أكثر'
    }
  },

  en: {
    // Navigation
    nav: {
      about: 'ABOUT',
      onAir: 'ON AIR',
      beauty: 'BEAUTY EDIT',
      collaborate: 'COLLABORATE',
      gallery: 'GALLERY',
      press: 'PRESS',
      mediaKit: 'MEDIA KIT',
      contact: 'CONTACT',
      workWithLola: 'WORK WITH LOLA',
      menu: 'MENU',
      close: 'CLOSE',
      admin: 'ADMIN PORTAL'
    },
    // Hero
    hero: {
      subtitle: 'KHAOULA KEBBACHE',
      role: 'CREATOR · PRESENTER · BEAUTY · MEDIA',
      discover: 'DISCOVER LOLA',
      workCta: 'WORK WITH LOLA',
      tagline: 'LOLA — BEYOND SOCIAL',
      scroll: 'SCROLL TO EXPLORE'
    },
    // The Person Behind Lola
    intro: {
      kicker: 'THE PERSON & THE VISION',
      title: 'THE PERSON BEHIND LOLA',
      p1: 'Public personality, television host, and content creator, Lola (Khaoula Kebbache) embodies a contemporary standard of editorial elegance, beauty mastery, and broadcast media.',
      p2: 'Holding professional qualifications in cosmetology, aesthetics, hairstyling, makeup artistry, and perfumery, she pairs scientific precision with a natural, magnetic screen presence.',
      p3: 'Beyond digital platforms, her universe unfolds across prime-time television broadcasts, curated editorial writings, and strategic luxury brand partnerships.',
      statsLabel: 'OFFICIALLY VERIFIED COMMUNITY'
    },
    // Disciplines
    disciplines: {
      kicker: 'CORE DISCIPLINES',
      title: 'FOUR PILLARS OF EXCELLENCE',
      item1Title: 'CONTENT CREATION',
      item1Desc: 'High-end artistic direction, refined visual storytelling, and engaging editorial formats reaching francophone, arabic, and international audiences.',
      item2Title: 'TELEVISION & PRESENTATION',
      item2Desc: 'Live studio hosting, broadcast interviews, and leading prime-time fashion and entertainment productions with grace and charisma.',
      item3Title: 'BEAUTY & COSMETOLOGY EXPERTISE',
      item3Desc: 'In-depth formulation knowledge, dermatology-aligned skincare rituals, haute perfumery insights, and professional artistry.',
      item4Title: 'BRAND COLLABORATIONS',
      item4Desc: 'Global ambassadorships, prestigious product launches, and tailored campaigns crafted with authenticity and commercial rigor.'
    },
    // On Air Section
    onAir: {
      kicker: 'TELEVISION · BROADCAST · MEDIA',
      title: 'ON AIR',
      subtitle: 'Official broadcast productions and screen achievements.',
      showTitle: 'MISS FASHION DZ',
      roleLabel: 'ROLE',
      roleValue: 'Lead Presenter / Prime-Time TV Host',
      yearLabel: 'BROADCAST',
      yearValue: 'Prime-Time Television Series',
      desc: 'Flagship television production celebrating high fashion, emerging couturiers, and contemporary elegance, hosted and energized by Lola.',
      viewProject: 'VIEW SHOW PROFILE',
      watchBackstage: 'EXPLORE BACKSTAGE'
    },
    // Beauty Edit Section
    beauty: {
      kicker: 'DIGITAL MINI-MAGAZINE',
      title: 'THE LOLA BEAUTY EDIT',
      subtitle: 'Curated advice, cosmetic analyses, product edits, and beauty rituals.',
      readArticle: 'READ ARTICLE',
      categories: {
        all: 'ALL',
        skin: 'SKINCARE',
        makeup: 'MAKEUP',
        hair: 'HAIR',
        fragrance: 'FRAGRANCE',
        beauty: 'TOTAL BEAUTY',
        lifestyle: 'LIFESTYLE'
      },
      sponsored: 'IN PARTNERSHIP WITH'
    },
    // Collaborate Section
    collaborate: {
      kicker: 'BRAND & CORPORATE RELATIONS',
      title: 'COLLABORATE WITH LOLA',
      desc: 'Brands, agencies, television broadcasters, and event organizers: submit your project inquiry for a bespoke proposal reviewed by Lola’s official management.',
      cta: 'SUBMIT PROJECT BRIEF',
      modalTitle: 'PROFESSIONAL COLLABORATION PROPOSAL',
      company: 'Company / Brand',
      contactName: 'Contact Person Name',
      email: 'Corporate Email',
      phone: 'Phone Number (with Country Code)',
      country: 'Country / Headquarters',
      projectType: 'Collaboration Type',
      description: 'Project Scope & Narrative',
      deliverables: 'Expected Deliverables (e.g. TV, Social, Live Event)',
      desiredDate: 'Target Date / Launch Period',
      budgetRange: 'Estimated Budget Range',
      website: 'Brand Website or Handle',
      attachment: 'Brief or Pitch PDF (max 10 MB)',
      consent: 'I confirm this inquiry is submitted for legitimate professional evaluation.',
      submit: 'SUBMIT OFFICIAL PROPOSAL',
      successTitle: 'PROPOSAL SUCCESSFULLY RECEIVED',
      successDesc: 'Your proposal has been logged and routed to Lola’s executive team. Expect a response within 48 to 72 business hours.',
      statusNew: 'Submitted to Management'
    },
    // Gallery Section
    gallery: {
      kicker: 'VISUAL ARCHIVE',
      title: 'EDITORIAL GALLERY',
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
      next: 'Next photo'
    },
    // Press & Media Kit
    press: {
      kicker: 'JOURNALISTS & MEDIA SUITE',
      title: 'PRESS & MEDIA KIT',
      desc: 'Access verified biographies, high-resolution approved portraits, media kit statistics, and official brand assets.',
      downloadMediaKit: 'DOWNLOAD MEDIA KIT (PDF)',
      downloadPressPack: 'DOWNLOAD PRESS ASSETS',
      officialBio: 'OFFICIAL BIOGRAPHY',
      pressContactTitle: 'PRESS ENQUIRIES',
      pressFormName: 'Full Name',
      pressFormMedia: 'Media / Publication Outlet',
      pressFormEmail: 'Professional Press Email',
      pressFormTopic: 'Interview or Feature Topic',
      pressFormDeadline: 'Publication Deadline',
      pressFormMessage: 'Your Message / Proposed Questions',
      pressSubmit: 'SEND PRESS REQUEST',
      pressSuccess: 'Your press inquiry has been received by our media office.'
    },
    // Social presence
    social: {
      kicker: 'DIGITAL FOOTPRINT',
      title: 'OFFICIAL CHANNELS',
      verified: 'VERIFIED ACCOUNT',
      sourceNote: 'Audience statistics validated directly by Lola’s team.',
      instagram: 'Official Instagram',
      tiktok: 'Official TikTok',
      youtube: 'Official YouTube'
    },
    // Contact
    contact: {
      kicker: 'GET IN TOUCH',
      title: 'CONNECT WITH LOLA’S TEAM',
      generalTab: 'GENERAL ENQUIRIES',
      proTab: 'PROFESSIONAL & BRAND INQUIRIES',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'SUBMIT MESSAGE',
      success: 'Your message has been safely sent to the official team.'
    },
    // Legal & Footer
    footer: {
      rights: 'All rights reserved.',
      officialSite: 'Official Website — Khaoula Kebbache',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Preferences',
      domainNotice: 'Exclusive official domain: im-lolla.com',
      antiPhishing: 'All official correspondence originates solely from @im-lolla.com.'
    },
    // Cookie banner
    cookies: {
      message: 'This official website uses essential cookies strictly for security, performance, and respectful privacy management.',
      accept: 'ACCEPT',
      decline: 'DECLINE',
      policy: 'Learn More'
    }
  }
};
