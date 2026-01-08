"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Award,
  Brain,
  ChartCandlestick,
  Globe,
  HandFist,
} from "lucide-react";
import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Trading Sécurisé",
      desc: "Une sécurité avancée protège vos fonds et vos données en permanence.",
      icon: ChartCandlestick,
    },
    {
      title: "Exécution Rapide",
      desc: "Placez des ordres instantanément avec une exécution à haute vitesse.",
      icon: Activity,
    },
    {
      title: "Informations en Temps Réel",
      desc: "Négociez plus intelligemment en utilisant des données de marché en direct et des analyses.",
      icon: Brain,
    },
    {
      title: "Marchés Mondiaux",
      desc: "Accédez au Forex, Crypto, Indices, ETFs en un seul endroit.",
      icon: Globe,
    },
    {
      title: "Compétition Mensuelle",
      desc: "Participez à des compétitions mensuelles gratuites et concourez pour des récompenses exclusives.",
      icon: Award,
    },
    {
      title: "Support 24/7",
      desc: "Obtenez une aide experte à tout moment dont vous avez besoin.",
      icon: HandFist,
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>(
    new Array(benefits.length).fill(null)
  );
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-linear-to-b from-[#07071b] via-[#0a0a20] to-[#07071b] py-24 overflow-hidden">
  <Image
    src="/cfdfinal.png"
    alt="Hero Background"
    fill
    priority
    className="object-cover opacity-20"
  />

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7C4DFF] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#9D7CFF] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .benefit-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-linear(135deg, #7C4DFF, #9D7CFF, transparent);
          -webkit-mask: linear-linear(#fff 0 0) content-box, linear-linear(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .benefit-card:hover::before {
          opacity: 1;
        }

        .benefit-card:hover {
          transform: translateY(-4px);
        }

        .icon-glow {
          box-shadow: 0 0 30px rgba(124, 77, 255, 0.6);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* HEADER */}
        <div className="text-center mb-20 w-fit mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Votre ALLIÉ CFD
          </h2>
          <div className="w-3/4 h-1 bg-[#7C4DFF]/40 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-linear-to-br from-[#080024] to-[#0c0038] backdrop-blur-xl border border-[#7C4DFF]/30 rounded-3xl p-8 slide-in-left">
              {/* DECORATIVE ELEMENT */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-[#7C4DFF] to-[#9D7CFF] rounded-full opacity-20 blur-2xl"></div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Points
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF]">
                    Clés
                  </span>
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Boostez votre succès de trading avec FundedNext et obtenez la
                  récompense maximale.
                </p>

                <div className="space-y-4">
                  {[
                    "Commissions faibles",
                    "Spreads bruts",
                    "Meilleurs forfaits",
                    "Abordable",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF] group-hover:scale-150 transition-transform"></div>
                      <p className="text-gray-300 group-hover:text-white group-hover:translate-x-2 transition-all">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* DECORATIVE LINES */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-[#7C4DFF]/20 rounded-bl-3xl"></div>
              </div>
            </div>
          </div>

          {/* BENEFITS GRID */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                const isVisible = visibleCards.includes(i);

                return (
                  <div
                    key={i}
                    ref={(el) => {
                      cardsRef.current[i] = el;
                    }}
                    data-index={i}
                    style={{
                      transitionDelay: `${i * 100}ms`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                    className={`transform transition-all duration-700 ease-out
                      ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-14"
                      }`}
                  >
                    <div className="benefit-card h-full bg-linear-to-br from-[#080024] to-[#0c0038] backdrop-blur-sm border border-[#7C4DFF]/20 rounded-2xl p-6 hover:bg-[#1a1a3e]/70 group">
                      {/* ICON CONTAINER */}
                      <div className="relative mb-6 inline-block">
                        <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform float-animation">
                          <Icon className="w-7 h-7 text-[#7C4DFF]" />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF] group-hover:from-[#9D7CFF] group-hover:to-[#7C4DFF] transition-all">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {item.desc}
                      </p>

                      {/* HOVER INDICATOR */}
                      <div className="mt-4 w-0 h-0.5 bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF] group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
