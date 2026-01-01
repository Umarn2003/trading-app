"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 items-center">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              MyLogo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-white">
            <Link href="#about">About</Link>
            <Link href="#tradingoffers">Trading offers</Link>
            <Link href="#opportunities">Our Opportunities</Link>
            <Link href="#deposit">Deposit</Link>
            <Link href="#cfdexplaination">CFD Explaination</Link>
            <Link href="#contactus">Contact us</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <button
  className="
    rounded-full cursor-pointer
    bg-linear-to-br from-white/70 via-yellow-500 to-black/20
    text-white
    px-6 py-1 text-base font-semibold
    shadow-[0_0_18px_rgba(234,179,8,0.45)]
    transition-all duration-300
    hover:bg-black hover:bg-none
    hover:text-yellow-500
    hover:scale-105
  "
>
  Login
</button>

            </Link>
            <Link href="/signup">
               <button
  className="
    rounded-full cursor-pointer
    bg-linear-to-br from-white/70 via-yellow-500 to-black/20
    text-white
    px-6 py-1 text-base font-semibold
    shadow-[0_0_18px_rgba(234,179,8,0.45)]
    transition-all duration-300
    hover:bg-black hover:bg-none
    hover:text-yellow-500
    hover:scale-105
  "
>
Sign Up
</button>

            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link href="/login">
                <button className="rounded-full cursor-pointer bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-white hover:text-yellow-500  px-10 py-4 text-base font-semibold shadow-[0_0_18px_rgba(234,179,8,0.45)] hover:scale-105 transition">
          Login
        </button>
              </Link>
              <Link href="/signup">
                <button className="rounded-full cursor-pointer bg-linear-to-br from-white/70 via-yellow-500 to-black/50 text-white hover:text-yellow-500 px-10 py-4 text-base font-semibold shadow-[0_0_18px_rgba(234,179,8,0.45)] hover:scale-105 transition">
          Sign up
        </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

