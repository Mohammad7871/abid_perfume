import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "How long do ABID fragrances last on skin?",
    a: "Our Eau de Parfum formulations are designed for 12+ hours of longevity. Factors like skin type, climate, and application method can affect this. For maximum lasting power, apply to pulse points and moisturized skin.",
  },
  {
    q: "What makes ABID different from other perfume brands?",
    a: "ABID combines artisan craftsmanship with modern science. Every fragrance is hand-blended in small batches using sustainably sourced, premium ingredients — no synthetic fillers. We also offer climate-adaptive formulations that perform optimally in any environment.",
  },
  {
    q: "Is ABID suitable for teenagers and young men?",
    a: "Absolutely! ABID is crafted for men aged 15 and above. Our Azure Spirit line, in particular, features fresh, versatile notes that are perfect for younger men — from school to social events to date nights.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes! We offer free standard shipping on qualifying orders and free express shipping on our Signature and Prestige packages. International shipping is available to 120+ countries with delivery in 3-7 business days.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day satisfaction guarantee. If you're not completely in love with your ABID fragrance, return it within 30 days for a full refund — no questions asked. We even cover return shipping costs.",
  },
  {
    q: "Are ABID products cruelty-free?",
    a: "100%. All ABID fragrances are cruelty-free and never tested on animals. We also offer vegan-friendly options across our entire collection. We believe luxury should never come at the cost of ethics.",
  },
  {
    q: "Can I get my bottle engraved?",
    a: "Yes! Free engraving is included with our Signature and Prestige packages. You can add your name, initials, or a short message. It makes for an incredibly personal touch — or a perfect gift.",
  },
  {
    q: "How should I store my perfume?",
    a: "Keep your ABID fragrance in a cool, dry place away from direct sunlight. Our premium glass bottles are designed to preserve the fragrance, but proper storage ensures optimal performance for years. Avoid bathrooms with high humidity.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-noir-50">Questions? </span>
            <span className="text-gradient-gold">Answers.</span>
          </h2>
          <p className="text-noir-400 text-lg leading-relaxed">
            Everything you need to know about ABID fragrances.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="glass rounded-2xl overflow-hidden hover:bg-white/[0.03] transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={openIdx === i}
              >
                <span className="font-display text-lg font-semibold text-noir-100 group-hover:text-gold-300 transition-colors pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gold-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-noir-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-noir-400 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/18001234567?text=Hello%20ABID%2C%20I%20have%20a%20question%20about%20your%20fragrances."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-gold text-gold-400 font-medium hover:bg-gold-500/10 transition-all"
          >
            <MessageCircle size={16} />
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
