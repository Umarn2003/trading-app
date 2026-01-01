"use client";

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
  { name: "Bank Transfer", src: "/4.png"},
  { name: "Bank Transfer", src: "/5.png"},
  { name: "Bank Transfer", src: "/6.png"},
  { name: "Bank Transfer", src: "/7.png"},
]

export default function TakeControlSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0 " />
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-20 bg-gradient-to-br from-white/70 via-yellow-500 to-black/50 text-transparent bg-clip-text">
          Take control of your funds
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 items-start">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`relative ${
                index === 1
                  ? "lg:border-l lg:border-white/30 lg:pl-12"
                  : ""
              }`}
            >
              <item.icon className="w-10 h-10 mb-6 text-white" />

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
          ))}
        </div>

        <div className="my-16 h-px bg-white/40" />

       <div className="flex items-center justify-start gap-14 flex-wrap ">
  {payments.map((p, i) => (
    <div
      key={i}
      className="flex items-center justify-center h-16  transition"
    >
      <img
        src={p.src}
        alt={p.name}
        className="h-full w-auto object-contain"
      />
    </div>
  ))}
</div>


        <div className="my-16 h-px bg-white/40" />

        <button className="rounded-full cursor-pointer bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-white hover:text-yellow-500 bg-clip-text px-10 py-4 text-base font-semibold shadow-[0_0_18px_rgba(234,179,8,0.45)] hover:scale-105 transition">
          Open account
        </button>
      </div>
    </section>
  );
}
