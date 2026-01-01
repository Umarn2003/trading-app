"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard, Timer, Wallet } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Wallet,
    title: "Straightforward and competitive charges",
    desc: [
      "0% opening / closing trades fees",
      "0% deposit and withdrawal fees",
    ],
    learnMore: true,
  },
  {
    id: 2,
    icon: Timer,
    title: "Fast withdrawals processing",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Multiple global payment methods",
  },
];

const payments = [
  { name: "Visa", src: "/1.png" },
  { name: "Mastercard", src: "/2.png" },
  { name: "PayPal", src: "/3.png" },
  { name: "Bank Transfer", src: "/4.png" },
  { name: "Bank Transfer", src: "/5.png" },
  { name: "Bank Transfer", src: "/6.png" },
  { name: "Bank Transfer", src: "/7.png" },
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
      className="relative overflow-hidden bg-black py-24"
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
        <h2 className="text-4xl lg:text-5xl font-semibold mb-20 bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
          Take control of your funds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 items-start">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${index * 180}ms` }}
                className={`relative magnetic-item ${
                  active ? "active" : ""
                } ${index === 1 ? "lg:pl-12" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute left-0 top-0 h-full w-px bg-white/30">
                    <div
                      className={`absolute top-0 left-0 w-px bg-yellow-500 divider-charge ${
                        active ? "active" : ""
                      }`}
                    />
                  </div>
                )}

                <Icon className="w-10 h-10 mb-6 text-white" />

                <h3 className="text-lg font-semibold leading-snug mb-3 max-w-xs bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
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
                    className="inline-flex items-center gap-1 text-white mt-4 hover:text-yellow-500 transition text-sm"
                  >
                    Learn more <span className="text-lg">›</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="my-16 h-px bg-white/40" />

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

        <div className="my-16 h-px bg-white/40" />

        <button
          className={`rounded-full cursor-pointer bg-linear-to-br from-white/70 via-yellow-500 to-black/50
          text-white bg-clip-text px-10 py-4 text-base font-semibold
          shadow-[0_0_18px_rgba(234,179,8,0.45)] transition cta-lock ${
            active ? "active" : ""
          }`}
        >
          Open account
        </button>
      </div>
    </section>
  );
}
