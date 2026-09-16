import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Collection", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="ABID home"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20"
          >
            <span className="text-noir-950 font-display font-bold text-sm">
              A
            </span>
          </motion.div>
          <span className="font-display text-xl font-bold tracking-wider text-noir-50 group-hover:text-gold-400 transition-colors">
            ABID
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-noir-300 hover:text-gold-400 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 text-sm font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/25"
          >
            <ShoppingBag size={15} />
            Shop Now
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-noir-200 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-transparent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-noir-200 hover:text-gold-400 transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 font-semibold"
              >
                <ShoppingBag size={16} />
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
