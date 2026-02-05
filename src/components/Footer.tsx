import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-background border-t border-primary/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Maya Reynolds.</h2>
                    <p className="text-foreground/70 max-w-sm mb-8">
                        Providing trauma-informed psychological care that honors your unique path to healing and resilience.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-primary mb-6 uppercase text-sm tracking-widest">Connect</h4>
                    <ul className="space-y-4 text-foreground/70">
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Book a Session</Link></li>
                        <li>45 W 123th Street<br />Santa Monica, CA 90401</li>
                        <li>hello@mayareynolds.com</li>
                        <li>(310) 555-0123</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-primary mb-6 uppercase text-sm tracking-widest">Hours</h4>
                    <ul className="space-y-4 text-foreground/70">
                        <li className="flex justify-between"><span>Mon - Thu</span> <span>9am - 6pm</span></li>
                        <li className="flex justify-between"><span>Friday</span> <span>9am - 3pm</span></li>
                        <li className="flex justify-between font-medium text-accent"><span>Sat - Sun</span> <span>Closed</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-foreground/40 border-t border-primary/5 pt-10">
                <p>© 2026 Dr. Maya Reynolds. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
