"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Oppurtunities: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(1);
  const [isExpended, setIsExpended] = useState<boolean>(true);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Forex Trading",
      image: "/forextrading.png",
      description:
      "Trade currencies globally 24/5, capitalize on price movements, hedge risks, and access the world’s largest and most liquid market with advanced tools and opportunities for profit."
    },
        {
      id: 2,
      number: "02",
      title: "Crypto Trading",
      image: "/cryptotrading.png",
      description:
      "Buy, sell, and trade cryptocurrencies like Bitcoin and Ethereum on a secure global market, leveraging volatility for profit and participating in the fast-growing digital economy."
    },
    {
      id: 3,
      number: "03",
      title: "Indices Trading",
      image: "/stockmarket.png",
      description:
    "Trade major stock market indices like S&P 500, NASDAQ, and FTSE to gain exposure to the overall market performance and capitalize on global economic trends."
      },
    {
      id: 4,
      number: "04",
      title: "EFTs Trading",
      image: "/comodities.png",
      description:
      "Invest in diversified portfolios through Exchange-Traded Funds (ETFs), allowing you to trade multiple assets like stocks, bonds, or commodities in a single, flexible investment."
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string>(services[0].image);

  return (
    <div className="min-h-screen bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-4xl bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text font-bold mb-4 text-center justify-center">
            Our Opportunities
          </p>
          <div className="">
            <h2 className="text-3xl font-bold text-white/70 mb-26 text-center justify-center">
              Leading CFD & Forex Broker for Professional Traders
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-t border-yellow-500 pt-6 cursor-pointer group"
                onClick={() => {
                  setExpandedItem(service.id);
                  setSelectedImage(service.image);
                  expandedItem === service.id
                    ? setIsExpended((prev) => !prev)
                    : setIsExpended(true);
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-white/80 font-semibold text-lg">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold bg-gradient-to-br from-white/70 via-yellow-500 to-black/10 text-transparent bg-clip-text transition">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div
                  className={`
                            ml-12 
                            transition-all duration-300 
                            overflow-hidden
                            ${
                              isExpended && expandedItem === service.id
                                ? "opacity-100 max-h-96"
                                : "opacity-0 max-h-0 pointer-events-none"
                            }
                            `}
                >
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-0">
            <div className="relative w-full h-[470px] rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="AI Technology"
                className="w-full h-[470px] object-cover"
              />
              <div className="absolute inset-0 bg-black/2 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
