"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-linear-to-br from-[#080024] to-[#0c0038] backdrop-blur-lg py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              MonLogo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5  text-white">
            <Link href="#about" className="hover:text-[#7C4DFF] transition underline underline-offset-4">
              À propos
            </Link>
            <Link href="#tradingoffers" className="hover:text-[#7C4DFF] transition underline underline-offset-4">
              Offres de Trading
            </Link>
            <Link href="#opportunities" className="hover:text-[#7C4DFF] transition underline underline-offset-4" >
              Opportunités
            </Link>
            <Link href="#deposit" className="hover:text-[#7C4DFF] transition underline underline-offset-4">
              Dépôt
            </Link>
            <Link href="#cfdexplaination" className="hover:text-[#7C4DFF] transition underline underline-offset-4">
              Explication CFD
            </Link>
            <Link href="#contactus" className="hover:text-[#7C4DFF] transition underline underline-offset-4">
              Nous contacter
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <Link href="/login">
              <button className="rounded-full px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white  bg-[#7C4DFF] hover:bg-[#9D7CFF] shadow-[0_0_18px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                Se connecter
              </button>
            </Link>
            <Link href="/signup">
              <button className="rounded-full px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white shadow-[0_0_18px_rgba(59,130,246,0.45)] hover:bg-[#7C4DFF] hover:text-white hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                S'inscrire
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg border-t border-blue-800 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-3 lg:px-4 space-y-2 text-white">
          <Link href="#about" className="hover:text-[#7C4DFF] transition">
            À propos
          </Link>
          <Link href="#tradingoffers" className="hover:text-[#7C4DFF] transition">
            Offres de Trading
          </Link>
          <Link href="#opportunities" className="hover:text-[#7C4DFF] transition">
            Opportunités
          </Link>
          <Link href="#deposit" className="hover:text-[#7C4DFF] transition">
            Dépôt
          </Link>
          <Link href="#cfdexplaination" className="hover:text-[#7C4DFF] transition">
            Explication CFD
          </Link>
          <Link href="#contactus" className="hover:text-[#7C4DFF] transition">
            Nous contacter
          </Link>

          {/* Auth Buttons */}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full sm:w-auto rounded-2xl px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF]  hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                Commencez à trader
              </button>
              <button className="w-full sm:w-auto rounded-2xl px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold text-white/90  bg-[#7C4DFF]  hover:text-white hover:bg-black/40 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                S'inscrire
              </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C4DFF]/50 to-transparent" />
    </nav>
  );
}
