"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DesignProcessSection() {
  const cards = [
    {
      title: "Trading Sécurisé",
      description: "Une sécurité avancée protège vos fonds et vos données.",
      outputs: [
        "Chiffrement des données de bout en bout",
        "Protection de compte multi-couches",
        "Systèmes de garde de fonds sécurisés",
      ],
    },
    {
      title: "Exécution Rapide",
      description:
        "Placez des ordres instantanément avec une exécution à haute vitesse.",
      outputs: [
        "Traitement à latence ultra-faible",
        "Confirmations instantanées",
        "Infrastructure optimisée",
      ],
    },
    {
      title: "Marchés Mondiaux",
      description:
        "Accédez au Forex, Crypto, Indices, ETFs en un seul endroit.",
      outputs: [
        "Accès multi-actifs",
        "Connectivité mondiale",
        "Tableau de bord unifié",
      ],
    },
    {
      title: "Informations en Temps Réel",
      description:
        "Négociez plus intelligemment en utilisant des données de marché en direct et des analyses.",
      outputs: [
        "Graphiques et flux en direct",
        "Analyses avancées",
        "Indicateurs personnalisés",
      ],
    },
    {
      title: "Support 24/7",
      description:
        "Obtenez une aide experte à tout moment dont vous avez besoin.",
      outputs: [
        "Assistance toujours disponible",
        "Chat en direct et tickets",
        "Spécialistes dédiés",
      ],
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section className="bg-[#07071b] text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-fit mx-auto">
            <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4">
              Avantages du Trading CFD
            </h2>
            <div className="h-1 w-3/5 bg-[#9D7CFF]/20 mb-6 mx-auto" />
          </div>
          <p className="text-[#7C4DFF] mt-4 md:text-lg text-sm">
            Fonctionnalités puissantes conçues pour les traders modernes.
          </p>
        </div>

        <div className="mt-16 overflow-hidden relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-17 bg-gradient-to-r from-[#07071b]  via-[#061524]/70 to-transparent z-10" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#07071b]  via-[#061524]/70 to-transparent z-10" />
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
                  min-w-[320px] md:w-120 rounded-2xl p-8
                  border border-[#7C4DFF] overflow-hidden
                  shadow-lg
                  relative
                  "
              >
                <div className="absolute inset-0 -z-10">
                  <img src="/bg1.jpeg" alt=""  className="w-full h-full opacity-35"/>
                </div>
                <p className="text-sm opacity-60">
                  {String((index % cards.length) + 1).padStart(2, "0")}
                </p>

                <h3 className="text-2xl text-[#7C4DFF] font-semibold mt-3 mb-4">
                  {card.title}
                </h3>

                <p className="text-white/90 mb-6">{card.description}</p>

                <ul className="space-y-2 text-sm">
                  {card.outputs.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#7C4DFF]">•</span>
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
