export default function ParallaxText({ items = [], speed = 30 }) {
  const content = items.join(' • ');
  // We duplicate enough to ensure a seamless loop
  const repeated = `${content} • ${content} • ${content} • `;

  return (
    <>
      <style>{`
        .parallax-strip {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .parallax-track {
          display: flex;
          width: max-content;
          animation: marquee ${speed}s linear infinite;
        }
        .parallax-text {
          font-family: var(--font-display, 'Space Grotesk'), sans-serif;
          font-weight: 600;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: rgba(255, 255, 255, 0.06);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0 4px;
          user-select: none;
        }
      `}</style>

      <div className="parallax-strip">
        <div className="parallax-track">
          <span className="parallax-text">{repeated}</span>
          <span className="parallax-text">{repeated}</span>
        </div>
      </div>
    </>
  );
}
