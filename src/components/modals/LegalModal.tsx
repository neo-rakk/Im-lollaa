import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies';
}

export const LegalModal: React.FC<LegalModalProps> = ({ type }) => {
  const { setCurrentView } = useApp();

  const getTitle = () => {
    switch (type) {
      case 'privacy':
        return 'Politique de Confidentialité';
      case 'terms':
        return 'Conditions Générales d’Utilisation';
      case 'cookies':
        return 'Politique des Cookies & Respect de la Vie Privée';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close Button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#12100E]/90 sm:bg-transparent"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>MENTIONS LÉGALES & CONFORMITÉ · IM-LOLLA.COM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] font-light">
            {getTitle()}
          </h1>
        </div>

        {/* Content based on type */}
        <div className="space-y-6 text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                La présente Politique de Confidentialité régit le traitement des données collectées via le site officiel exclusif <strong className="text-[#F7F3EE]">https://im-lolla.com</strong>.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Données collectées</h3>
              <p>
                Nous collectons uniquement les informations explicitement et volontairement transmises par les utilisateurs dans le cadre de demandes de collaboration professionnelle, de sollicitations presse ou de messages de contact (nom, entreprise, email professionnel, numéro de téléphone, description de projet).
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Finalité et Sécurité</h3>
              <p>
                Ces données sont strictement destinées au management de Lola pour l’examen des partenariats et ne font l’objet d’aucune cession ou commercialisation auprès de tiers. Toutes les données sont protégées par des mesures techniques rigoureuses.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">3. Vos Droits</h3>
              <p>
                Conformément aux réglementations sur la protection des données (RGPD), vous disposez d’un droit d’accès, de rectification et d’effacement de vos données personnelles sur simple demande à <span className="font-mono text-[#F7F3EE]">hello@im-lolla.com</span>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                L'accès et l'utilisation du site <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> impliquent l’acceptation pleine et entière des conditions d’utilisation décrites ci-après.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Propriété Intellectuelle</h3>
              <p>
                L’ensemble des contenus (marques, logos, photographies, vidéos, textes éditoriaux, chartes graphiques) est protégé par le droit de la propriété intellectuelle. Toute reproduction, diffusion ou exploitation non autorisée écrite par Lola / Khaoula Kebbache est strictement interdite.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Authenticité & Anti-Usurpation</h3>
              <p>
                Le domaine <strong className="text-[#B79A7E]">im-lolla.com</strong> constitue l’unique canal officiel en ligne de Lola. Aucune autre plateforme, profil non certifié ou site tiers ne saurait engager la responsabilité de son management.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p>
                Le site officiel <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> applique une politique de sobriété numérique stricte.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Cookies strictement nécessaires</h3>
              <p>
                Ces cookies techniques sont indispensables pour mémoriser vos préférences de langue (FR / AR / EN) et assurer la sécurité des formulaires. Ils ne requièrent pas de consentement préalable conformément à la législation.
              </p>
              <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Absence de traçage publicitaire intrusif</h3>
              <p>
                Ce site n’intègre aucun tracker publicitaire tiers commercial, aucun pixel de reciblage invasif et ne revend aucune trace numérique.
              </p>
            </>
          )}
        </div>

        <div className="pt-8 mt-8 border-t border-[#27272A] flex justify-end">
          <button
            onClick={() => setCurrentView('home')}
            className="w-full sm:w-auto px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
          >
            COMPRIS / FERMER
          </button>
        </div>

      </div>
    </div>
  );
};
