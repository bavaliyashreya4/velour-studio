"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden -mt-24 pt-24">
        {/* Abstract Background for Hero */}
        <div className="absolute inset-0 bg-[var(--color-plum)] z-0">
          <Image 
            src="/hero_fashion.png"
            alt="Velour Autumn Winter"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-60"></div>
        </div>
        
        <motion.div 
          className="z-10 text-center px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative mb-6">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[var(--color-mauve)]/10 rounded-full blur-3xl -z-10"></div>
             <h1 className="font-heading text-6xl md:text-9xl text-[var(--foreground)] tracking-[0.2em] md:tracking-[0.4em] uppercase opacity-90">
               Velour
             </h1>
          </div>
          <p className="text-sm md:text-base tracking-widest uppercase text-[var(--color-gold)] mt-4">
            Autumn / Winter 25
          </p>
        </motion.div>
      </section>

      {/* Editorial Pull-Quote */}
      <section className="py-32 px-6 md:px-12 bg-[var(--background)] text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-[var(--foreground)] italic leading-tight">
            "Style is not about being noticed. <br /> It's about being remembered."
          </h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto mt-12"></div>
        </motion.div>
      </section>

      {/* New Collection */}
      <section className="py-24 px-6 md:px-12 bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <p className="text-[var(--color-gold)] tracking-widest uppercase text-sm mb-4">Item 001 - 003</p>
              <h3 className="font-heading text-5xl tracking-widest uppercase">The <br/> Signature <br/> Edit</h3>
            </div>
            <Link href="/collection" className="group flex items-center space-x-4 mt-8 md:mt-0 pb-2 border-b border-[var(--background)]/30 hover:border-[var(--color-gold)] transition-colors">
              <span className="tracking-widest uppercase text-sm">View All</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} variants={fadeUp} className="group cursor-none">
                <Link href={`/collection/${item.slug}`} className="block">
                  <div className={`relative w-full aspect-[3/4] overflow-hidden ${item.colorClass} mb-6 flex items-center justify-center`}>
                     {item.image ? (
                       <Image src={item.image} alt={item.name} fill className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                     ) : (
                       <div className="w-1/2 h-1/2 border border-[var(--background)]/20 rotate-45 group-hover:rotate-90 transition-all duration-700 ease-out"></div>
                     )}
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-heading text-2xl">{item.name}</h4>
                    <span className="text-sm tracking-widest text-[var(--color-gold)]">{item.price}</span>
                  </div>
                  <p className="text-xs tracking-widest uppercase text-[var(--background)]/50 mt-2">Limited Pieces</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-32 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative aspect-square bg-[var(--color-mauve)]/20 overflow-hidden"
          >
            <Image 
              src="/evening_gown.png" 
              alt="Velour Brand Story" 
              fill 
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-[var(--color-gold)] tracking-widest uppercase text-sm mb-6">Philosophy</p>
            <h3 className="font-heading text-5xl md:text-7xl leading-none mb-8">Less Is <br /> More.</h3>
            <p className="text-lg leading-relaxed text-[var(--foreground)]/80 mb-10 max-w-md">
              The art of intentional dressing. Crafted for those who know. We believe in slow fashion, where every piece is an investment in self-expression and enduring quality.
            </p>
            <Link href="/about" className="group flex items-center space-x-4 pb-2 border-b border-[var(--foreground)] w-fit hover:border-[var(--color-gold)] transition-colors">
              <span className="tracking-widest uppercase text-sm">Discover Our Story</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
