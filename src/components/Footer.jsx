export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .footer {
          background: #030303;
          position: relative;
        }
        .footer-gradient-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00DC82, #06B6D4, transparent);
          opacity: 0.3;
        }
        .footer-content {
          padding: 60px 40px 30px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Left Column */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-logo-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          letter-spacing: 0.08em;
        }
        .footer-tagline {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.8rem;
          color: #444;
          margin: 0;
        }
        .footer-copyright {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.72rem;
          color: #333;
          margin: 4px 0 0;
        }

        /* Center Column */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          color: #666;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .footer-link {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.82rem;
          color: #555;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--accent, #00DC82);
        }

        /* Right Column */
        .footer-socials-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-socials-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          color: #666;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .footer-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s ease;
        }
        .footer-social svg {
          width: 16px;
          height: 16px;
          fill: #555;
          transition: fill 0.3s ease;
        }
        .footer-social:hover {
          border-color: rgba(0, 220, 130, 0.2);
          background: rgba(0, 220, 130, 0.05);
        }
        .footer-social:hover svg {
          fill: #00DC82;
        }

        /* Bottom */
        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .footer-built {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.72rem;
          color: #2a2a2a;
        }
        .footer-top-btn {
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .footer-top-btn:hover {
          border-color: rgba(0, 220, 130, 0.2);
          background: rgba(0, 220, 130, 0.05);
        }
        .footer-top-btn svg {
          width: 14px;
          height: 14px;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            padding: 40px 24px 20px;
            gap: 32px;
          }
          .footer-bottom {
            padding: 16px 24px;
          }
          .footer-top-btn {
            right: 24px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-gradient-divider" />

        <div className="footer-content">
          {/* Left */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="4" x2="24" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="24" y1="4" x2="4" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="11" y="11" width="6" height="6" rx="1" fill="#00DC82" />
              </svg>
              <span className="footer-logo-text">NAMYA BHUVA</span>
            </div>
            <p className="footer-tagline">Full Stack Developer</p>
            <p className="footer-copyright">© {new Date().getFullYear()} Namya Bhuva. All rights reserved.</p>
          </div>

          {/* Center */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <a className="footer-link" href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a className="footer-link" href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
            <a className="footer-link" href="#blog" onClick={(e) => handleNavClick(e, '#blog')}>Blog</a>
            <a className="footer-link" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </div>

          {/* Right */}
          <div className="footer-socials-wrap">
            <h4 className="footer-socials-title">Connect</h4>
            <div className="footer-socials">
              {/* GitHub */}
              <a className="footer-social" href="https://github.com/Namya-Bhuva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a className="footer-social" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a className="footer-social" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Email */}
              <a className="footer-social" href="mailto:namyabhuva@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-built">Built with precision</span>
          <button className="footer-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
