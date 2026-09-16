import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="ambient-orb absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[120px]" />
        <div className="ambient-orb ambient-orb-delayed absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-600/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-noir-700/30 rounded-full blur-[80px]" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8"
            >
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-400">
                New 2024 Collection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-5 sm:mb-6"
            >
              <span className="text-noir-50">Your</span>
              <br />
              <span className="text-gradient-gold">Signature</span>
              <br />
              <span className="text-noir-50">Scent Awaits</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-noir-300 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Premium fragrances crafted for the modern man. From bold to
              refined — find the scent that defines you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transition-all shadow-xl shadow-gold-500/25 hover:shadow-gold-400/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Collection
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border-gradient-gold text-noir-100 font-medium text-lg hover:bg-white/5 transition-all"
              >
                Learn More
              </a>
            </motion.div>

            {/* Mini social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-noir-950 flex items-center justify-center"
                  >
                    <span className="text-[10px] font-bold text-noir-950">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-gold-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-noir-400">50K+ happy customers</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind bottle */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-gold-600/10 to-transparent rounded-full blur-[60px] scale-75" />

              <motion.img
                src="/images/hero-perfume.jpg"
                alt="ABID Premium Perfume"
                className="relative z-10 w-[min(320px,82vw)] sm:w-[400px] lg:w-[460px] rounded-3xl object-cover shadow-2xl shadow-black/50"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute right-0 sm:right-0 top-8 z-20 glass-gold rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="text-2xl font-display font-bold text-gradient-gold">
                  4.9
                </div>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={10}
                      className="text-gold-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="text-[10px] text-noir-400 mt-1">
                  2K+ Reviews
                </div>
              </motion.div>

              {/* Another floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute left-0 sm:left-0 bottom-12 z-20 glass rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="text-xs text-noir-400 uppercase tracking-wider">
                  Best Seller
                </div>
                <div className="text-sm font-semibold text-noir-100 mt-1">
                  Noir Essence
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-noir-950 to-transparent" />
    </section>
  );
}
