import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .interactive-cursor');
      setIsHovering(!!interactive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect for outer ring
  useEffect(() => {
    if (isTouchDevice) return;
    let animId;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(animateTrailing);
    };
    animId = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovering
              ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_12px_#06b6d4]'
              : 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#06b6d4]'
          }`}
        />
      </div>

      {/* Trailing aura ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-cyan-400/40 backdrop-blur-[0.5px] transition-all duration-200 ${
            isHovering
              ? 'w-12 h-12 bg-cyan-500/10 border-cyan-400 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
              : 'w-8 h-8 scale-100 bg-transparent'
          }`}
        />
      </div>
    </>
  );
}
