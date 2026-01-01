"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DesignProcessSection() {
  const cards = [
    {
      title: "Secure Trading",
      description:"Advanced security keeps your funds and data protected.",
      outputs: [
        "End-to-end data encryption",
        "Multi-layer account protection",
        "Secure fund custody systems",
      ],
    },
    {
      title: "Fast Execution",
      description: "Place trades instantly with high speed order execution.",
      outputs: [
        "Ultra-low latency processing",
        "Instant confirmations",
        "Optimized infrastructure",
      ],
    },
    {
      title: "Global Markets",
      description: "Access Forex, Crypto, Indices, ETFs in one place.",
      outputs: [
        "Multi-asset access",
        "Global connectivity",
        "Unified dashboard",
      ],
    },
    {
      title: "Real-Time Insights",
      description: "Trade smarter using live market data and analytics.",
      outputs: [
        "Live charts & feeds",
        "Advanced analytics",
        "Custom indicators",
      ],
    },
    {
      title: "24/7 Support",
      description: "Get expert help anytime you need it data and anayltics.",
      outputs: [
        "Always-on assistance",
        "Live chat & tickets",
        "Dedicated specialists",
      ],
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto ">
          <h2 className="text-4xl md:text-5xl font-semibold text-yellow-400/80">
            Advantages of{" "}CFD Trading
          </h2>
          <p className="text-white/60 mt-4">
            Powerful features designed for modern traders.
          </p>
        </div>

       <div className="mt-16 overflow-hidden relative">
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 
    bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 
    bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

  <motion.div
    className="flex gap-10 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {duplicatedCards.map((card, index) => (
      <div
        key={index}
        className="
          min-w-[320px] md:min-w-[420px] rounded-2xl p-8
          bg-linear-to-br from-yellow-400 via-black/60 to-yellow-400
          backdrop-blur-lg border border-white/30
          shadow-lg
        "
      >
        <p className="text-sm opacity-60">
          {String((index % cards.length) + 1).padStart(2, "0")}
        </p>

        <h3 className="text-2xl text-yellow-400 font-semibold mt-3 mb-4">
          {card.title}
        </h3>

        <p className="text-white/80 mb-6">{card.description}</p>

        <ul className="space-y-2 text-sm">
          {card.outputs.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-yellow-400">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </motion.div>
</div>

      </div>
    </section>
  );
}
