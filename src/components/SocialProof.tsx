import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50K+', label: 'Bottles Sold' },
  { value: '4.9', label: 'Average Rating' },
  { value: '120+', label: 'Countries' },
  { value: '15+', label: 'Awards Won' },
];

const brandLogos = [
  'GQ', 'VOGUE', 'ESQUIRE', 'FORBES', 'HYPEBEAST',
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Brand logos marquee */}
      <div className="mb-16">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-noir-500 mb-8">
          Featured In
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-12 text-noir-400 font-display text-2xl font-bold tracking-wider opacity-40 hover:opacity-70 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-noir-400 uppercase tracking-wider">
                {stat.label}
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="mt-3 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
