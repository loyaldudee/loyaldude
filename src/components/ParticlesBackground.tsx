// components/ParticlesBackground.tsx
'use client'
import { useEffect, useRef } from "react";

export default function ParticlesBackground({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Example: just a simple dot animation (replace with your own)
    let particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: Math.random() * 0.5,
      dy: Math.random() * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x > canvas.width || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
    />
  );
}
