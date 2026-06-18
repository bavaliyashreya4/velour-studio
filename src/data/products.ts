export type Product = {
  id: string;
  slug: string;
  name: string;
  price: string;
  category: "Outerwear" | "Dresses" | "Accessories";
  description: string;
  colorClass: string;
  image?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "the-velour-coat",
    name: "The Velour Coat",
    price: "₹ 24,990",
    category: "Outerwear",
    description: "Our signature piece. Crafted with impeccable attention to detail, this coat features an oversized, structured silhouette that drapes elegantly. Designed to be your definitive outer layer for the colder months.",
    colorClass: "bg-[var(--color-plum)]",
    image: "/velour_coat.png"
  },
  {
    id: "2",
    slug: "silk-slip-dress",
    name: "Silk Slip Dress",
    price: "₹ 12,490",
    category: "Dresses",
    description: "A masterclass in minimal design. Cut on the bias to ensure a perfect fluid drape. Made from 100% heavy silk crepe that feels like a second skin.",
    colorClass: "bg-[var(--color-mauve)]/30",
    image: "/slip_dress.png"
  },
  {
    id: "3",
    slug: "structured-tote",
    name: "Structured Tote",
    price: "₹ 18,990",
    category: "Accessories",
    description: "The ideal everyday companion. Generously proportioned with sharp architectural lines, crafted from premium smooth calf leather.",
    colorClass: "bg-[var(--color-dark)] border border-[var(--background)]/10",
    image: "/structured_tote.png"
  },
  {
    id: "4",
    slug: "oversized-blazer",
    name: "Oversized Blazer",
    price: "₹ 16,990",
    category: "Outerwear",
    description: "Borrowing from menswear tailoring, this blazer offers strong shoulders and a relaxed body. The perfect piece for power dressing with ease.",
    colorClass: "bg-[#2c2a2b]",
    image: "/oversized_blazer.png"
  },
  {
    id: "5",
    slug: "pleated-midi-dress",
    name: "Pleated Midi Dress",
    price: "₹ 14,990",
    category: "Dresses",
    description: "Featuring meticulous sunray pleating that creates volume and movement with every step. Cinch the waist with the matching belt or wear it loose.",
    colorClass: "bg-[var(--color-blush)]",
    image: "/pleated_dress.png"
  },
  {
    id: "6",
    slug: "leather-belt",
    name: "Signature Leather Belt",
    price: "₹ 4,490",
    category: "Accessories",
    description: "A refined essential. Slim profile with a custom minimal rose gold buckle. Elevates any outfit effortlessly.",
    colorClass: "bg-[#4a3b32]",
    image: "/leather_belt.png"
  },
  {
    id: "7",
    slug: "cashmere-wrap-coat",
    name: "Cashmere Wrap Coat",
    price: "₹ 32,990",
    category: "Outerwear",
    description: "Unlined and lightweight yet incredibly warm. The wrap silhouette allows for versatile styling and a customizable fit.",
    colorClass: "bg-[var(--color-gold)]/20",
    image: "/wrap_coat.png"
  },
  {
    id: "8",
    slug: "ruched-evening-gown",
    name: "Ruched Evening Gown",
    price: "₹ 28,490",
    category: "Dresses",
    description: "Dramatic yet understated. Strategic ruching flatters the form, cascading into a sweeping floor-length hem.",
    colorClass: "bg-[var(--color-dark)]",
    image: "/evening_gown.png"
  },
  {
    id: "9",
    slug: "sculptural-earrings",
    name: "Sculptural Earrings",
    price: "₹ 8,990",
    category: "Accessories",
    description: "Abstract forms crafted in vermeil. These earrings catch the light beautifully and add a touch of modern art to your look.",
    colorClass: "bg-[var(--color-gold)]",
    image: "/sculptural_earrings.png"
  }
];
