
"use client";
export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Secure Trading",
      description: "Advanced security keeps your funds and data protected at all times.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="5" width="12" height="11" rx="2" ry="2" strokeWidth="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Fast Execution",
      description: "Place trades instantly with high speed order execution.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Real-Time Insights",
      description: "Trade smarter using live market data and analytics.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <line x1="12" y1="2" x2="12" y2="22"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Global Markets",
      description: "Access Forex, Crypto, Indices, ETFs in one place.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "24/7 Support",
      description: "Get expert help anytime you need it.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-6 md:p-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 mt-16">
          <h3 className="text-white/90 text-sm md:text-base font-sans tracking-widest uppercase mb-4">
            Benefits of Using Our CFD Trading Platform
          </h3>
          <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold mb-6">
            YOUR CFD ALLY
          </h1>
          <p className="text-white/95 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            At Trade001, we act as your trusted CFD ally, providing a trading environment designed to support you at every stage of your trading journey. Our platform combines speed, security, and smart technology to help you trade confidently in global markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 px-2 w-[2000px]">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-yellow-300 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-3 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-gray-400 text-xl md:text-2xl font-semibold mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
