import ScrollReveal from './utils/ScrollReveal';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <>
      <style>{`
        .exp-section {
          padding: 120px 40px;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .exp-label {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent, #00DC82);
          margin: 0 0 12px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .exp-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent, #00DC82);
        }
        .exp-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin: 0 0 60px 0;
          letter-spacing: -0.02em;
        }
        .exp-timeline {
          position: relative;
          padding-left: 48px;
        }
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg, rgba(0, 220, 130, 0.3), rgba(6, 182, 212, 0.1), transparent);
        }
        .exp-entry {
          position: relative;
          margin-bottom: 40px;
        }
        .exp-entry:last-child {
          margin-bottom: 0;
        }
        .exp-dot {
          position: absolute;
          left: -48px;
          top: 12px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent, #00DC82);
          transform: translateX(-0.5px);
          z-index: 1;
        }
        .exp-dot::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: rgba(0, 220, 130, 0.15);
          animation: pulseRing 3s ease infinite;
        }
        .exp-card {
          background: var(--bg-card, rgba(255, 255, 255, 0.02));
          border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.06));
          border-radius: var(--radius, 16px);
          padding: 28px;
          transition: all 0.4s ease;
        }
        .exp-card:hover {
          border-color: rgba(0, 220, 130, 0.12);
          background: var(--bg-card-hover, rgba(255, 255, 255, 0.04));
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .exp-year {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent, #00DC82);
          margin: 0 0 10px 0;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: rgba(0, 220, 130, 0.06);
          border-radius: 100px;
        }
        .exp-role {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: #fff;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }
        .exp-company {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          color: #999;
          margin: 0 0 12px 0;
        }
        .exp-desc {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-size: 0.88rem;
          color: #666;
          margin: 0;
          line-height: 1.75;
        }

        @media (max-width: 768px) {
          .exp-section { padding: 80px 20px; }
          .exp-timeline { padding-left: 36px; }
          .exp-dot { left: -36px; }
          .exp-card { padding: 20px; }
        }
      `}</style>

      <section className="exp-section" id="experience">
        <ScrollReveal>
          <p className="exp-label">03 / Experience</p>
          <h2 className="exp-title">Journey</h2>
        </ScrollReveal>

        <div className="exp-timeline">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="exp-entry">
                <div className="exp-dot" />
                <div className="exp-card">
                  <span className="exp-year">{item.year || item.period}</span>
                  <h3 className="exp-role">{item.title || item.role}</h3>
                  {item.company && <p className="exp-company">{item.company}</p>}
                  <p className="exp-desc">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
