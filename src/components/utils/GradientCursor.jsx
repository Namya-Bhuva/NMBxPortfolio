import { useEffect, useState } from 'react';

export default function GradientCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .glass-card, .magnetic');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const size = isHovering ? 500 : 350;

  return (
    <div
      style={{
        position: 'fixed',
        top: pos.y - size / 2,
        left: pos.x - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        background: isHovering
          ? 'radial-gradient(circle, rgba(0,220,130,0.1) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0,220,130,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), top 0.12s ease-out, left 0.12s ease-out, background 0.3s ease',
      }}
    />
  );
}
