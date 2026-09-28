import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Send, ShieldCheck, CheckCircle2, AlertCircle, UploadCloud, FileText } from 'lucide-react';

export const CollaborateModal: React.FC = () => {
  const { t, setCurrentView, submitCollaboration } = useApp();

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    projectType: 'Brand Ambassador',
    description: '',
    deliverables: '',
    desiredDate: '',
    budgetRange: '25 000 € – 50 000 €',
    website: '',
    socialUrl: '',
    attachmentName: '',
    honeypot: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const projectTypes = [
    'Brand Ambassador',
    'Brand Campaign',
    'Product Launch',
    'Beauty Campaign',
    'UGC & Social Content',
    'TV / Media Production',
    'Event Hosting & Ceremonies',
    'Editorial Haute Couture',
    'Autre collaboration'
  ];

  const budgetRanges = [
    'Moins de 10 000 €',
    '10 000 € – 25 000 €',
    '25 000 € – 50 000 €',
    '50 000 € – 100 000 €',
    'Plus de 100 000 €',
    'Budget sur devis / À définir'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // File validation: PDF, DOCX, PPTX, JPG, PNG, max 10MB
      if (file.size > 10 * 1024 * 1024) {
        setError('Le fichier dépasse la taille maximale autorisée (10 Mo).');
        return;
      }
      setFormData({ ...formData, attachmentName: file.name });
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError('Veuillez accepter l’attestation professionnelle pour transmettre votre demande.');
      return;
    }
    setIsSubmitting(true);
    setError(null);

    const res = await submitCollaboration({
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      projectType: formData.projectType,
      description: formData.description,
      deliverables: formData.deliverables,
      desiredDate: formData.desiredDate,
      budgetRange: formData.budgetRange,
      website: formData.website,
      socialUrl: formData.socialUrl,
      attachmentName: formData.attachmentName,
      honeypot: formData.honeypot
    });

    setIsSubmitting(false);
    if (res.success) {
      setSuccess(true);
    } else {
      setError(res.error || 'Une erreur est survenue lors de l’enregistrement de votre dossier.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#141210]/80 sm:bg-transparent"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-16 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-[#B79A7E] mx-auto animate-pulse" />
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE]">
              {t.collaborate.successTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#C7B8A8] max-w-xl mx-auto leading-relaxed">
              {t.collaborate.successDesc}
            </p>
            <div className="pt-6">
              <button
                onClick={() => setCurrentView('home')}
                className="px-8 py-3.5 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
              >
                RETOUR AU SITE PRINCIPAL
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-8 pr-12">
              <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                FORMULAIRE INSTITUTIONNEL & MARQUES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] font-light mt-1">
                {t.collaborate.modalTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#C7B8A8] mt-2 font-light">
                Chaque proposition est analysée avec rigueur par l’équipe de direction de Lola.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              
              {/* Spam Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="user-verification-hp"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                />
              </div>

              {/* Grid 1: Company & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.company} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="ex: L'Oréal, Dior, Maison de Mode..."
                  />
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.contactName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="Nom du responsable marketing / production"
                  />
                </div>
              </div>

              {/* Grid 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="contact@votre-entreprise.com"
                  />
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="+33 1 ... / +213 ..."
                  />
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.country} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="France, Algérie, Émirats..."
                  />
                </div>
              </div>

              {/* Grid 3: Project Type & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.projectType} *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.budgetRange}
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                  >
                    {budgetRanges.map((br) => (
                      <option key={br} value={br}>{br}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deliverables & Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.deliverables} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deliverables}
                    onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="ex: Vidéo TV, Posts, Événement VIP, Shooting"
                  />
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                    {t.collaborate.desiredDate}
                  </label>
                  <input
                    type="text"
                    value={formData.desiredDate}
                    onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                    placeholder="ex: Q4 2026, Mois de Novembre..."
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                  {t.collaborate.description} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-4 py-3 text-[#F7F3EE]"
                  placeholder="Détaillez le synopsis de votre projet, vos objectifs de marque et la vision que vous souhaitez développer avec Lola..."
                />
              </div>

              {/* Attachment upload */}
              <div>
                <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-2">
                  {t.collaborate.attachment}
                </label>
                <div className="border border-dashed border-[#27272A] p-4 text-center hover:border-[#B79A7E] transition-colors relative">
                  <input
                    type="file"
                    accept=".pdf,.docx,.pptx,.jpg,.png"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center gap-2 text-[#C7B8A8]">
                    {formData.attachmentName ? (
                      <>
                        <FileText className="w-4 h-4 text-[#B79A7E]" />
                        <span className="text-[#F7F3EE] font-mono">{formData.attachmentName}</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 text-[#B79A7E]" />
                        <span>Cliquez pour sélectionner votre fichier brief (PDF, DOCX, max 10 Mo)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 accent-[#B79A7E]"
                  />
                  <span className="text-[11px] text-[#C7B8A8]">
                    {t.collaborate.consent}
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#C7B8A8]/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
                  <span>Dossier chiffré & confidentiel</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all disabled:opacity-50 min-h-[48px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'ENREGISTREMENT...' : t.collaborate.submit}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
