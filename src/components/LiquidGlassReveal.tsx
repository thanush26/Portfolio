import React, { useEffect, useRef, useState } from 'react';

interface LiquidGlassRevealProps {
  baseImageSrc?: string;
  glassImageSrc?: string;
  alt?: string;
  className?: string;
}

export const LiquidGlassReveal: React.FC<LiquidGlassRevealProps> = ({
  baseImageSrc = '/images/hero/thanush-base.webp',
  glassImageSrc = '/images/hero/thanush-glass.webp',
  alt = 'Thanush K B — Cybersecurity Engineer',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassLayerRef = useRef<HTMLDivElement>(null);

  const [actualBaseSrc, setActualBaseSrc] = useState(baseImageSrc);
  const [actualGlassSrc, setActualGlassSrc] = useState(glassImageSrc);

  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isHovered = useRef(false);
  const animFrameId = useRef<number | null>(null);

  // Validate image sources
  useEffect(() => {
    const imgBase = new Image();
    imgBase.src = baseImageSrc;
    imgBase.onerror = () => setActualBaseSrc('/images/hero/thanush-base.webp');

    const imgGlass = new Image();
    imgGlass.src = glassImageSrc;
    imgGlass.onerror = () => setActualGlassSrc('/images/hero/thanush-base.webp');
  }, [baseImageSrc, glassImageSrc]);

  useEffect(() => {
    const container = containerRef.current;
    const glassLayer = glassLayerRef.current;
    if (!container || !glassLayer) return;

    // Detect touch / coarse pointer devices & reduced motion preference
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Disable cursor reveal on mobile/coarse pointer or when reduced motion is preferred
    if (isCoarsePointer || isReducedMotion) {
      glassLayer.style.setProperty('--reveal-radius', '0px');
      return;
    }

    // Single RAF loop updating CSS variables directly on DOM
    const updateMaskPhysics = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.28;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.28;
      currentRadius.current += (targetRadius.current - currentRadius.current) * 0.20;

      glassLayer.style.setProperty('--reveal-x', `${currentPos.current.x.toFixed(1)}px`);
      glassLayer.style.setProperty('--reveal-y', `${currentPos.current.y.toFixed(1)}px`);
      glassLayer.style.setProperty('--reveal-radius', `${currentRadius.current.toFixed(1)}px`);

      animFrameId.current = requestAnimationFrame(updateMaskPhysics);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (!isHovered.current) {
        isHovered.current = true;
        targetRadius.current = 120; // Optimized facial reveal radius (100-130px)
      }
    };

    const handlePointerLeave = () => {
      isHovered.current = false;
      targetRadius.current = 0;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);

    animFrameId.current = requestAnimationFrame(updateMaskPhysics);

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative group rounded-sm overflow-hidden border border-white/12 bg-[#0F1012] shadow-2xl transition-colors duration-500 hover:border-[#D52B32]/40 select-none ${className}`}
    >
      {/* 1. BASE PORTRAIT LAYER */}
      <img
        src={actualBaseSrc}
        alt={alt}
        className="w-full h-full object-cover object-center pointer-events-none select-none"
        loading="eager"
      />

      {/* 2. LIQUID GLASS PORTRAIT REVEAL LAYER (LOCKED PIXEL ALIGNMENT) */}
      <div
        ref={glassLayerRef}
        className="absolute inset-0 pointer-events-none liquid-reveal-mask select-none"
        style={{
          willChange: 'mask-image, -webkit-mask-image',
        }}
      >
        <img
          src={actualGlassSrc}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>

      {/* Dark Ambient Gradient Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-80 pointer-events-none" />

      {/* Editorial Glass Caption Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-[#929292] border-t border-white/10 pt-3 backdrop-blur-md bg-white/[0.02] px-3 rounded-sm pointer-events-none">
        <span className="text-[#F4F3EF] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D52B32] animate-pulse" />
          THANUSH
        </span>
        <span className="text-[#9FA8A3]">SEC_ENG // 2026</span>
      </div>
    </div>
  );
};
