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
      alert("Form submitted successfully 🚀");
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-black flex flex-col md:flex-row">
      <div className="md:w-2/5 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" />

        <h1 className="md:text-4xl text-2xl font-bold mb-4 leading-tight ">
          Trade With Confidence. <br />
          <span className="bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">Speak to Market Experts of Trade002.</span>
        </h1>

        <p className="md:text-lg text-sm mb-10 text-slate-300 max-w-md">
          Whether you trade crypto, forex, or stocks — our experts help you
          execute smarter strategies with precision and security.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">12K+</h3>
            <p className="text-xs text-white/50">Global Traders</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">99.9%</h3>
            <p className="text-xs text-white/50">Execution Uptime</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">24/7</h3>
            <p className="text-xs text-white/50">Market Coverage</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-6">What happens next?</h2>

        <div className="space-y-5 text-sm text-slate-200">
          {[
            {
              icon: <TrendingUp />,
              text: "Our expert analyzes your trading goals.",
            },
            {
              icon: <ShieldCheck />,
              text: "Your data stays secure & confidential.",
            },
            {
              icon: <BarChart3 />,
              text: "You receive a tailored trading plan.",
            },
            { icon: <CheckCircle />, text: "Onboarding begins instantly." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-yellow-400 mt-1">{item.icon}</div>
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
            Get Started Today
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Full Name"
              className="input placeholder:text-slate-500 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="input placeholder:text-slate-500 text-white"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="tel"
              placeholder="Phone Number"
              className="input placeholder:text-slate-500 text-white"
            />
            <select className="input bg-transparent text-white">
              <option value=" disabled selected hidden">
                Trading Type
              </option>
              <option className="text-black">Crypto</option>
              <option className="text-black">Forex</option>
              <option className="text-black">Stocks</option>
              <option className="text-black">Institutional</option>
            </select>
          </div>

          <textarea
            rows={3}
            cols={70}
            placeholder="Tell us about your trading goals..."
            className="input resize-none mb-6 placeholder:text-slate-500"
          />
          <Link href="/signup">
          <button
            type="submit"
            disabled={loading}
            className="w-60 bg-yellow-500 text-black  hover:bg-black transition-all hover:text-white/70 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {loading ? "Submitting..." : "Contact Us"}
            <Send className="w-4 h-4" />
          </button>
          </Link>
        </form>
      </div>
    </section>
  );
};
