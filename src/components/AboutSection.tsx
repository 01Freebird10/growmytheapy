import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding bg-secondary/30 rounded-3xl my-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                        alt="Dr. Maya Reynolds, PsyD"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl mb-6 text-primary">Meet Dr. Maya Reynolds</h2>
                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <p>
                            I am a compassionate and insightful Licensed Clinical Psychologist dedicated to guiding individuals
                            through life&apos;s complexities toward greater well-being and personal growth.
                        </p>
                        <p className="border-l-4 border-accent pl-6 italic text-xl text-primary font-medium">
                            &quot;I believe that therapy is a journey of self-discovery and empowerment. My approach is rooted
                            in the understanding that our past experiences profoundly shape our present, but they do not
                            have to dictate our future.&quot;
                        </p>
                        <p>
                            With a warm and collaborative approach, I create a safe and non-judgmental space where you
                            can explore your inner world, process difficult experiences, and develop effective coping strategies.
                            I believe that everyone possesses an inherent capacity for healing and resilience.
                        </p>
                        <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-semibold text-primary/70">
                            <div>• PsyD in Clinical Psychology</div>
                            <div>• Licensed Clinical Psychologist</div>
                            <div>• APA Member</div>
                            <div>• Santa Monica Resident</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
