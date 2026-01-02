'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './Hero';

export default function Animations() {
  const [showHero, setShowHero] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speedY = 0;
        this.opacity = 0;
        this.color = '';
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height + 10;
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 3 + 2);
        this.opacity = Math.random() * 0.5 + 0.5;

        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
          this.color = `rgba(255,255,255,${this.opacity})`;
        } else if (colorChoice < 0.66) {
          this.color = `rgba(255,204,0,${this.opacity})`;
        } else {
          this.color = `rgba(0,0,0,${this.opacity})`;
        }
      }

      update() {
        this.y += this.speedY;
        if (this.y < -10) this.reset();
      }

      draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, ctx));
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10,10,15,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => setCanvasSize();
    window.addEventListener('resize', handleResize);

    // Show Hero after animation finishes
    const timeout = setTimeout(() => {
      setShowHero(true);
    }, 1500);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Always render the canvas until Hero is shown */}
      {!showHero && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full z-9999 bg-black"
        />
      )}

      {showHero && (
        <div className="animate-hero-slide-up">
          <Hero />
        </div>
      )}
    </>
  );
}


// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function RightBlurReveal({
//   children,
//   className = "",
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`
//         transform-gpu will-change-transform
//         transition-all duration-200
//         ${
//           visible
//             ? "opacity-100 translate-x-0 scale-100 blur-0"
//             : "opacity-0 translate-x-12 scale-95 blur-md"
//         }
//         ${className}
//       `}
//       style={{
//         transitionDelay: `${delay}ms`,
//         transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
//       }}
//     >
//       {children}
//     </div>
//   );
// }
