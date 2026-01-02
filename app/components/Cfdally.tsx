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

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Secure Trading",
      desc: "Advanced security keeps your funds and data protected at all times.",
      icon: ChartCandlestick,
    },
    {
      title: "Fast Execution",
      desc: "Place trades instantly with high speed order execution.",
      icon: Activity,
    },
    {
      title: "Real Time Insights",
      desc: "Trade smarter using live market data and analytics.",
      icon: Brain,
    },
    {
      title: "Global Markets",
      desc: "Access Forex, Crypto, Indices, ETFs in one place.",
      icon: Globe,
    },
    {
      title: "Monthly Competition",
      desc: "Participate in free monthly competitions and compete for exclusive rewards.",
      icon: Award,
    },
    {
      title: "24/7 Support",
      desc: "Get expert help anytime you need it.",
      icon: HandFist,
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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
    <section className="relative bg-black py-32">
      <h2 className="text-2xl md:text-5xl text-center mb-16 bg-linear-to-br font-semibold from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
        Your CFD ALLY
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-1">
          <h3 className="text-xl md:text-4xl font-bold bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text leading-tight mb-6">
            Key <br /> Highlights
          </h3>

          <p className="text-white/70 mb-10 max-w-sm">
            Power up your trading success with FundedNext & get maximum reward.
          </p>

          <div className="space-y-4 text-white/80">
            <p>• Low commissions</p>
            <p>• Raw spreads</p>
            <p>• Best packages</p>
            <p>• Affordable</p>
          </div>
        </div>

        {/* CARDS */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-16">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            const isVisible = visibleCards.includes(i);

            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                data-index={i}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-14"
                  }`}
              >
                <div
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center
                  bg-linear-to-br from-black/60 to-black/20
                  shadow-[0_0_30px_rgba(234,179,8,0.35)]"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
                  {item.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
