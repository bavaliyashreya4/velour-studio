import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft } from "lucide-react";

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Get 3 related products
  const related = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <Link href="/collection" className="group flex items-center space-x-4 mb-16 w-fit text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span className="tracking-widest uppercase text-xs">Back to Collection</span>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          {/* Image side */}
          <div className={`w-full aspect-[3/4] bg-[var(--foreground)]/5 flex items-center justify-center relative overflow-hidden ${product.image ? '' : 'p-12'}`}>
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            ) : (
              <div className={`w-full h-full ${product.colorClass} opacity-90 shadow-2xl`}></div>
            )}
          </div>

          {/* Details side */}
          <div className="flex flex-col pt-8 md:sticky md:top-32">
            <p className="text-xs tracking-widest uppercase text-[var(--foreground)]/50 mb-4">
              {product.category}
            </p>
            <h1 className="font-heading text-5xl md:text-6xl mb-6">{product.name}</h1>
            <p className="text-xl text-[var(--color-gold)] mb-12">{product.price}</p>
            
            <p className="text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
              {product.description}
            </p>

            <div className="mb-12 border-t border-b border-[var(--foreground)]/10 py-8">
              <div className="flex justify-between items-center mb-6">
                <span className="tracking-widest uppercase text-xs text-[var(--foreground)]/60">Select Size</span>
                <span className="tracking-widest uppercase text-xs text-[var(--color-gold)] underline cursor-pointer">Size Guide</span>
              </div>
              <div className="flex gap-4">
                {["XS", "S", "M", "L"].map(size => (
                  <button key={size} className="w-12 h-12 border border-[var(--foreground)]/20 flex items-center justify-center tracking-widest text-sm hover:border-[var(--foreground)] transition-colors cursor-none">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-[var(--foreground)] text-[var(--background)] py-5 uppercase tracking-[0.2em] text-sm hover:bg-[var(--color-plum)] transition-colors cursor-none">
              Add To Bag
            </button>
            <p className="text-center text-xs tracking-widest uppercase text-[var(--foreground)]/40 mt-4">
              Complimentary Shipping & Returns
            </p>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="border-t border-[var(--foreground)]/10 pt-24">
          <h3 className="font-heading text-3xl mb-12 text-center uppercase tracking-widest">You May Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(item => (
              <Link href={`/collection/${item.slug}`} key={item.id} className="group cursor-none block">
                <div className={`relative w-full aspect-[3/4] overflow-hidden bg-[var(--foreground)]/5 mb-6 flex items-center justify-center group-hover:bg-[var(--foreground)]/10 transition-colors duration-700`}>
                  {item.image ? (
                     <Image src={item.image} alt={item.name} fill className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  ) : (
                     <div className={`w-3/4 h-3/4 ${item.colorClass} opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out`}></div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="font-heading text-xl">{item.name}</h4>
                  <span className="text-[var(--color-gold)] tracking-widest text-sm">{item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
