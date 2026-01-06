"use client";

import React, { useEffect, useRef, useState } from "react";

// Scroll Animation Hook
const useScrollAnimation = (
  ref: React.RefObject<HTMLElement | null>,
  options: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.2, rootMargin = "-50px", triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isVisible;
};

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: false,
      locale: "fr",
      width: "100%",
      height: 450,
      showSymbolLogo: true,
      symbolsGroups: [
        {
          name: "Most Popular",
          symbols: [
            { name: "BITSTAMP:BTCUSD", displayName: "Bitcoin" },
            { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
            { name: "BINANCE:DOGEUSDT", displayName: "Dogecoin" },
            { name: "FX:EURUSD", displayName: "EUR/USD" },
          ],
        },
      ],
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#07071b]   py-32 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-30 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: "100ms" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated Title */}
        <div className="relative mb-16">
          <h2
            className={`text-2xl md:text-5xl text-center text-white font-semibold transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Notre Histoire
          </h2>
          <div
            className={`mx-auto mt-6 w-32 h-1 bg-blue-900 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          />
        </div>

        {/* Left Content */}
        <div
          className={`relative bg-blue-600/30 rounded-4xl p-16 shadow-2xl transform transition-all duration-1000 ease-out rotate-6 ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-32 scale-95"
          }`}
          style={{
            transitionDelay: "200ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="max-w-xl py-16">
            <h2
              className={`text-3xl font-bold text-white mb-4 transition-all duration-700 -rotate-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Tradez les Cryptomonnaies avec Levier
            </h2>
            <p
              className={`text-white/90 mb-14 ml-3 transition-all duration-700 -rotate-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Tradez les cryptomonnaies avec un levier allant jusqu'à 1:150. Commencez avec seulement 100 $ pour obtenir l'effet d'un capital de 15 000 $ !
            </p>
            <button
              className={` text-white shadow-[0_0_18px_rgba(59,130,246,0.45)] ml-4 -rotate-6 bg-blue-600 hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300 hover:cursor-pointer px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-all hover:bg-transparent  ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Nous Contacter
            </button>
          </div>
        </div>

        {/* Right Content (TradingView Widget) */}
        <div
          className={`absolute top-60 right-12 w-100 h-112 bg-[#0f2236] rounded-2xl shadow-2xl z-20 overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0 scale-100 rotate-0" : "opacity-0 translate-x-32 scale-95 rotate-3"
          }`}
          style={{
            transitionDelay: "400ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Glow effect for widget */}
          <div className="absolute -inset-2 bg-yellow-400/20 rounded-2xl blur-xl -z-10" />

          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
