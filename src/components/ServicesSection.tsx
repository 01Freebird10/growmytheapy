import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Trauma-Informed Care",
        description: "Helping you process memories, reduce symptoms, and reclaim a sense of safety and control in your life.",
        image: "/images/trauma.webp"
    },
    {
        title: "CBT & Anxiety",
        description: "Identifying and challenging unhelpful thought patterns and behaviors that contribute to emotional difficulties.",
        image: "/images/cbt-anxiety.jpg"
    },
    {
        title: "EMDR Therapy",
        description: "Utilizing bilateral stimulation to facilitate healing and reduce distress from past distressing events.",
        image: "/images/emdr.avif"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="section-padding">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4 text-primary">Therapeutic Specialties</h2>
                <p className="max-w-2xl mx-auto text-foreground/70">
                    Rooted in evidence-based practice and genuine empathy, I tailor my methods to meet
                    your unique needs and goals.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="group bg-card p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5">
                        <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-2xl mb-3 text-primary">{service.title}</h3>
                        <p className="text-foreground/70 mb-6 text-sm">
                            {service.description}
                        </p>
                        <Link href="/contact" className="text-accent font-semibold hover:underline flex items-center gap-2">
                            Learn More
                            <span>→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
