'use client';

import React, { useEffect, useRef, useState } from "react";

// Scroll Animation Hook (included in this file)
const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.2, rootMargin = '-50px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isVisible;
};

export default function OurStory() {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: false,
      locale: "en",
      width: "100%",
      height: 420,
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
      className="relative bg-black py-32 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '100ms' }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '300ms' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated Title with Glow */}
        <div className="relative mb-16">
          <h1 
            className={`text-7xl text-center bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 -translate-y-10 blur-sm'
            }`}
          >
            Our Story
          </h1>
          {/* Decorative underline */}
          <div 
            className={`mx-auto mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '150ms' }}
          />
        </div>

        {/* Left Content - Slides in from left with enhanced effects */}
        <div
          className={`relative bg-gradient-to-tr from-black/50 to-yellow-500 rounded-[32px] p-16 shadow-2xl transform rotate-4 transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 -translate-x-32 scale-95'
          }`}
          style={{ 
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-[32px] blur-xl -z-10" />
          
          <div className="transform rotate-6 max-w-xl py-16">
            <h2 
              className={`text-3xl -rotate-10 font-bold text-white mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Trade Cryptocurrencies with Leverage
            </h2>
            <p 
              className={`text-white/80 -rotate-10 mb-14 ml-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Trade cryptocurrencies with up to 1:150 leverage. You can start
              with as little as $100 to gain the effect of $15,000 capital!
            </p>
            <button 
              className={`bg-black ml-6 -rotate-10 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-all hover:bg-transparent hover:text-yellow-100/50 hover:shadow-yellow-500/50 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Content (TradingView Widget) - Slides in from right with enhanced effects */}
        <div
          className={`absolute top-60 right-12 w-[400px] h-[450px] bg-white rounded-2xl shadow-2xl z-20 overflow-hidden transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0 scale-100 rotate-0'
              : 'opacity-0 translate-x-32 scale-95 rotate-3'
          }`}
          style={{ 
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Glow effect for widget */}
          <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-2xl blur-xl -z-10" />
          
          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}