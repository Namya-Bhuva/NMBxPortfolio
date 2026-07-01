export default function GridTexture({ opacity = 0.04, className = '' }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        backgroundImage: `
          linear-gradient(to right, rgba(0,220,130,0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,220,130,0.4) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    />
  );
}
