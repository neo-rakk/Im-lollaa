import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, siteSettings, submitContact, setCurrentView } = useApp();
  const [activeTab, setActiveTab] = useState<'general' | 'professional'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const res = await submitContact({
      type: activeTab,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      honeypot: formData.honeypot
    });

    setIsSubmitting(false);
    if (res.success) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } else {
      setError(res.error || 'Erreur lors de l’envoi');
    }
  };

  return (
    <section id="contact-section" className="py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>{t.contact.kicker}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.contact.title}
            </h2>
          </div>
          <p className="text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            COMMUNICATION OFFICIELLE & SÉCURISÉE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Official Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#27272A] bg-[#141210] p-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#F7F3EE] font-medium">
                Adresses Électroniques Officielles
              </h3>
              <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                Afin de garantir un traitement rapide et sécurisé, vos communications sont directement orientées vers les pôles dédiés.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#27272A]/70 text-xs">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
                    CONTACT GÉNÉRAL
                  </span>
                  <p className="text-sm font-medium text-[#F7F3EE] font-mono mt-0.5">
                    {siteSettings.generalEmail}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
                    COLLABORATIONS & MARQUES
                  </span>
                  <p className="text-sm font-medium text-[#F7F3EE] font-mono mt-0.5">
                    {siteSettings.collabEmail}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
                    RELATIONS PRESSE & MÉDIAS
                  </span>
                  <p className="text-sm font-medium text-[#F7F3EE] font-mono mt-0.5">
                    {siteSettings.pressEmail}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#27272A]/60">
                <button
                  onClick={() => setCurrentView('collaborate')}
                  className="w-full py-3 border border-[#B79A7E] text-xs font-semibold tracking-wider text-[#B79A7E] hover:bg-[#B79A7E] hover:text-black uppercase transition-colors"
                >
                  DÉPOSER UN BRIEF MARQUE OFFICIEL
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Tabs */}
          <div className="lg:col-span-7 border border-[#27272A] bg-[#141210] p-8 md:p-10">
            {/* Tabs for General vs Professional */}
            <div className="flex border-b border-[#27272A] mb-8">
              <button
                onClick={() => setActiveTab('general')}
                className={`flex-1 pb-4 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === 'general'
                    ? 'text-[#F7F3EE] border-b-2 border-[#B79A7E]'
                    : 'text-[#C7B8A8]/60 hover:text-[#F7F3EE]'
                }`}
              >
                {t.contact.generalTab}
              </button>
              <button
                onClick={() => setActiveTab('professional')}
                className={`flex-1 pb-4 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === 'professional'
                    ? 'text-[#F7F3EE] border-b-2 border-[#B79A7E]'
                    : 'text-[#C7B8A8]/60 hover:text-[#F7F3EE]'
                }`}
              >
                {t.contact.proTab}
              </button>
            </div>

            {success ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B79A7E] mx-auto" />
                <h4 className="font-serif text-2xl text-[#F7F3EE]">
                  Message transmis avec succès
                </h4>
                <p className="text-xs sm:text-sm text-[#C7B8A8] max-w-md mx-auto">
                  {t.contact.success}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2.5 border border-[#27272A] text-xs text-[#F7F3EE] hover:border-[#B79A7E]"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Spam Honeypot Field (invisible to humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="website-hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                      {t.contact.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-xs text-[#F7F3EE] transition-colors"
                      placeholder="Prénom Nom"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                      {t.contact.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-xs text-[#F7F3EE] transition-colors"
                      placeholder="votre.email@domaine.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-xs text-[#F7F3EE] transition-colors"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.contact.message} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-xs text-[#F7F3EE] transition-colors"
                    placeholder="Rédigez votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'TRANSMISSION EN COURS...' : t.contact.send}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
