import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Eye,
  Star,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    name: "Noir Essence",
    category: "Eau de Parfum",
    rating: 4.9,
    reviews: 2340,
    image: "/images/perfume-bottle-1.jpg",
    notes: ["Oud", "Black Pepper", "Amber"],
    badge: "Best Seller",
    gradient: "from-amber-900/30 to-noir-900/30",
    gallery: [
      { src: "/images/perfume-bottle-1.jpg", position: "center" },
      { src: "/images/perfume-bottle-1.jpg", position: "left" },
      { src: "/images/perfume-bottle-1.jpg", position: "right" },
      { src: "/images/hero-perfume.jpg", position: "center" },
      { src: "/images/perfume-bottle-1.jpg", position: "top" },
      { src: "/images/perfume-bottle-1.jpg", position: "bottom" },
    ],
  },
  {
    name: "Azure Spirit",
    category: "Eau de Toilette",
    rating: 4.8,
    reviews: 1850,
    image: "/images/perfume-bottle-2.jpg",
    notes: ["Marine", "Bergamot", "Sandalwood"],
    badge: "New",
    gradient: "from-blue-900/30 to-noir-900/30",
    gallery: [
      { src: "/images/perfume-bottle-2.jpg", position: "center" },
      { src: "/images/perfume-bottle-2.jpg", position: "left" },
      { src: "/images/perfume-bottle-2.jpg", position: "right" },
      { src: "/images/hero-perfume.jpg", position: "left" },
      { src: "/images/perfume-bottle-2.jpg", position: "top" },
      { src: "/images/perfume-bottle-2.jpg", position: "bottom" },
    ],
  },
  {
    name: "Heritage Gold",
    category: "Parfum Intense",
    rating: 5.0,
    reviews: 980,
    image: "/images/perfume-bottle-3.jpg",
    notes: ["Saffron", "Leather", "Musk"],
    badge: "Premium",
    gradient: "from-yellow-900/30 to-noir-900/30",
    gallery: [
      { src: "/images/perfume-bottle-3.jpg", position: "center" },
      { src: "/images/perfume-bottle-3.jpg", position: "left" },
      { src: "/images/perfume-bottle-3.jpg", position: "right" },
      { src: "/images/hero-perfume.jpg", position: "right" },
      { src: "/images/perfume-bottle-3.jpg", position: "top" },
      { src: "/images/perfume-bottle-3.jpg", position: "bottom" },
    ],
  },
];

const whatsappNumber = "18001234567";

const getWhatsAppUrl = (product: (typeof products)[number]) => {
  const message = [
    "Hello ABID, I am interested in:",
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    `Notes: ${product.notes.join(", ")}`,
    `Rating: ${product.rating} (${product.reviews} reviews)`,
    "Please share availability and details.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openGallery = (index: number) => {
    setSelectedProduct(index);
    setActiveImage(0);
  };

  const closeGallery = () => setSelectedProduct(null);

  useEffect(() => {
    if (selectedProduct === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current === 0 ? 5 : current - 1));
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % 6);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section id="products" ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="soft-kicker inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">
            <Sparkles size={14} />
            The Collection
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 sm:mb-6">
            <span className="text-noir-50">Find Your </span>
            <span className="text-gradient-gold">Signature</span>
          </h2>
          <p className="text-noir-400 text-base sm:text-lg leading-relaxed">
            Three distinct fragrances. Three ways to make your mark. Each one
            tells a story — what's yours?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => openGallery(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") openGallery(i);
              }}
              className="soft-hover group relative flex h-full flex-col rounded-3xl overflow-hidden glass hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-700"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 text-[10px] font-bold uppercase tracking-wider">
                {product.badge}
              </div>

              {/* Image */}
              <div
                className={`relative h-64 sm:h-80 bg-gradient-to-b ${product.gradient} overflow-hidden`}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  animate={hoveredIdx === i ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />

                {/* Quick view overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(event) => {
                      event.stopPropagation();
                      openGallery(i);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold text-gold-300 text-sm font-medium"
                  >
                    <Eye size={16} />
                    Quick View
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-gold-500 uppercase tracking-wider font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star
                      size={12}
                      className="text-gold-400"
                      fill="currentColor"
                    />
                    <span className="text-xs text-noir-300 font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-noir-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="min-h-[2.25rem] font-display text-2xl font-bold text-noir-50 mb-3 group-hover:text-gold-300 transition-colors">
                  {product.name}
                </h3>

                {/* Fragrance notes */}
                <div className="min-h-[3.75rem] flex flex-wrap content-start gap-2 mb-5">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-noir-300 border border-white/5"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Product CTA */}
                <div className="mt-auto flex justify-end">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={getWhatsAppUrl(product)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 text-sm font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 sm:w-auto"
                    aria-label={`Ask about ${product.name} on WhatsApp`}
                  >
                    <MessageCircle size={14} />
                    Add
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-noir-950/90 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${products[selectedProduct].name} photo gallery`}
          onClick={closeGallery}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-noir-900 shadow-2xl lg:grid-cols-[minmax(0,1fr)_340px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-noir-100 transition-colors hover:bg-gold-500 hover:text-noir-950"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            <div className="flex min-h-0 flex-col gap-4 bg-noir-950 p-4 sm:p-6 lg:flex-row lg:gap-5 lg:p-8">
              <div className="order-2 flex shrink-0 gap-2 overflow-x-auto lg:order-1 lg:w-16 lg:flex-col lg:overflow-y-auto">
                {products[selectedProduct].gallery.map((image, index) => (
                  <button
                    key={`side-${image.src}-${image.position}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all lg:h-14 lg:w-14 ${
                      activeImage === index
                        ? "border-gold-400"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View image ${index + 1} of 6`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="h-full w-full object-cover"
                      style={{ objectPosition: image.position }}
                    />
                  </button>
                ))}
              </div>

              <div className="relative order-1 flex min-h-[280px] min-w-0 flex-1 items-center justify-center sm:min-h-[480px] lg:order-2">
                <img
                  src={products[selectedProduct].gallery[activeImage].src}
                  alt={`${products[selectedProduct].name} image ${activeImage + 1} of 6`}
                  className="h-full max-h-[62vh] w-full rounded-2xl object-cover shadow-2xl sm:max-h-[68vh]"
                  style={{
                    objectPosition:
                      products[selectedProduct].gallery[activeImage].position,
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((current) =>
                      current === 0 ? 5 : current - 1,
                    )
                  }
                  className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white hover:bg-gold-500 hover:text-noir-950 sm:left-5"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage((current) => (current + 1) % 6)}
                  className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white hover:bg-gold-500 hover:text-noir-950 sm:right-5"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-noir-100">
                  {activeImage + 1} / 6
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-col p-5 sm:p-8">
              <span className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
                {products[selectedProduct].category}
              </span>
              <h3 className="font-display text-3xl font-bold text-noir-50 sm:text-4xl">
                {products[selectedProduct].name}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-sm text-noir-300">
                <Star size={14} className="text-gold-400" fill="currentColor" />
                {products[selectedProduct].rating} rating ·{" "}
                {products[selectedProduct].reviews} reviews
              </div>
              <p className="mt-6 text-sm leading-relaxed text-noir-400">
                Explore six views of this signature fragrance and discover the
                details behind the bottle.
              </p>

              <div className="mt-auto pt-6 text-xs text-noir-500">
                Select a thumbnail or use the arrows to browse 6 views
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
