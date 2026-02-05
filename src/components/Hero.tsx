import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
                    alt="Peaceful Santa Monica Beach"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    quality={90}
                />
            </div>

            <div className="section-padding relative z-20 w-full">
                <div className="max-w-2xl">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
                        Dr. Maya Reynolds, PsyD
                    </span>
                    <h1 className="text-5xl md:text-7xl mb-6 text-primary leading-tight">
                        Live Your Life <br /> In <span className="italic">Full Bloom.</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-10 text-foreground/80 leading-relaxed">
                        Compassionate, trauma-informed clinical psychology in Santa Monica.
                        Helping you uncover resilience and navigate life&apos;s transitions with a safe, collaborative approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="btn-primary text-center">
                            Begin Your Journey
                        </Link>
                        <a href="#about" className="btn-outline text-center">
                            Learn My Approach
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
