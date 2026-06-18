"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[var(--color-gold)] tracking-widest uppercase text-sm mb-6">Our Story</p>
          <h1 className="font-heading text-6xl md:text-8xl leading-none uppercase tracking-widest">
            A Return <br /> To Craft.
          </h1>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full aspect-[21/9] bg-[var(--color-dark)] relative overflow-hidden group"
        >
          <Image 
            src="/oversized_blazer.png" 
            alt="Velour Studio Editorial" 
            fill 
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-4xl md:text-6xl mb-12 italic text-[var(--color-gold)]">
              "We strip away the excess to reveal the essence."
            </h2>
            <div className="w-12 h-[1px] bg-[var(--background)]/30 mx-auto mb-12"></div>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[var(--background)]/80 text-left md:text-justify font-light">
              <p>
                Velour was born from a desire to escape the transient nature of modern fashion. 
                In a world obsessed with the new, we focus on the enduring. Every garment we create 
                is a study in form, function, and unparalleled softness.
              </p>
              <p>
                Our studio operates on the principles of slow design. We source only the finest 
                natural fibers—cashmere, heavy silk crepe, fine merino—and entrust them to artisans 
                who understand that true luxury takes time. We believe that a piece of clothing 
                should not just be worn; it should be lived in, aging gracefully alongside its wearer.
              </p>
              <p>
                The aesthetic is deliberately minimal. By removing distracting embellishments, we 
                allow the architecture of the garment and the quality of the material to speak 
                for themselves. It is a quiet confidence, crafted for those who dress with intention.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3 className="font-heading text-4xl md:text-5xl mb-8">Architectural <br /> Softness.</h3>
            <p className="text-lg leading-relaxed text-[var(--foreground)]/70 mb-8">
              The tension between sharp structure and fluid drape defines the Velour silhouette. 
              We draw inspiration from modern architecture, applying those principles of balance 
              and proportion to the human form. 
            </p>
            <p className="text-lg leading-relaxed text-[var(--foreground)]/70">
              Our atelier in the heart of the city serves as a laboratory for these ideas, 
              where rigorous tailoring meets the yielding nature of our signature fabrics.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative w-full aspect-[3/4] overflow-hidden group"
          >
             <Image 
               src="/velour_coat.png"
               alt="Architectural Softness"
               fill
               className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
             />
             <div className="absolute inset-0 border border-[var(--color-mauve)]/30 pointer-events-none z-10 m-4"></div>
             <div className="absolute bottom-8 right-8 z-20">
                <span className="text-xs tracking-widest uppercase text-white/80 mix-blend-difference">Est. 2025</span>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
