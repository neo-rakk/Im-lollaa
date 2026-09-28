import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';

interface ScrollOptions {
  offset?: number;
  duration?: number;
  ease?: string;
  onComplete?: () => void;
}

export const useEditorialScroll = (sectionIds: string[] = []) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const isScrollingRef = useRef(false);

  // Compute scroll progress & track active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer for precise active section tracking
  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry that has the highest intersection ratio or is currently intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the one closest to top or with greatest intersection
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0, 0.2, 0.5, 0.8]
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  /**
   * Premium Editorial Smooth Scroll function
   * Integrates GSAP animation with luxury cubic easing,
   * navbar offset compensation, and WCAG prefers-reduced-motion check.
   */
  const scrollToSection = useCallback(
    (targetId: string, options: ScrollOptions = {}) => {
      const {
        offset = 80, // Default navbar height (h-20 = 80px)
        duration = 1.1,
        ease = 'power3.inOut',
        onComplete
      } = options;

      const element = document.getElementById(targetId);
      if (!element) {
        console.warn(`[useEditorialScroll] Section #${targetId} not found.`);
        return;
      }

      // Check if user prefers reduced motion (WCAG 2.2 AA requirement)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const targetPosition = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - offset);

      if (prefersReducedMotion) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto'
        });
        setActiveSection(targetId);
        if (onComplete) onComplete();
        return;
      }

      isScrollingRef.current = true;

      // Animate window scroll using GSAP with luxury editorial easing
      const scrollObj = { y: window.pageYOffset };

      gsap.killTweensOf(scrollObj);

      gsap.to(scrollObj, {
        y: targetPosition,
        duration,
        ease,
        onUpdate: () => {
          window.scrollTo(0, scrollObj.y);
        },
        onComplete: () => {
          isScrollingRef.current = false;
          setActiveSection(targetId);
          if (onComplete) onComplete();
        }
      });
    },
    []
  );

  return {
    scrollToSection,
    activeSection,
    scrollProgress
  };
};
