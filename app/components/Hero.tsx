"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src="/bg5.jpeg"
        alt="Arrière-plan éclair"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight">
          Les marchés évoluent rapidement. Vous aussi.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/90">
          Accédez aux marchés financiers mondiaux avec une plateforme fiable,
          rapide et sécurisée.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-2xl px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold bg-[#7C4DFF] hover:bg-black/40 hover:scale-105 transition-all duration-300">
            Commencez à trader
          </button>

          <button className="rounded-2xl px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold bg-[#7C4DFF] hover:bg-black/40 hover:scale-105 transition-all duration-300">
            Essayez la démo gratuite
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 text-sm md:text-lg text-white/80">
          
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-bold text-[#7C4DFF]">32 Million +</span>
            <span>Clients enregistrés</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-bold">
              <span className="text-[#7C4DFF]">★ 4.2</span>
            </span>
            <span>Note Trustpilot</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-semibold text-[#7C4DFF]">Bourse de Paris</span>
            <span>Coté depuis 2013</span>
          </div>

        </div>
      </div>
    </section>
  );
}
