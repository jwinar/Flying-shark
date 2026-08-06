import { useEffect, useState } from 'react';

export const useInViewport = (ref, rootMargin = '0px') => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    setInViewport(measure());

    const observer = new IntersectionObserver(() => setInViewport(measure()), { rootMargin, threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inViewport;
};
