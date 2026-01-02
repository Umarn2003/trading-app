"use client";

import { useEffect, useState } from "react";
import { FileText, ShieldCheck, BarChart3, TrendingUp } from "lucide-react";

const icons = [FileText, ShieldCheck, BarChart3, TrendingUp];

const steps = [
  {
    title: "Saisir les Détails Personnels",
    description:
      "Remplissez vos détails personnels dans notre application en ligne sécurisée. Cela ne prend que quelques minutes.",
  },
  {
    title: "Vérifier Votre Identité",
    description:
      "Confirmez votre identité électroniquement ou en soumettant des documents d'identification.",
  },
  {
    title: "Financer Votre Compte",
    description:
      "Déposez des fonds en toute sécurité en utilisant plusieurs options de paiement.",
  },
  {
    title: "Commencer à Trader",
    description:
      "Accédez aux marchés mondiaux et commencez à trader instantanément.",
  },
];

export default function Timeline() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section className="bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <svg
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[90%] hidden lg:block"
          viewBox="0 0 1200 240"
          fill="none"
        >
          <path
            d="M40 120 C300 20, 600 220, 860 120 C1000 40, 1100 140, 1180 120"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
        </svg>

        <div className="text-center max-w-3xl mx-auto mb-28">
          <h2 className="text-2xl md:text-5xl bg-linear-to-br from-white/70 font-semibold via-yellow-500 to-black/50 text-transparent bg-clip-text mb-4">
            Explication CFD
          </h2>
          <p className="text-white/70 text-lg">
            Suivez un processus d'intégration simple et commencez à trader
            rapidement.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16">
          {steps.map((step, i) => {
            const Icon = icons[i];

            const offsets = [
              "lg:-translate-y-12",
              "lg:translate-y-8",
              "lg:-translate-y-12",
              "lg:translate-y-8",
            ];

            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-700
                ${offsets[i]}
                ${
                  show ? "opacity-150 translate-x-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-7 h-7 text-black" />
                </div>

                <h3 className="text-xl font-bold text-yellow-400/85 mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
