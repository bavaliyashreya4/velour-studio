import Link from "next/link";
import { MoveRight } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-20 px-6 md:px-12 border-t border-[var(--color-mauve)]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand & Philosophy */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Link href="/" className="font-heading text-4xl tracking-[0.3em] uppercase mb-6">
            Velour
          </Link>
          <p className="text-[var(--background)]/70 max-w-sm italic text-lg">
            "Style is not about being noticed. It's about being remembered."
          </p>
          <p className="mt-4 text-[var(--background)]/50 text-sm">
            Draped in softness. Defined by you.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-heading text-xl tracking-widest uppercase mb-2 text-[var(--color-gold)]">
            Explore
          </h4>
          <Link href="/collection" className="hover:text-[var(--color-gold)] transition-colors w-fit tracking-wide">
            Collection
          </Link>
          <Link href="/about" className="hover:text-[var(--color-gold)] transition-colors w-fit tracking-wide">
            Our Story
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors w-fit tracking-wide">
            Contact
          </Link>
        </div>

        {/* Newsletter & Social */}
        <div className="md:col-span-4 flex flex-col">
          <h4 className="font-heading text-xl tracking-widest uppercase mb-4 text-[var(--color-gold)]">
            Join The Studio
          </h4>
          <NewsletterForm />


        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--background)]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--background)]/40 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Velour Fashion Studio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
