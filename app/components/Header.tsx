"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              MyLogo
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-white">
            <Link href="/about">About</Link>
            <Link href="/services">Trading offers</Link>
            <Link href="/contact">Our Opportunities</Link>
            <Link href="/">Deposit</Link>
            <Link href="/">CFD Explaination</Link>
            <Link href="/">Contact us</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <button className="rounded-xl px-5 py-2 text-sm font-semibold text-white hover:bg-gray-100 transition">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
                Sign up
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
                <button className="w-full rounded-xl border border-gray-200 py-2 px-4 bg-blue-600 font-semibold hover:text-black">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full rounded-xl bg-blue-600 py-2 font-semibold text-white shadow-md">
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

