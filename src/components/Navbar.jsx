import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .nb-navbar {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          padding: 0 32px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          border-radius: 100px;
          background: rgba(5, 5, 5, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          max-width: 720px;
          width: calc(100% - 48px);
        }
        .nb-navbar.scrolled {
          background: rgba(5, 5, 5, 0.85);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
          flex-shrink: 0;
        }
        .nb-logo-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          letter-spacing: 0.08em;
        }
        .nb-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nb-nav-link {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 12px;
          color: #777;
          text-decoration: none;
          transition: color 0.3s ease;
          letter-spacing: 0.02em;
          position: relative;
          padding: 4px 0;
        }
        .nb-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #00DC82, #06B6D4);
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        .nb-nav-link:hover,
        .nb-nav-link.active {
          color: #fff;
        }
        .nb-nav-link:hover::after,
        .nb-nav-link.active::after {
          width: 100%;
        }
        .nb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1002;
        }
        .nb-hamburger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: #888;
          transition: all 0.3s ease;
          border-radius: 1px;
        }
        .nb-hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(4px, 5px);
          background: #fff;
        }
        .nb-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .nb-hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -5px);
          background: #fff;
        }
        .nb-mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          z-index: 1001;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 100px 40px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .nb-mobile-drawer.open {
          transform: translateX(0);
        }
        .nb-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .nb-mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
        .nb-mobile-link {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: color 0.3s ease, padding-left 0.3s ease;
        }
        .nb-mobile-link:hover,
        .nb-mobile-link.active {
          color: #00DC82;
          padding-left: 12px;
        }
        .nb-mobile-label {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.7rem;
          color: #333;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .nb-navbar {
            top: 12px;
            padding: 0 20px;
            width: calc(100% - 32px);
          }
          .nb-nav-links {
            display: none;
          }
          .nb-hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`nb-navbar${scrolled ? ' scrolled' : ''}`}>
        <a className="nb-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="24" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="4" x2="4" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="11" y="11" width="6" height="6" rx="1" fill="#00DC82" />
          </svg>
          <span className="nb-logo-text">NAMYA M BHUVA</span>
        </a>

        <ul className="nb-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className={`nb-nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nb-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nb-mobile-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`nb-mobile-drawer${mobileOpen ? ' open' : ''}`}>
        <span className="nb-mobile-label">Navigation</span>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            className={`nb-mobile-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
