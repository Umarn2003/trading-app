"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BenefitsSection from "./components/Cfdally";

const slides = [
  {
    image: "/real1.png",
    title: "Discover Premium Living Spaces",
    description:
      "Luxury homes designed with elegance,",
  },
  {
    image: "/AI.png",
    title: "Experience Modern Architecture",
    description:
      "Smart designs that reflect innovation.",
  },
  {
    image: "/real1.png",
    title: "Invest in Your Future Today",
    description:
      "High-value properties located in prime.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-start mt-[300px] mr-[200px]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
                {slides[current].title}
              </h1>

              <p className="mt-5 text-lg md:text-xl text-gray-200 font-sans">
                {slides[current].description}
              </p>

              <div className="mt-8">
                <button className="rounded-full border border-white/40 px-10 py-2 border-r-white text-white font-semibold hover:bg-white/10 transition">
                  Start Trading
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-18">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-500">
                Our Story
              </h2>

              <p className="mt-6 text-lg text-gray-400 max-w-xl">
                At Trade001, we provide a modern and reliable CFD trading
                platform built to meet the demands of today’s global markets.
                Our focus is on delivering fast execution, real time market
                analytics, and a secure trading environment that empowers
                traders to trade with confidence.
                <br />
                <br></br>
                <br></br>
                By combining advanced technology with transparent trading
                conditions, we make it easier for both beginners and
                professional traders to access Forex, Crypto, Indices, ETFs,
                from a single platform. Our goal is to simplify trading while
                offering powerful tools, competitive pricing, and flexible
                leverage.
              </p>

              <div className="mt-8">
                <button className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative h-[320px] lg:h-[420px] w-full">
              <Image
                src="/real1.png"
                alt="Luxury Property"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <BenefitsSection />
      </div>
    </>
  );
}
