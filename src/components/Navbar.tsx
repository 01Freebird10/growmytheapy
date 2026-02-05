"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold text-primary tracking-tight">
                    Maya Reynolds<span className="text-accent">.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8 uppercase text-xs font-semibold tracking-widest">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="#office" className="hover:text-primary transition-colors">Our Office</Link>
                    <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                    <Link href="/contact" className="btn-primary py-2 px-6">Book a Session</Link>
                </div>

                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-background border-b border-primary/10 p-6 flex flex-col space-y-4 uppercase text-sm font-semibold tracking-widest animate-in slide-in-from-top duration-300">
                    <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="#office" onClick={() => setIsOpen(false)}>Our Office</Link>
                    <Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link href="/contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>Book a Session</Link>
                </div>
            )}
        </nav>
    );
}
