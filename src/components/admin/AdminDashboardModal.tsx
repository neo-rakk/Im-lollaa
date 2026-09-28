import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Lock,
  LogOut,
  X,
  Briefcase,
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
  Calendar
} from 'lucide-react';
import { CollaborationStatus } from '../../types';

export const AdminDashboardModal: React.FC = () => {
  const {
    setCurrentView,
    isAdminAuthenticated,
    adminLogin,
    adminLogout,
    collaborations,
    updateCollaborationStatus,
    pressRequests,
    contactRequests,
    profile,
    updateProfile,
    stats,
    updateStat,
    tvProjects,
    updateTVProject,
    beautyArticles,
    addBeautyArticle,
    updateBeautyArticle,
    deleteBeautyArticle,
    siteSettings,
    updateSiteSettings,
    auditLogs
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'collabs' | 'press' | 'profile' | 'tv' | 'beauty' | 'stats' | 'settings' | 'logs'
  >('collabs');

  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Editing state for profile
  const [editProfile, setEditProfile] = useState(profile);
  const [profileSaved, setProfileSaved] = useState(false);

  // Editing state for new article
  const [newArticleMode, setNewArticleMode] = useState(false);
  const [newArticle, setNewArticle] = useState({
    titleFr: '',
    excerptFr: '',
    contentFr: '',
    category: 'skin' as const,
    coverImage: profile.disciplines[2].image,
    readTime: '4 min de lecture',
    isSponsored: false,
    sponsorName: '',
    status: 'published' as const
  });

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(loginPassword);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setLoginPassword('');
    }
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(editProfile);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.titleFr) return;
    addBeautyArticle({
      slug: newArticle.titleFr.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: newArticle.category,
      title: { fr: newArticle.titleFr, ar: newArticle.titleFr, en: newArticle.titleFr },
      excerpt: { fr: newArticle.excerptFr, ar: newArticle.excerptFr, en: newArticle.excerptFr },
      content: { fr: newArticle.contentFr, ar: newArticle.contentFr, en: newArticle.contentFr },
      coverImage: newArticle.coverImage,
      readTime: { fr: newArticle.readTime, ar: newArticle.readTime, en: newArticle.readTime },
      publishedAt: new Date().toISOString().split('T')[0],
      isSponsored: newArticle.isSponsored,
      sponsorName: newArticle.sponsorName,
      status: newArticle.status,
      tags: ['Beauté', 'Édition 2026']
    });
    setNewArticleMode(false);
    setNewArticle({
      titleFr: '',
      excerptFr: '',
      contentFr: '',
      category: 'skin',
      coverImage: profile.disciplines[2].image,
      readTime: '4 min de lecture',
      isSponsored: false,
      sponsorName: '',
      status: 'published'
    });
  };

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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/98 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-[#12100E] border border-[#27272A] p-6 sm:p-8 text-[#F7F3EE] shadow-2xl my-4 min-h-[85vh] flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#27272A] mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#B79A7E]/50 bg-[#1A1816]">
              <Lock className="w-4 h-4 text-[#B79A7E]" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#F7F3EE] font-medium tracking-tight">
                LOLA CMS & EXECUTIVE CONSOLE
              </h2>
              <p className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
                ADMINISTRATION OFFICIELLE · IM-LOLLA.COM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdminAuthenticated && (
              <button
                onClick={adminLogout}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-red-600 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">DÉCONNEXION</span>
              </button>
            )}

            <button
              onClick={() => setCurrentView('home')}
              className="p-2 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* If Not Authenticated: Login Panel */}
        {!isAdminAuthenticated ? (
          <div className="my-auto max-w-md mx-auto w-full p-8 border border-[#27272A] bg-[#141210] text-center space-y-6">
            <Lock className="w-12 h-12 text-[#B79A7E] mx-auto" />
            <div>
              <h3 className="font-serif text-2xl text-[#F7F3EE]">Accès Restreint</h3>
              <p className="text-xs text-[#C7B8A8] mt-1 font-light">
                Entrez la clé de sécurité pour gérer le site, les briefs de collaboration et les publications.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Clé de sécurité (ex: lola2026)"
                className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] px-4 py-3 text-xs text-[#F7F3EE] text-center tracking-widest"
              />

              {loginError && (
                <p className="text-xs text-red-400 font-mono">
                  Clé de sécurité invalide.
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-widest uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
              >
                CONNEXION DIRECTE
              </button>
            </form>

            <p className="text-[10px] text-[#C7B8A8]/60 font-mono">
              Clé d’accès test : lola2026
            </p>
          </div>
        ) : (
          /* Authenticated Admin Workspace */
          <div className="flex-1 flex flex-col space-y-6">
            
            {/* KPI Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">COLLABORATIONS</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{collaborations.length}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">{collaborations.filter(c => c.status === 'NEW').length} nouvelles</p>
              </div>

              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">DEMANDES PRESSE</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{pressRequests.length}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">{pressRequests.filter(p => p.status === 'NEW').length} en attente</p>
              </div>

              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">MESSAGES CONTACT</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{contactRequests.length}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">{contactRequests.filter(c => c.status === 'NEW').length} non lus</p>
              </div>

              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">ARTICLES BEAUTÉ</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{beautyArticles.length}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">Édition active</p>
              </div>

              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">PROJETS TV</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{tvProjects.length}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">Miss Fashion DZ</p>
              </div>

              <div className="p-3 border border-[#27272A] bg-[#141210]">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">AUDIENCE CERTIFIÉE</span>
                <p className="text-xl font-serif font-bold text-[#F7F3EE]">{stats[0]?.display_value}</p>
                <p className="text-[10px] text-[#C7B8A8]/60">Source vérifiée</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#27272A] pb-3 text-xs">
              <button
                onClick={() => setActiveTab('collabs')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'collabs'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Briefs Collaborations ({collaborations.length})
              </button>

              <button
                onClick={() => setActiveTab('press')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'press'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Presse & Contact ({pressRequests.length + contactRequests.length})
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Profil & Bio
              </button>

              <button
                onClick={() => setActiveTab('beauty')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'beauty'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Beauty Edit CMS ({beautyArticles.length})
              </button>

              <button
                onClick={() => setActiveTab('tv')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'tv'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Projets Télévision
              </button>

              <button
                onClick={() => setActiveTab('stats')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'stats'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Statistiques & Réseaux
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Paramètres Site
              </button>

              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-2 font-mono uppercase transition-colors ${
                  activeTab === 'logs'
                    ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                    : 'text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A]'
                }`}
              >
                Audit Log ({auditLogs.length})
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="flex-1 overflow-y-auto max-h-[60vh] pr-2">
              
              {/* 1. COLLABORATIONS TAB */}
              {activeTab === 'collabs' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl text-[#F7F3EE]">
                      Demandes de Collaboration Enregistrées ({collaborations.length})
                    </h3>
                    <span className="text-[11px] text-[#B79A7E] font-mono">
                      Données sécurisées avec statut en temps réel
                    </span>
                  </div>

                  {collaborations.length === 0 ? (
                    <p className="p-8 text-center text-xs text-[#C7B8A8]">Aucune demande pour le moment.</p>
                  ) : (
                    collaborations.map((collab) => (
                      <div
                        key={collab.id}
                        className="p-6 border border-[#27272A] bg-[#141210] space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#27272A]/70">
                          <div>
                            <span className="text-xs font-bold text-[#F7F3EE] font-serif text-base">
                              {collab.companyName}
                            </span>
                            <span className="text-xs text-[#C7B8A8] ml-2">
                              ({collab.contactName} · {collab.country})
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-[#C7B8A8]">Statut :</span>
                            <select
                              value={collab.status}
                              onChange={(e) => updateCollaborationStatus(collab.id, e.target.value as CollaborationStatus)}
                              className="bg-[#0B0B0B] border border-[#B79A7E]/50 text-xs px-2 py-1 text-[#F7F3EE] font-mono uppercase"
                            >
                              {statuses.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Details grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#C7B8A8]">
                          <div>
                            <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">TYPE</span>
                            <span className="text-[#F7F3EE]">{collab.projectType}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">BUDGET</span>
                            <span className="text-[#F7F3EE]">{collab.budgetRange}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#B79A7E] block uppercase">CONTACT</span>
                            <span className="text-[#F7F3EE] font-mono">{collab.email} · {collab.phone}</span>
                          </div>
                        </div>

                        <div className="text-xs text-[#C7B8A8] bg-[#0B0B0B] p-3 border border-[#27272A]">
                          <span className="text-[10px] font-mono text-[#B79A7E] block uppercase mb-1">DESCRIPTION & OBJECTIFS</span>
                          {collab.description}
                          {collab.deliverables && (
                            <div className="mt-2 pt-2 border-t border-[#27272A] text-[11px]">
                              <strong className="text-[#F7F3EE]">Livrables demandés :</strong> {collab.deliverables}
                            </div>
                          )}
                          {collab.attachmentName && (
                            <div className="mt-2 text-[11px] text-[#B79A7E] font-mono">
                              📎 Pièce jointe : {collab.attachmentName}
                            </div>
                          )}
                        </div>

                        {/* Internal notes */}
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-[10px] font-mono text-[#C7B8A8] uppercase">Note interne :</span>
                          <input
                            type="text"
                            defaultValue={collab.internalNotes || ''}
                            onBlur={(e) => updateCollaborationStatus(collab.id, collab.status, e.target.value)}
                            placeholder="Ajouter une note de suivi..."
                            className="flex-1 bg-[#0B0B0B] border border-[#27272A] px-3 py-1 text-xs text-[#F7F3EE]"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* 2. PRESS & CONTACT TAB */}
              {activeTab === 'press' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-[#F7F3EE] mb-3">
                      Demandes Presse & Média ({pressRequests.length})
                    </h3>
                    <div className="space-y-3">
                      {pressRequests.map((pr) => (
                        <div key={pr.id} className="p-4 border border-[#27272A] bg-[#141210] space-y-2 text-xs">
                          <div className="flex justify-between items-center text-[#F7F3EE] font-serif text-base">
                            <span>{pr.name} — <span className="font-sans text-xs text-[#B79A7E]">{pr.media} ({pr.country})</span></span>
                            <span className="text-[10px] font-mono text-[#C7B8A8]">{pr.deadline}</span>
                          </div>
                          <p className="font-mono text-[11px] text-[#C7B8A8]">{pr.email}</p>
                          <p className="text-[#F7F3EE] font-medium">{pr.topic}</p>
                          <p className="text-[#C7B8A8] font-light">{pr.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#27272A]">
                    <h3 className="font-serif text-xl text-[#F7F3EE] mb-3">
                      Messages Publics / Contact Général ({contactRequests.length})
                    </h3>
                    <div className="space-y-3">
                      {contactRequests.map((cnt) => (
                        <div key={cnt.id} className="p-4 border border-[#27272A] bg-[#141210] space-y-1 text-xs">
                          <div className="flex justify-between text-[#F7F3EE]">
                            <span className="font-semibold">{cnt.name} ({cnt.email})</span>
                            <span className="text-[10px] font-mono text-[#C7B8A8]">{cnt.type}</span>
                          </div>
                          <p className="font-medium text-[#B79A7E]">{cnt.subject}</p>
                          <p className="text-[#C7B8A8]">{cnt.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. PROFILE & BIO TAB */}
              {activeTab === 'profile' && (
                <form onSubmit={handleProfileSave} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Nom Public</label>
                      <input
                        type="text"
                        value={editProfile.public_name}
                        onChange={(e) => setEditProfile({ ...editProfile, public_name: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Nom Professionnel</label>
                      <input
                        type="text"
                        value={editProfile.professional_name}
                        onChange={(e) => setEditProfile({ ...editProfile, professional_name: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Bio Courte (FR)</label>
                    <textarea
                      rows={3}
                      value={editProfile.short_bio.fr}
                      onChange={(e) => setEditProfile({
                        ...editProfile,
                        short_bio: { ...editProfile.short_bio, fr: e.target.value }
                      })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Bio Longue / Éditoriale (FR)</label>
                    <textarea
                      rows={5}
                      value={editProfile.long_bio.fr}
                      onChange={(e) => setEditProfile({
                        ...editProfile,
                        long_bio: { ...editProfile.long_bio, fr: e.target.value }
                      })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] p-3 text-[#F7F3EE]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    {profileSaved && <span className="text-emerald-400 font-mono">Modifications sauvegardées avec succès !</span>}
                    <button
                      type="submit"
                      className="ml-auto px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] font-semibold tracking-wider uppercase hover:bg-[#B79A7E]"
                    >
                      ENREGISTRER LE PROFIL
                    </button>
                  </div>
                </form>
              )}

              {/* 4. BEAUTY EDIT ARTICLES TAB */}
              {activeTab === 'beauty' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#F7F3EE]">Articles du Lola Beauty Edit</h3>
                    <button
                      onClick={() => setNewArticleMode(!newArticleMode)}
                      className="px-4 py-2 border border-[#B79A7E] text-xs font-mono text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase"
                    >
                      {newArticleMode ? 'Annuler' : '+ Rédiger un nouvel article'}
                    </button>
                  </div>

                  {newArticleMode && (
                    <form onSubmit={handleCreateArticle} className="p-6 border border-[#B79A7E] bg-[#141210] space-y-4 text-xs">
                      <h4 className="font-serif text-lg text-[#F7F3EE]">Nouvelle Publication Beauté</h4>
                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">Titre de l'article *</label>
                        <input
                          type="text"
                          required
                          value={newArticle.titleFr}
                          onChange={(e) => setNewArticle({ ...newArticle, titleFr: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                          placeholder="ex: Les bienfaits du rétinol encapsulé..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Catégorie</label>
                          <select
                            value={newArticle.category}
                            onChange={(e: any) => setNewArticle({ ...newArticle, category: e.target.value })}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                          >
                            <option value="skin">Skincare</option>
                            <option value="makeup">Makeup</option>
                            <option value="hair">Coiffure</option>
                            <option value="fragrance">Parfumerie</option>
                            <option value="beauty">Beauté Globale</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-mono text-[#C7B8A8] mb-1">Temps de lecture</label>
                          <input
                            type="text"
                            value={newArticle.readTime}
                            onChange={(e) => setNewArticle({ ...newArticle, readTime: e.target.value })}
                            className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">Extrait / Chapô</label>
                        <textarea
                          rows={2}
                          value={newArticle.excerptFr}
                          onChange={(e) => setNewArticle({ ...newArticle, excerptFr: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[#C7B8A8] mb-1">Contenu complet</label>
                        <textarea
                          rows={5}
                          value={newArticle.contentFr}
                          onChange={(e) => setNewArticle({ ...newArticle, contentFr: e.target.value })}
                          className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newArticle.isSponsored}
                            onChange={(e) => setNewArticle({ ...newArticle, isSponsored: e.target.checked })}
                          />
                          <span>Contenu Partenaire / Sponsorisé</span>
                        </label>
                        {newArticle.isSponsored && (
                          <input
                            type="text"
                            placeholder="Nom du sponsor"
                            value={newArticle.sponsorName}
                            onChange={(e) => setNewArticle({ ...newArticle, sponsorName: e.target.value })}
                            className="bg-[#0B0B0B] border border-[#27272A] p-2 text-[#F7F3EE]"
                          />
                        )}
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#F7F3EE] text-[#0B0B0B] font-semibold tracking-wider uppercase hover:bg-[#B79A7E]"
                      >
                        PUBLIER L’ARTICLE
                      </button>
                    </form>
                  )}

                  <div className="space-y-3">
                    {beautyArticles.map((art) => (
                      <div key={art.id} className="p-4 border border-[#27272A] bg-[#141210] flex items-center justify-between text-xs">
                        <div>
                          <p className="font-serif text-lg text-[#F7F3EE]">{art.title.fr}</p>
                          <p className="text-[#C7B8A8] font-mono text-[11px]">{art.category} · {art.publishedAt} · {art.status}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => deleteBeautyArticle(art.id)}
                            className="p-2 text-red-400 hover:text-red-300 border border-[#27272A]"
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

              {/* 5. TV PROJECTS TAB */}
              {activeTab === 'tv' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-[#F7F3EE]">Projets Télévisuels</h3>
                  {tvProjects.map((p) => (
                    <div key={p.id} className="p-6 border border-[#27272A] bg-[#141210] space-y-3 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-serif text-2xl text-[#F7F3EE]">{p.title.fr}</span>
                        <span className="font-mono text-[#B79A7E]">{p.year}</span>
                      </div>
                      <p className="text-[#E8DDD4] font-medium">{p.role.fr}</p>
                      <p className="text-[#C7B8A8]">{p.description.fr}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 6. STATS TAB */}
              {activeTab === 'stats' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-[#F7F3EE]">Statistiques Publiques Vérifiables</h3>
                  <p className="text-xs text-[#C7B8A8]">
                    Conformément au CDC, les chiffres ne sont jamais codés en dur et doivent toujours comporter une source d'authentification.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stats.map((st) => (
                      <div key={st.id} className="p-4 border border-[#27272A] bg-[#141210] space-y-2 text-xs">
                        <span className="font-mono text-[11px] text-[#B79A7E] uppercase">{st.platform} — {st.metric}</span>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            value={st.display_value}
                            onChange={(e) => updateStat({ ...st, display_value: e.target.value })}
                            className="bg-[#0B0B0B] border border-[#27272A] p-2 text-lg font-serif text-[#F7F3EE] w-32"
                          />
                          <span className="text-[11px] text-[#C7B8A8] font-mono">Source : {st.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. SETTINGS TAB */}
              {activeTab === 'settings' && (
                <div className="space-y-4 text-xs">
                  <h3 className="font-serif text-xl text-[#F7F3EE]">Paramètres Généraux du Domaine</h3>
                  <div className="space-y-3 max-w-lg">
                    <div>
                      <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Email Général</label>
                      <input
                        type="email"
                        value={siteSettings.generalEmail}
                        onChange={(e) => updateSiteSettings({ ...siteSettings, generalEmail: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Email Collaborations</label>
                      <input
                        type="email"
                        value={siteSettings.collabEmail}
                        onChange={(e) => updateSiteSettings({ ...siteSettings, collabEmail: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[#C7B8A8] uppercase mb-1">Email Presse</label>
                      <input
                        type="email"
                        value={siteSettings.pressEmail}
                        onChange={(e) => updateSiteSettings({ ...siteSettings, pressEmail: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#27272A] p-2.5 text-[#F7F3EE]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 8. AUDIT LOGS TAB */}
              {activeTab === 'logs' && (
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-[#F7F3EE]">Journal d’Audit Administratif ({auditLogs.length})</h3>
                  <div className="space-y-2">
                    {auditLogs.map((log) => (
                      <div key={log.id} className="p-3 border border-[#27272A] bg-[#0E0C0B] flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-[#B79A7E] font-bold mr-2">[{log.action}]</span>
                          <span className="text-[#F7F3EE]">{log.entity} (#{log.entityId})</span>
                          <span className="text-[#C7B8A8]/60 ml-2">par {log.user}</span>
                        </div>
                        <span className="text-[#C7B8A8]/60">{log.timestamp}</span>
                      </div>
                    ))}
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
