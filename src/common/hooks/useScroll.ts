import { useEffect } from 'react';

type ScrollHandler = (e: Event) => void;

export function useScroll(handler: ScrollHandler) {
  useEffect(() => {
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [handler]);
}
