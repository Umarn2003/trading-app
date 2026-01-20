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
      colorTheme:'',
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
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-40 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: "100ms" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C4DFF] rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative mb-16 w-fit mx-auto">
          <div className="text-center mb-10 w-fit mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          Notre Histoire
          <div className="w-3/4 h-1 mt-4 bg-[#7C4DFF]/40 mx-auto rounded-full"></div>
          </h2>
        </div>
          <p className="text-[#7C4DFF] text-lg">
            Suivez un processus d'intégration simple et commencez à trader
            rapidement.
          </p>
        </div>

        <div
          className={`relative bg-linear-to-br from-[#080024] to-[#0c0038] border border-[#7C4DFF]/20 rounded-4xl p-16 shadow-2xl transform transition-all duration-1000 ease-out rotate-6 ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-32 scale-95"
          }`}
          style={{
            transitionDelay: "200ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="max-w-xl py-16">
            <h2
              className={`text-3xl font-bold text-[#9D7CFF] mb-4 transition-all duration-700 -rotate-4 ${
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
            <button className="w-fit -rotate-4 rounded-2xl px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF]  hover:text-white hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-[#9D7CFF] flex items-center gap-2">
              Nous Contacter
            </button>
          </div>
        </div>

        <div
          className={`absolute top-80 right-12 w-100 h-112 bg-white/90 rounded-2xl shadow-2xl z-20 overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0 scale-100 rotate-0" : "opacity-0 translate-x-32 scale-95 rotate-3"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >

          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
