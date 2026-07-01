import { useState } from 'react';
import ScrollReveal from './utils/ScrollReveal';
import GlowCard from './utils/GlowCard';
import { skills } from '../data/skills';

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Tools & Design'];

const stats = [
  { value: 'BCA', label: 'Educated' },
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Happy Clients' },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => {
        const cat = (s.category || '').toLowerCase();
        const active = activeCategory.toLowerCase();
        if (active === 'tools & design') return cat === 'tools' || cat === 'design';
        return cat === active;
      });

  const getGradient = (category) => {
    const cat = (category || '').toLowerCase();
    if (cat.includes('front') || cat.includes('ui')) return 'linear-gradient(90deg, #00DC82, #34d399)';
    if (cat.includes('back') || cat.includes('database') || cat.includes('api')) return 'linear-gradient(90deg, #06B6D4, #38bdf8)';
    if (cat.includes('lang')) return 'linear-gradient(90deg, #F59E0B, #fbbf24)';
    return 'linear-gradient(90deg, #8B5CF6, #c084fc)';
  };

  return (
    <>
      <style>{`
        .about-section {
          padding: 120px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .about-label {
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
        .about-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent, #00DC82);
        }
        .about-heading {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }
        .about-subtitle {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 400;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #777;
          margin: 0 0 48px 0;
          line-height: 1.6;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.6fr;
          gap: 60px;
          align-items: start;
        }
        .about-bio p {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-size: 0.95rem;
          color: #888;
          line-height: 1.85;
          margin: 0 0 20px 0;
        }
        .about-bio p:last-child { margin-bottom: 0; }

        /* Photo area */
        .about-photo-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .about-photo-border {
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          padding: 2px;
          border-radius: 20px;
          width: 280px;
          height: 350px;
          position: relative;
        }
        .about-photo-inner {
          width: 100%;
          height: 100%;
          background: #0a0a0a;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .about-photo-initials {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 3.5rem;
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          opacity: 0.6;
        }
        .about-photo-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(0, 220, 130, 0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .about-stat {
          text-align: center;
        }
        .about-stat-value {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #00DC82, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }
        .about-stat-label {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.7rem;
          color: #555;
          letter-spacing: 0.03em;
          margin-top: 4px;
          display: block;
        }

        /* Skills */
        .skills-heading {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #fff;
          margin: 80px 0 24px 0;
          letter-spacing: -0.02em;
        }
        .skills-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .skills-tab {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.72rem;
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: transparent;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.03em;
        }
        .skills-tab:hover {
          border-color: rgba(255, 255, 255, 0.15);
          color: #aaa;
        }
        .skills-tab.active {
          background: rgba(0, 220, 130, 0.08);
          border-color: rgba(0, 220, 130, 0.2);
          color: #00DC82;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }
        .skill-card {
          padding: 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-2px);
        }
        .skill-gradient-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          border-radius: 0 0 var(--radius-sm, 10px) var(--radius-sm, 10px);
        }
        .skill-icon {
          font-size: 1.6rem;
          margin-bottom: 10px;
          display: block;
        }
        .skill-name {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #fff;
          margin: 0 0 4px 0;
        }
        .skill-category {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.65rem;
          color: #555;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .about-section { padding: 80px 20px; }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-photo-wrapper { order: -1; }
          .about-photo-border { width: 200px; height: 260px; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .about-stats { grid-template-columns: repeat(3, 1fr); gap: 12px; }
          .about-stat-value { font-size: 1.4rem; }
        }
      `}</style>

      <section className="about-section" id="about">
        <ScrollReveal>
          <p className="about-label">01 / About</p>
          <h2 className="about-heading">About Me</h2>
          <p className="about-subtitle">
            Passionate developer building exceptional digital experiences.
          </p>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={100}>
            <div className="about-bio">
              <p>
                Hi, I'm Namya Bhuva. Based in Rajkot, Gujarat, I am an enthusiastic
                Full Stack Developer with a passion for building performant and intuitive
                web applications using modern web technologies.
              </p>
              <p>
                As a recent graduate, I blend a strong foundation in computer science
                with hands-on experience in building scalable products that solve real-world problems.
              </p>
              <p>
                Currently exploring new opportunities in the tech industry, eager to contribute
                to a dynamic team and continue expanding my skills in full-stack development.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="about-photo-wrapper">
              <div className="about-photo-border">
                <div className="about-photo-inner">
                  <div className="about-photo-glow" />
                  <span className="about-photo-initials">NB</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={100}>
          <h3 className="skills-heading">My Skills</h3>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="skills-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skills-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {filteredSkills.map((skill, i) => (
            <ScrollReveal key={skill.name || i} delay={i * 60}>
              <GlowCard className="skill-card">
                <div
                  className="skill-gradient-bar"
                  style={{ background: getGradient(skill.category) }}
                />
                <span className="skill-icon" role="img" aria-label={skill.name}>
                  {skill.icon || skill.emoji || '⚡'}
                </span>
                <p className="skill-name">{skill.name}</p>
                <p className="skill-category">{skill.category || ''}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
