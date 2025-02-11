// components/service-page/web-design/WebDesignTestimonials.tsx
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Design or strategy needs? Check out Blueprint. They're a really capable team with an impressive background and confidence in their craft.",
    author: "Scott Zimmer",
    title: "Former EVP of Innovation, Truist Bank, Currently Startup Co-Founder",
    image: "/images/testimonials/sarah-chen.jpg",
    logo: "/images/testimonials/techflow-logo.svg"
  },
  {
    quote: "Their relentless dedication and talent accelerated our progress tremendously. Blueprint's blend of design talent and cutting edge ai expertise is truly unique and highly valuable.",
    author: "Andrew Jenkins",
    title: "Former VP of Engineering, Credit Karma, Currently Startup Co-Founder",
    image: "/images/testimonials/michael-rodriguez.jpg",
    logo: "/images/testimonials/elevate-logo.svg"
  },
  {
    quote: "Blueprints ability to deeply understand our needs and translate them into smart solutions was an absolute home run.",
    author: "Steven Luis Howell",
    title: "CEO & Co-Founder, Project Metavision",
    image: "/images/testimonials/emily-foster.jpg",
    logo: "/images/testimonials/growthworks-logo.svg"
  }
];

export function WebDesignTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Growing Brands
            </h2>
            <p className="text-muted-foreground">
              See what our clients say about working with Blueprint
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5
                }}
                className={`relative p-8 rounded-2xl border bg-background/50 backdrop-blur-sm
                  hover:border-primary/20 transition-all duration-300
                  ${index === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div className="absolute -top-3 -left-3">
                  <div className="p-2 rounded-full bg-primary/5 border border-primary/10">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div className="mb-6">
                    <p className="text-lg leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/5">
                      {/* Uncomment when you have images */}
                      {/* <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Trusted by companies worldwide • 100+ successful projects • 98% client satisfaction
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}