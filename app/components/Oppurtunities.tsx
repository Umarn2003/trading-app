"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Oppurtunities: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(1);
  const [isExpended, setIsExpended] = useState<boolean>(true);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Forex Trading",
      image: "/forextrading.png",
      description:
        "Trade currencies globally 24/5, capitalize on price movements, hedge risks, and access the world’s largest and most liquid market with advanced tools and opportunities for profit.",
    },
    {
      id: 2,
      number: "02",
      title: "Crypto Trading",
      image: "/cryptotrading.png",
      description:
        "Buy, sell, and trade cryptocurrencies like Bitcoin and Ethereum on a secure global market, leveraging volatility for profit and participating in the fast-growing digital economy.",
    },
    {
      id: 3,
      number: "03",
      title: "Indices Trading",
      image: "/stockmarket.png",
      description:
        "Trade major stock market indices like S&P 500, NASDAQ, and FTSE to gain exposure to the overall market performance and capitalize on global economic trends.",
    },
    {
      id: 4,
      number: "04",
      title: "EFTs Trading",
      image: "/comodities.png",
      description:
        "Invest in diversified portfolios through Exchange-Traded Funds (ETFs), allowing you to trade multiple assets like stocks, bonds, or commodities in a single, flexible investment.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(services[0].image);

  /* 🔹 Scroll reveal for list items */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    itemsRef.current.forEach((item, i) => {
      if (item) {
        item.setAttribute("data-index", i.toString());
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-black py-16 px-8">
      {/* LOCAL ANIMATION (SAFE IN APP ROUTER) */}
      <style>{`
        @keyframes imageSlideIn {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-image-slide {
          animation: imageSlideIn 0.8s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="text-4xl font-bold bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text mb-4">
            Our Opportunities
          </p>
          <h2 className="text-3xl text-white/70">
            Leading CFD & Forex Broker for Professional Traders
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT LIST */}
          <div className="space-y-10">
            {services.map((service, i) => {
              const isVisible = visibleItems.includes(i);

              return (
                <div
                  key={service.id}
                  ref={(el) => (itemsRef.current[i] = el)}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  className={`border-t border-yellow-500 pt-6 cursor-pointer group
                    transition-all duration-700 ease-out transform
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16"
                    }`}
                  onClick={() => {
                    setExpandedItem(service.id);
                    setSelectedImage(service.image);
                    expandedItem === service.id
                      ? setIsExpended((p) => !p)
                      : setIsExpended(true);
                  }}
                >
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                      <span className="text-white/80">{service.number}</span>
                      <h3 className="text-xl font-semibold bg-gradient-to-br from-white/70 via-yellow-500 to-black/10 text-transparent bg-clip-text">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <div
                    className={`ml-12 overflow-hidden transition-all duration-300
                      ${
                        isExpended && expandedItem === service.id
                          ? "opacity-100 max-h-96"
                          : "opacity-0 max-h-0"
                      }`}
                  >
                    <p className="text-white/70">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT IMAGE – RE-ANIMATES ON EVERY CHANGE */}
          <div className="sticky top-24">
            <div
              key={selectedImage}
              className="relative h-[470px] rounded-xl overflow-hidden animate-image-slide"
            >
              <img
                src={selectedImage}
                alt="Opportunity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
