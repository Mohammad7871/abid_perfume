import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Wind, Shield, Leaf, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Long-Lasting",
    desc: "12+ hours of captivating presence. Our concentrated formula ensures your scent stays from morning meetings to midnight.",
  },
  {
    icon: Wind,
    title: "Exceptional Sillage",
    desc: "Leave an unforgettable trail. Engineered projection that turns heads without overwhelming the room.",
  },
  {
    icon: Shield,
    title: "Skin-Friendly",
    desc: "Dermatologist-tested and hypoallergenic. Premium ingredients that are gentle on even the most sensitive skin.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Ethically harvested ingredients from master growers. Luxury that respects the planet and its people.",
  },
  {
    icon: Sparkles,
    title: "Artisan Blended",
    desc: "Each batch hand-mixed by master perfumers with 40+ years of expertise. No mass production, ever.",
  },
  {
    icon: Heart,
    title: "Compliment Magnet",
    desc: "Scientifically composed fragrance profiles designed to trigger positive social responses and confidence.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="soft-kicker inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">
            Why ABID
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 sm:mb-6">
            <span className="text-noir-50">Crafted for </span>
            <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-noir-400 text-base sm:text-lg leading-relaxed">
            Every bottle is a masterpiece — from hand-selected ingredients to
            the final seal. This is fragrance at its finest.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="soft-hover group relative glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all duration-500 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/0 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-5 group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-all duration-500">
                  <feature.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-noir-100 mb-3 group-hover:text-gold-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-noir-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
