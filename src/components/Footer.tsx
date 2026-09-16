import { Mail, MapPin, Phone, Heart, MessageCircle } from "lucide-react";

function BrandIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M14 8.5h2V5h-2c-2.76 0-4.5 1.74-4.5 4.7V12H7v3.5h2.5V21H13v-5.5h2.8L16.5 12H13v-2.1c0-.93.34-1.4 1-1.4Z" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Collection",
    links: [
      { label: "Noir Essence", href: "#products" },
      { label: "Azure Spirit", href: "#products" },
      { label: "Heritage Gold", href: "#products" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Our standards", href: "#features" },
      { label: "Customer reviews", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const whatsappUrl =
  "https://wa.me/18001234567?text=Hello%20ABID%2C%20I%20need%20help%20with%20your%20fragrances.";

const socialLinks = [
  { label: "Instagram", icon: null, href: "https://instagram.com/" },
  { label: "Facebook", icon: null, href: "https://facebook.com/" },
  { label: "WhatsApp", icon: MessageCircle, href: whatsappUrl },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a
              href="#top"
              className="flex w-fit items-center gap-2 mb-6 group"
              aria-label="ABID home"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20">
                <span className="text-noir-950 font-display font-bold text-sm">
                  A
                </span>
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-noir-50 group-hover:text-gold-400 transition-colors">
                ABID
              </span>
            </a>
            <p className="text-sm text-noir-400 leading-relaxed mb-6">
              Premium fragrances crafted for the modern man. Bold, refined,
              unmistakable.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="soft-social flex h-10 w-10 items-center justify-center rounded-xl glass text-noir-400 hover:border-gold-500/30 hover:text-gold-400"
                  aria-label={`Visit ABID on ${label}`}
                  title={label}
                >
                  {Icon ? <Icon size={18} /> : <BrandIcon label={label} />}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold text-noir-200 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-noir-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 text-sm text-noir-400">
          <a
            href="mailto:hello@abid.co"
            className="flex items-center gap-2 hover:text-gold-400 transition-colors"
          >
            <Mail size={14} />
            hello@abid.co
          </a>
          <a
            href="tel:+18001234567"
            className="flex items-center gap-2 hover:text-gold-400 transition-colors"
          >
            <Phone size={14} />
            1-800-123-4567
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Dubai, UAE
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-noir-500">
            © 2024 ABID Fragrances. All rights reserved.
          </p>
          <p className="text-xs text-noir-500 flex items-center gap-1">
            Crafted with <Heart size={12} className="text-gold-500" /> for the
            modern man
          </p>
        </div>
      </div>
    </footer>
  );
}
