"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black backdrop-blur-lg border-t border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        {/* Container for links */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6">
          {/* Left links - wrap on small screens */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-white/70">
            <Link
              href="/pages/Kyc"
              className="hover:text-yellow-500 transition"
            >
              KYC
            </Link>
            <Link
              href="/pages/Privacypolicy"
              className="hover:text-yellow-500 transition"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/pages/Disclaimer"
              className="hover:text-yellow-500 transition"
            >
              Avis de Non-Responsabilité
            </Link>
            <Link
              href="/pages/ArbritragetRading"
              className="hover:text-yellow-500 transition"
            >
              Trading d'Arbitrage
            </Link>
            <Link
              href="/pages/Smfs"
              className="hover:text-yellow-500 transition"
            >
              SMSF
            </Link>
          </div>

          {/* Optional Right side info or copyright */}
          <div className="mt-4 md:mt-0 text-center md:text-right text-white/50 text-sm">
            &copy; {new Date().getFullYear()} MyCompany. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
