import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Download, Send, CheckCircle2, AlertCircle, FileText, Image } from 'lucide-react';
import { editorialAssets } from '../../data/assets';

export const PressModal: React.FC = () => {
  const { t, setCurrentView, submitPress } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    media: '',
    email: '',
    country: '',
    topic: '',
    deadline: '',
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

    const res = await submitPress({
      name: formData.name,
      media: formData.media,
      email: formData.email,
      country: formData.country,
      topic: formData.topic,
      deadline: formData.deadline,
      message: formData.message,
      honeypot: formData.honeypot
    });

    setIsSubmitting(false);
    if (res.success) {
      setSuccess(true);
      setFormData({ name: '', media: '', email: '', country: '', topic: '', deadline: '', message: '', honeypot: '' });
    } else {
      setError(res.error || t.press.pressSuccess);
    }
  };

  const handleDownloadAsset = (assetUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = assetUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close Button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#12100E]/90 sm:bg-transparent"
          aria-label={t.nav.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
            {t.press.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] font-light mt-1">
            {t.press.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C7B8A8] mt-2 font-light">
            {t.press.desc}
          </p>
        </div>

        {/* 2 Tabs / Sections: Assets Download & Press Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Downloadable Assets */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-xl text-[#F7F3EE] font-medium border-b border-[#27272A] pb-3">
              {t.press.card2Title}
            </h3>

            {/* Asset 1: Official Biography */}
            <div className="p-4 border border-[#27272A] bg-[#141210] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#B79A7E]" />
                <div>
                  <p className="text-xs font-medium text-[#F7F3EE]">{t.press.officialBio}</p>
                  <p className="text-[10px] text-[#C7B8A8]/70">PDF Trilingual (FR / AR / EN)</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView('about')}
                className="p-2 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E]"
              >
                {t.press.readBio}
              </button>
            </div>

            {/* Asset 2: Official Studio Portrait */}
            <div className="p-4 border border-[#27272A] bg-[#141210] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image className="w-5 h-5 text-[#B79A7E]" />
                <div>
                  <p className="text-xs font-medium text-[#F7F3EE]">Portrait Officiel HD</p>
                  <p className="text-[10px] text-[#C7B8A8]/70">4K Media License</p>
                </div>
              </div>
              <button
                onClick={() => handleDownloadAsset(editorialAssets.officialPortrait, 'Lola_Official_Portrait_HD.svg')}
                className="p-2 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E]"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Asset 3: Haute Couture Editorial Series */}
            <div className="p-4 border border-[#27272A] bg-[#141210] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image className="w-5 h-5 text-[#B79A7E]" />
                <div>
                  <p className="text-xs font-medium text-[#F7F3EE]">Série Éditoriale Mode</p>
                  <p className="text-[10px] text-[#C7B8A8]/70">4K Media License</p>
                </div>
              </div>
              <button
                onClick={() => handleDownloadAsset(editorialAssets.hero, 'Lola_Editorial_Series_01.svg')}
                className="p-2 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E]"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 bg-[#141210] border border-[#27272A] text-[11px] text-[#C7B8A8] leading-relaxed">
              <span className="font-semibold text-[#F7F3EE]">im-lolla.com</span>
              <br />
              « Lola / Khaoula Kebbache »
            </div>
          </div>

          {/* Right Column: Press Form */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#27272A] pt-8 lg:pt-0 lg:pl-10">
            <h3 className="font-serif text-xl text-[#F7F3EE] font-medium border-b border-[#27272A] pb-3 mb-6">
              {t.press.pressContactTitle}
            </h3>

            {success ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B79A7E] mx-auto" />
                <h4 className="font-serif text-2xl text-[#F7F3EE]">
                  {t.collaborate.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#C7B8A8]">
                  {t.press.pressSuccess}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 border border-[#27272A] text-xs text-[#F7F3EE] hover:border-[#B79A7E]"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {error && (
                  <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                      {t.press.pressFormName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                      {t.press.pressFormMedia} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.media}
                      onChange={(e) => setFormData({ ...formData, media: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE] min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                      {t.press.pressFormEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                      {t.press.pressFormDeadline}
                    </label>
                    <input
                      type="text"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE] min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                    {t.press.pressFormTopic} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE] min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block font-mono tracking-wider text-[#C7B8A8] uppercase mb-1">
                    {t.press.pressFormMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#27272A] focus:border-[#B79A7E] focus:outline-none px-3.5 py-2.5 text-base sm:text-xs text-[#F7F3EE]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? t.contact.sending : t.press.pressSubmit}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
