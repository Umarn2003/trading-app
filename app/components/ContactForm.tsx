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
      {/* LEFT PANEL */}
      <div className="md:w-2/5 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" />

        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight text-white/80">
          Négociez avec Confiance. <br />
          <span className="text-white/70 font-semibold">
            Parlez aux Experts du Marché de Trade002.
          </span>
        </h2>

        <p className="md:text-lg text-sm mb-10 text-blue-500 max-w-md">
          Que vous négociiez du crypto, du forex ou des actions — nos experts
          vous aident à exécuter des stratégies plus intelligentes avec
          précision et sécurité.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-500">12K+</h3>
            <p className="text-xs text-white">Commerçants Mondiaux</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500">99.9%</h3>
            <p className="text-xs text-white">Temps de Fonctionnement d'Exécution</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500">24/7</h3>
            <p className="text-xs text-white">Couverture du Marché</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-6 text-blue-500">
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
            <div key={i} className="flex gap-4">
              <div className="text-white/80 mt-1">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL - FORM */}
      <div className="md:w-3/5 p-6 md:p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-transparent backdrop-blur-xl rounded-2xl border border-blue-500 shadow-2xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-blue-200 mb-6">
            Commencez Aujourd'hui
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Nom Complet"
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparent border border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Adresse Email"
              required
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparen border border-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="tel"
              placeholder="Numéro de Téléphone"
              className="input placeholder:text-white/80 text-white px-2 py-1 rounded-3xl bg-transparen border border-blue-500"
            />
            <select className="input bg-transparen text-white px-2 py-1 rounded-3xl border border-blue-500">
              <option value="" disabled selected hidden>
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
            className="input resize-none mb-6 placeholder:text-white/80 px-2 py-1 rounded-xl text-white bg-transparent border border-blue-500"
          />

          <Link href="/">
            <button
              type="submit"
              disabled={loading}
              className="w-60 text-white/80 px-4 sm:px-14 py-2 font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] shadow-blue-950 hover:bg-transparent hover:text-white  text-black shadow-[0_0_18px_rgba(59,130,246,0.45)] bg-blue-600 hover:scale-105 transition-all hover:cursor-pointertransition duration-300 hover:cursor-pointer hover:border-blue-800 rounded-lg  flex items-center justify-center gap-2"
            >
              {loading ? "Soumission..." : "Nous Contacter"}
              <Send className="w-4 h-4" />
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};
