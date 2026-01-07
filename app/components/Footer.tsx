"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black backdrop-blur-lg border-t border-[#7C4DFF]/50">
      <div className="max-w-10/12 mx-auto px-6 lg:px-8 py-6">
        {/* Container for links */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6">
          {/* Left links - wrap on small screens */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-white/80">
            <Link href="/pages/Kyc" className="hover:text-[#7C4DFF] transition">
              KYC
            </Link>
            <Link
              href="/pages/Privacypolicy"
              className="hover:text-[#7C4DFF] transition"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/pages/Disclaimer"
              className="hover:text-[#7C4DFF] transition"
            >
              Avis de Non-Responsabilité
            </Link>
            <Link
              href="/pages/ArbritragetRading"
              className="hover:text-[#7C4DFF] transition"
            >
              Trading d'Arbitrage
            </Link>
            <Link
              href="/pages/Smfs"
              className="hover:text-[#7C4DFF] transition"
            >
              SMSF
            </Link>
          </div>

          {/* Optional Right side info or copyright */}
          <div className="mt-4 md:mt-0 text-center md:text-right text-white/90 text-sm">
            &copy; {new Date().getFullYear()} MyCompany. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
