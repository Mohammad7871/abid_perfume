import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900/50 to-noir-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/8 rounded-full blur-[120px]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 mb-8"
          >
            <Sparkles size={28} className="text-gold-400" />
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-noir-50">Ready to Find Your </span>
            <br />
            <span className="text-gradient-gold">Signature Scent?</span>
          </h2>

          <p className="text-noir-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ men who chose ABID as their go-to fragrance. Your
            signature scent is one click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all shadow-2xl shadow-gold-500/30 hover:shadow-gold-400/50"
            >
              Shop the Collection
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-noir-500"
          >
            Small-batch craftsmanship · 30-day returns · Secure checkout
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
