"use client";

import { useEffect, useRef } from "react";

type ParticleTheme = {
  particleRgb: string;
  particleAlpha: number;
  lineAlpha: number;
};

const CONNECT_DIST = 118; // particle ↔ particle link distance
const REPEL_RADIUS = 130; // gentle cursor influence

class Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = Math.random() * 1.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
  }

  update(mouseX: number, mouseY: number, width: number, height: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < REPEL_RADIUS && distance > 0) {
      const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;
      this.x -= (dx / distance) * force * 1.2;
      this.y -= (dy / distance) * force * 1.2;
    } else {
      this.x -= (this.x - this.baseX) * 0.02;
      this.y -= (this.y - this.baseY) * 0.02;
    }

    this.baseX += this.vx;
    this.baseY += this.vy;

    if (this.baseX < 0 || this.baseX > width) this.vx *= -1;
    if (this.baseY < 0 || this.baseY > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D, theme: ParticleTheme) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${theme.particleRgb}, ${theme.particleAlpha})`;
    ctx.fill();
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const backgroundCanvas = canvas;
    const renderCtx = ctx;
    let animationFrameId = 0;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const theme: ParticleTheme = {
      particleRgb: "173, 198, 255",
      particleAlpha: 0.4,
      lineAlpha: 0.15,
    };

    function syncTheme() {
      const styles = getComputedStyle(document.documentElement);
      theme.particleRgb = styles.getPropertyValue("--theme-particle-rgb").trim() || "173, 198, 255";
      theme.particleAlpha = Number(styles.getPropertyValue("--theme-particle-alpha")) || 0.4;
      theme.lineAlpha = Number(styles.getPropertyValue("--theme-particle-line-alpha")) || 0.15;
    }

    function initParticles(width: number, height: number) {
      particles = [];
      const isMobile = width < 768;
      const count = Math.min((width * height) / (isMobile ? 16000 : 9000), isMobile ? 55 : 150);

      for (let index = 0; index < count; index += 1) {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
      }
    }

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      backgroundCanvas.width = Math.floor(width * dpr);
      backgroundCanvas.height = Math.floor(height * dpr);
      backgroundCanvas.style.width = `${width}px`;
      backgroundCanvas.style.height = `${height}px`;
      renderCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(width, height);
    }

    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function handleMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    function animate() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderCtx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DIST) {
            renderCtx.beginPath();
            renderCtx.moveTo(particles[i].x, particles[i].y);
            renderCtx.lineTo(particles[j].x, particles[j].y);
            renderCtx.strokeStyle = `rgba(${theme.particleRgb}, ${theme.lineAlpha * (1 - distance / CONNECT_DIST)})`;
            renderCtx.lineWidth = 1;
            renderCtx.stroke();
          }
        }

        particles[i].update(mouseX, mouseY, width, height);
        particles[i].draw(renderCtx, theme);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      } else if (!animationFrameId) {
        animate();
      }
    }

    syncTheme();
    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("themechange", syncTheme);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("themechange", syncTheme);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="animated-bg" aria-hidden="true">
        <canvas ref={canvasRef} className="animated-bg__canvas" />
        <div className="animated-bg__glow animated-bg__glow--primary" />
        <div className="animated-bg__glow animated-bg__glow--secondary" />
      </div>
      <div className="noise-overlay" aria-hidden="true">
        <svg className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </>
  );
}
