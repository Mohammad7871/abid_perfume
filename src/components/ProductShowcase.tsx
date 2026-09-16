import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const products = [
  {
    name: "Noir Essence",
    category: "Eau de Parfum",
    rating: 4.9,
    reviews: 2340,
    notes: ["Oud", "Black Pepper", "Amber"],
  },
  {
    name: "Azure Spirit",
    category: "Eau de Toilette",
    rating: 4.8,
    reviews: 1850,
    notes: ["Marine", "Bergamot", "Sandalwood"],
  },
  {
    name: "Heritage Gold",
    category: "Parfum Intense",
    rating: 5.0,
    reviews: 980,
    notes: ["Saffron", "Leather", "Musk"],
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-5 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex min-h-[430px] flex-col justify-between rounded-[28px] border border-white/5 bg-[#080808] px-5 pb-5 pt-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-[#d9a52b] sm:text-[0.85rem]">
                  {product.category}
                </span>

                <div className="flex items-center gap-1 text-[0.72rem] font-medium text-[#d9a52b] sm:text-[0.8rem]">
                  <Star
                    size={12}
                    fill="currentColor"
                    className="text-[#d9a52b]"
                  />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-[#7b7b7b]">({product.reviews})</span>
                </div>
              </div>

              <h3 className="mt-8 font-display text-[clamp(2.5rem,3vw,4rem)] leading-[0.9] tracking-[-0.06em] text-[#f1f1f1]">
                {product.name}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="inline-flex h-[58px] min-w-[110px] items-center justify-center rounded-full border border-white/10 bg-[#171717] px-4 text-[0.92rem] text-[#ececec] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-9 flex h-[72px] w-full items-center justify-center rounded-full bg-[#d9a52b] text-[2rem] font-medium text-[#090909] shadow-[0_14px_28px_rgba(217,165,43,0.18)] transition-transform duration-200 hover:scale-[1.01]"
              >
                Add
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
