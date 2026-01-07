"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/bg5.jpeg"
        alt="Arrière-plan éclair"
        fill
        className="object-left opacity-70"
      />
      <div className="absolute inset-0 bg-black/50"/>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white mt-30">
              Les marchés évoluent rapidement. Vous aussi.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-lg text-base sm:text-lg text-white">
              Accédez aux marchés financiers mondiaux avec une plateforme fiable, rapide et sécurisée.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto rounded-2xl px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF]  hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                Commencez à trader
              </button>
               <button className="w-full sm:w-auto rounded-2xl px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF] hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                Essayez la démo gratuite
              </button>
            </div>
          </div>

          {/* Right Side (optional image/illustration) */}
          <div className="hidden lg:block">
            {/* Add hero illustration here if needed */}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-8 text-sm md:text-lg text-white/80 mt-10 sm:mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center border-r-0 sm:border-r-2 border-white/30 pr-0 sm:pr-4 gap-2">
            <p className="font-bold text-[#7C4DFF]">32 Million +</p>
            <p className="text-white">Clients enregistrés</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center border-r-0 sm:border-r-2 border-white/30 pr-0 sm:pr-4 gap-2">
            <p className="font-bold text-white">
              <span className="text-[#7C4DFF]">★ 4.2 </span>
            </p>
            <p className="text-white">Note Trustpilot</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:pr-4 gap-2">
            <p className="font-semibold text-[#7C4DFF]">Bourse de Paris</p>
            <p className="text-white">Coté depuis 2013</p>
          </div>
        </div>
      </div>
    </section>
  );
}
