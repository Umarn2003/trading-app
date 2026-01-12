"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Send,
} from "lucide-react";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Formulaire soumis avec succès 🚀");
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-[#07071b] flex flex-col md:flex-row">
      <div className="md:w-2/5 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" />

        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-white">
          Négociez avec Confiance. <br />
          <span className="text-white font-semibold">
            Parlez aux <span className="text-[#7C4DFF]"> Experts du Marché </span> de Trade002.
          </span>
        </h2>

        <p className="md:text-lg text-sm mb-10 text-white max-w-md">
          Que vous négociiez du crypto, du forex ou des actions nos experts
          vous aident à exécuter des stratégies plus intelligentes avec
          précision et sécurité.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-[#7C4DFF]">12K+</h3>
            <p className="text-xs text-white">Commerçants Mondiaux</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#7C4DFF]">99.9%</h3>
            <p className="text-xs text-white">Temps de Fonctionnement d'Exécution</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#7C4DFF]">24/7</h3>
            <p className="text-xs text-white">Couverture du Marché</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-6 text-[#7C4DFF]">
          Que se passe-t-il ensuite ?
        </h2>

        <div className="space-y-5 text-sm text-white">
          {[
            {
              icon: <TrendingUp />,
              text: "Notre expert analyse vos objectifs de trading.",
            },
            {
              icon: <ShieldCheck />,
              text: "Vos données restent sécurisées et confidentielles.",
            },
            {
              icon: <BarChart3 />,
              text: "Vous recevez un plan de trading sur mesure.",
            },
            {
              icon: <CheckCircle />,
              text: "L'intégration commence instantanément.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="text-[#7C4DFF] mt-1">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-3/5 p-6 md:p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-transparent backdrop-blur-xl rounded-2xl border border-[#7C4DFF]/20 shadow-2xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-[#7C4DFF] mb-6">
            Commencez Aujourd'hui
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Nom Complet"
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparent border border-[#7C4DFF]/50"
              required
            />
            <input
              type="email"
              placeholder="Adresse Email"
              required
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparen border border-[#7C4DFF]/50"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="tel"
              placeholder="Numéro de Téléphone"
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparen border border-[#7C4DFF]/50"
            />
            <select className="input bg-transparen text-white px-2 py-1 rounded-3xl border border-[#7C4DFF]/50">
              <option value="" disabled hidden>
                Type de Trading
              </option>
              <option className="text-black">Crypto</option>
              <option className="text-black">Forex</option>
              <option className="text-black">Actions</option>
              <option className="text-black">Institutionnel</option>
            </select>
          </div>

          <textarea
            rows={3}
            placeholder="Parlez-nous de vos objectifs de trading..."
            className="w-full input resize-none mb-6 placeholder:text-white/80 px-2 py-1 rounded-xl text-white bg-transparent border border-[#7C4DFF]/50"
          />

          <Link href="/" className="flex items-center flex-row">
            <button className="w-fit  rounded-full px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF]  hover:text-white hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-[#9D7CFF] flex items-center gap-2">
            
              Nous Contacter
              <Send className="w-4 h-4" />
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};
