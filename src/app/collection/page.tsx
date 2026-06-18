"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { products, Product } from "@/data/products";

const categories = ["All", "Outerwear", "Dresses", "Accessories"];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <h1 className="font-heading text-6xl md:text-8xl uppercase tracking-widest leading-none">
              The <br/> Collection
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-6 md:gap-8 border-b border-[var(--foreground)]/20 pb-4 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-widest uppercase transition-colors relative ${
                  activeCategory === cat ? "text-[var(--foreground)] font-semibold" : "text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute -bottom-4 left-0 right-0 h-[1px] bg-[var(--foreground)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="group cursor-none"
              >
                <Link href={`/collection/${product.slug}`} className="block">
                  <div className={`relative w-full aspect-[3/4] overflow-hidden mb-6 flex items-center justify-center bg-[var(--foreground)]/5 group-hover:bg-[var(--foreground)]/10 transition-colors duration-700`}>
                    {product.image ? (
                       <Image src={product.image} alt={product.name} fill className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                       <div className={`w-3/4 h-3/4 ${product.colorClass} opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out`}></div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h2 className="font-heading text-2xl">{product.name}</h2>
                      <span className="text-[var(--color-gold)] text-sm tracking-widest">{product.price}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[var(--foreground)]/50">
                      {product.category}
                    </p>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs tracking-widest uppercase border-b border-[var(--foreground)]/30 w-fit pb-1 mt-4">
                      View Details
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}
