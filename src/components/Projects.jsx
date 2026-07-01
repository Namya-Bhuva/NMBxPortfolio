import ScrollReveal from './utils/ScrollReveal';
import { projects } from '../data/projects';
import samrudhiMockup from '../assets/images/samrudhhi-mockup.png';
import jalaramMockup from '../assets/images/jalaram-mockup.png';

const mockups = [samrudhiMockup, jalaramMockup, jalaramMockup];

export default function Projects() {
  return (
    <>
      <style>{`
        .projects-section {
          padding: 120px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .projects-label {
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
        .projects-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent, #00DC82);
        }
        .projects-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }
        .projects-subtitle {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.85rem;
          color: #555;
          margin: 0 0 60px 0;
        }
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .project-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--bg-card, rgba(255, 255, 255, 0.02));
          border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.06));
          border-radius: var(--radius-lg, 24px);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          border-color: rgba(0, 220, 130, 0.15);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 220, 130, 0.04);
          transform: translateY(-4px);
        }
        .project-card:nth-child(even) {
          direction: rtl;
        }
        .project-card:nth-child(even) > * {
          direction: ltr;
        }
        .project-image-wrap {
          padding: 20px;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.01);
        }
        .project-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          background: #0a0a0a;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.03);
        }
        .project-info {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .project-subtitle-text {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.7rem;
          color: var(--accent, #00DC82);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }
        .project-name {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #fff;
          margin: 0 0 14px 0;
          letter-spacing: -0.02em;
        }
        .project-desc {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-size: 0.9rem;
          color: #777;
          margin: 0 0 20px 0;
          line-height: 1.7;
        }
        .project-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .project-links {
          display: flex;
          gap: 16px;
        }
        .project-link {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--accent, #00DC82);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .project-link:hover {
          color: var(--accent-cyan, #06B6D4);
        }
        .project-link svg {
          width: 14px;
          height: 14px;
          transition: transform 0.3s ease;
        }
        .project-link:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 768px) {
          .projects-section { padding: 80px 20px; }
          .project-card {
            grid-template-columns: 1fr;
          }
          .project-card:nth-child(even) {
            direction: ltr;
          }
          .project-image { height: 200px; }
          .project-info { padding: 24px 20px; }
        }
      `}</style>

      <section className="projects-section" id="work">
        <ScrollReveal>
          <p className="projects-label">02 / Work</p>
          <h2 className="projects-title">Selected Work</h2>
          <p className="projects-subtitle">Production projects that make a real impact</p>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title || i} delay={i * 150}>
              <div className="project-card">
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={mockups[i] || mockups[0]}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  {project.subtitle && (
                    <p className="project-subtitle-text">{project.subtitle}</p>
                  )}
                  <h3 className="project-name">{project.title}</h3>
                  {project.description && (
                    <p className="project-desc">{project.description}</p>
                  )}
                  <div className="project-tech-pills">
                    {(project.tech || project.technologies || []).map((t, j) => (
                      <span className="tech-pill" key={j}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {(project.liveUrl || project.link || project.url) && (
                      <a
                        className="project-link"
                        href={project.liveUrl || project.link || project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        className="project-link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
