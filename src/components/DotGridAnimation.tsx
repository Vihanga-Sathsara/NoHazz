'use client';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 14,
  gap = 28,
  className = '',
  style
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: 0, y: 0 });

  // 🎯 NOHAZZ premium colors
  const baseColor = '#06130F';   // dark green-black
  const activeColor = '#27ff39'; // neon green

  const baseRgb = useMemo(() => hexToRgb(baseColor), []);
  const activeRgb = useMemo(() => hexToRgb(activeColor), []);

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null;
    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  // GRID BUILD
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor(width / (dotSize + gap));
    const rows = Math.floor(height / (dotSize + gap));

    const cell = dotSize + gap;
    const startX = (width - cols * cell) / 2;
    const startY = (height - rows * cell) / 2;

    const dots: Dot[] = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap]);

  // DRAW LOOP (🔥 mouse only area glow)
  useEffect(() => {
    if (!circlePath) return;

    let raf: number;
    const proximity = 160;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;

        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let color = baseColor;

        // ✅ ONLY pointer area effect
        if (dsq < proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const intensity = t * t; // smooth luxury falloff

          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * intensity);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * intensity);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * intensity);

          color = `rgba(${r},${g},${b},${0.25 + intensity})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = color;
        ctx.fill(circlePath);
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [circlePath, baseRgb, activeRgb]);

  // GRID INIT
  useEffect(() => {
    buildGrid();

    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    return () => ro.disconnect();
  }, [buildGrid]);

  // MOUSE TRACKING (lightweight)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', throttle(onMove, 10), { passive: true });

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{
        background: "radial-gradient(circle at center, #06130F 0%, #020807 100%)",
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default DotGrid;