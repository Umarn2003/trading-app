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
    <section className="min-h-screen bg-black flex flex-col md:flex-row">
      <div className="md:w-2/5 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" />

        <h2 className="md:text-4xl text-2xl font-bold mb-4 leading-tight ">
          Négociez avec Confiance. <br />
          <span className="bg-linear-to-br from-white/70 via-yellow-500 to-white/20 text-transparent bg-clip-text">
            Parlez aux Experts du Marché de Trade002.
          </span>
        </h2>

        <p className="md:text-lg text-sm mb-10 text-slate-300 max-w-md">
          Que vous négociiez du crypto, du forex ou des actions — nos experts
          vous aident à exécuter des stratégies plus intelligentes avec
          précision et sécurité.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400/85">12K+</h3>
            <p className="text-xs text-white/50">Commerçants Mondiaux</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400/85">99.9%</h3>
            <p className="text-xs text-white/50">
              Temps de Fonctionnement d'Exécution
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400/85">24/7</h3>
            <p className="text-xs text-white/50">Couverture du Marché</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-6">
          Que se passe-t-il ensuite ?
        </h2>

        <div className="space-y-5 text-sm text-slate-200">
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
              <div className="text-yellow-400/85 mt-1">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-3/5 p-6 md:p-12 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 md:p-10"
        >
          <h3 className="text-xl font-semibold text-white/70 mb-6">
            Commencez Aujourd'hui
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Nom Complet"
              className="input placeholder:text-slate-500 text-white px-2 py-1 rounded-3xl"
              required
            />
            <input
              type="email"
              placeholder="Adresse Email"
              required
              className="input placeholder:text-slate-500 text-white px-2 py-1 rounded-3xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="tel"
              placeholder="Numéro de Téléphone"
              className="input placeholder:text-slate-500 text-white px-2 py-1 rounded-3xl"
            />
            <select className="input bg-transparent text-white px-2 py-1 rounded-3xl">
              <option value=" disabled selected hidden">Type de Trading</option>
              <option className="text-black">Crypto</option>
              <option className="text-black">Forex</option>
              <option className="text-black">Actions</option>
              <option className="text-black">Institutionnel</option>
            </select>
          </div>

          <textarea
            rows={3}
            cols={70}
            placeholder="Parlez-nous de vos objectifs de trading..."
            className="input resize-none mb-6 placeholder:text-slate-500 px-2 py-1 rounded-xl text-white "
          />
          <Link href="/">
            <button
              type="submit"
              disabled={loading}
              className="w-60 bg-yellow-400/85 text-black  hover:bg-transparent hover:outline outline-yellow-500 transition-colors duration-300 hover:cursor-pointer hover:text-white/70 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
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
