"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BenefitsSection from "./components/Cfdally";
import TradingOffers from "./components/Tradingoffers";
import { Oppurtunities } from "./components/Oppurtunities";
import DepositSection from "./components/DepositSection";
import DesignProcessSection from "./components/Advantages";
import { FAQForTrading } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import Home from "./components/Cfdexplution";
import OurStory from "./components/OurStory";
import Animations from "./components/FadeSlideIn";
import FadeSlideInn from "./components/FadeSlideInn";
import Hero from "./components/Hero";

const slides = [
  {
    image: "/tradingplatform-2.png",
    title: "Découvrez des Espaces de Vie Premium",
    description: "Maisons de luxe conçues avec élégance,",
  },
  {
    image: "/tradingplatform.png",
    title: "Découvrez l'Architecture Moderne",
    description: "Conceptions intelligentes qui reflètent l'innovation.",
  },
  {
    image: "/tradingplatform-3.png",
    title: "Investissez dans Votre Avenir Aujourd'hui",
    description: "Propriétés de haute valeur situées dans des emplacements privilégiés.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const features = [
    {
      title: "Sécurisé et Fiable",
      description: "Vos fonds et vos données sont protégés en permanence.",
    },
    {
      title: "Exécution Rapide",
      description: "Placez des ordres instantanément avec une exécution à haute vitesse.",
    },
    {
      title: "Marchés Mondiaux",
      description: "Accédez au Forex, Crypto, Indices, ETFs depuis une seule plateforme.",
    },
    {
      title: "Support 24/7",
      description: "Assistance experte chaque fois que vous en avez besoin.",
    },
  ];

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black">
      <Hero />

      <FadeSlideInn>
        <div id="about">
          <OurStory />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div id="trading">
          <BenefitsSection />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div id="opportunities">
          <Oppurtunities />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div id="tradingoffers">
          <TradingOffers />
        </div>
      </FadeSlideInn>

      
      <FadeSlideInn>
        <div id="cfdexplaination">
          <DesignProcessSection />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <section className="relative bg-black overflow-hidden py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
            <div
              className="relative w-full h-[75vh] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  transform: `rotateY(${
                    tilt.x
                  }deg) rotateX(${-tilt.y}deg) scale(1.05)`,
                }}
              >
                <Image
                  src="/forex copy.png"
                  alt="Pourquoi Nous Choisir"
                  fill
                  className="object-cover rounded-3xl object-center ml-20"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-black/30 rounded-3xl animate-gradient-x"></div>
              </div>
            </div>

            <div className="relative bg-linear-to-br from-gray-900/60 via-black/40 to-black/70 p-8 rounded-2xl shadow-2xl flex flex-col justify-center space-y-8">
              <h3 className="bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wide">
                Pourquoi Nous Choisir
              </h3>
              <h2 className="text-xl md:text-4xl font-bold leading-snug drop-shadow-lg bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
                Découvrez le Trading CFD Ultra-Premium
              </h2>
              <p className="text-white/70 md:text-base text-sm leading-relaxed max-w-md drop-shadow-md">
                Trade001 combine vitesse, sécurité et technologie avancée pour
                autonomiser les traders à tous les niveaux. Notre plateforme offre une
                expérience transparente et intuitive sur les marchés mondiaux.
              </p>

              <div className="grid grid-cols-1 gap-5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl group bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:translate-x-2 hover:scale-105 transition-all duration-500"
                  >
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 'bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)]' bg-size-60px_60px pointer-events-none animate-pulse"></div>
        </section>
      </FadeSlideInn>
      <FadeSlideInn>
        <div id="deposit">
          <DepositSection />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div>
          <Home />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div>
          <FAQForTrading />
        </div>
      </FadeSlideInn>

      <FadeSlideInn>
        <div id="contactus">
          <ContactForm />
        </div>
      </FadeSlideInn>
    </div>
  );
}
