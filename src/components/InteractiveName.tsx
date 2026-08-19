import React, { useEffect, useRef } from 'react';

interface InteractiveNameProps {
  name?: string;
  className?: string;
}

export const InteractiveName: React.FC<InteractiveNameProps> = ({
  name = 'THANUSH',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const targetOffsets = useRef<{ x: number; y: number; scale: number; rotate: number; highlight: number }[]>([]);
  const currentOffsets = useRef<{ x: number; y: number; scale: number; rotate: number; highlight: number }[]>([]);
  const animFrameId = useRef<number | null>(null);

  const letters = name.split('');

  useEffect(() => {
    targetOffsets.current = letters.map(() => ({ x: 0, y: 0, scale: 1, rotate: 0, highlight: 0 }));
    currentOffsets.current = letters.map(() => ({ x: 0, y: 0, scale: 1, rotate: 0, highlight: 0 }));

    // Disable physics calculation on coarse pointer / mobile touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const RADIUS = 150; // Interaction proximity radius in px
      const MAX_MAGNETIC_OFFSET = 14; // Max magnetic displacement in px
      const MAX_SCALE = 1.10; // Max scale on hover
      const MAX_ROTATE = 3.5; // Max rotation degrees

      letterRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - letterCenterX;
        const deltaY = mouseY - letterCenterY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance < RADIUS) {
          const proximity = Math.pow(1 - distance / RADIUS, 2);
          const angle = Math.atan2(deltaY, deltaX);
          const moveDist = proximity * MAX_MAGNETIC_OFFSET;
          const rotDir = index % 2 === 0 ? 1 : -1;

          targetOffsets.current[index] = {
            x: Math.cos(angle) * moveDist,
            y: Math.sin(angle) * moveDist - proximity * 6,
            scale: 1 + proximity * (MAX_SCALE - 1),
            rotate: proximity * MAX_ROTATE * rotDir,
            highlight: proximity,
          };
        } else {
          targetOffsets.current[index] = { x: 0, y: 0, scale: 1, rotate: 0, highlight: 0 };
        }
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((_, index) => {
        targetOffsets.current[index] = { x: 0, y: 0, scale: 1, rotate: 0, highlight: 0 };
      });
    };

    // Butter-smooth 60+ FPS lerp loop updating DOM directly without React re-renders
    const updatePhysics = () => {
      letters.forEach((_, index) => {
        const el = letterRefs.current[index];
        if (!el) return;

        const target = targetOffsets.current[index];
        const current = currentOffsets.current[index];

        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;
        current.scale += (target.scale - current.scale) * 0.12;
        current.rotate += (target.rotate - current.rotate) * 0.12;
        current.highlight += (target.highlight - current.highlight) * 0.12;

        el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0) scale(${current.scale.toFixed(3)}) rotate(${current.rotate.toFixed(2)}deg)`;
        
        if (current.highlight > 0.01) {
          el.style.color = `rgba(244, 243, 239, ${0.9 + current.highlight * 0.1})`;
          el.style.textShadow = `0 0 ${Math.round(current.highlight * 20)}px rgba(213, 43, 50, ${0.35 * current.highlight})`;
        } else {
          el.style.color = '';
          el.style.textShadow = '';
        }
      });

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [letters.length]);

  return (
    <div
      ref={containerRef}
      className={`interactive-name flex items-center justify-between w-full select-none overflow-visible py-2 px-1 ${className}`}
      aria-label={name}
    >
      {letters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          ref={(el) => {
            letterRefs.current[index] = el;
          }}
          className="interactive-name__letter inline-block transition-colors duration-200 cursor-default font-display font-extrabold text-[#f4f3ef] tracking-normal uppercase leading-none"
          style={{
            willChange: 'transform, color, text-shadow',
            transformOrigin: 'center center',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
