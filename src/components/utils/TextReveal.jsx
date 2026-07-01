import { useEffect, useRef, useState } from 'react';

export default function TextReveal({
  text = '',
  letterByLetter = false,
  delay = 0,
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  if (letterByLetter) {
    return (
      <span ref={ref} className={className} aria-label={text}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`text-reveal-char ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: `${i * 0.04}s` }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`text-reveal-word ${isRevealed ? 'revealed' : ''}`}
          style={{ animationDelay: `${i * 0.08}s`, marginRight: '0.3em' }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
