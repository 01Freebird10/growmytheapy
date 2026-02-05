"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Therapy Inquiry",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate a backend delay and success
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "Therapy Inquiry", message: "" });
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div>
                            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
                                Get In Touch
                            </span>
                            <h1 className="text-5xl md:text-6xl mb-8 text-primary font-heading font-bold">
                                Begin Your Healing Journey.
                            </h1>
                            <p className="text-lg text-foreground/70 mb-12 max-w-lg leading-relaxed">
                                Ready to take the first step? Fill out the form below to schedule a
                                consultation or ask any questions about my practice and approach.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Office Location</h4>
                                        <p className="text-foreground/60">45 W 123th Street, Santa Monica, CA 90401</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Email Me</h4>
                                        <p className="text-foreground/60">hello@mayareynolds.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 rounded-3xl overflow-hidden relative aspect-video shadow-xl border-4 border-white/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                                    alt="Santa Monica Office"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-primary/5">
                            {status === "success" ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary mb-4">Message Sent!</h2>
                                    <p className="text-foreground/70 mb-8">
                                        Thank you for reaching out, Dr. Reynolds will get back to you
                                        within 24-48 business hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="btn-primary"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-primary/70 ml-1">Full Name</label>
                                            <input
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-primary/70 ml-1">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder="Your Email ID"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-primary/70 ml-1">Inquiry Type</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        >
                                            <option>Individual Therapy</option>
                                            <option>Trauma Therapy (EMDR)</option>
                                            <option>Consultation</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-primary/70 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                            placeholder="Tell me a bit about what brings you to therapy..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full btn-primary py-4 text-lg shadow-lg"
                                    >
                                        {status === "submitting" ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-foreground/40 px-4">
                                        By clicking &quot;Send Message&quot;, you agree to our privacy policy. Your information is kept strictly confidential.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
