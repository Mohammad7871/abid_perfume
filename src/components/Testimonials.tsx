import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    role: "Creative Director",
    text: "Noir Essence is absolutely unreal. I've never received so many compliments on a fragrance. It's become my signature — people literally stop me to ask what I'm wearing.",
    rating: 5,
    scent: "Noir Essence",
  },
  {
    name: "David R.",
    role: "Software Engineer",
    text: "I was skeptical about ordering perfume online, but ABID completely changed my mind. The longevity is insane — I can still smell it after a full workday and gym session.",
    rating: 5,
    scent: "Azure Spirit",
  },
  {
    name: "Khalid A.",
    role: "Entrepreneur",
    text: "Heritage Gold is on another level. The richness, the depth, the way it evolves on skin throughout the day. This isn't just perfume — it's an experience.",
    rating: 5,
    scent: "Heritage Gold",
  },
  {
    name: "Tyler M.",
    role: "College Student",
    text: "Finally a premium brand that feels genuinely accessible. The quality is exceptional, and Azure Spirit is perfect for everyday — fresh but sophisticated.",
    rating: 5,
    scent: "Azure Spirit",
  },
  {
    name: "James W.",
    role: "Finance Manager",
    text: "ABID has ruined other fragrances for me. The attention to detail, the packaging, the scent — everything screams premium. I'm a customer for life.",
    rating: 5,
    scent: "Noir Essence",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-noir-50">Loved by </span>
            <span className="text-gradient-gold">Thousands</span>
          </h2>
          <p className="text-noir-400 text-lg leading-relaxed">
            Don't take our word for it. Here's what our community says.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="glass-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <Quote
              size={60}
              className="absolute top-4 right-4 text-gold-500/10"
            />

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-noir-100 leading-relaxed mb-6 font-light italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-noir-50">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm text-noir-400">
                    {testimonials[active].role}
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 text-xs text-gold-400 border border-gold-500/20">
                  {testimonials[active].scent}
                </div>
              </div>
            </motion.div>

            {/* Nav buttons */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-noir-300 hover:text-gold-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-gold-500"
                        : "w-1.5 bg-noir-600 hover:bg-noir-500"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-noir-300 hover:text-gold-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass rounded-xl p-5 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={10}
                    className="text-gold-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-sm text-noir-300 leading-relaxed line-clamp-3 mb-3">
                "{t.text}"
              </p>
              <div className="text-xs font-semibold text-noir-200">
                {t.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
