"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const FAQForTrading:React.FC=()=> {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      number: '01',
      question: 'What is Trade002?',
      answer: ' Trade001 is a secure and user-friendly CFD trading platform providing access to Forex, Crypto, Indices, ETFs. It is designed for both beginner and professional traders..'
    },
    {
      id: 2,
      number: '02',
      question: 'What are CFDs?',
      answer: 'A CFD, or Contract for Difference, is a financial agreement allowing traders to profit from price movements of an asset without owning it. Traders can go long or short depending on market direction..'
    },
    {
      id: 3,
      number: '03',
      question: 'How can AI help a business?',
      answer: 'AI helps businesses by automating routine tasks, providing data-driven insights for better decision-making, personalizing customer experiences, improving operational efficiency, reducing costs, predicting market trends, enhancing product recommendations, optimizing supply chains, detecting fraud, and enabling 24/7 customer support through chatbots and virtual assistants.'
    },
    {
      id: 4,
      number: '04',
      question: 'Is Trade002 Secure and Safe?',
      answer: 'Yes, Trade001 uses advanced security protocols to protect your funds and personal data while providing a reliable trading environment..'
    },
    {
      id: 5,
      number: '05',
      question: 'Which Markets can i trade on 002?',
      answer: 'You can trade Forex, Crypto, Indices, ETFs from a single, easy to use platform.'
    },
    {
      id: 6,
      number: '06',
      question: 'Does trade002 offers Trade Execution?',
      answer: 'Trade001 ensures lightning fast execution so you can capture market opportunities without delay.'
    },
     {
      id: 7,
      number: '07',
      question: 'Can Begineers Tradeon002?',
      answer: 'Absolutely. The platform is designed for traders of all experience levels, with educational resources and 24/7 expert support.'
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-black/30 py-10 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-linear-to-br from-amber-300 to-black/30 rounded-full flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-black rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                  <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-5xl bg-linear-to-br from-white/70 font-semibold via-yellow-500 to-black/50 text-transparent bg-clip-text mb-4">
            
            FAQs About Trading
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-yellow-500 pb-4"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between py-4 text-left hover:opacity-70 transition group hover:cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-yellow-400 font-semibold text-lg">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-normal text-white/90 flex-1 group-hover:translate-x-2 transition-transform duration-400">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-yellow-400 transition-transform shrink-0 ml-4 group-hover:-translate-x-2 duration-400 ${
                    openItem === item.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItem === item.id && (
                <div className="ml-12 mt-2 pr-10">
                  <p className="text-white/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}