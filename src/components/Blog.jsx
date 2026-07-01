import ScrollReveal from './utils/ScrollReveal';
import GlowCard from './utils/GlowCard';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <>
      <style>{`
        .blog-section {
          padding: 120px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .blog-label {
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
        .blog-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--accent, #00DC82);
        }
        .blog-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }
        .blog-subtitle {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.85rem;
          color: #555;
          margin: 0 0 60px 0;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .blog-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-2px);
        }
        .blog-category {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.68rem;
          background: rgba(0, 220, 130, 0.08);
          color: var(--accent, #00DC82);
          padding: 4px 12px;
          border-radius: 100px;
          display: inline-block;
          width: fit-content;
          letter-spacing: 0.04em;
          border: 1px solid rgba(0, 220, 130, 0.1);
        }
        .blog-card-title {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: #fff;
          margin: 0;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .blog-excerpt {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-size: 0.85rem;
          color: #777;
          margin: 0;
          line-height: 1.7;
          flex: 1;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .blog-meta span {
          font-family: var(--font-mono, 'JetBrains Mono'), monospace;
          font-size: 0.72rem;
          color: #444;
        }
        .blog-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #333;
        }

        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .blog-section { padding: 80px 20px; }
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="blog-section" id="blog">
        <ScrollReveal>
          <p className="blog-label">05 / Blog</p>
          <h2 className="blog-title">Thoughts & Insights</h2>
          <p className="blog-subtitle">Ideas, reflections, and lessons learned</p>
        </ScrollReveal>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.title || i} delay={i * 120}>
              <GlowCard className="blog-card">
                {post.category && (
                  <span className="blog-category">{post.category}</span>
                )}
                <h3 className="blog-card-title">{post.title}</h3>
                {post.excerpt && (
                  <p className="blog-excerpt">{post.excerpt}</p>
                )}
                <div className="blog-meta">
                  <span>{post.date}</span>
                  {post.readTime && (
                    <>
                      <span className="blog-meta-dot" />
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
