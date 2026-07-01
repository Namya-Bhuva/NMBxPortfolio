import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  threshold = 0.15,
  className = '',
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const dirClass =
    direction === 'left'
      ? 'reveal--left'
      : direction === 'right'
      ? 'reveal--right'
      : 'reveal--up';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
