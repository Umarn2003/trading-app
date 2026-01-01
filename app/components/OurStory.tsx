import React, { useEffect, useRef } from "react";

export default function OurStory() {
  const containerRef = useRef(null);

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
   <section className="relative bg-black py-32 overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-6">
   <h1 className="text-7xl text-center mb-16 bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text rotate-fade">
  Our Story
</h1>


    <div
      className="relative bg-gradient-to-tr from-black/50 to-yellow-500 rounded-[32px] p-16 shadow-2xl transform rotate-4 animate-fadeUp"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="transform rotate-6 max-w-xl py-16">
        <h2 className="text-3xl -rotate-10 font-bold text-white mb-4">
          Trade Cryptocurrencies with Leverage
        </h2>
        <p className="text-white/80 -rotate-10 mb-14 ml-3">
          Trade cryptocurrencies with up to 1:150 leverage. You can start
          with as little as $100 to gain the effect of $15,000 capital!
        </p>
        <button className="bg-black ml-6 -rotate-10 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition hover:bg-transparent hover:text-yellow-100/50">
          Contact Us
        </button>
      </div>
    </div>

    <div
      ref={containerRef}
      className="absolute top-60 right-12 w-[400px] h-[450px] bg-white rounded-2xl shadow-2xl z-20 overflow-hidden"
    />
  </div>
</section>

  );
}
