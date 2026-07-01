import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading → exit → done

  useEffect(() => {
    let frame;
    let start = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setPhase('exit');
          setTimeout(() => {
            setPhase('done');
            if (onComplete) onComplete();
          }, 600);
        }, 300);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <>
      <style>{`
        .preloader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .preloader.exit {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }
        .preloader-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .preloader-logo svg {
          animation: preloaderPulse 2s ease infinite;
        }
        .preloader-logo-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #fff;
          letter-spacing: 0.1em;
        }
        .preloader-bar-track {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          overflow: hidden;
        }
        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00DC82, #06B6D4);
          border-radius: 4px;
          transition: width 0.1s linear;
          box-shadow: 0 0 12px rgba(0, 220, 130, 0.4);
        }
        .preloader-pct {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          color: #555;
          letter-spacing: 0.1em;
        }
        @keyframes preloaderPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      <div className={`preloader${phase === 'exit' ? ' exit' : ''}`}>
        <div className="preloader-logo">
          <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="24" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="4" x2="4" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="11" y="11" width="6" height="6" rx="1" fill="#00DC82" />
          </svg>
          <span className="preloader-logo-text">NAMYA</span>
        </div>
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="preloader-pct">{Math.round(progress)}%</span>
      </div>
    </>
  );
}
