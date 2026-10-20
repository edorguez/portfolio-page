import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { useReducedMotion } from './useReducedMotion';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const elements = gsap.utils.toArray<HTMLElement>('[data-animate]');
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        { y: 28 },
        {
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 78%',
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return ref;
}
