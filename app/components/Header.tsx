"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              MyLogo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-white">
            <Link href="#about" className="hover:text-yellow-500 transition">About</Link>
            <Link href="#tradingoffers" className="hover:text-yellow-500 transition">Trading Offers</Link>
            <Link href="#opportunities" className="hover:text-yellow-500 transition">Opportunities</Link>
            <Link href="#deposit" className="hover:text-yellow-500 transition">Deposit</Link>
            <Link href="#cfdexplaination" className="hover:text-yellow-500 transition">CFD Explaination</Link>
            <Link href="#contactus" className="hover:text-yellow-500 transition">Contact Us</Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <Link href="/login">
              <button className="rounded-full px-4 sm:px-6 py-1 text-sm sm:text-base font-semibold text-white shadow-[0_0_18px_rgba(234,179,8,0.45)] bg-gradient-to-br from-white/70 via-yellow-500 to-black/20 hover:text-yellow-500 hover:bg-black hover:scale-105 transition-all duration-300">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="rounded-full px-4 sm:px-6 py-1 text-sm sm:text-base font-semibold text-white shadow-[0_0_18px_rgba(234,179,8,0.45)] bg-gradient-to-br from-white/70 via-yellow-500 to-black/20 hover:text-yellow-500 hover:bg-black hover:scale-105 transition-all duration-300">
                Sign Up
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
        className={`md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-100 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 space-y-3 text-white">
          <Link href="#about" className="hover:text-yellow-500 transition">About</Link>
          <Link href="#tradingoffers" className="hover:text-yellow-500 transition">Trading Offers</Link>
          <Link href="#opportunities" className="hover:text-yellow-500 transition">Opportunities</Link>
          <Link href="#deposit" className="hover:text-yellow-500 transition">Deposit</Link>
          <Link href="#cfdexplaination" className="hover:text-yellow-500 transition">CFD Explaination</Link>
          <Link href="#contactus" className="hover:text-yellow-500 transition">Contact Us</Link>

          {/* Auth Buttons */}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/login">
              <button className="w-full rounded-full px-4 sm:px-6 py-3 text-base font-semibold text-white shadow-[0_0_18px_rgba(234,179,8,0.45)] bg-gradient-to-br from-white/70 via-yellow-500 to-black/20 hover:text-yellow-500 hover:bg-black hover:scale-105 transition-all duration-300">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full rounded-full px-4 sm:px-6 py-3 text-base font-semibold text-white shadow-[0_0_18px_rgba(234,179,8,0.45)] bg-gradient-to-br from-white/70 via-yellow-500 to-black/20 hover:text-yellow-500 hover:bg-black hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
