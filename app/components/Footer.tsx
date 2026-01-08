"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#080024] via-[#0a0033] to-[#0c0038]">
      
      {/* soft ambient glow */}
      {/* <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7C4DFF]/20 blur-3xl" /> */}

      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C4DFF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* BRAND */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold tracking-wide text-white">
            MonLogo
          </h3>
          <p className="mt-2 text-sm text-white/60 max-w-md mx-auto">
            Trading CFD nouvelle génération. Rapidité, transparence et sécurité.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
          {[
            { name: "KYC", href: "/pages/Kyc" },
            { name: "Confidentialité", href: "/pages/Privacypolicy" },
            { name: "Disclaimer", href: "/pages/Disclaimer" },
            { name: "Arbitrage", href: "/pages/ArbritragetRading" },
            { name: "SMSF", href: "/pages/Smfs" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative text-white/70 transition-all duration-300 hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#7C4DFF] to-[#9D7CFF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} MyCompany. Tous droits réservés.
          </span>
          <span>
            Le trading comporte des risques. Investissez de manière responsable.
          </span>
        </div>
      </div>
    </footer>
  );
}
