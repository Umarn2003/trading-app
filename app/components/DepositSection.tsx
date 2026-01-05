"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard, Timer, Wallet } from "lucide-react";

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
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Méthodes de paiement globales multiples",
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
      className="relative overflow-hidden bg-[#07071b] py-24"
    >
      {/* UNIQUE LOCAL ANIMATIONS */}
      <style>{`
        .reveal-shell {
          opacity: 0;
          transform: scale(0.96);
          filter: blur(6px);
          transition: all 1s cubic-bezier(.22,1,.36,1);
        }
        .reveal-shell.active {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        }

        .magnetic-item {
          opacity: 0;
          transform: translateY(40px) rotateX(12deg);
          transition: all 0.9s cubic-bezier(.22,1,.36,1);
        }
        .magnetic-item.active {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }

        .divider-charge {
          height: 0;
          transition: height 1.2s ease-out;
        }
        .divider-charge.active {
          height: 100%;
        }

        .payment-wave {
          opacity: 0;
          transform: translateY(20px) scale(0.85);
          transition: all 0.6s ease-out;
        }
        .payment-wave.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .cta-lock {
          opacity: 0;
          transform: scale(0.85);
          transition: all 0.7s cubic-bezier(.22,1,.36,1);
        }
        .cta-lock.active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div
        className={`relative max-w-7xl mx-auto px-6 text-white reveal-shell ${
          active ? "active" : ""
        }`}
      >
        <h2 className="text-2xl md:text-5xl font-semibold mb-20 text-white/80">
          Prenez le contrôle de vos fonds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 items-start">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${index * 180}ms` }}
                className={`relative magnetic-item ${active ? "active" : ""} ${
                  index === 1 ? "lg:pl-12" : ""
                }`}
              >
                {index === 1 && (
                  <div className="absolute left-0 top-0 h-full w-px bg-white/30">
                    <div
                      className={`absolute top-0 left-0 w-px bg-blue-400 divider-charge ${
                        active ? "active" : ""
                      }`}
                    />
                  </div>
                )}

                <Icon className="w-10 h-10 mb-6 text-blue-600" />

                <h3 className="text-lg font-semibold leading-snug mb-3 max-w-xs text-blue-500">
                  {item.title}
                </h3>

                {item.desc && (
                  <ul className="text-white space-y-1 text-sm">
                    {item.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {item.learnMore && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-white mt-4 hover:text-blue-300 transition text-sm"
                  >
                    En savoir plus <span className="text-lg">›</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="my-16 h-px bg-blue-500" />

        <div className="flex items-center gap-14 flex-wrap">
          {payments.map((p, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`payment-wave ${active ? "active" : ""}`}
            >
              <img src={p.src} alt={p.name} className="h-16 object-contain" />
            </div>
          ))}
        </div>

        <div className="my-16 h-px bg-blue-500" />

        <button
          className={`rounded-full cursor-pointer text-white shadow-[0_0_18px_rgba(59,130,246,0.45)] bg-blue-600 hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300
           px-8 py-3 text-base font-semibold cta-lock ${
            active ? "active" : ""
          }`}
        >
          Ouvrir un compte
        </button>
      </div>
    </section>
  );
}
