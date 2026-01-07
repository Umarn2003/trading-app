"use client";

import { useEffect, useRef, useState } from "react";

export default function TradingOfferLayered() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Scroll-triggered visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D Parallax on Image
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    };
    const imageEl = imageRef.current;
    imageEl?.addEventListener("mousemove", handleMouse);
    imageEl?.addEventListener("mouseleave", () =>
      setMousePos({ x: 0.5, y: 0.5 })
    );
    return () => imageEl?.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#07071b]  py-16 px-6 flex flex-col items-center overflow-hidden gap-10"
    >
      {/* Heading slides from left */}
      <div
        className={`max-w-xl text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"
        }`}
      >
        <div className="w-fit mx-auto">
        <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4">
          Offres de Trading
        </h2>
        <div className="h-1 w-3/5 bg-[#7C4DFF]/40 mb-6 mx-auto" />
        </div>
        <p className="text-[#7C4DFF] text-lg leading-relaxed">
          Survolez l'offre pour explorer nos opportunités de trading premium
          dans le Forex, Crypto, Indices et ETFs.
        </p>
      </div>

      {/* Image slides from right with 3D parallax */}
      <div
        ref={imageRef}
        className="relative max-w-7xl h-64 md:h-80 transition-transform duration-700"
      >
        {/* Glow & Depth */}
        <div
          className="absolute inset-0 rounded-2xl blur-2xl"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${
              mousePos.y * 100
            }%, #9D7CFF, transparent 20%)`,
          }}
        />

        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src="https://pink-mallard-727286.hostingersite.com/wp-content/uploads/2025/12/transparent-table-png.png"
            alt="Offres de trading"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Floating particles */}
        {isVisible && (
          <>
            <div
              className="absolute w-2 h-2 bg-[#7C4DFF] rounded-full blur-sm animate-float1"
              style={{ top: "10%", left: "15%" }}
            />
            <div
              className="absolute w-3 h-3 bg-[#7C4DFF] rounded-full blur-sm animate-float2"
              style={{ top: "70%", right: "20%" }}
            />
            <div
              className="absolute w-2 h-2 bg-[#7C4DFF] rounded-full blur-sm animate-float3"
              style={{ bottom: "15%", left: "25%" }}
            />
          </>
        )}
      </div>

      {/* Particle animation keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -30px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, 20px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, 25px);
          }
        }

        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
