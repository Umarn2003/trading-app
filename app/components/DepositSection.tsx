"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard, Timer, Wallet } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Wallet,
    title: "Frais simples et compétitifs",
    desc: [
      "0% frais d'ouverture / clôture de trades",
      "0% frais de dépôt et de retrait",
    ],
    learnMore: true,
  },
  {
    id: 2,
    icon: Timer,
    title: "Traitement rapide des retraits",
    desc: [
      "0% frais d'ouverture / clôture de trades",
      "0% frais de dépôt et de retrait",
    ],
    learnMore: true,
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Méthodes de paiement globales",
    desc: [
      "0% frais d'ouverture / clôture de trades",
      "0% frais de dépôt et de retrait",
    ],
    learnMore: true,
  },
];

const payments = [
  { name: "Visa", src: "/1.png" },
  { name: "Mastercard", src: "/2.png" },
  { name: "PayPal", src: "/3.png" },
  { name: "Virement Bancaire", src: "/4.png" },
  { name: "Virement Bancaire", src: "/5.png" },
  { name: "Virement Bancaire", src: "/6.png" },
  { name: "Virement Bancaire", src: "/7.png" },
];

export default function TakeControlSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  py-24"
    >
        <Image
          src="/depositbg.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-10"
        />

     

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .shimmer-border {
          position: relative;
          background: linear-linear(90deg, transparent, rgba(124, 77, 255, 0.3), transparent);
          background-size: 2000px 100%;
          animation: shimmer 3s infinite;
        }

        .feature-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(.22,1,.36,1);
        }
        
        .feature-card.active {
          opacity: 1;
          transform: translateY(0);
        }

        .payment-logo {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.5s cubic-bezier(.22,1,.36,1);
        }
        
        .payment-logo.active {
          opacity: 1;
          transform: scale(1);
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(124, 77, 255, 0.3);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 text-white z-10">
        <div className={`mb-16 ${active ? 'slide-up' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Prenez le <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF]">contrôle de</span>
            <br />
            vos fonds
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#7C4DFF] to-[#9D7CFF] rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`feature-card ${active ? "active" : ""} relative group`}
              >
                <div className="relative bg-linear-to-br from-[#080024] to-[#0c0038]  border border-[#7C4DFF]/20 rounded-2xl p-8 hover:border-[#7C4DFF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C4DFF]/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#7C4DFF]" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-[#7C4DFF] group-hover:text-[#9D7CFF] transition-colors">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <ul className="space-y-2 text-gray-300">
                      {item.desc.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#7C4DFF] mt-1">•</span>
                          <span className="text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.learnMore && (
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#7C4DFF] hover:text-[#9D7CFF] mt-6 font-medium transition group/link"
                    >
                      En savoir plus 
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`backdrop-blur-sm  p-8 md:p-12 mb-12 ${active ? 'fade-in' : ''}`} style={{ animationDelay: '600ms' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Méthodes de paiement acceptées</h3>
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {payments.map((p, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${700 + i * 80}ms` }}
                className={`payment-logo ${active ? "active" : ""} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#7C4DFF]/50 hover:scale-110 transition-all duration-300`}
              >
                <img 
                  src={p.src} 
                  alt={p.name} 
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            className={`relative overflow-hidden hover:cursor-pointer group px-8 py-2 bg-[#7C4DFF] rounded-full text-lg font-bold text-white shadow-lg hover:shadow-2xl hover:shadow-[#7C4DFF]/50 transition-all duration-300 hover:scale-105 ${active ? 'fade-in' : ''}`}
            style={{ animationDelay: '900ms' }}
          >
            <span className="relative z-10">Ouvrir un compte</span>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}