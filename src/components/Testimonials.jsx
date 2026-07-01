import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './utils/ScrollReveal';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused || !testimonials || testimonials.length === 0) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [paused, active]);

  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[active];

  // Generate initials from name
  const getInitials = (name) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <>
      <style>{`
        .test-section {
          padding: 120px 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        .test-label {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent, #00DC82);
          margin: 0 0 12px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        .test-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent, #00DC82);
        }
        .test-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin: 0 0 60px 0;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .test-card {
          background: var(--bg-card, rgba(255, 255, 255, 0.02));
          border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.06));
          border-radius: var(--radius-lg, 24px);
          padding: 48px 40px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .test-card:hover {
          border-color: rgba(0, 220, 130, 0.1);
        }
        .test-quote-mark {
          font-family: Georgia, serif;
          font-size: 7rem;
          line-height: 1;
          background: linear-gradient(135deg, rgba(0, 220, 130, 0.15), rgba(6, 182, 212, 0.1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: absolute;
          top: 12px;
          left: 32px;
          pointer-events: none;
          user-select: none;
        }
        .test-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.1rem;
          color: #bbb;
          line-height: 1.85;
          margin: 0 0 32px 0;
          position: relative;
          z-index: 1;
          min-height: 80px;
        }
        .test-author-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .test-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .test-avatar-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          color: #000;
          letter-spacing: 0.02em;
        }
        .test-author-info { text-align: left; }
        .test-author {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #fff;
          margin: 0 0 2px 0;
        }
        .test-role {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          color: #555;
          margin: 0;
        }
        .test-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
        }
        .test-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.15);
        }
        .test-dot.active {
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(0, 220, 130, 0.3);
        }
        .test-dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.3);
        }
        .test-fade {
          animation: testFadeIn 0.5s ease;
        }
        @keyframes testFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .test-section { padding: 80px 20px; }
          .test-card { padding: 40px 24px 32px; }
          .test-text { font-size: 1rem; }
        }
      `}</style>

      <section className="test-section" id="testimonials">
        <ScrollReveal>
          <p className="test-label" style={{ justifyContent: 'center' }}>04 / Testimonials</p>
          <h2 className="test-title">What People Say</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div
            className="test-card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="test-quote-mark">&ldquo;</div>
            <div className="test-fade" key={active}>
              <p className="test-text">{t.quote || t.text}</p>
              <div className="test-author-row">
                <div className="test-avatar">
                  <span className="test-avatar-text">{getInitials(t.name || t.author)}</span>
                </div>
                <div className="test-author-info">
                  <p className="test-author">{t.name || t.author}</p>
                  <p className="test-role">{t.role || t.position}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="test-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`test-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
