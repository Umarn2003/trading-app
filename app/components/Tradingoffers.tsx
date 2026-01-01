"use client";

import { useState } from "react";
import Image from "next/image";

export default function TradingOfferLayered() {
  return (
    <section className="relative bg-black py-32 px-6 md:px-10 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-16 max-w-2xl z-20 relative">
        <h2 className="bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text text-4xl md:text-5xl font-bold mb-4">
          Trading Offers
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Hover over the offer to explore our premium trading opportunities across Forex, Crypto, Indices, and ETFs.
        </p>
      </div>

      <div className="relative w-full max-w-6xl h-44 mb-10">
            <img loading="lazy" decoding="async" width="1248" height="415" src="https://pink-mallard-727286.hostingersite.com/wp-content/uploads/2025/12/transparent-table-png.png" className="object-contain" alt="" sizes="auto, (max-width: 1248px) 100vw, 1248px"></img>
          </div>
    </section>
    
  );
}
