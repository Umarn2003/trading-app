"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-lg border-t border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ml-80">
          <div className="hidden md:flex items-center gap-10 text-white/70">
            <Link href="/pages/Kyc">Kyc</Link>
            <Link href="/pages/Privacypolicy">Privacy Policy</Link>
            <Link href="/pages/Disclaimer">Disclaimer</Link>
            <Link href="/pages/ArbritragetRading">Arbitrage Trading</Link>
            <Link href="/pages/Smfs">SMSF</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

