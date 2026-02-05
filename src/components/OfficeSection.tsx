import Image from "next/image";

export default function OfficeSection() {
    return (
        <section id="office" className="bg-primary text-secondary section-padding rounded-t-[4rem]">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-accent/80 font-semibold tracking-widest uppercase text-xs mb-4 block">
                        A Calm Space for Healing
                    </span>
                    <h2 className="text-4xl md:text-5xl mb-8 text-white">Our Santa Monica Office</h2>
                    <div className="space-y-6 text-secondary/80">
                        <p className="text-lg">
                            Located in the heart of Santa Monica, our practice is designed to be a haven of
                            safety, comfort, and privacy. We believe that the environment is an essential
                            part of the therapeutic process.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                    <span className="text-white">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Soft, Intentional Lighting</h4>
                                    <p className="text-sm">Created to reduce sensory overstimulation and promote relaxation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                    <span className="text-white">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Hybrid Availability</h4>
                                    <p className="text-sm">We offer both in-person sessions at 45 W 123th Street and secure telehealth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-12">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Therapy Office Interior" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" alt="Waiting Area" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                        </div>
                    </div>
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Santa Monica Office Building" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
