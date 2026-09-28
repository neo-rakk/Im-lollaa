import React from 'react';
import { useApp } from '../context/AppContext';
import { Instagram, Video, Youtube, ExternalLink, CheckCircle } from 'lucide-react';

export const SocialPresenceSection: React.FC = () => {
  const { t, socialAccounts, stats } = useApp();

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-5 h-5 text-[#B79A7E]" />;
      case 'tiktok':
        return <Video className="w-5 h-5 text-[#B79A7E]" />;
      case 'youtube':
        return <Youtube className="w-5 h-5 text-[#B79A7E]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-[#B79A7E]" />;
    }
  };

  const instagramStat = stats.find((s) => s.platform.toLowerCase() === 'instagram');

  return (
    <section id="social-presence" className="py-16 sm:py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-2 sm:mb-3">
              {t.social.kicker}
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.social.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#C7B8A8]/70">
            <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
            <span>{t.social.sourceNote}</span>
          </div>
        </div>

        {/* Social Accounts Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {socialAccounts.filter((s) => s.is_public).map((account) => (
            <a
              key={account.id}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#27272A] bg-[#12100E] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B79A7E]/60 transition-all duration-300 min-h-[220px]"
            >
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#27272A]/60">
                <div className="p-3 rounded-full border border-[#27272A] bg-[#1A1816] group-hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  {getPlatformIcon(account.platform)}
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 shrink-0" />
                  {t.social.verified}
                </span>
              </div>

              <div className="my-4 sm:my-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-medium">
                  {account.label}
                </h3>
                <p className="font-mono text-xs text-[#C7B8A8] mt-1">
                  {account.handle}
                </p>

                {account.platform === 'instagram' && instagramStat && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#27272A]/40 flex items-center justify-between text-xs">
                    <span className="text-[#C7B8A8]/70 text-[11px]">Audience vérifiée :</span>
                    <span className="font-serif text-lg text-[#F7F3EE] font-bold">
                      {instagramStat.display_value}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs tracking-wider text-[#C7B8A8] group-hover:text-[#F7F3EE] transition-colors pt-2 min-h-[36px]">
                <span className="text-[11px] sm:text-xs">REJOINDRE LE COMPTE OFFICIEL</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B79A7E]" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
