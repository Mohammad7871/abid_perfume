import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, Zap, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Confidence That Speaks",
    desc: "The right fragrance is your invisible accessory. ABID scents are formulated to boost your presence and self-assurance in every situation.",
  },
  {
    icon: Zap,
    title: "All-Day Performance",
    desc: "From your morning commute to late-night events — our concentrated EDP formula delivers 12+ hours of consistent, evolving scent.",
  },
  {
    icon: TrendingUp,
    title: "Investment in Yourself",
    desc: "A signature scent is the most underrated style upgrade. It's the first thing people notice and the last thing they forget.",
  },
];

const checkpoints = [
  "Cruelty-free & vegan options",
  "No synthetic fillers",
  "Handcrafted in small batches",
  "Climate-adaptive formulations",
  "Premium glass packaging",
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glow-gold">
              <div className="min-h-[30rem] bg-gradient-to-br from-noir-800 via-noir-900 to-noir-950 rounded-3xl p-6 sm:p-10 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                    The ABID Standard
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-noir-50 mt-3">
                    Made with intention.
                  </h3>
                  <p className="text-sm leading-relaxed text-noir-400 mt-3 max-w-sm">
                    Thoughtful ingredients, responsible craft, and a finish that
                    feels unmistakably refined.
                  </p>
                </div>

                <div className="space-y-4">
                  {checkpoints.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 group transition-colors hover:border-gold-500/20 hover:bg-gold-500/5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-gold-500/40 group-hover:to-gold-600/20 transition-all">
                        <Check size={16} className="text-gold-400" />
                      </div>
                      <span className="text-noir-200 text-sm sm:text-base">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold-500/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">
                The ABID Advantage
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-noir-50">More Than a </span>
                <span className="text-gradient-gold">Fragrance</span>
              </h2>
              <p className="text-noir-400 text-lg leading-relaxed">
                ABID isn't just perfume — it's a statement. Every spray is an
                intentional choice to stand out, feel confident, and leave an
                impression that lingers.
              </p>
            </motion.div>

            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 flex items-center justify-center flex-shrink-0 group-hover:from-gold-500/25 group-hover:to-gold-600/15 transition-all duration-500">
                    <benefit.icon size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-noir-100 mb-2 group-hover:text-gold-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-noir-400 leading-relaxed text-sm">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
