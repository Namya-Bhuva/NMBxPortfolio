import TextReveal from './utils/TextReveal';
import GridTexture from './utils/GridTexture';

export default function Hero() {
  const scrollDown = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const work = document.getElementById('work');
    if (work) work.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg, #050505);
          overflow: hidden;
        }

        /* Mesh gradient background */
        .hero-mesh {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: morphBlob 15s ease-in-out infinite;
        }
        .hero-blob--1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 220, 130, 0.08);
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }
        .hero-blob--2 {
          width: 400px;
          height: 400px;
          background: rgba(6, 182, 212, 0.06);
          top: 30%;
          right: 15%;
          animation-delay: -5s;
        }
        .hero-blob--3 {
          width: 350px;
          height: 350px;
          background: rgba(245, 158, 11, 0.04);
          bottom: 10%;
          left: 40%;
          animation-delay: -10s;
        }

        .hero-grid-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
          padding: 0 20px;
        }

        .hero-eyebrow {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent, #00DC82);
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.2s forwards;
        }

        .hero-name {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(3rem, 9vw, 6.5rem);
          color: #fff;
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .hero-name-gradient {
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-role {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: clamp(0.8rem, 1.5vw, 0.95rem);
          letter-spacing: 0.1em;
          color: #666;
          margin-top: 20px;
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.6s forwards;
        }

        .hero-role span {
          color: #888;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.9s forwards;
        }

        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #000;
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 220, 130, 0.3);
          color: #000;
        }

        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #999;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          color: #fff;
          border-color: rgba(0, 220, 130, 0.3);
          background: rgba(0, 220, 130, 0.05);
        }

        /* Corner accents */
        .hero-corner {
          position: absolute;
          width: 50px;
          height: 50px;
          z-index: 2;
          pointer-events: none;
        }
        .hero-corner--tl {
          top: 40px;
          left: 40px;
          border-top: 1px solid rgba(0, 220, 130, 0.1);
          border-left: 1px solid rgba(0, 220, 130, 0.1);
        }
        .hero-corner--br {
          bottom: 40px;
          right: 40px;
          border-bottom: 1px solid rgba(6, 182, 212, 0.1);
          border-right: 1px solid rgba(6, 182, 212, 0.1);
        }

        /* Scroll indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 1s ease 1.5s forwards;
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(180deg, rgba(0, 220, 130, 0.4), transparent);
          animation: hero-pulse 2s ease infinite;
        }
        .hero-scroll-text {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 10px;
          color: #444;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        /* Status badge */
        .hero-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(0, 220, 130, 0.06);
          border: 1px solid rgba(0, 220, 130, 0.12);
          border-radius: 100px;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeInUp 0.8s ease 0.1s forwards;
        }
        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00DC82;
          animation: glowPulse 2s ease infinite;
        }
        .hero-status-text {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.7rem;
          color: var(--accent, #00DC82);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .hero-corner--tl { top: 20px; left: 20px; }
          .hero-corner--br { bottom: 80px; right: 20px; }
          .hero-scroll-indicator { bottom: 24px; }
          .hero-ctas { flex-direction: column; width: 100%; max-width: 280px; }
          .hero-cta-primary, .hero-cta-secondary { width: 100%; justify-content: center; }
          .hero-blob--1 { width: 300px; height: 300px; }
          .hero-blob--2 { width: 250px; height: 250px; }
          .hero-blob--3 { width: 200px; height: 200px; }
        }
      `}</style>

      <section className="hero-section">
        {/* Animated mesh gradient */}
        <div className="hero-mesh">
          <div className="hero-blob hero-blob--1" />
          <div className="hero-blob hero-blob--2" />
          <div className="hero-blob hero-blob--3" />
        </div>

        <div className="hero-grid-wrap">
          <GridTexture opacity={0.015} />
        </div>

        <div className="hero-corner hero-corner--tl" />
        <div className="hero-corner hero-corner--br" />

        <div className="hero-content">
          <div className="hero-status">
            <div className="hero-status-dot" />
            <span className="hero-status-text">Available for work</span>
          </div>

          <h1 className="hero-name">
            <TextReveal text="NAMYA M" letterByLetter delay={100} />
            {' '}
            <span className="hero-name-gradient">
              <TextReveal text="BHUVA" letterByLetter delay={300} />
            </span>
          </h1>

          <p className="hero-role">
            Full Stack Developer <span>•</span> Tech Enthusiast
          </p>

          <div className="hero-ctas">
            <button className="hero-cta-primary" onClick={scrollToWork}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <button className="hero-cta-secondary" onClick={scrollToContact}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator" onClick={scrollDown}>
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">scroll</span>
        </div>
      </section>
    </>
  );
}
