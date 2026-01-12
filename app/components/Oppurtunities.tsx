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
      title: "Trading Forex",
      image: "/forextrading.png",
      description:
        "Négociez des devises mondialement 24/5, capitalisez sur les mouvements de prix, couvrez les risques et accédez au marché le plus grand et le plus liquide du monde avec des outils avancés et des opportunités de profit.",
    },
    {
      id: 2,
      title: "Trading Crypto",
      image: "/cryptotrading.png",
      description:
        "Achetez, vendez et négociez des cryptomonnaies comme Bitcoin et Ethereum sur un marché mondial sécurisé, tirant parti de la volatilité pour le profit et participant à l'économie numérique en pleine croissance.",
    },
    {
      id: 3,
      title: "Trading d'Indices",
      image: "/stockmarket.png",
      description:
        "Négociez les principaux indices boursiers comme le S&P 500, le NASDAQ et le FTSE pour vous exposer aux performances globales du marché et capitaliser sur les tendances économiques mondiales.",
    },
    {
      id: 4,
      title: "Trading d'ETFs",
      image: "/comodities.png",
      description:
        "Investissez dans des portefeuilles diversifiés grâce aux fonds négociés en bourse (ETFs), vous permettant de négocier plusieurs actifs comme des actions, des obligations ou des matières premières dans un seul investissement flexible.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(services[0].image);

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
    <section className="min-h-screen bg-[#07071b]  py-16 px-8">
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
        <div className="mb-16 text-center">
          <div  className="w-fit mx-auto">
          <p className="text-2xl md:text-5xl font-bold text-white bg-clip-text">
            Nos Opportunités
          </p>
          
          <div
            className={`mx-auto mt-4 w-3/5 h-1 bg-[#7C4DFF]/40 transition-all duration-1000 `}
          />
          </div>
          <h2 className="text-lg text-[#7C4DFF] mt-6">
            Courtier CFD et Forex de premier plan pour traders professionnels
          </h2>
        </div>

        <div className="flex gap-12 items-start justify-center flex-col relative">
          <div className="relative h-[60vh]">
            <img
              src="/purple.png"
              alt="image de trading forex"
              className="relative w-full h-full object-cover rounded-lg shadow-lg animate-image-slide"
            />
          </div>

          <div className="space-y-10 p-5 absolute w-1/3">
            {services.map((service, i) => {
              const isVisible = visibleItems.includes(i);

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  style={{ transitionDelay: `${i * 120}ms` }}
                  className={`border-t border-[#7C4DFF] pt-6 cursor-pointer group
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
                      <h3 className="text-xl font-semibold text-[#7C4DFF]">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/90 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </div>

                  <div
                    className={`ml-12 overflow-hidden transition-all duration-300
                      ${
                        isExpended && expandedItem === service.id
                          ? "opacity-100 max-h-96"
                          : "opacity-0 max-h-0"
                      }`}
                  >
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
