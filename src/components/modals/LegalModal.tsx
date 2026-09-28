import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies';
}

export const LegalModal: React.FC<LegalModalProps> = ({ type }) => {
  const { setCurrentView, lang, t } = useApp();

  const getTitle = () => {
    if (lang === 'ar') {
      switch (type) {
        case 'privacy': return 'سياسة الخصوصية';
        case 'terms': return 'شروط الاستخدام الرسمية';
        case 'cookies': return 'سياسة ملفات تعريف الارتباط';
      }
    }
    if (lang === 'en') {
      switch (type) {
        case 'privacy': return 'Privacy Policy';
        case 'terms': return 'Terms of Use';
        case 'cookies': return 'Cookie Policy & Privacy Management';
      }
    }
    switch (type) {
      case 'privacy': return 'Politique de Confidentialité';
      case 'terms': return 'Conditions Générales d’Utilisation';
      case 'cookies': return 'Politique des Cookies & Respect de la Vie Privée';
    }
  };

  const getBadge = () => {
    if (lang === 'ar') return 'المعلومات القانونية والامتثال · IM-LOLLA.COM';
    if (lang === 'en') return 'LEGAL NOTICE & COMPLIANCE · IM-LOLLA.COM';
    return 'MENTIONS LÉGALES & CONFORMITÉ · IM-LOLLA.COM';
  };

  const getCloseText = () => {
    if (lang === 'ar') return 'إغلاق';
    if (lang === 'en') return 'UNDERSTOOD / CLOSE';
    return 'COMPRIS / FERMER';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close Button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#12100E]/90 sm:bg-transparent"
          aria-label={t.nav.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>{getBadge()}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] font-light">
            {getTitle()}
          </h1>
        </div>

        {/* Content based on type and lang */}
        <div className="space-y-6 text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
          {type === 'privacy' && (
            lang === 'ar' ? (
              <>
                <p>
                  تنظم سياسة الخصوصية هذه معالجة البيانات التي يتم جمعها عبر الموقع الرسمي المعتمد <strong className="text-[#F7F3EE]">https://im-lolla.com</strong>.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">١. البيانات المجمعة</h3>
                <p>
                  نقوم فقط بجمع المعلومات المقدمة طواعية من قبل المستخدمين في إطار طلبات الشراكة المهنية، الاستفسارات الصحفية أو الرسائل العامة (الاسم، جهة العمل، البريد الإلكتروني، رقم الهاتف، وملخص المشروع).
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">٢. الأهداف والحماية</h3>
                <p>
                  هذه البيانات مخصصة حصراً لإدارة أعمال لولا لدراسة مقترحات التعاون، ولا يتم بيعها أو مشاركتها مع أي طرف ثالث لأغراض تجارية إعلانية.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">٣. حقوقكم</h3>
                <p>
                  يحق لكم في أي وقت طلب الوصول إلى بياناتكم الشخصية أو تعديلها أو حذفها عبر مراسلة: <span className="font-mono text-[#F7F3EE]">hello@im-lolla.com</span>.
                </p>
              </>
            ) : lang === 'en' ? (
              <>
                <p>
                  This Privacy Policy governs the processing of information gathered via the exclusive official website <strong className="text-[#F7F3EE]">https://im-lolla.com</strong>.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Collected Information</h3>
                <p>
                  We strictly process information voluntarily provided through official business inquiry and press request forms (full name, company affiliation, corporate email, telephone, project description).
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Purpose & Protection</h3>
                <p>
                  All correspondence is handled exclusively by Lola’s executive management for evaluating partnerships. Data is never commercialized, rented, or transferred to third-party ad networks.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">3. Your Rights</h3>
                <p>
                  In accordance with privacy standards (GDPR), you retain full rights to inspect, update, or remove your contact records by emailing <span className="font-mono text-[#F7F3EE]">hello@im-lolla.com</span>.
                </p>
              </>
            ) : (
              <>
                <p>
                  La présente Politique de Confidentialité régit le traitement des données transmises via le site officiel exclusif <strong className="text-[#F7F3EE]">https://im-lolla.com</strong>.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Données collectées</h3>
                <p>
                  Nous collectons uniquement les informations explicitement transmises par les professionnels et journalistes (nom, marque, email, téléphone, descriptif de projet).
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Finalité et Sécurité</h3>
                <p>
                  Ces données sont strictement destinées au management de Lola pour l’examen des partenariats et ne font l’objet d’aucune cession commerciale.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">3. Vos Droits</h3>
                <p>
                  Vous disposez d’un droit d’accès, de rectification et d’effacement sur simple demande à <span className="font-mono text-[#F7F3EE]">hello@im-lolla.com</span>.
                </p>
              </>
            )
          )}

          {type === 'terms' && (
            lang === 'ar' ? (
              <>
                <p>
                  يخضع استخدام الموقع <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> للموافقة الكاملة على الشروط والأحكام الرسمية.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">١. الملكية الفكرية</h3>
                <p>
                  جميع المواد البصرية، الصور، الشعارات، الفيديوهات والنصوص التحريرية محمية بحقوق الملكية الفكرية الحصرية للولا (خولة كباش). يُمنع أي استخدام أو نشر غير مرخص كتابياً.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">٢. النطاق الرسمي المعتمد</h3>
                <p>
                  النطاق <strong className="text-[#B79A7E]">im-lolla.com</strong> هو المنفذ الرسمي الوحيد والمعتمد. لا تتحمل إدارة أعمال لولا أي مسؤولية عن أي منصات أو حسابات غير معتمدة.
                </p>
              </>
            ) : lang === 'en' ? (
              <>
                <p>
                  Accessing <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> constitutes agreement with these terms of use.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Intellectual Property</h3>
                <p>
                  All photography, branding assets, editorial writings, and broadcast excerpts are protected under copyright law for Lola / Khaoula Kebbache. Unauthorized reproduction is strictly prohibited.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Official Authenticity</h3>
                <p>
                  The domain <strong className="text-[#B79A7E]">im-lolla.com</strong> is the sole authorized digital home for Lola. Third-party unverified accounts hold no official mandate.
                </p>
              </>
            ) : (
              <>
                <p>
                  L'accès au site <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> implique l’acceptation des présentes conditions d’utilisation.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Propriété Intellectuelle</h3>
                <p>
                  L’ensemble des contenus (marques, photographies, vidéos, textes éditoriaux) est la propriété exclusive de Lola / Khaoula Kebbache. Toute reproduction non autorisée est interdite.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Authenticité du Domaine</h3>
                <p>
                  Le domaine <strong className="text-[#B79A7E]">im-lolla.com</strong> constitue l’unique canal officiel en ligne de Lola.
                </p>
              </>
            )
          )}

          {type === 'cookies' && (
            lang === 'ar' ? (
              <>
                <p>
                  يطبق الموقع الرسمي <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> سياسة صارمة تحترم خصوصية الزوار.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">١. ملفات تعريف ارتباط فنية فقط</h3>
                <p>
                  تقتصر ملفات تعريف الارتباط على حفظ تفضيلات اللغة (العربية، الفرنسية، الإنجليزية) وضمان أمان تصفح الموقع والاتصال الآمن.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">٢. عدم وجود تتبع إعلاني</h3>
                <p>
                  لا يحتوي هذا الموقع على أي أدوات تتبع إعلانية متطفلة أو بيع لبيانات التصفح.
                </p>
              </>
            ) : lang === 'en' ? (
              <>
                <p>
                  The official site <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> enforces a strict data minimization policy.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Strictly Essential Cookies</h3>
                <p>
                  Only lightweight technical cookies are utilized to retain your language choice (FR / AR / EN) and secure form transmissions.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Zero Commercial Tracking</h3>
                <p>
                  This site does not employ behavioral marketing pixels or monetize user session data.
                </p>
              </>
            ) : (
              <>
                <p>
                  Le site officiel <strong className="text-[#F7F3EE]">https://im-lolla.com</strong> applique une politique de sobriété numérique stricte.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">1. Cookies strictement nécessaires</h3>
                <p>
                  Ces cookies techniques sont indispensables pour mémoriser vos préférences de langue (FR / AR / EN) et assurer la sécurité de navigation.
                </p>
                <h3 className="font-serif text-lg text-[#F7F3EE] font-medium pt-2">2. Absence de traçage commercial</h3>
                <p>
                  Ce site n’intègre aucun tracker publicitaire tiers intrusif et ne revend aucune trace numérique.
                </p>
              </>
            )
          )}
        </div>

        <div className="pt-8 mt-8 border-t border-[#27272A] flex justify-end">
          <button
            onClick={() => setCurrentView('home')}
            className="w-full sm:w-auto px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
          >
            {getCloseText()}
          </button>
        </div>

      </div>
    </div>
  );
};
