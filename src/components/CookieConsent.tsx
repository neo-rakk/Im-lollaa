import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const { t, setCurrentView } = useApp();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('lola_cookie_consent_v1');
      if (!consent) {
        // Show after brief dwell
        const timer = setTimeout(() => setShowBanner(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('lola_cookie_consent_v1', 'accepted');
    } catch (e) {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('lola_cookie_consent_v1', 'declined');
    } catch (e) {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#12100E] border border-[#27272A] p-5 shadow-2xl animate-fadeIn text-[#F7F3EE] text-xs"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#B79A7E] shrink-0 mt-0.5" />
        <div className="space-y-3">
          <p className="text-[#C7B8A8] font-light leading-relaxed">
            {t.cookies.message}{' '}
            <button
              onClick={() => setCurrentView('cookies')}
              className="text-[#B79A7E] underline hover:text-[#F7F3EE]"
            >
              {t.cookies.policy}
            </button>.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-[#F7F3EE] text-[#0B0B0B] font-semibold tracking-wider text-[11px] uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
            >
              {t.cookies.accept}
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-[#27272A] text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] text-[11px] tracking-wider uppercase transition-colors"
            >
              {t.cookies.decline}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
