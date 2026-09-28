import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Lock,
  LogOut,
  X,
  User,
  Tv,
  Sparkles,
  BarChart3,
  Settings,
  History,
  Mail,
  Check,
  Plus,
  Trash2,
  Edit,
  Eye,
  ShieldCheck,
  Calendar,
  Image as ImageIcon,
  Download,
  Upload,
  RefreshCw,
  ExternalLink,
  MessageSquare,
  Briefcase,
  AlertTriangle,
  Award,
  Globe,
  Sliders,
  Send,
  FileText
} from 'lucide-react';
import {
  CollaborationStatus,
  TVProject,
  BeautyArticle,
  GalleryItem,
  StatItem,
  ProfileData,
  SocialAccount
} from '../../types';
import { editorialAssets } from '../../data/assets';

type AdminTab =
  | 'overview'
  | 'profile'
  | 'tv'
  | 'beauty'
  | 'gallery'
  | 'stats'
  | 'collabs'
  | 'press'
  | 'settings'
  | 'backup'
  | 'logs';

export const AdminDashboardModal: React.FC = () => {
  const {
    setCurrentView,
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    profile,
    updateProfile,
    tvProjects,
    addTVProject,
    updateTVProject,
    deleteTVProject,
    beautyArticles,
    addBeautyArticle,
    updateBeautyArticle,
    deleteBeautyArticle,
    gallery,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    stats,
    addStat,
    updateStat,
    deleteStat,
    collaborations,
    updateCollaborationStatus,
    deleteCollaboration,
    pressRequests,
    updatePressStatus,
    deletePressRequest,
    contactRequests,
    updateContactStatus,
    deleteContactRequest,
    socialAccounts,
    updateSocialAccounts,
    siteSettings,
    updateSiteSettings,
    auditLogs,
    clearAuditLogs,
    resetToDefaults,
    exportCMSData,
    importCMSData
  } = useApp();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper Toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // -------------------------------------------------------------
  // 1. PROFILE STATE
  // -------------------------------------------------------------
  const [profileLang, setProfileLang] = useState<'fr' | 'ar' | 'en'>('fr');
  const [profileForm, setProfileForm] = useState<ProfileData>(profile);
  const [newEducationItem, setNewEducationItem] = useState({ fr: '', ar: '', en: '' });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    showToast('Profil et qualifications enregistrés avec succès.');
  };

  const handleAddEducation = () => {
    if (!newEducationItem.fr) return;
    const updated = [...profileForm.education, { ...newEducationItem }];
    const newProfile = { ...profileForm, education: updated };
    setProfileForm(newProfile);
    updateProfile(newProfile);
    setNewEducationItem({ fr: '', ar: '', en: '' });
    showToast('Nouvelle certification ajoutée.');
  };

  const handleRemoveEducation = (index: number) => {
    const updated = profileForm.education.filter((_, idx) => idx !== index);
    const newProfile = { ...profileForm, education: updated };
    setProfileForm(newProfile);
    updateProfile(newProfile);
    showToast('Certification retirée.');
  };

  // -------------------------------------------------------------
  // 2. TV PROJECTS STATE
  // -------------------------------------------------------------
  const [editingTvProject, setEditingTvProject] = useState<TVProject | null>(null);
  const [isCreatingTv, setIsCreatingTv] = useState(false);
  const [tvLang, setTvLang] = useState<'fr' | 'ar' | 'en'>('fr');

  const defaultNewTvProject: Omit<TVProject, 'id'> = {
    slug: 'nouveau-projet-tv',
    title: { fr: 'NOUVELLE ÉMISSION TV', ar: 'برنامج تلفزيوني جديد', en: 'NEW TELEVISION SHOW' },
    role: { fr: 'Animatrice Principale', ar: 'المقدمة الرئيسية', en: 'Lead Presenter' },
    year: '2026',
    description: {
      fr: 'Description de la production télévisée...',
      ar: 'تفاصيل البرنامج التلفزيوني...',
      en: 'Description of the television production...'
    },
    details: {
      fr: 'Format : Prime Time Télévisuel hebdomadaire.',
      ar: 'نوعية البرنامج: بث أسبوعي في وقت الذروة.',
      en: 'Format: Weekly Prime Time Television Series.'
    },
    coverImage: editorialAssets.tvStudio,
    backdropImage: editorialAssets.tvStudio,
    gallery: [editorialAssets.tvStudio, editorialAssets.fashionColonnade],
    featured: true,
    published: true,
    sort_order: tvProjects.length + 1,
    externalUrl: 'https://im-lolla.com'
  };

  const [tvForm, setTvForm] = useState<Omit<TVProject, 'id'>>(defaultNewTvProject);

  const handleStartEditTv = (project: TVProject) => {
    setEditingTvProject(project);
    setIsCreatingTv(false);
  };

  const handleSaveTvProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTvProject) {
      updateTVProject(editingTvProject);
      setEditingTvProject(null);
      showToast('Projet télévisuel mis à jour.');
    } else if (isCreatingTv) {
      addTVProject(tvForm);
      setIsCreatingTv(false);
      setTvForm(defaultNewTvProject);
      showToast('Nouveau projet télévisuel créé.');
    }
  };

  // -------------------------------------------------------------
  // 3. BEAUTY ARTICLES STATE
  // -------------------------------------------------------------
  const [editingArticle, setEditingArticle] = useState<BeautyArticle | null>(null);
  const [isCreatingArticle, setIsCreatingArticle] = useState(false);
  const [articleLang, setArticleLang] = useState<'fr' | 'ar' | 'en'>('fr');

  const defaultNewArticle: Omit<BeautyArticle, 'id'> = {
    slug: 'nouvel-article-beaute',
    category: 'skin',
    title: {
      fr: 'Nouvelle publication éditoriale',
      ar: 'مقال جمالي جديد',
      en: 'New Beauty Editorial'
    },
    excerpt: {
      fr: 'Extrait introductif décrivant le rituel beauté...',
      ar: 'ملخص المقال الجمالي...',
      en: 'Introduction summary of the beauty ritual...'
    },
    content: {
      fr: 'Contenu détaillé de l’article rédigé par Lola...',
      ar: 'المحتوى الكامل للمقال بقلم لولا...',
      en: 'Full content of the article written by Lola...'
    },
    coverImage: editorialAssets.beautyCosmetics,
    readTime: {
      fr: '4 min de lecture',
      ar: '٤ دقائق قراءة',
      en: '4 min read'
    },
    publishedAt: new Date().toISOString().split('T')[0],
    isSponsored: false,
    sponsorName: '',
    status: 'published',
    tags: ['Cosmétologie', 'Édition Officielle']
  };

  const [articleForm, setArticleForm] = useState<Omit<BeautyArticle, 'id'>>(defaultNewArticle);

  const handleStartEditArticle = (art: BeautyArticle) => {
    setEditingArticle(art);
    setIsCreatingArticle(false);
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      updateBeautyArticle(editingArticle);
      setEditingArticle(null);
      showToast('Article beauté mis à jour.');
    } else if (isCreatingArticle) {
      addBeautyArticle({
        ...articleForm,
        slug: articleForm.title.fr.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'article-' + Date.now()
      });
      setIsCreatingArticle(false);
      setArticleForm(defaultNewArticle);
      showToast('Nouvel article publié avec succès.');
    }
  };

  // -------------------------------------------------------------
  // 4. GALLERY STATE
  // -------------------------------------------------------------
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [isCreatingGallery, setIsCreatingGallery] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<string>('all');

  const defaultNewGalleryItem: Omit<GalleryItem, 'id'> = {
    title: {
      fr: 'Nouveau Cliché Éditorial',
      ar: 'صورة تحريرية جديدة',
      en: 'New Editorial Photograph'
    },
    category: 'editorial',
    imageUrl: editorialAssets.hero,
    altText: {
      fr: 'Photographie officielle de Lola',
      ar: 'صورة رسمية للولا',
      en: 'Official photograph of Lola'
    },
    credit: 'Direction Artistique Officielle',
    copyright: '© Lola / Khaoula Kebbache',
    date: '2026',
    featured: true,
    sort_order: gallery.length + 1
  };

  const [galleryForm, setGalleryForm] = useState<Omit<GalleryItem, 'id'>>(defaultNewGalleryItem);

  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingGalleryItem) {
      updateGalleryItem(editingGalleryItem);
      setEditingGalleryItem(null);
      showToast('Photographie mise à jour.');
    } else if (isCreatingGallery) {
      addGalleryItem(galleryForm);
      setIsCreatingGallery(false);
      setGalleryForm(defaultNewGalleryItem);
      showToast('Nouveau cliché ajouté à la galerie.');
    }
  };

  // -------------------------------------------------------------
  // 5. STATS STATE (AGENTS.MD COMPLIANCE)
  // -------------------------------------------------------------
  const [editingStat, setEditingStat] = useState<StatItem | null>(null);
  const [isCreatingStat, setIsCreatingStat] = useState(false);
  const [statForm, setStatForm] = useState<Omit<StatItem, 'id'>>({
    platform: 'Instagram',
    metric: 'Abonnés Certifiés',
    numeric_value: 600000,
    display_value: '+600K',
    source: 'verified_by_owner',
    verified_at: new Date().toISOString().split('T')[0],
    visible_publicly: true
  });

  const handleSaveStat = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStat) {
      updateStat(editingStat);
      setEditingStat(null);
      showToast('Statistique mise à jour avec horodatage.');
    } else if (isCreatingStat) {
      addStat(statForm);
      setIsCreatingStat(false);
      showToast('Nouvelle métrique certifiée ajoutée.');
    }
  };

  // -------------------------------------------------------------
  // 6. COLLABORATIONS CRM
  // -------------------------------------------------------------
  const [collabStatusFilter, setCollabStatusFilter] = useState<string>('all');
  const [selectedCollabDetail, setSelectedCollabDetail] = useState<any | null>(null);

  const statuses: CollaborationStatus[] = [
    'NEW',
    'REVIEWING',
    'CONTACTED',
    'PROPOSAL',
    'ACCEPTED',
    'DECLINED',
    'COMPLETED',
    'ARCHIVED'
  ];

  const filteredCollabs = collaborations.filter((c) =>
    collabStatusFilter === 'all' ? true : c.status === collabStatusFilter
  );

  // -------------------------------------------------------------
  // 7. PRESS & MESSAGES
  // -------------------------------------------------------------
  const [inboxSubTab, setInboxSubTab] = useState<'press' | 'contact'>('press');

  // -------------------------------------------------------------
  // 8. SOCIAL & SETTINGS
  // -------------------------------------------------------------
  const [settingsForm, setSettingsForm] = useState(siteSettings);
  const [socialsForm, setSocialsForm] = useState(socialAccounts);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
    updateSocialAccounts(socialsForm);
    showToast('Paramètres et réseaux officiels enregistrés.');
  };

  // -------------------------------------------------------------
  // 9. BACKUP / EXPORT / IMPORT
  // -------------------------------------------------------------
  const handleExportDownload = () => {
    const jsonStr = exportCMSData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Lola_CMS_Backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Sauvegarde JSON générée et téléchargée.');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const res = importCMSData(content);
        if (res.success) {
          showToast('Données CMS restaurées avec succès !');
        } else {
          showToast(`Erreur d'import : ${res.error}`);
        }
      };
      reader.readAsText(file);
    }
  };

  // Login handler
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(loginPassword);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setLoginPassword('');
      showToast('Bienvenue sur la console d’administration de Lola.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080706]/98 backdrop-blur-2xl flex items-start justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      {/* Toast notification overlay */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#1A1816] border border-[#B79A7E] text-[#F7F3EE] px-4 py-3 shadow-2xl flex items-center gap-3 text-xs font-mono animate-fadeIn">
          <Check className="w-4 h-4 text-[#B79A7E]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-7xl bg-[#110F0D] border border-[#27272A] p-4 sm:p-6 lg:p-8 text-[#F7F3EE] shadow-2xl my-2 sm:my-4 min-h-[92vh] flex flex-col justify-between">
        
        {/* TOP BAR: Executive Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 sm:pb-6 border-b border-[#27272A] mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 border border-[#B79A7E]/50 bg-[#1A1816] shrink-0">
              <Lock className="w-5 h-5 text-[#B79A7E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-xl sm:text-2xl text-[#F7F3EE] font-medium tracking-tight">
                  LOLA CMS EXECUTIVE CONSOLE
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 border border-[#B79A7E]/40 text-[9px] font-mono text-[#B79A7E] uppercase">
                  OFFICIAL v2.6
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C7B8A8]/80 uppercase">
                KHAOULA KEBBACHE · GESTION ÉDITORIALE, MÉDIAS & PARTENARIATS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {isAdminAuthenticated && (
              <>
                <button
                  onClick={() => setCurrentView('home')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#27272A] hover:border-[#B79A7E] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] transition-colors min-h-[38px]"
                  title="Voir le site public"
                >
                  <Eye className="w-3.5 h-3.5 text-[#B79A7E]" />
                  <span className="hidden sm:inline">VOIR LE SITE</span>
                </button>

                <button
                  onClick={adminLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-red-300 hover:border-red-900 transition-colors min-h-[38px]"
                  title="Se déconnecter"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">DÉCONNEXION</span>
                </button>
              </>
            )}

            <button
              onClick={() => setCurrentView('home')}
              className="p-2 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ml-auto md:ml-0"
              aria-label="Fermer l'administration"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AUTHENTICATION GATE */}
        {!isAdminAuthenticated ? (
          <div className="my-auto max-w-md mx-auto w-full p-6 sm:p-10 border border-[#27272A] bg-[#141210] text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full border border-[#B79A7E]/40 flex items-center justify-center bg-[#1A1816]">
              <Lock className="w-8 h-8 text-[#B79A7E]" />
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#B79A7E] uppercase tracking-widest block mb-1">
                ESPACE RÉSERVÉ À LA DIRECTION & MANAGEMENT
              </span>
              <h2 className="font-serif text-3xl text-[#F7F3EE]">Accès Restreint</h2>
              <p className="text-xs text-[#C7B8A8] mt-2 font-light leading-relaxed">
                Connectez-vous pour administrer les contenus officiels de Lola : biographie, émissions télévisées, carnets de cosmétologie, galerie et propositions de marques.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2">
              <div>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Clé d’accès sécurisée"
                  className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3.5 text-base sm:text-xs text-[#F7F3EE] text-center tracking-widest min-h-[46px]"
                />
              </div>

              {loginError && (
                <div className="p-2.5 bg-red-950/40 border border-red-800 text-xs text-red-300 font-mono">
                  Clé de sécurité incorrecte.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-widest uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[48px]"
              >
                ENTRER DANS LE CMS
              </button>
            </form>

            <div className="pt-2 border-t border-[#27272A]/70 text-[10px] text-[#C7B8A8]/70 font-mono">
              Clé d’accès de démonstration : <strong className="text-[#B79A7E]">lola2026</strong>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED CMS WORKSPACE */
          <div className="flex-1 flex flex-col space-y-6">
            
            {/* TABS NAVIGATION BAR: Scrollable on mobile & tablet */}
            <div className="flex overflow-x-auto no-scrollbar items-center gap-1 sm:gap-2 border-b border-[#27272A] pb-3 text-xs whitespace-nowrap">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'overview'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Vue d'ensemble</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'profile'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Profil & Bio</span>
              </button>

              <button
                onClick={() => setActiveTab('tv')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'tv'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Projets TV ({tvProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('beauty')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'beauty'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Carnet Beauté ({beautyArticles.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'gallery'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Galerie ({gallery.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('stats')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'stats'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Auditoire & Stats ({stats.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('collabs')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'collabs'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Partenariats ({collaborations.length})</span>
                {collaborations.filter((c) => c.status === 'NEW').length > 0 && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('press')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'press'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Presse & Messages ({pressRequests.length + contactRequests.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'settings'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Réseaux & Paramètres</span>
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'backup'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Sauvegarde JSON</span>
              </button>

              <button
                onClick={() => setActiveTab('logs')}
                className={`flex items-center gap-2 px-3.5 py-2 font-mono uppercase transition-colors shrink-0 ${
                  activeTab === 'logs'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                <span>Journal d'Audit ({auditLogs.length})</span>
              </button>
            </div>

            {/* TAB CONTENTS CONTAINER */}
            <div className="flex-1 overflow-y-auto max-h-[64vh] pr-1 sm:pr-2">
              
              {/* ----------------------------------------------------------------- */}
              {/* 1. OVERVIEW TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* KPI Metric cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">PARTENARIATS</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{collaborations.length}</p>
                      <p className="text-[10px] text-emerald-400 mt-1">
                        {collaborations.filter((c) => c.status === 'NEW').length} nouveaux briefs
                      </p>
                    </div>

                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">DEMANDES PRESSE</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{pressRequests.length}</p>
                      <p className="text-[10px] text-[#C7B8A8]/70 mt-1">
                        {pressRequests.filter((p) => p.status === 'NEW').length} en attente
                      </p>
                    </div>

                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">PROJETS TV</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{tvProjects.length}</p>
                      <p className="text-[10px] text-[#C7B8A8]/70 mt-1">Prime Time actif</p>
                    </div>

                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">ARTICLES BEAUTÉ</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{beautyArticles.length}</p>
                      <p className="text-[10px] text-[#C7B8A8]/70 mt-1">Publications en ligne</p>
                    </div>

                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">CLICHÉS GALERIE</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{gallery.length}</p>
                      <p className="text-[10px] text-[#C7B8A8]/70 mt-1">Photographies HD</p>
                    </div>

                    <div className="p-4 border border-[#27272A] bg-[#141210]">
                      <span className="text-[10px] font-mono text-[#B79A7E] uppercase block mb-1">AUDIENCE VÉRIFIÉE</span>
                      <p className="text-2xl font-serif font-bold text-[#F7F3EE]">{stats[0]?.display_value || '600K+'}</p>
                      <p className="text-[10px] text-emerald-400 mt-1">Source certifiée</p>
                    </div>
                  </div>

                  {/* Quick Shortcuts & Status Banner */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 p-6 border border-[#27272A] bg-[#141210] space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#27272A]/70">
                        <h3 className="font-serif text-xl text-[#F7F3EE]">Accès Rapides d'Édition</h3>
                        <span className="text-xs font-mono text-[#B79A7E]">Mise à jour en direct sans redéploiement</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <button
                          onClick={() => { setActiveTab('beauty'); setIsCreatingArticle(true); }}
                          className="p-4 border border-[#27272A] hover:border-[#B79A7E] bg-[#0E0C0B] text-left flex items-start gap-3 transition-colors"
                        >
                          <Sparkles className="w-5 h-5 text-[#B79A7E] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-[#F7F3EE]">Rédiger un nouvel article beauté</p>
                            <p className="text-[11px] text-[#C7B8A8]/70 mt-0.5">Soins, parfumerie ou maquillage studio</p>
                          </div>
                        </button>

                        <button
                          onClick={() => { setActiveTab('gallery'); setIsCreatingGallery(true); }}
                          className="p-4 border border-[#27272A] hover:border-[#B79A7E] bg-[#0E0C0B] text-left flex items-start gap-3 transition-colors"
                        >
                          <ImageIcon className="w-5 h-5 text-[#B79A7E] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-[#F7F3EE]">Ajouter une photo à la galerie</p>
                            <p className="text-[11px] text-[#C7B8A8]/70 mt-0.5">Séries haute couture ou plateau TV</p>
                          </div>
                        </button>

                        <button
                          onClick={() => { setActiveTab('tv'); setIsCreatingTv(true); }}
                          className="p-4 border border-[#27272A] hover:border-[#B79A7E] bg-[#0E0C0B] text-left flex items-start gap-3 transition-colors"
                        >
                          <Tv className="w-5 h-5 text-[#B79A7E] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-[#F7F3EE]">Gérer les projets télévisés</p>
                            <p className="text-[11px] text-[#C7B8A8]/70 mt-0.5">Miss Fashion DZ et nouveaux formats</p>
                          </div>
                        </button>

                        <button
                          onClick={() => setActiveTab('collabs')}
                          className="p-4 border border-[#27272A] hover:border-[#B79A7E] bg-[#0E0C0B] text-left flex items-start gap-3 transition-colors"
                        >
                          <Briefcase className="w-5 h-5 text-[#B79A7E] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-[#F7F3EE]">Traiter les propositions de marques</p>
                            <p className="text-[11px] text-[#C7B8A8]/70 mt-0.5">Briefs, budgets et livrables demandés</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-4 p-6 border border-[#27272A] bg-[#141210] space-y-4">
                      <h3 className="font-serif text-xl text-[#F7F3EE] pb-3 border-b border-[#27272A]/70">
                        État du Domaine
                      </h3>

                      <div className="space-y-3 text-xs font-mono">
                        <div className="flex items-center justify-between text-[#C7B8A8]">
                          <span>Domaine officiel :</span>
                          <span className="text-[#F7F3EE] font-bold">im-lolla.com</span>
                        </div>
                        <div className="flex items-center justify-between text-[#C7B8A8]">
                          <span>Mode Maintenance :</span>
                          <span className={siteSettings.maintenanceMode ? 'text-amber-400' : 'text-emerald-400'}>
                            {siteSettings.maintenanceMode ? 'ACTIF (Site masqué)' : 'DÉSACTIVÉ (En ligne)'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[#C7B8A8]">
                          <span>Synchronisation :</span>
                          <span className="text-emerald-400">Temps réel (Persistent)</span>
                        </div>
                        <div className="flex items-center justify-between text-[#C7B8A8]">
                          <span>Dernier audit :</span>
                          <span className="text-[#F7F3EE] text-[10px]">
                            {auditLogs[0]?.timestamp?.replace('T', ' ').substring(0, 19) || 'Récemment'}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={handleExportDownload}
                          className="w-full py-2.5 border border-[#B79A7E] text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Exporter Sauvegarde Complète</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 2. PROFILE & BIO TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  {/* Language Selector for Profile Editing */}
                  <div className="flex items-center justify-between p-3 border border-[#27272A] bg-[#141210]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] uppercase">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Langue d’édition des textes :</span>
                    </div>
                    <div className="flex gap-1.5">
                      {(['fr', 'ar', 'en'] as const).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => setProfileLang(l)}
                          className={`px-3 py-1 text-xs font-mono uppercase transition-colors ${
                            profileLang === l
                              ? 'bg-[#B79A7E] text-black font-bold'
                              : 'border border-[#27272A] text-[#C7B8A8] hover:text-white'
                          }`}
                        >
                          {l === 'ar' ? 'العربية' : l.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSaveProfile} className="space-y-5 text-xs">
                    {/* Names Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">Nom Public *</label>
                        <input
                          type="text"
                          required
                          value={profileForm.public_name}
                          onChange={(e) => setProfileForm({ ...profileForm, public_name: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">Nom Professionnel *</label>
                        <input
                          type="text"
                          required
                          value={profileForm.professional_name}
                          onChange={(e) => setProfileForm({ ...profileForm, professional_name: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                        />
                      </div>
                    </div>

                    {/* Tagline for selected language */}
                    <div>
                      <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">
                        Tagline / Métiers Principaux ({profileLang.toUpperCase()})
                      </label>
                      <input
                        type="text"
                        value={profileForm.tagline[profileLang]}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            tagline: { ...profileForm.tagline, [profileLang]: e.target.value }
                          })
                        }
                        dir={profileLang === 'ar' ? 'rtl' : 'ltr'}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                      />
                    </div>

                    {/* Short Bio */}
                    <div>
                      <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">
                        Bio Courte ({profileLang.toUpperCase()})
                      </label>
                      <textarea
                        rows={3}
                        value={profileForm.short_bio[profileLang]}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            short_bio: { ...profileForm.short_bio, [profileLang]: e.target.value }
                          })
                        }
                        dir={profileLang === 'ar' ? 'rtl' : 'ltr'}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                      />
                    </div>

                    {/* Long Bio */}
                    <div>
                      <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">
                        Biographie Éditoriale Complète ({profileLang.toUpperCase()})
                      </label>
                      <textarea
                        rows={6}
                        value={profileForm.long_bio[profileLang]}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            long_bio: { ...profileForm.long_bio, [profileLang]: e.target.value }
                          })
                        }
                        dir={profileLang === 'ar' ? 'rtl' : 'ltr'}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block font-mono text-[#B79A7E] uppercase mb-1.5">
                        Localisation / Rayonnement ({profileLang.toUpperCase()})
                      </label>
                      <input
                        type="text"
                        value={profileForm.location[profileLang]}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            location: { ...profileForm.location, [profileLang]: e.target.value }
                          })
                        }
                        dir={profileLang === 'ar' ? 'rtl' : 'ltr'}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE] focus:border-[#B79A7E] outline-none"
                      />
                    </div>

                    {/* Save Button */}
                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[44px]"
                      >
                        ENREGISTRER LE PROFIL & BIO
                      </button>
                    </div>
                  </form>

                  {/* Formations & Qualifications Management */}
                  <div className="pt-8 border-t border-[#27272A] space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-xl text-[#F7F3EE]">Diplômes & Qualifications Certifiées</h3>
                        <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                          Cosmétologie, Coiffure haute définition, Maquillage studio et Parfumerie
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {profileForm.education.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 border border-[#27272A] bg-[#141210] flex items-center justify-between text-xs"
                        >
                          <div className="space-y-1">
                            <p className="text-[#F7F3EE] font-medium">FR : {item.fr}</p>
                            <p className="text-[#C7B8A8] text-[11px]">AR : {item.ar}</p>
                            <p className="text-[#C7B8A8] text-[11px]">EN : {item.en}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveEducation(idx)}
                            className="p-2 text-red-400 hover:text-red-300 border border-[#27272A] hover:border-red-600 transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add new qualification block */}
                    <div className="p-4 border border-[#27272A] bg-[#141210] space-y-3 text-xs">
                      <p className="font-mono text-[#B79A7E] uppercase text-[11px]">+ Ajouter une qualification certifiée</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Intitulé en Français (ex: Diplôme en Cosmétologie...)"
                          value={newEducationItem.fr}
                          onChange={(e) => setNewEducationItem({ ...newEducationItem, fr: e.target.value })}
                          className="bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Intitulé en Arabe (بالعربية)"
                          dir="rtl"
                          value={newEducationItem.ar}
                          onChange={(e) => setNewEducationItem({ ...newEducationItem, ar: e.target.value })}
                          className="bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Intitulé en Anglais"
                          value={newEducationItem.en}
                          onChange={(e) => setNewEducationItem({ ...newEducationItem, en: e.target.value })}
                          className="bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleAddEducation}
                        className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors"
                      >
                        Ajouter la certification
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 3. TV PROJECTS TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'tv' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">Projets Télévisuels & Plateaux TV</h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Animation, émissions Prime Time et formats audiovisuels officiels
                      </p>
                    </div>

                    {!isCreatingTv && !editingTvProject && (
                      <button
                        onClick={() => setIsCreatingTv(true)}
                        className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Ajouter une émission</span>
                      </button>
                    )}
                  </div>

                  {/* FORM (CREATE OR EDIT) */}
                  {(isCreatingTv || editingTvProject) && (
                    <form onSubmit={handleSaveTvProject} className="p-6 border border-[#B79A7E] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                        <h4 className="font-serif text-lg text-[#F7F3EE]">
                          {editingTvProject ? `Modifier : ${editingTvProject.title.fr}` : 'Nouvelle Production Télévisée'}
                        </h4>

                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {(['fr', 'ar', 'en'] as const).map((l) => (
                              <button
                                key={l}
                                type="button"
                                onClick={() => setTvLang(l)}
                                className={`px-2.5 py-1 text-xs font-mono uppercase ${
                                  tvLang === l ? 'bg-[#B79A7E] text-black font-bold' : 'border border-[#27272A]'
                                }`}
                              >
                                {l.toUpperCase()}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => { setEditingTvProject(null); setIsCreatingTv(false); }}
                            className="p-1 text-[#C7B8A8] hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">
                            Titre de l'émission ({tvLang.toUpperCase()}) *
                          </label>
                          <input
                            type="text"
                            required
                            value={editingTvProject ? editingTvProject.title[tvLang] : tvForm.title[tvLang]}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingTvProject) {
                                setEditingTvProject({
                                  ...editingTvProject,
                                  title: { ...editingTvProject.title, [tvLang]: val }
                                });
                              } else {
                                setTvForm({ ...tvForm, title: { ...tvForm.title, [tvLang]: val } });
                              }
                            }}
                            dir={tvLang === 'ar' ? 'rtl' : 'ltr'}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Année / Période de diffusion</label>
                          <input
                            type="text"
                            required
                            value={editingTvProject ? editingTvProject.year : tvForm.year}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingTvProject) setEditingTvProject({ ...editingTvProject, year: val });
                              else setTvForm({ ...tvForm, year: val });
                            }}
                            placeholder="ex: 2025 / 2026"
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Rôle de Lola ({tvLang.toUpperCase()}) *
                        </label>
                        <input
                          type="text"
                          required
                          value={editingTvProject ? editingTvProject.role[tvLang] : tvForm.role[tvLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingTvProject) {
                              setEditingTvProject({
                                ...editingTvProject,
                                role: { ...editingTvProject.role, [tvLang]: val }
                              });
                            } else {
                              setTvForm({ ...tvForm, role: { ...tvForm.role, [tvLang]: val } });
                            }
                          }}
                          dir={tvLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Description ({tvLang.toUpperCase()}) *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={editingTvProject ? editingTvProject.description[tvLang] : tvForm.description[tvLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingTvProject) {
                              setEditingTvProject({
                                ...editingTvProject,
                                description: { ...editingTvProject.description, [tvLang]: val }
                              });
                            } else {
                              setTvForm({ ...tvForm, description: { ...tvForm.description, [tvLang]: val } });
                            }
                          }}
                          dir={tvLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Format & Détails techniques ({tvLang.toUpperCase()})
                        </label>
                        <textarea
                          rows={2}
                          value={editingTvProject ? editingTvProject.details[tvLang] : tvForm.details[tvLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingTvProject) {
                              setEditingTvProject({
                                ...editingTvProject,
                                details: { ...editingTvProject.details, [tvLang]: val }
                              });
                            } else {
                              setTvForm({ ...tvForm, details: { ...tvForm.details, [tvLang]: val } });
                            }
                          }}
                          dir={tvLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Lien Externe Officiel (ex: Instagram émission)</label>
                          <input
                            type="url"
                            value={editingTvProject ? editingTvProject.externalUrl || '' : tvForm.externalUrl || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingTvProject) setEditingTvProject({ ...editingTvProject, externalUrl: val });
                              else setTvForm({ ...tvForm, externalUrl: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div className="flex items-center gap-4 pt-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={editingTvProject ? editingTvProject.featured : tvForm.featured}
                              onChange={(e) => {
                                const val = e.target.checked;
                                if (editingTvProject) setEditingTvProject({ ...editingTvProject, featured: val });
                                else setTvForm({ ...tvForm, featured: val });
                              }}
                            />
                            <span>Mettre en vedette (Hero On-Air)</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-3 flex gap-3 justify-end">
                        <button
                          type="button"
                          onClick={() => { setEditingTvProject(null); setIsCreatingTv(false); }}
                          className="px-4 py-2 border border-[#27272A] text-xs font-mono uppercase text-[#C7B8A8] hover:text-white"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#F7F3EE] text-black font-semibold text-xs font-mono uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                        >
                          Enregistrer l'émission
                        </button>
                      </div>
                    </form>
                  )}

                  {/* LIST OF TV PROJECTS */}
                  <div className="space-y-4">
                    {tvProjects.map((p) => (
                      <div key={p.id} className="p-6 border border-[#27272A] bg-[#141210] space-y-3 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#27272A]/70">
                          <div>
                            <span className="font-serif text-2xl text-[#F7F3EE] mr-3">{p.title.fr}</span>
                            <span className="font-mono text-xs text-[#B79A7E]">{p.year}</span>
                            {p.featured && (
                              <span className="ml-2 px-2 py-0.5 border border-[#B79A7E]/50 text-[9px] font-mono text-[#B79A7E] uppercase">
                                À LA UNE
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleStartEditTv(p)}
                              className="px-3 py-1.5 border border-[#27272A] hover:border-[#B79A7E] text-xs text-[#C7B8A8] hover:text-white flex items-center gap-1.5"
                            >
                              <Edit className="w-3.5 h-3.5" />
                              <span>Modifier</span>
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Supprimer l'émission ${p.title.fr} ?`)) {
                                  deleteTVProject(p.id);
                                  showToast('Émission TV supprimée.');
                                }
                              }}
                              className="p-1.5 border border-[#27272A] hover:border-red-600 text-red-400 hover:text-red-300"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className="text-[#E8DDD4] font-medium">{p.role.fr}</p>
                        <p className="text-[#C7B8A8] leading-relaxed">{p.description.fr}</p>
                        {p.details?.fr && (
                          <p className="text-[11px] text-[#B79A7E] font-mono">{p.details.fr}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 4. BEAUTY ARTICLES TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'beauty' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">Articles du Lola Beauty Edit</h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Conseils scientifiques, rituels de cosmétologie, maquillage studio et haute parfumerie
                      </p>
                    </div>

                    {!isCreatingArticle && !editingArticle && (
                      <button
                        onClick={() => setIsCreatingArticle(true)}
                        className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Rédiger un article</span>
                      </button>
                    )}
                  </div>

                  {/* ARTICLE FORM (CREATE OR EDIT) */}
                  {(isCreatingArticle || editingArticle) && (
                    <form onSubmit={handleSaveArticle} className="p-6 border border-[#B79A7E] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                        <h4 className="font-serif text-lg text-[#F7F3EE]">
                          {editingArticle ? `Modifier l'article : ${editingArticle.title.fr}` : 'Nouvel Article Beauté'}
                        </h4>

                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {(['fr', 'ar', 'en'] as const).map((l) => (
                              <button
                                key={l}
                                type="button"
                                onClick={() => setArticleLang(l)}
                                className={`px-2.5 py-1 text-xs font-mono uppercase ${
                                  articleLang === l ? 'bg-[#B79A7E] text-black font-bold' : 'border border-[#27272A]'
                                }`}
                              >
                                {l.toUpperCase()}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => { setEditingArticle(null); setIsCreatingArticle(false); }}
                            className="p-1 text-[#C7B8A8] hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Titre de l'article ({articleLang.toUpperCase()}) *
                        </label>
                        <input
                          type="text"
                          required
                          value={editingArticle ? editingArticle.title[articleLang] : articleForm.title[articleLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingArticle) {
                              setEditingArticle({
                                ...editingArticle,
                                title: { ...editingArticle.title, [articleLang]: val }
                              });
                            } else {
                              setArticleForm({ ...articleForm, title: { ...articleForm.title, [articleLang]: val } });
                            }
                          }}
                          dir={articleLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>

                      {/* Category and Read time */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Catégorie *</label>
                          <select
                            value={editingArticle ? editingArticle.category : articleForm.category}
                            onChange={(e: any) => {
                              const val = e.target.value;
                              if (editingArticle) setEditingArticle({ ...editingArticle, category: val });
                              else setArticleForm({ ...articleForm, category: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          >
                            <option value="skin">Skincare / Soins</option>
                            <option value="makeup">Makeup / Maquillage</option>
                            <option value="hair">Coiffure / Cheveux</option>
                            <option value="fragrance">Haute Parfumerie</option>
                            <option value="beauty">Beauté Globale</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Temps de lecture ({articleLang.toUpperCase()})</label>
                          <input
                            type="text"
                            value={editingArticle ? editingArticle.readTime[articleLang] : articleForm.readTime[articleLang]}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingArticle) {
                                setEditingArticle({
                                  ...editingArticle,
                                  readTime: { ...editingArticle.readTime, [articleLang]: val }
                                });
                              } else {
                                setArticleForm({ ...articleForm, readTime: { ...articleForm.readTime, [articleLang]: val } });
                              }
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Statut de publication</label>
                          <select
                            value={editingArticle ? editingArticle.status : articleForm.status}
                            onChange={(e: any) => {
                              const val = e.target.value;
                              if (editingArticle) setEditingArticle({ ...editingArticle, status: val });
                              else setArticleForm({ ...articleForm, status: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          >
                            <option value="published">Publié immédiatement</option>
                            <option value="draft">Brouillon / En attente</option>
                          </select>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Extrait / Chapô d’accroche ({articleLang.toUpperCase()}) *
                        </label>
                        <textarea
                          rows={2}
                          required
                          value={editingArticle ? editingArticle.excerpt[articleLang] : articleForm.excerpt[articleLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingArticle) {
                              setEditingArticle({
                                ...editingArticle,
                                excerpt: { ...editingArticle.excerpt, [articleLang]: val }
                              });
                            } else {
                              setArticleForm({ ...articleForm, excerpt: { ...articleForm.excerpt, [articleLang]: val } });
                            }
                          }}
                          dir={articleLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">
                          Corps complet du texte ({articleLang.toUpperCase()}) *
                        </label>
                        <textarea
                          rows={6}
                          required
                          value={editingArticle ? editingArticle.content[articleLang] : articleForm.content[articleLang]}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (editingArticle) {
                              setEditingArticle({
                                ...editingArticle,
                                content: { ...editingArticle.content, [articleLang]: val }
                              });
                            } else {
                              setArticleForm({ ...articleForm, content: { ...articleForm.content, [articleLang]: val } });
                            }
                          }}
                          dir={articleLang === 'ar' ? 'rtl' : 'ltr'}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-sans leading-relaxed"
                        />
                      </div>

                      {/* Sponsorship toggle */}
                      <div className="p-3 border border-[#27272A] bg-[#0E0C0B] flex flex-wrap items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={editingArticle ? editingArticle.isSponsored : articleForm.isSponsored}
                            onChange={(e) => {
                              const val = e.target.checked;
                              if (editingArticle) setEditingArticle({ ...editingArticle, isSponsored: val });
                              else setArticleForm({ ...articleForm, isSponsored: val });
                            }}
                          />
                          <span>Partenariat Marque / Contenu Sponsorisé</span>
                        </label>

                        {(editingArticle ? editingArticle.isSponsored : articleForm.isSponsored) && (
                          <input
                            type="text"
                            placeholder="Nom de la marque partenaire..."
                            value={editingArticle ? editingArticle.sponsorName || '' : articleForm.sponsorName || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingArticle) setEditingArticle({ ...editingArticle, sponsorName: val });
                              else setArticleForm({ ...articleForm, sponsorName: val });
                            }}
                            className="bg-[#0B0B0B] border border-[#27272A] p-2 text-[#F7F3EE] outline-none"
                          />
                        )}
                      </div>

                      <div className="pt-3 flex gap-3 justify-end">
                        <button
                          type="button"
                          onClick={() => { setEditingArticle(null); setIsCreatingArticle(false); }}
                          className="px-4 py-2 border border-[#27272A] text-xs font-mono uppercase text-[#C7B8A8] hover:text-white"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#F7F3EE] text-black font-semibold text-xs font-mono uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                        >
                          Enregistrer la publication
                        </button>
                      </div>
                    </form>
                  )}

                  {/* ARTICLES LIST */}
                  <div className="space-y-3">
                    {beautyArticles.map((art) => (
                      <div
                        key={art.id}
                        className="p-4 border border-[#27272A] bg-[#141210] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-lg text-[#F7F3EE] font-medium">{art.title.fr}</span>
                            <span className={`px-2 py-0.5 border text-[9px] font-mono uppercase ${
                              art.status === 'published'
                                ? 'border-emerald-700/60 text-emerald-400'
                                : 'border-amber-700/60 text-amber-400'
                            }`}>
                              {art.status === 'published' ? 'Publié' : 'Brouillon'}
                            </span>
                            {art.isSponsored && (
                              <span className="px-2 py-0.5 border border-[#B79A7E]/60 text-[9px] font-mono text-[#B79A7E] uppercase">
                                Sponsorisé {art.sponsorName ? `· ${art.sponsorName}` : ''}
                              </span>
                            )}
                          </div>
                          <p className="text-[#C7B8A8] font-mono text-[11px]">
                            {art.category} · {art.publishedAt} · {art.readTime.fr}
                          </p>
                          <p className="text-[#C7B8A8]/80 line-clamp-1">{art.excerpt.fr}</p>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                          <button
                            onClick={() => handleStartEditArticle(art)}
                            className="px-3 py-1.5 border border-[#27272A] hover:border-[#B79A7E] text-xs text-[#C7B8A8] hover:text-white flex items-center gap-1.5"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Modifier</span>
                          </button>

                          <button
                            onClick={() => {
                              if (confirm(`Supprimer l'article "${art.title.fr}" ?`)) {
                                deleteBeautyArticle(art.id);
                                showToast('Article supprimé.');
                              }
                            }}
                            className="p-1.5 border border-[#27272A] hover:border-red-600 text-red-400 hover:text-red-300"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 5. GALLERY TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">Portfolio & Galerie Photographique</h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Clichés éditoriaux, plateaux télévisés, portraits officiels et séries haute couture
                      </p>
                    </div>

                    {!isCreatingGallery && !editingGalleryItem && (
                      <button
                        onClick={() => setIsCreatingGallery(true)}
                        className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Ajouter une photographie</span>
                      </button>
                    )}
                  </div>

                  {/* GALLERY FORM */}
                  {(isCreatingGallery || editingGalleryItem) && (
                    <form onSubmit={handleSaveGallery} className="p-6 border border-[#B79A7E] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                        <h4 className="font-serif text-lg text-[#F7F3EE]">
                          {editingGalleryItem ? 'Modifier le Cliché' : 'Ajouter un Cliché à la Galerie'}
                        </h4>
                        <button
                          type="button"
                          onClick={() => { setEditingGalleryItem(null); setIsCreatingGallery(false); }}
                          className="p-1 text-[#C7B8A8] hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Titre de la photo (FR) *</label>
                          <input
                            type="text"
                            required
                            value={editingGalleryItem ? editingGalleryItem.title.fr : galleryForm.title.fr}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingGalleryItem) {
                                setEditingGalleryItem({
                                  ...editingGalleryItem,
                                  title: { ...editingGalleryItem.title, fr: val }
                                });
                              } else {
                                setGalleryForm({
                                  ...galleryForm,
                                  title: { ...galleryForm.title, fr: val, ar: val, en: val }
                                });
                              }
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Catégorie *</label>
                          <select
                            value={editingGalleryItem ? editingGalleryItem.category : galleryForm.category}
                            onChange={(e: any) => {
                              const val = e.target.value;
                              if (editingGalleryItem) setEditingGalleryItem({ ...editingGalleryItem, category: val });
                              else setGalleryForm({ ...galleryForm, category: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          >
                            <option value="editorial">Éditorial Haute Couture</option>
                            <option value="television">Plateau Télévisé</option>
                            <option value="beauty">Beauté & Cosmétique</option>
                            <option value="portraits">Portraits Officiels</option>
                            <option value="fashion">Fashion & Style</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">URL de l'image (ou asset SVG)</label>
                          <input
                            type="text"
                            required
                            value={editingGalleryItem ? editingGalleryItem.imageUrl : galleryForm.imageUrl}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingGalleryItem) setEditingGalleryItem({ ...editingGalleryItem, imageUrl: val });
                              else setGalleryForm({ ...galleryForm, imageUrl: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono text-[11px]"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Crédit Photo & Copyright</label>
                          <input
                            type="text"
                            value={editingGalleryItem ? editingGalleryItem.copyright : galleryForm.copyright}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingGalleryItem) setEditingGalleryItem({ ...editingGalleryItem, copyright: val });
                              else setGalleryForm({ ...galleryForm, copyright: val });
                            }}
                            placeholder="ex: © Lola / Khaoula Kebbache"
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-3 flex gap-3 justify-end">
                        <button
                          type="button"
                          onClick={() => { setEditingGalleryItem(null); setIsCreatingGallery(false); }}
                          className="px-4 py-2 border border-[#27272A] text-xs font-mono uppercase text-[#C7B8A8] hover:text-white"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#F7F3EE] text-black font-semibold text-xs font-mono uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                        >
                          Enregistrer la photo
                        </button>
                      </div>
                    </form>
                  )}

                  {/* GALLERY ITEMS GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gallery.map((item) => (
                      <div key={item.id} className="border border-[#27272A] bg-[#141210] overflow-hidden group">
                        <div className="aspect-[4/3] bg-[#0E0C0B] relative overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt={item.title.fr}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2 flex gap-1">
                            <button
                              onClick={() => {
                                setEditingGalleryItem(item);
                                setIsCreatingGallery(false);
                              }}
                              className="p-1.5 bg-[#141210]/90 border border-[#27272A] text-[#C7B8A8] hover:text-white"
                              title="Modifier"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Supprimer cette photo ?`)) {
                                  deleteGalleryItem(item.id);
                                  showToast('Photo retirée de la galerie.');
                                }
                              }}
                              className="p-1.5 bg-[#141210]/90 border border-[#27272A] text-red-400 hover:text-red-300"
                              title="Supprimer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="p-3 text-xs space-y-1">
                          <p className="font-serif text-[#F7F3EE] font-medium truncate">{item.title.fr}</p>
                          <div className="flex items-center justify-between text-[10px] text-[#C7B8A8] font-mono">
                            <span className="uppercase text-[#B79A7E]">{item.category}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 6. STATS & AUDIENCE TAB (AGENTS.MD COMPLIANCE) */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'stats' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">Audience & Statistiques Certifiées</h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Conformité absolue AGENTS.md Règle 8 : Toute statistique doit être sourcée et horodatée dans le CMS.
                      </p>
                    </div>

                    {!isCreatingStat && !editingStat && (
                      <button
                        onClick={() => setIsCreatingStat(true)}
                        className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Ajouter une métrique certifiée</span>
                      </button>
                    )}
                  </div>

                  {/* FORM (CREATE OR EDIT STAT) */}
                  {(isCreatingStat || editingStat) && (
                    <form onSubmit={handleSaveStat} className="p-6 border border-[#B79A7E] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                        <h4 className="font-serif text-lg text-[#F7F3EE]">
                          {editingStat ? 'Modifier la Métrique' : 'Nouvelle Statistique d’Auditoire'}
                        </h4>
                        <button
                          type="button"
                          onClick={() => { setEditingStat(null); setIsCreatingStat(false); }}
                          className="p-1 text-[#C7B8A8] hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Plateforme / Domaine *</label>
                          <input
                            type="text"
                            required
                            value={editingStat ? editingStat.platform : statForm.platform}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingStat) setEditingStat({ ...editingStat, platform: val });
                              else setStatForm({ ...statForm, platform: val });
                            }}
                            placeholder="ex: Instagram, Audiovisuel..."
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Métrique / Indicateur *</label>
                          <input
                            type="text"
                            required
                            value={editingStat ? editingStat.metric : statForm.metric}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingStat) setEditingStat({ ...editingStat, metric: val });
                              else setStatForm({ ...statForm, metric: val });
                            }}
                            placeholder="ex: Abonnés, Diffusion..."
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Valeur d'Affichage *</label>
                          <input
                            type="text"
                            required
                            value={editingStat ? editingStat.display_value : statForm.display_value}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingStat) setEditingStat({ ...editingStat, display_value: val });
                              else setStatForm({ ...statForm, display_value: val });
                            }}
                            placeholder="ex: +600K, Prime-Time TV..."
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-serif text-base"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Source de Certification *</label>
                          <input
                            type="text"
                            required
                            value={editingStat ? editingStat.source : statForm.source}
                            onChange={(e) => {
                              const val = e.target.value as any;
                              if (editingStat) setEditingStat({ ...editingStat, source: val });
                              else setStatForm({ ...statForm, source: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono text-[11px]"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Date d'Horodatage (ISO) *</label>
                          <input
                            type="date"
                            required
                            value={editingStat ? editingStat.verified_at : statForm.verified_at}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (editingStat) setEditingStat({ ...editingStat, verified_at: val });
                              else setStatForm({ ...statForm, verified_at: val });
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      <div className="pt-3 flex gap-3 justify-end">
                        <button
                          type="button"
                          onClick={() => { setEditingStat(null); setIsCreatingStat(false); }}
                          className="px-4 py-2 border border-[#27272A] text-xs font-mono uppercase text-[#C7B8A8] hover:text-white"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#F7F3EE] text-black font-semibold text-xs font-mono uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                        >
                          Enregistrer la métrique
                        </button>
                      </div>
                    </form>
                  )}

                  {/* STATS LIST */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((st) => (
                      <div key={st.id} className="p-5 border border-[#27272A] bg-[#141210] space-y-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-[#B79A7E] uppercase">{st.platform}</span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                setEditingStat(st);
                                setIsCreatingStat(false);
                              }}
                              className="p-1 text-[#C7B8A8] hover:text-white"
                              title="Modifier"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Supprimer cette statistique ?`)) {
                                  deleteStat(st.id);
                                  showToast('Métrique supprimée.');
                                }
                              }}
                              className="p-1 text-red-400 hover:text-red-300"
                              title="Supprimer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="font-serif text-3xl font-bold text-[#F7F3EE]">
                          {st.display_value}
                        </div>

                        <p className="text-[#C7B8A8] font-medium">{st.metric}</p>

                        <div className="pt-2 border-t border-[#27272A]/70 text-[10px] font-mono text-[#C7B8A8]/60 space-y-0.5">
                          <p>Source : {st.source}</p>
                          <p>Certifiée le : {st.verified_at}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 7. COLLABORATIONS CRM TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'collabs' && (
                <div className="space-y-6">
                  {/* Header & Status filter tabs */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">
                        Dossiers de Partenariat & Marques ({collaborations.length})
                      </h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Examen des briefs, négociation, suivi de statut et notes internes confidentielles
                      </p>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
                      <button
                        onClick={() => setCollabStatusFilter('all')}
                        className={`px-2.5 py-1 font-mono uppercase ${
                          collabStatusFilter === 'all'
                            ? 'bg-[#B79A7E] text-black font-semibold'
                            : 'border border-[#27272A] text-[#C7B8A8]'
                        }`}
                      >
                        TOUS ({collaborations.length})
                      </button>
                      {statuses.map((st) => {
                        const count = collaborations.filter((c) => c.status === st).length;
                        return (
                          <button
                            key={st}
                            onClick={() => setCollabStatusFilter(st)}
                            className={`px-2.5 py-1 font-mono uppercase shrink-0 ${
                              collabStatusFilter === st
                                ? 'bg-[#B79A7E] text-black font-semibold'
                                : 'border border-[#27272A] text-[#C7B8A8]'
                            }`}
                          >
                            {st} ({count})
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Collabs cards */}
                  <div className="space-y-4">
                    {filteredCollabs.length === 0 ? (
                      <p className="p-8 text-center text-xs text-[#C7B8A8]">Aucun dossier sous ce filtre.</p>
                    ) : (
                      filteredCollabs.map((collab) => (
                        <div
                          key={collab.id}
                          className="p-6 border border-[#27272A] bg-[#141210] space-y-4 text-xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#27272A]/70">
                            <div>
                              <span className="font-serif text-xl font-bold text-[#F7F3EE] mr-2">
                                {collab.companyName}
                              </span>
                              <span className="text-[#C7B8A8]">
                                ({collab.contactName} · {collab.country})
                              </span>
                              <span className="text-[10px] font-mono text-[#B79A7E] block mt-0.5">
                                Reçu le : {collab.createdAt ? collab.createdAt.replace('T', ' ').substring(0, 16) : 'Récemment'}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-[#C7B8A8]">Statut :</span>
                              <select
                                value={collab.status}
                                onChange={(e) => {
                                  updateCollaborationStatus(collab.id, e.target.value as CollaborationStatus);
                                  showToast(`Statut mis à jour : ${e.target.value}`);
                                }}
                                className="bg-[#0B0B0B] border border-[#B79A7E]/50 text-xs px-2 py-1 text-[#F7F3EE] font-mono uppercase"
                              >
                                {statuses.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>

                              <button
                                onClick={() => {
                                  if (confirm(`Supprimer le dossier de ${collab.companyName} ?`)) {
                                    deleteCollaboration(collab.id);
                                    showToast('Dossier supprimé.');
                                  }
                                }}
                                className="p-1 text-red-400 hover:text-red-300"
                                title="Supprimer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Grid info */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#C7B8A8]">
                            <div>
                              <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">FORMAT / TYPE</span>
                              <span className="text-[#F7F3EE]">{collab.projectType}</span>
                            </div>
                            <div>
                              <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">ENVELOPPE BUDGÉTAIRE</span>
                              <span className="text-[#F7F3EE]">{collab.budgetRange}</span>
                            </div>
                            <div>
                              <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">CONTACT OFFICIEL</span>
                              <span className="text-[#F7F3EE] font-mono">{collab.email} · {collab.phone}</span>
                            </div>
                          </div>

                          {/* Brief text box */}
                          <div className="p-4 bg-[#0B0B0B] border border-[#27272A] space-y-2 text-[#C7B8A8]">
                            <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">DESCRIPTION DU PROJET</span>
                            <p className="leading-relaxed">{collab.description}</p>
                            {collab.deliverables && (
                              <div className="pt-2 border-t border-[#27272A] text-[11px]">
                                <strong className="text-[#F7F3EE]">Livrables demandés :</strong> {collab.deliverables}
                              </div>
                            )}
                            {collab.attachmentName && (
                              <div className="pt-1 text-[11px] text-[#B79A7E] font-mono flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5" />
                                <span>Brief joint : {collab.attachmentName}</span>
                              </div>
                            )}
                          </div>

                          {/* Internal private notes & Quick reply */}
                          <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="flex-1 w-full flex items-center gap-2">
                              <span className="text-[10px] font-mono text-[#C7B8A8] uppercase shrink-0">Note interne :</span>
                              <input
                                type="text"
                                defaultValue={collab.internalNotes || ''}
                                onBlur={(e) => {
                                  updateCollaborationStatus(collab.id, collab.status, e.target.value);
                                  showToast('Note interne enregistrée.');
                                }}
                                placeholder="Ajouter des notes de suivi pour l'équipe..."
                                className="w-full bg-[#0B0B0B] border border-[#27272A] px-3 py-1.5 text-xs text-[#F7F3EE] outline-none"
                              />
                            </div>

                            <a
                              href={`mailto:${collab.email}?subject=${encodeURIComponent(
                                `LOLA Management — Suite à votre demande de partenariat (${collab.companyName})`
                              )}&body=${encodeURIComponent(
                                `Bonjour ${collab.contactName},\n\nNous accusons bonne réception de votre proposition pour ${collab.companyName}.\nL'équipe de management de Lola étudie actuellement votre brief avec attention.\n\nBien cordialement,\nLola Management`
                              )}`}
                              className="px-3 py-1.5 border border-[#B79A7E] text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black font-mono text-xs uppercase flex items-center gap-1.5 transition-colors shrink-0"
                            >
                              <Send className="w-3 h-3" />
                              <span>Répondre par Email</span>
                            </a>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 8. PRESS & MESSAGES TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'press' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setInboxSubTab('press')}
                        className={`px-4 py-2 font-mono text-xs uppercase ${
                          inboxSubTab === 'press'
                            ? 'bg-[#F7F3EE] text-black font-bold'
                            : 'border border-[#27272A] text-[#C7B8A8]'
                        }`}
                      >
                        Demandes Presse ({pressRequests.length})
                      </button>
                      <button
                        onClick={() => setInboxSubTab('contact')}
                        className={`px-4 py-2 font-mono text-xs uppercase ${
                          inboxSubTab === 'contact'
                            ? 'bg-[#F7F3EE] text-black font-bold'
                            : 'border border-[#27272A] text-[#C7B8A8]'
                        }`}
                      >
                        Messages Publics ({contactRequests.length})
                      </button>
                    </div>
                  </div>

                  {/* Sub-tab 1: Press Requests */}
                  {inboxSubTab === 'press' && (
                    <div className="space-y-3">
                      {pressRequests.length === 0 ? (
                        <p className="p-8 text-center text-xs text-[#C7B8A8]">Aucune demande presse enregistrée.</p>
                      ) : (
                        pressRequests.map((pr) => (
                          <div key={pr.id} className="p-5 border border-[#27272A] bg-[#141210] space-y-2 text-xs">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div>
                                <span className="font-serif text-lg font-bold text-[#F7F3EE]">{pr.name}</span>
                                <span className="text-[#B79A7E] font-sans ml-2">· {pr.media} ({pr.country})</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] text-[#C7B8A8]">Date limite : {pr.deadline}</span>
                                <select
                                  value={pr.status}
                                  onChange={(e: any) => {
                                    updatePressStatus(pr.id, e.target.value);
                                    showToast('Statut presse mis à jour.');
                                  }}
                                  className="bg-[#0B0B0B] border border-[#27272A] text-[10px] font-mono text-[#F7F3EE] p-1 uppercase"
                                >
                                  <option value="NEW">NOUVEAU</option>
                                  <option value="REPLIED">RÉPONDU</option>
                                  <option value="ARCHIVED">ARCHIVÉ</option>
                                </select>
                                <button
                                  onClick={() => {
                                    if (confirm(`Supprimer la demande de ${pr.name} ?`)) {
                                      deletePressRequest(pr.id);
                                      showToast('Demande presse supprimée.');
                                    }
                                  }}
                                  className="p-1 text-red-400 hover:text-red-300"
                                  title="Supprimer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <p className="font-mono text-[11px] text-[#C7B8A8]">{pr.email}</p>
                            <p className="text-[#F7F3EE] font-medium pt-1">Sujet : {pr.topic}</p>
                            <div className="p-3 bg-[#0B0B0B] border border-[#27272A] text-[#C7B8A8] leading-relaxed">
                              {pr.message}
                            </div>

                            <div className="pt-1 flex justify-end">
                              <a
                                href={`mailto:${pr.email}?subject=${encodeURIComponent(
                                  `LOLA / Khaoula Kebbache — Réponse à votre demande presse (${pr.media})`
                                )}`}
                                className="px-3 py-1.5 border border-[#B79A7E] text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black font-mono text-xs uppercase flex items-center gap-1.5 transition-colors"
                              >
                                <Send className="w-3 h-3" />
                                <span>Répondre au journaliste</span>
                              </a>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* Sub-tab 2: Contact Messages */}
                  {inboxSubTab === 'contact' && (
                    <div className="space-y-3">
                      {contactRequests.length === 0 ? (
                        <p className="p-8 text-center text-xs text-[#C7B8A8]">Aucun message de contact enregistré.</p>
                      ) : (
                        contactRequests.map((cnt) => (
                          <div key={cnt.id} className="p-5 border border-[#27272A] bg-[#141210] space-y-2 text-xs">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div>
                                <span className="font-semibold text-[#F7F3EE] text-sm">{cnt.name}</span>
                                <span className="font-mono text-[#C7B8A8] ml-2">({cnt.email})</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] text-[#B79A7E] uppercase">{cnt.type}</span>
                                <select
                                  value={cnt.status}
                                  onChange={(e: any) => {
                                    updateContactStatus(cnt.id, e.target.value);
                                    showToast('Statut message mis à jour.');
                                  }}
                                  className="bg-[#0B0B0B] border border-[#27272A] text-[10px] font-mono text-[#F7F3EE] p-1 uppercase"
                                >
                                  <option value="NEW">NON LU</option>
                                  <option value="READ">TRAITÉ</option>
                                  <option value="ARCHIVED">ARCHIVÉ</option>
                                </select>
                                <button
                                  onClick={() => {
                                    if (confirm(`Supprimer ce message ?`)) {
                                      deleteContactRequest(cnt.id);
                                      showToast('Message supprimé.');
                                    }
                                  }}
                                  className="p-1 text-red-400 hover:text-red-300"
                                  title="Supprimer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <p className="text-[#B79A7E] font-medium">{cnt.subject}</p>
                            <div className="p-3 bg-[#0B0B0B] border border-[#27272A] text-[#C7B8A8] leading-relaxed">
                              {cnt.message}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 9. SETTINGS & SOCIAL TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="space-y-6 text-xs">
                  <div>
                    <h3 className="font-serif text-xl text-[#F7F3EE]">Réseaux Sociaux Officiels</h3>
                    <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                      Comptes officiels certifiés affichés publiquement sur le site
                    </p>
                  </div>

                  <div className="space-y-3">
                    {socialsForm.map((soc, idx) => (
                      <div key={soc.id} className="p-4 border border-[#27272A] bg-[#141210] grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">
                            {soc.label} ({soc.platform})
                          </label>
                          <input
                            type="text"
                            value={soc.handle}
                            onChange={(e) => {
                              const updated = [...socialsForm];
                              updated[idx].handle = e.target.value;
                              setSocialsForm(updated);
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2 text-[#F7F3EE] outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">URL Complète</label>
                          <input
                            type="url"
                            value={soc.url}
                            onChange={(e) => {
                              const updated = [...socialsForm];
                              updated[idx].url = e.target.value;
                              setSocialsForm(updated);
                            }}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2 text-[#F7F3EE] outline-none font-mono"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#27272A]">
                    <h3 className="font-serif text-xl text-[#F7F3EE] mb-4">Emails de Contact Officiels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">Email Général</label>
                        <input
                          type="email"
                          value={settingsForm.generalEmail}
                          onChange={(e) => setSettingsForm({ ...settingsForm, generalEmail: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">Email Collaborations</label>
                        <input
                          type="email"
                          value={settingsForm.collabEmail}
                          onChange={(e) => setSettingsForm({ ...settingsForm, collabEmail: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">Email Presse & Médias</label>
                        <input
                          type="email"
                          value={settingsForm.pressEmail}
                          onChange={(e) => setSettingsForm({ ...settingsForm, pressEmail: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#27272A] space-y-3">
                    <h3 className="font-serif text-xl text-[#F7F3EE]">Mode Maintenance</h3>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.maintenanceMode}
                        onChange={(e) => setSettingsForm({ ...settingsForm, maintenanceMode: e.target.checked })}
                      />
                      <span className="font-medium text-[#F7F3EE]">Activer le mode maintenance (affiche un écran d’attente)</span>
                    </label>

                    {settingsForm.maintenanceMode && (
                      <div>
                        <label className="block font-mono text-[#B79A7E] uppercase text-[10px] mb-1">Message d'attente</label>
                        <input
                          type="text"
                          value={settingsForm.maintenanceMessage}
                          onChange={(e) => setSettingsForm({ ...settingsForm, maintenanceMessage: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE] outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                    >
                      Enregistrer les Paramètres
                    </button>
                  </div>
                </form>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 10. BACKUP & RESTORE TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'backup' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-[#F7F3EE]">Sauvegarde & Restauration Intégrale</h3>
                    <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                      Sauvegardez l'ensemble des données du site (articles, galerie, TV, briefs, métriques) dans un fichier JSON portable ou restaurez-les à tout moment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Export Box */}
                    <div className="p-6 border border-[#27272A] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center gap-3">
                        <Download className="w-6 h-6 text-[#B79A7E]" />
                        <div>
                          <h4 className="font-serif text-lg text-[#F7F3EE]">Exportation des Données</h4>
                          <p className="text-[#C7B8A8]/70">Générer une archive JSON de sécurité</p>
                        </div>
                      </div>

                      <p className="text-[#C7B8A8] leading-relaxed">
                        L'archive contient tous les textes multilingues, la configuration du domaine, les demandes de partenariat et l'historique d'audit.
                      </p>

                      <button
                        onClick={handleExportDownload}
                        className="w-full py-3 bg-[#F7F3EE] text-[#0B0B0B] font-semibold font-mono text-xs uppercase hover:bg-[#B79A7E] hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Télécharger le backup JSON</span>
                      </button>
                    </div>

                    {/* Import Box */}
                    <div className="p-6 border border-[#27272A] bg-[#141210] space-y-4 text-xs">
                      <div className="flex items-center gap-3">
                        <Upload className="w-6 h-6 text-[#B79A7E]" />
                        <div>
                          <h4 className="font-serif text-lg text-[#F7F3EE]">Restauration d'une Sauvegarde</h4>
                          <p className="text-[#C7B8A8]/70">Importer un fichier JSON de backup</p>
                        </div>
                      </div>

                      <p className="text-[#C7B8A8] leading-relaxed">
                        Chargez un fichier de sauvegarde précédemment exporté pour écraser et synchroniser les données instantanément.
                      </p>

                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".json"
                        onChange={handleImportFile}
                        className="hidden"
                      />

                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-3 border border-[#B79A7E] text-[#B79A7E] font-mono text-xs uppercase hover:bg-[#B79A7E] hover:text-black transition-colors flex items-center justify-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Sélectionner un fichier JSON</span>
                      </button>
                    </div>
                  </div>

                  {/* Factory Reset Danger Zone */}
                  <div className="p-6 border border-red-950/70 bg-[#160e0d] space-y-3 text-xs">
                    <div className="flex items-center gap-2 text-red-400 font-mono uppercase">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Zone de Réinitialisation Sécurisée</span>
                    </div>
                    <p className="text-[#C7B8A8]">
                      Réinitialise l'ensemble du site aux données éditoriales certifiées par défaut (Khaoula Kebbache, Miss Fashion DZ, rituels de parfumerie et photos de studio).
                    </p>
                    <button
                      onClick={() => {
                        if (confirm('Attention : Êtes-vous sûr de vouloir réinitialiser toutes les données aux valeurs certifiées par défaut ?')) {
                          resetToDefaults();
                          showToast('Données réinitialisées aux valeurs certifiées.');
                        }
                      }}
                      className="px-4 py-2 bg-red-900/60 hover:bg-red-800 text-red-200 border border-red-700 font-mono text-xs uppercase transition-colors"
                    >
                      Réinitialiser aux valeurs d'origine
                    </button>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------------- */}
              {/* 11. AUDIT LOGS TAB */}
              {/* ----------------------------------------------------------------- */}
              {activeTab === 'logs' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <div>
                      <h3 className="font-serif text-xl text-[#F7F3EE]">Journal d’Audit Administratif</h3>
                      <p className="text-xs text-[#C7B8A8]/70 mt-0.5">
                        Traçabilité et horodatage de toutes les actions effectuées sur la console
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm('Effacer l’historique d’audit ?')) {
                          clearAuditLogs();
                          showToast('Journal d’audit vidé.');
                        }
                      }}
                      className="px-3 py-1.5 border border-[#27272A] hover:border-red-600 text-xs font-mono text-[#C7B8A8] hover:text-red-300 uppercase"
                    >
                      Effacer l'historique
                    </button>
                  </div>

                  <div className="space-y-2">
                    {auditLogs.length === 0 ? (
                      <p className="p-8 text-center text-xs text-[#C7B8A8]">Aucun journal d’audit pour le moment.</p>
                    ) : (
                      auditLogs.map((log) => (
                        <div
                          key={log.id}
                          className="p-3 border border-[#27272A] bg-[#0E0C0B] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono"
                        >
                          <div>
                            <span className="text-[#B79A7E] font-bold mr-2">[{log.action}]</span>
                            <span className="text-[#F7F3EE]">{log.entity}</span>
                            <span className="text-[#C7B8A8]/60 ml-2">par {log.user}</span>
                          </div>
                          <span className="text-[#C7B8A8]/50 text-[11px]">
                            {log.timestamp ? log.timestamp.replace('T', ' ').substring(0, 19) : ''}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
