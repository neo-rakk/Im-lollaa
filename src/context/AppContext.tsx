import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
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
  AuditLogItem,
  CollaborationStatus
} from '../types';
import {
  initialProfile,
  initialSocialAccounts,
  initialStats,
  initialTVProjects,
  initialBeautyArticles,
  initialGallery,
  initialCollaborations,
  initialPressRequests,
  initialContactRequests,
  initialSiteSettings,
  initialAuditLogs
} from '../data/initialData';
import { translations } from '../lib/i18n';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)['fr'];
  profile: ProfileData;
  socialAccounts: SocialAccount[];
  stats: StatItem[];
  tvProjects: TVProject[];
  beautyArticles: BeautyArticle[];
  gallery: GalleryItem[];
  collaborations: CollaborationRequest[];
  pressRequests: PressRequest[];
  contactRequests: ContactRequest[];
  siteSettings: SiteSettings;
  auditLogs: AuditLogItem[];
  
  // Navigation / Modal / Page View Routing
  currentView: 'home' | 'about' | 'on-air' | 'beauty' | 'gallery' | 'collaborate' | 'press' | 'media-kit' | 'contact' | 'admin' | 'privacy' | 'terms' | 'cookies';
  setCurrentView: (view: 'home' | 'about' | 'on-air' | 'beauty' | 'gallery' | 'collaborate' | 'press' | 'media-kit' | 'contact' | 'admin' | 'privacy' | 'terms' | 'cookies') => void;
  selectedTvProject: TVProject | null;
  setSelectedTvProject: (p: TVProject | null) => void;
  selectedArticle: BeautyArticle | null;
  setSelectedArticle: (a: BeautyArticle | null) => void;
  activeLightboxIndex: number | null;
  setActiveLightboxIndex: (idx: number | null) => void;

  // Actions
  submitCollaboration: (data: Omit<CollaborationRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }) => Promise<{ success: boolean; error?: string }>;
  submitContact: (data: Omit<ContactRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }) => Promise<{ success: boolean; error?: string }>;
  submitPress: (data: Omit<PressRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }) => Promise<{ success: boolean; error?: string }>;
  
  // Collaborations CRM
  updateCollaborationStatus: (id: string, status: CollaborationStatus, internalNotes?: string) => void;
  deleteCollaboration: (id: string) => void;

  // Press & Messages
  updatePressStatus: (id: string, status: 'NEW' | 'REPLIED' | 'ARCHIVED') => void;
  deletePressRequest: (id: string) => void;
  updateContactStatus: (id: string, status: 'NEW' | 'READ' | 'ARCHIVED') => void;
  deleteContactRequest: (id: string) => void;

  // Profile & Disciplines
  updateProfile: (profile: ProfileData) => void;

  // Statistics
  addStat: (stat: Omit<StatItem, 'id'>) => void;
  updateStat: (stat: StatItem) => void;
  deleteStat: (id: string) => void;

  // Television Projects
  addTVProject: (project: Omit<TVProject, 'id'>) => void;
  updateTVProject: (project: TVProject) => void;
  deleteTVProject: (id: string) => void;

  // Beauty Articles
  addBeautyArticle: (article: Omit<BeautyArticle, 'id'>) => void;
  updateBeautyArticle: (article: BeautyArticle) => void;
  deleteBeautyArticle: (id: string) => void;

  // Gallery
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;

  // Social & Settings
  updateSocialAccounts: (accounts: SocialAccount[]) => void;
  updateSiteSettings: (settings: SiteSettings) => void;

  // Data Management & Backup
  clearAuditLogs: () => void;
  resetToDefaults: () => void;
  exportCMSData: () => string;
  importCMSData: (jsonData: string) => { success: boolean; error?: string };
  
  // Admin Authentication
  isAdminAuthenticated: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'lola_lang_v1',
  PROFILE: 'lola_profile_v1',
  SOCIALS: 'lola_socials_v1',
  STATS: 'lola_stats_v1',
  TV: 'lola_tv_v1',
  ARTICLES: 'lola_articles_v1',
  GALLERY: 'lola_gallery_v1',
  COLLABS: 'lola_collabs_v1',
  PRESS: 'lola_press_v1',
  CONTACT: 'lola_contact_v1',
  SETTINGS: 'lola_settings_v1',
  LOGS: 'lola_logs_v1',
  ADMIN_AUTH: 'lola_admin_auth_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Language state
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG) as Language;
      if (saved && ['fr', 'ar', 'en'].includes(saved)) return saved;
    } catch (e) {
      // fallback
    }
    return 'fr';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, newLang);
    } catch (e) {
      // ignore
    }
  };

  // Sync document attributes (HTML lang & dir for RTL support in Arabic)
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [lang]);

  // 2. State & Persistence
  const [profile, setProfileState] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [socialAccounts, setSocialAccountsState] = useState<SocialAccount[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SOCIALS);
      return saved ? JSON.parse(saved) : initialSocialAccounts;
    } catch {
      return initialSocialAccounts;
    }
  });

  const [stats, setStatsState] = useState<StatItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STATS);
      return saved ? JSON.parse(saved) : initialStats;
    } catch {
      return initialStats;
    }
  });

  const [tvProjects, setTvProjectsState] = useState<TVProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TV);
      return saved ? JSON.parse(saved) : initialTVProjects;
    } catch {
      return initialTVProjects;
    }
  });

  const [beautyArticles, setBeautyArticlesState] = useState<BeautyArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      return saved ? JSON.parse(saved) : initialBeautyArticles;
    } catch {
      return initialBeautyArticles;
    }
  });

  const [gallery, setGalleryState] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return saved ? JSON.parse(saved) : initialGallery;
    } catch {
      return initialGallery;
    }
  });

  const [collaborations, setCollaborationsState] = useState<CollaborationRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COLLABS);
      return saved ? JSON.parse(saved) : initialCollaborations;
    } catch {
      return initialCollaborations;
    }
  });

  const [pressRequests, setPressRequestsState] = useState<PressRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRESS);
      return saved ? JSON.parse(saved) : initialPressRequests;
    } catch {
      return initialPressRequests;
    }
  });

  const [contactRequests, setContactRequestsState] = useState<ContactRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACT);
      return saved ? JSON.parse(saved) : initialContactRequests;
    } catch {
      return initialContactRequests;
    }
  });

  const [siteSettings, setSiteSettingsState] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [auditLogs, setAuditLogsState] = useState<AuditLogItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOGS);
      return saved ? JSON.parse(saved) : initialAuditLogs;
    } catch {
      return initialAuditLogs;
    }
  });

  // Admin Auth
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Views & Modals
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'on-air' | 'beauty' | 'gallery' | 'collaborate' | 'press' | 'media-kit' | 'contact' | 'admin' | 'privacy' | 'terms' | 'cookies'>('home');
  const [selectedTvProject, setSelectedTvProject] = useState<TVProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BeautyArticle | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Helper to log audit
  const logAudit = (action: string, entity: string, entityId: string) => {
    const newLog: AuditLogItem = {
      id: 'log-' + Date.now(),
      user: isAdminAuthenticated ? 'admin@im-lolla.com' : 'public_system',
      action,
      entity,
      entityId,
      timestamp: new Date().toISOString()
    };
    setAuditLogsState((prev) => {
      const updated = [newLog, ...prev].slice(0, 100);
      try {
        localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // Form Submission Handlers
  const submitCollaboration = async (
    data: Omit<CollaborationRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }
  ) => {
    // Spam Honeypot check
    if (data.honeypot && data.honeypot.trim() !== '') {
      return { success: false, error: 'Spam protection triggered.' };
    }
    if (!data.companyName || !data.email || !data.description) {
      return { success: false, error: 'Please provide all required fields.' };
    }

    const newReq: CollaborationRequest = {
      id: 'collab-' + Date.now(),
      companyName: data.companyName,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      projectType: data.projectType,
      description: data.description,
      deliverables: data.deliverables,
      desiredDate: data.desiredDate,
      budgetRange: data.budgetRange,
      website: data.website,
      socialUrl: data.socialUrl,
      attachmentName: data.attachmentName,
      status: 'NEW',
      createdAt: new Date().toISOString()
    };

    setCollaborationsState((prev) => {
      const updated = [newReq, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.COLLABS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    logAudit('NEW_COLLABORATION_SUBMISSION', 'CollaborationRequest', newReq.id);
    return { success: true };
  };

  const submitContact = async (
    data: Omit<ContactRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }
  ) => {
    if (data.honeypot && data.honeypot.trim() !== '') {
      return { success: false, error: 'Spam protection triggered.' };
    }
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: 'Please fill out required fields.' };
    }

    const newContact: ContactRequest = {
      id: 'cnt-' + Date.now(),
      type: data.type,
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      createdAt: new Date().toISOString(),
      status: 'NEW'
    };

    setContactRequestsState((prev) => {
      const updated = [newContact, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    logAudit('NEW_CONTACT_SUBMISSION', 'ContactRequest', newContact.id);
    return { success: true };
  };

  const submitPress = async (
    data: Omit<PressRequest, 'id' | 'createdAt' | 'status'> & { honeypot?: string }
  ) => {
    if (data.honeypot && data.honeypot.trim() !== '') {
      return { success: false, error: 'Spam protection triggered.' };
    }
    if (!data.name || !data.media || !data.email || !data.message) {
      return { success: false, error: 'Required fields missing.' };
    }

    const newPress: PressRequest = {
      id: 'press-' + Date.now(),
      name: data.name,
      media: data.media,
      email: data.email,
      country: data.country,
      topic: data.topic,
      deadline: data.deadline,
      message: data.message,
      createdAt: new Date().toISOString(),
      status: 'NEW'
    };

    setPressRequestsState((prev) => {
      const updated = [newPress, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.PRESS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    logAudit('NEW_PRESS_SUBMISSION', 'PressRequest', newPress.id);
    return { success: true };
  };

  const updateCollaborationStatus = (id: string, status: CollaborationStatus, internalNotes?: string) => {
    setCollaborationsState((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, status, internalNotes: internalNotes ?? item.internalNotes } : item
      );
      try {
        localStorage.setItem(STORAGE_KEYS.COLLABS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_COLLAB_STATUS', 'CollaborationRequest', id);
  };

  const deleteCollaboration = (id: string) => {
    setCollaborationsState((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.COLLABS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_COLLABORATION', 'CollaborationRequest', id);
  };

  const updatePressStatus = (id: string, status: 'NEW' | 'REPLIED' | 'ARCHIVED') => {
    setPressRequestsState((prev) => {
      const updated = prev.map((pr) => (pr.id === id ? { ...pr, status } : pr));
      try {
        localStorage.setItem(STORAGE_KEYS.PRESS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_PRESS_STATUS', 'PressRequest', id);
  };

  const deletePressRequest = (id: string) => {
    setPressRequestsState((prev) => {
      const updated = prev.filter((pr) => pr.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.PRESS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_PRESS_REQUEST', 'PressRequest', id);
  };

  const updateContactStatus = (id: string, status: 'NEW' | 'READ' | 'ARCHIVED') => {
    setContactRequestsState((prev) => {
      const updated = prev.map((cnt) => (cnt.id === id ? { ...cnt, status } : cnt));
      try {
        localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_CONTACT_STATUS', 'ContactRequest', id);
  };

  const deleteContactRequest = (id: string) => {
    setContactRequestsState((prev) => {
      const updated = prev.filter((cnt) => cnt.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_CONTACT_REQUEST', 'ContactRequest', id);
  };

  const updateProfile = (newProfile: ProfileData) => {
    setProfileState(newProfile);
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(newProfile));
    } catch (e) {}
    logAudit('UPDATE_PROFILE', 'ProfileData', 'profile');
  };

  const addStat = (stat: Omit<StatItem, 'id'>) => {
    const newStat: StatItem = {
      ...stat,
      id: 'stat-' + Date.now()
    };
    setStatsState((prev) => {
      const updated = [...prev, newStat];
      try {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('ADD_STAT', 'StatItem', newStat.id);
  };

  const updateStat = (updatedStat: StatItem) => {
    setStatsState((prev) => {
      const updated = prev.map((s) => (s.id === updatedStat.id ? updatedStat : s));
      try {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_STAT', 'StatItem', updatedStat.id);
  };

  const deleteStat = (id: string) => {
    setStatsState((prev) => {
      const updated = prev.filter((s) => s.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_STAT', 'StatItem', id);
  };

  const addTVProject = (project: Omit<TVProject, 'id'>) => {
    const newProject: TVProject = {
      ...project,
      id: 'tv-' + Date.now()
    };
    setTvProjectsState((prev) => {
      const updated = [newProject, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.TV, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('ADD_TV_PROJECT', 'TVProject', newProject.id);
  };

  const updateTVProject = (project: TVProject) => {
    setTvProjectsState((prev) => {
      const updated = prev.map((p) => (p.id === project.id ? project : p));
      try {
        localStorage.setItem(STORAGE_KEYS.TV, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_TV_PROJECT', 'TVProject', project.id);
  };

  const deleteTVProject = (id: string) => {
    setTvProjectsState((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.TV, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_TV_PROJECT', 'TVProject', id);
  };

  const addBeautyArticle = (article: Omit<BeautyArticle, 'id'>) => {
    const newArt: BeautyArticle = {
      ...article,
      id: 'art-' + Date.now()
    };
    setBeautyArticlesState((prev) => {
      const updated = [newArt, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('ADD_BEAUTY_ARTICLE', 'BeautyArticle', newArt.id);
  };

  const updateBeautyArticle = (article: BeautyArticle) => {
    setBeautyArticlesState((prev) => {
      const updated = prev.map((a) => (a.id === article.id ? article : a));
      try {
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_BEAUTY_ARTICLE', 'BeautyArticle', article.id);
  };

  const deleteBeautyArticle = (id: string) => {
    setBeautyArticlesState((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_BEAUTY_ARTICLE', 'BeautyArticle', id);
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'gal-' + Date.now()
    };
    setGalleryState((prev) => {
      const updated = [newItem, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('ADD_GALLERY_ITEM', 'GalleryItem', newItem.id);
  };

  const updateGalleryItem = (item: GalleryItem) => {
    setGalleryState((prev) => {
      const updated = prev.map((g) => (g.id === item.id ? item : g));
      try {
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('UPDATE_GALLERY_ITEM', 'GalleryItem', item.id);
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryState((prev) => {
      const updated = prev.filter((g) => g.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    logAudit('DELETE_GALLERY_ITEM', 'GalleryItem', id);
  };

  const updateSocialAccounts = (accounts: SocialAccount[]) => {
    setSocialAccountsState(accounts);
    try {
      localStorage.setItem(STORAGE_KEYS.SOCIALS, JSON.stringify(accounts));
    } catch (e) {}
    logAudit('UPDATE_SOCIAL_ACCOUNTS', 'SocialAccounts', 'all');
  };

  const updateSiteSettings = (settings: SiteSettings) => {
    setSiteSettingsState(settings);
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {}
    logAudit('UPDATE_SITE_SETTINGS', 'SiteSettings', 'settings');
  };

  const clearAuditLogs = () => {
    setAuditLogsState([]);
    try {
      localStorage.removeItem(STORAGE_KEYS.LOGS);
    } catch (e) {}
  };

  const resetToDefaults = () => {
    setProfileState(initialProfile);
    setSocialAccountsState(initialSocialAccounts);
    setStatsState(initialStats);
    setTvProjectsState(initialTVProjects);
    setBeautyArticlesState(initialBeautyArticles);
    setGalleryState(initialGallery);
    setCollaborationsState(initialCollaborations);
    setPressRequestsState(initialPressRequests);
    setContactRequestsState(initialContactRequests);
    setSiteSettingsState(initialSiteSettings);
    setAuditLogsState(initialAuditLogs);

    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(initialProfile));
      localStorage.setItem(STORAGE_KEYS.SOCIALS, JSON.stringify(initialSocialAccounts));
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(initialStats));
      localStorage.setItem(STORAGE_KEYS.TV, JSON.stringify(initialTVProjects));
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(initialBeautyArticles));
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(initialGallery));
      localStorage.setItem(STORAGE_KEYS.COLLABS, JSON.stringify(initialCollaborations));
      localStorage.setItem(STORAGE_KEYS.PRESS, JSON.stringify(initialPressRequests));
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(initialContactRequests));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(initialSiteSettings));
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(initialAuditLogs));
    } catch (e) {}

    logAudit('CMS_RESET_TO_DEFAULTS', 'CMS', 'all');
  };

  const exportCMSData = () => {
    const backup = {
      exportedAt: new Date().toISOString(),
      profile,
      socialAccounts,
      stats,
      tvProjects,
      beautyArticles,
      gallery,
      collaborations,
      pressRequests,
      contactRequests,
      siteSettings,
      auditLogs
    };
    logAudit('CMS_DATA_EXPORTED', 'CMS', 'backup');
    return JSON.stringify(backup, null, 2);
  };

  const importCMSData = (jsonData: string) => {
    try {
      const data = JSON.parse(jsonData);
      if (!data.profile || !Array.isArray(data.stats)) {
        return { success: false, error: 'Structure de sauvegarde invalide.' };
      }
      if (data.profile) {
        setProfileState(data.profile);
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(data.profile));
      }
      if (data.socialAccounts) {
        setSocialAccountsState(data.socialAccounts);
        localStorage.setItem(STORAGE_KEYS.SOCIALS, JSON.stringify(data.socialAccounts));
      }
      if (data.stats) {
        setStatsState(data.stats);
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(data.stats));
      }
      if (data.tvProjects) {
        setTvProjectsState(data.tvProjects);
        localStorage.setItem(STORAGE_KEYS.TV, JSON.stringify(data.tvProjects));
      }
      if (data.beautyArticles) {
        setBeautyArticlesState(data.beautyArticles);
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(data.beautyArticles));
      }
      if (data.gallery) {
        setGalleryState(data.gallery);
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(data.gallery));
      }
      if (data.collaborations) {
        setCollaborationsState(data.collaborations);
        localStorage.setItem(STORAGE_KEYS.COLLABS, JSON.stringify(data.collaborations));
      }
      if (data.pressRequests) {
        setPressRequestsState(data.pressRequests);
        localStorage.setItem(STORAGE_KEYS.PRESS, JSON.stringify(data.pressRequests));
      }
      if (data.contactRequests) {
        setContactRequestsState(data.contactRequests);
        localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(data.contactRequests));
      }
      if (data.siteSettings) {
        setSiteSettingsState(data.siteSettings);
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.siteSettings));
      }
      logAudit('CMS_DATA_IMPORTED', 'CMS', 'restore');
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Erreur lors du décodage du fichier JSON.' };
    }
  };

  const adminLogin = (password: string) => {
    // Official secure admin passkey for management simulation
    if (password === 'lola2026' || password === 'admin@im-lolla') {
      setIsAdminAuthenticated(true);
      try {
        sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      } catch (e) {}
      logAudit('ADMIN_LOGIN_SUCCESS', 'Auth', 'admin');
      return true;
    }
    logAudit('ADMIN_LOGIN_FAILED', 'Auth', 'attempt');
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    try {
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    } catch (e) {}
    logAudit('ADMIN_LOGOUT', 'Auth', 'admin');
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        profile,
        socialAccounts,
        stats,
        tvProjects,
        beautyArticles,
        gallery,
        collaborations,
        pressRequests,
        contactRequests,
        siteSettings,
        auditLogs,
        currentView,
        setCurrentView,
        selectedTvProject,
        setSelectedTvProject,
        selectedArticle,
        setSelectedArticle,
        activeLightboxIndex,
        setActiveLightboxIndex,
        submitCollaboration,
        submitContact,
        submitPress,
        updateCollaborationStatus,
        deleteCollaboration,
        updatePressStatus,
        deletePressRequest,
        updateContactStatus,
        deleteContactRequest,
        updateProfile,
        addStat,
        updateStat,
        deleteStat,
        addTVProject,
        updateTVProject,
        deleteTVProject,
        addBeautyArticle,
        updateBeautyArticle,
        deleteBeautyArticle,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        updateSocialAccounts,
        updateSiteSettings,
        clearAuditLogs,
        resetToDefaults,
        exportCMSData,
        importCMSData,
        isAdminAuthenticated,
        adminLogin,
        adminLogout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
