import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  Globe,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  CheckCircle,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { getSiteUrl } from "@/lib/siteUrl";
import bannerLehrwerke from "@/assets/banner-lehrwerke.jpg";
import bannerUebungstests from "@/assets/banner-uebungstests.jpg";
import bannerDigital from "@/assets/banner-digital.jpg";
import bookA22 from "@/assets/book-a22.jpg";
import bookA12 from "@/assets/book-a12.jpg";
import bookA11 from "@/assets/book-a11.jpg";
import bookA21 from "@/assets/book-a21.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "telc Online Shop | Offizielle Lehrwerke, Übungstests & Digitale Produkte" },
      {
        name: "description",
        content:
          "Der offizielle telc Online-Shop: Entdecken Sie Lehrwerke DaF/DaZ, Übungstests und digitale Produkte zur optimalen Vorbereitung auf telc Sprachprüfungen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "telc Online Shop | Offizielle Lehrwerke & Übungstests" },
      {
        property: "og:description",
        content: "Offizielle Lehrwerke, Übungstests und digitale Lernmaterialien von telc.",
      },
      { property: "og:url", content: getSiteUrl("/shop") },
      { property: "og:image", content: "https://telcsuccess.org/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "telc Online Shop | Lehrwerke & Übungstests" },
      {
        name: "twitter:description",
        content: "Offizielle Lehrwerke, Übungstests und digitale Lernmaterialien von telc.",
      },
      { name: "twitter:image", content: "https://telcsuccess.org/favicon.png" },
    ],
    links: [{ rel: "canonical", href: getSiteUrl("/shop") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "telc Online Shop",
          "description":
            "Der offizielle telc Online-Shop: Entdecken Sie Lehrwerke DaF/DaZ, Übungstests und digitale Produkte zur Vorbereitung auf Sprachprüfungen.",
          "url": getSiteUrl("/shop"),
          "provider": {
            "@type": "EducationalOrganization",
            "name": "telc-success",
            "url": "https://telcsuccess.org",
          },
        }),
      },
    ],
  }),
  component: ShopRoute,
});

interface Product {
  id: string;
  title: string;
  level: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

const initialProducts: Product[] = [
  {
    id: "p-a22",
    title: "Einfach gut! Deutsch für die Integration A2.2 Kurs- und Arbeitsbuch",
    level: "A2.2",
    price: "14,90 €",
    image: bookA22,
    category: "integration",
    description: "Offizielles Lehr- und Arbeitsbuch für den Integrationskurs (BAMF zugelassen).",
  },
  {
    id: "p-a12",
    title: "Einfach gut! Deutsch für die Integration A1.2 Kurs- und Arbeitsbuch",
    level: "A1.2",
    price: "14,90 €",
    image: bookA12,
    category: "integration",
    description: "Grundstufe A1.2: Systematischer Einstieg mit Audio- und Bildmaterial.",
  },
  {
    id: "p-a11",
    title: "Einfach gut! Deutsch für die Integration A1.1 Kurs- und Arbeitsbuch",
    level: "A1.1",
    price: "14,90 €",
    image: bookA11,
    category: "integration",
    description: "Ideal für Anfänger: Erste Schritte im deutschen Sprach- und Alltagsleben.",
  },
  {
    id: "p-a21",
    title: "Einfach gut! Deutsch für die Integration A2.1 Kurs- und Arbeitsbuch",
    level: "A2.1",
    price: "14,90 €",
    image: bookA21,
    category: "integration",
    description: "Aufbaustufe A2.1: Wortschatz- und Grammatiktraining mit realitätsnahen Dialogen.",
  },
];

const categories = [
  {
    id: "integration",
    label: "Integration",
    subcategories: [
      "Deutsch für die Integration A1–B1",
      "Erstorientierung & Alphabetisierung",
      "Prüfungsvorbereitung DTZ",
      "Zusatzmaterialien & Audios",
    ],
  },
  {
    id: "beruf",
    label: "Beruf",
    subcategories: [
      "Deutsch-Test für den Beruf (BSK)",
      "Branchenspezifisch: Pflege & Medizin",
      "Technik & Handwerk",
      "Kaufmännische Berufe",
    ],
  },
  {
    id: "allgemeinsprache",
    label: "Allgemeinsprache",
    subcategories: [
      "Allgemeines Deutsch A1–C2",
      "Wortschatz- & Grammatiktrainer",
      "Übungstests mit Lösungen",
      "Lehrerhandreichungen",
    ],
  },
  {
    id: "hochschule",
    label: "Hochschule",
    subcategories: [
      "telc Deutsch C1 Hochschule",
      "Akademisches Schreiben",
      "Studienvorbereitung",
      "Modelltests & Hörtexte",
    ],
  },
  {
    id: "weitere",
    label: "Weitere Sprachen",
    subcategories: [
      "Englisch (A1–C1)",
      "Spanisch & Französisch",
      "Italienisch & Türkisch",
      "Arabisch & Russisch",
    ],
  },
];

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.372-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.901a9.825 9.825 0 0 1 2.891 6.994c-.001 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.594 5.945L0 24l6.337-1.664a11.87 11.87 0 0 0 5.717 1.457h.006c6.555 0 11.89-5.335 11.893-11.893c0-3.181-1.238-6.167-3.487-8.414" />
    </svg>
  );
}

function ShopRoute() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const cartTotalCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    toast.success(`"${product.title}" zum Warenkorb hinzugefügt!`, {
      description: `Preis: ${product.price}`,
    });
  };

  const toggleWishlist = (id: string, title: string) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        toast.info(`"${title}" aus der Merkliste entfernt.`);
        return prev.filter((item) => item !== id);
      } else {
        toast.success(`"${title}" auf der Merkliste gespeichert.`);
        return [...prev, id];
      }
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    toast.info(`Suche nach "${searchQuery}" im Shop-Katalog...`);
  };

  const handleCheckoutViaWhatsApp = () => {
    if (cart.length === 0) return;

    const totalSum = cart
      .reduce((sum, item) => {
        const num = parseFloat(
          item.product.price.replace("€", "").replace(",", ".").trim()
        );
        return sum + (isNaN(num) ? 0 : num) * item.qty;
      }, 0)
      .toFixed(2)
      .replace(".", ",");

    const itemList = cart
      .map(
        (item) =>
          `• ${item.qty}x ${item.product.title} (Niveau ${item.product.level}) - ${item.product.price}`
      )
      .join("\n");

    const message = `Hallo telc Kundenservice,\n\nich möchte folgende Artikel aus dem Online-Shop bestellen:\n\n${itemList}\n\nGesamtsumme (inkl. MwSt.): ${totalSum} €\n\nBitte senden Sie mir die Bestätigung und Zahlungs-/Versanddetails zu. Vielen Dank!`;

    const whatsappUrl = `https://wa.me/4917614433079?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Bestellung wird an WhatsApp übermittelt...", {
      description: "Chat mit dem telc Support (+49 176 14433079) geöffnet.",
    });
    setCartDrawerOpen(false);
  };

  const handleDirectWhatsAppOrder = (product: Product) => {
    const message = `Hallo telc Kundenservice,\n\nich interessiere mich für folgenden Artikel und möchte diesen direkt bestellen:\n\n• 1x ${product.title} (Niveau ${product.level}) - ${product.price}\n\nBitte senden Sie mir die Bestätigung und Zahlungs-/Versanddetails zu. Vielen Dank!`;
    const whatsappUrl = `https://wa.me/4917614433079?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Anfrage wird an WhatsApp übermittelt...", {
      description: "Chat mit dem telc Support (+49 176 14433079) geöffnet.",
    });
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col font-sans">
      {/* ── 1. Top Meta Navigation Bar ── */}
      <div className="bg-[#f8f9fa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center h-9 text-xs font-semibold">
          <div className="flex items-center">
            <Link
              to="/"
              className="px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              telc.net
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              to="/campus"
              className="px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Campus
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              to="/trainingsangebote"
              className="px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Training
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              to="/ueber-uns"
              className="px-3 py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Community
            </Link>
            <span className="text-neutral-300">|</span>
            {/* Active Shop Tab */}
            <div className="bg-[#990000] text-white px-4 py-2 font-bold flex items-center shadow-inner">
              Shop
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Main Header Bar (Logo, Search, Utilities) ── */}
      <header className="border-b border-neutral-200 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-1">
            <span className="text-3xl font-black tracking-tight text-neutral-900">telc</span>
            <span className="h-2 w-2 rounded-full bg-[#990000] mb-2"></span>
          </Link>

          {/* Search Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-2xl hidden md:flex items-center"
          >
            <div className="relative w-full flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ihre Suche"
                className="w-full h-11 pl-4 pr-16 border border-neutral-300 rounded-l-sm text-sm focus:outline-none focus:border-neutral-500 bg-[#fdfdfd]"
              />
              <span className="absolute right-3 text-[0.7rem] font-medium text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200 pointer-events-none">
                Ctrl+K
              </span>
            </div>
            <button
              type="submit"
              aria-label="Suchen"
              className="h-11 w-12 bg-[#990000] hover:bg-[#800000] text-white flex items-center justify-center rounded-r-sm transition-colors shrink-0"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          {/* User Utilities */}
          <div className="flex items-center gap-4 text-neutral-700">
            {/* Language Selector */}
            <div className="flex items-center gap-1 px-2 py-1.5 text-xs font-bold hover:text-[#990000] cursor-pointer transition-colors">
              <Globe className="h-4 w-4" />
              <span>DE</span>
              <ChevronDown className="h-3 w-3" />
            </div>

            {/* Account */}
            <button
              type="button"
              onClick={() => toast.info("Kundenkonto: Bitte melden Sie sich an.")}
              aria-label="Mein Account"
              className="p-2 text-neutral-700 hover:text-[#990000] transition-colors"
            >
              <User className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() =>
                toast.info(
                  wishlist.length
                    ? `Merkliste enthält ${wishlist.length} Artikel.`
                    : "Ihre Merkliste ist derzeit leer."
                )
              }
              aria-label="Merkliste"
              className="relative p-2 text-neutral-700 hover:text-[#990000] transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlist.length ? "fill-[#990000] text-[#990000]" : ""
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute 1 top-0 right-0 h-4 w-4 rounded-full bg-[#990000] text-[0.65rem] font-bold text-white flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setCartDrawerOpen(true)}
              aria-label="Warenkorb"
              className="relative p-2 text-neutral-700 hover:text-[#990000] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartTotalCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#990000] text-[0.65rem] font-bold text-white flex items-center justify-center animate-pulse">
                  {cartTotalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── 3. Category Navigation Bar ── */}
        <nav
          className="border-t border-neutral-200 bg-white relative"
          onMouseLeave={() => setHoverCategory(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onMouseEnter={() => setHoverCategory(cat.id)}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.id ? null : cat.id)
                  }
                  className={`flex items-center gap-1.5 px-3 py-2.5 font-bold transition-colors whitespace-nowrap ${
                    hoverCategory === cat.id || activeCategory === cat.id
                      ? "text-[#990000]"
                      : "text-neutral-800 hover:text-[#990000]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>

            {/* Direct quick links */}
            <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-neutral-500">
              <a
                href="#bestseller"
                className="hover:text-[#990000] transition-colors"
              >
                Lehrwerke DaF/DaZ
              </a>
              <span>•</span>
              <a
                href="#bestseller"
                className="hover:text-[#990000] transition-colors"
              >
                Übungstests
              </a>
              <span>•</span>
              <a
                href="#digital"
                className="hover:text-[#990000] transition-colors"
              >
                Digitale Produkte
              </a>
            </div>
          </div>

          {/* Submenu Dropdown Panel */}
          {hoverCategory && (
            <div className="absolute left-0 right-0 top-full z-40 bg-white border-b border-neutral-300 shadow-lg py-5 animate-in fade-in duration-150">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#990000] mb-3">
                  {categories.find((c) => c.id === hoverCategory)?.label} Angebote
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {categories
                    .find((c) => c.id === hoverCategory)
                    ?.subcategories.map((sub, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          toast.info(`Kategorie "${sub}" ausgewählt`);
                          setHoverCategory(null);
                        }}
                        className="p-3 rounded bg-neutral-50 hover:bg-neutral-100 cursor-pointer border border-neutral-200/60 transition-colors text-xs font-medium text-neutral-700 hover:text-[#990000]"
                      >
                        {sub}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* WhatsApp Express Checkout Notice */}
      <div className="bg-emerald-50/90 border-b border-emerald-200 px-4 py-2.5 text-xs text-emerald-950">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </span>
            <span>
              <strong>Direktbestellung via WhatsApp aktiv:</strong> Wählen Sie Ihre Produkte aus und bestellen Sie bequem per 1-Klick über unseren Kundenservice (+49 176 14433079).
            </span>
          </div>
          <a
            href="https://wa.me/4917614433079?text=Hallo%20telc%20Support%2C%20ich%20habe%20eine%20Frage%20zum%20Online-Shop%20und%20den%20Lehrmaterialien."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:text-emerald-950 underline"
          >
            <span>Fragen & Beratung</span>
          </a>
        </div>
      </div>

      {/* ── 4. Main Hero Promo Section (3 Cards) ── */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Top 2 Banner Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Lehrwerke DaF/DaZ */}
          <div className="relative h-64 rounded-sm overflow-hidden shadow-sm group border border-neutral-200">
            <img
              src={bannerLehrwerke}
              alt="Lehrwerke DaF/DaZ"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent flex flex-col justify-center p-8 max-w-xs">
              <h2 className="text-2xl font-black text-neutral-900 leading-tight mb-4">
                Lehrwerke DaF/DaZ
              </h2>
              <a
                href="#bestseller"
                className="inline-block self-start bg-[#990000] hover:bg-[#800000] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors shadow-sm"
              >
                ZUR ÜBERSICHT
              </a>
            </div>
          </div>

          {/* Card 2: Übungstests */}
          <div className="relative h-64 rounded-sm overflow-hidden shadow-sm group border border-neutral-200">
            <img
              src={bannerUebungstests}
              alt="Übungstests"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent flex flex-col justify-center p-8 max-w-xs">
              <h2 className="text-2xl font-black text-neutral-900 leading-tight mb-4">
                Übungstests
              </h2>
              <a
                href="#bestseller"
                className="inline-block self-start bg-[#990000] hover:bg-[#800000] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors shadow-sm"
              >
                ZUR ÜBERSICHT
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Banner Card: Digitale Produkte (Full Width) */}
        <section
          id="digital"
          className="relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-sm group border border-neutral-200"
        >
          <img
            src={bannerDigital}
            alt="Digitale Produkte"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent flex flex-col justify-center p-8 sm:p-12 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight mb-4">
              Digitale Produkte
            </h2>
            <a
              href="#bestseller"
              className="inline-block self-start bg-[#990000] hover:bg-[#800000] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-sm transition-colors shadow-sm"
            >
              ZUR ÜBERSICHT
            </a>
          </div>
        </section>

        {/* ── 5. Bestseller Carousel Showcase ── */}
        <section id="bestseller" className="space-y-6 pt-4">
          {/* Section Header with Carousel Controls */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-neutral-900">Bestseller</h2>
              <p className="text-xs text-neutral-500 mt-1">
                Unsere meistverkauften Lehr- und Übungsmaterialien für erfolgreiches Deutschlernen
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
                aria-label="Vorherige Produkte"
                className="h-8 w-8 rounded-sm border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors disabled:opacity-40"
                disabled={carouselIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.min(1, prev + 1))}
                aria-label="Nächste Produkte"
                className="h-8 w-8 rounded-sm border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors disabled:opacity-40"
                disabled={carouselIndex === 1}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initialProducts.map((product) => {
              const isWished = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white border border-neutral-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  {/* Book Image */}
                  <div
                    onClick={() => setQuickViewProduct(product)}
                    className="relative aspect-square overflow-hidden mb-4 cursor-pointer bg-neutral-50 flex items-center justify-center rounded-sm"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-[#990000] text-white text-[0.65rem] font-bold px-2 py-0.5 rounded shadow-sm">
                      BAMF
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs font-bold text-neutral-900 leading-snug line-clamp-2 hover:text-[#990000] cursor-pointer mb-2"
                      title={product.title}
                    >
                      {product.title}
                    </h3>
                    <div className="mt-auto pt-2">
                      <div className="text-base font-extrabold text-neutral-900 mb-3">
                        {product.price}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-[#990000] hover:bg-[#800000] text-white text-xs font-bold py-2.5 px-3 rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <ShoppingCart className="h-3.5 w-3.5" />
                          <span>In den Warenkorb</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id, product.title)}
                          aria-label="Auf die Merkliste"
                          className={`p-2.5 rounded-sm border transition-colors ${
                            isWished
                              ? "border-[#990000] text-[#990000] bg-red-50"
                              : "border-neutral-300 text-neutral-500 hover:text-[#990000] hover:border-[#990000]"
                          }`}
                        >
                          <Heart
                            className={`h-4 w-4 ${isWished ? "fill-[#990000]" : ""}`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicator Dots */}
          <div className="flex justify-center items-center gap-2 pt-4">
            <button
              onClick={() => setCarouselIndex(0)}
              aria-label="Seite 1"
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                carouselIndex === 0 ? "bg-[#990000] scale-125" : "bg-neutral-300"
              }`}
            />
            <button
              onClick={() => setCarouselIndex(1)}
              aria-label="Seite 2"
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                carouselIndex === 1 ? "bg-[#990000] scale-125" : "bg-neutral-300"
              }`}
            />
          </div>
        </section>

        {/* ── 6. "Entdecken Sie weitere Sprachangebote" ── */}
        <section className="space-y-6 pt-6">
          <h2 className="text-xl font-extrabold text-neutral-900">
            Entdecken Sie weitere Sprachangebote
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Sprachen für Berufe",
                subtitle: "Angebote entdecken",
                href: "/lehrmaterialien",
              },
              {
                title: "Allgemeinsprachen",
                subtitle: "Angebote entdecken",
                href: "/lehrmaterialien",
              },
              {
                title: "Sprachen für Hochschulen",
                subtitle: "Angebote entdecken",
                href: "/lehrmaterialien",
              },
              {
                title: "Weitere Sprachen",
                subtitle: "Angebote entdecken",
                href: "/lehrmaterialien",
              },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.href}
                className="bg-[#f8f9fa] hover:bg-[#f1f3f5] border border-neutral-200/80 rounded-sm p-6 flex flex-col justify-center items-center text-center transition-all group hover:-translate-y-0.5"
              >
                <span className="text-sm font-bold text-neutral-900 group-hover:text-[#990000] transition-colors mb-1">
                  {card.title}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1 group-hover:underline">
                  {card.subtitle}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ── 7. Shop Footer ── */}
      <footer className="bg-white border-t border-neutral-200 mt-16 pt-12 pb-8 text-xs text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Quality notice & certification */}
          <div className="space-y-4">
            <p className="text-neutral-800 font-medium leading-relaxed">
              Hier finden Sie alle wichtigen Materialien zur gezielten Vorbereitung auf Ihre
              Prüfung.
            </p>
            {/* DEKRA Badge representation */}
            <div className="border border-neutral-300 rounded p-2.5 inline-block bg-[#fbfbfb]">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[0.65rem]">
                  DEKRA
                </div>
                <div>
                  <div className="font-extrabold text-[0.65rem] text-neutral-800 uppercase leading-none">
                    Qualitätsmanagement
                  </div>
                  <div className="text-[0.6rem] text-neutral-500 mt-0.5">ISO 9001 zertifiziert</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Informationen */}
          <div>
            <h4 className="font-extrabold text-neutral-900 uppercase tracking-wider mb-3 text-[0.7rem]">
              Informationen
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ueber-uns" className="hover:text-[#990000] transition-colors">
                  Über telc
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="hover:text-[#990000] transition-colors">
                  Jobs & Karriere
                </Link>
              </li>
              <li>
                <a
                  href="#newsletter"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Newsletter-Anmeldung ist aktiv.");
                  }}
                  className="hover:text-[#990000] transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Rechtliches */}
          <div>
            <h4 className="font-extrabold text-neutral-900 uppercase tracking-wider mb-3 text-[0.7rem]">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sitemap" className="hover:text-[#990000] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-[#990000] transition-colors">
                  AGB / Prüfungsordnung
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-[#990000] transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <span
                  onClick={() => toast.info("Widerrufsbelehrung aufgerufen.")}
                  className="hover:text-[#990000] transition-colors cursor-pointer"
                >
                  Vertrag widerrufen
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Mein Account */}
          <div>
            <h4 className="font-extrabold text-neutral-900 uppercase tracking-wider mb-3 text-[0.7rem]">
              Mein Account
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => toast.info("Login-Portal aufgerufen.")}
                  className="hover:text-[#990000] transition-colors"
                >
                  Einloggen
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCartDrawerOpen(true)}
                  className="hover:text-[#990000] transition-colors"
                >
                  Zum Warenkorb
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    toast.info(`Merkliste enthält ${wishlist.length} gespeicherte Artikel.`)
                  }
                  className="hover:text-[#990000] transition-colors"
                >
                  Zur Merkliste
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Bestell-Hotline */}
          <div>
            <h4 className="font-extrabold text-neutral-900 uppercase tracking-wider mb-3 text-[0.7rem]">
              Bestell-Hotline
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#990000] shrink-0" />
                <a
                  href="tel:+4979537189052"
                  className="font-bold text-neutral-800 hover:text-[#990000] transition-colors"
                >
                  +49 (0) 7953 7189 052
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#990000] shrink-0" />
                <a
                  href="mailto:verlagservice@lila-logistik.com"
                  className="hover:text-[#990000] transition-colors break-all"
                >
                  verlagservice@lila-logistik.com
                </a>
              </li>
              <li className="pt-1">
                <Link
                  to="/kontakt"
                  className="text-xs text-[#990000] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Info zur Auslieferung</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} telc gGmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-[0.7rem]">
            <Link to="/kontakt" className="hover:underline">
              Kundenservice
            </Link>
            <span>•</span>
            <Link to="/sitemap" className="hover:underline">
              Sitemap
            </Link>
            <span>•</span>
            <Link to="/" className="hover:underline">
              Zurück zu telc.net
            </Link>
          </div>
        </div>
      </footer>

      {/* ── Cart Drawer / Slide-Over Modal ── */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setCartDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="px-6 py-5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-[#990000]" />
                  <h3 className="text-base font-extrabold text-neutral-900">
                    Warenkorb ({cartTotalCount})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCartDrawerOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 text-neutral-300 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-neutral-700">
                      Ihr Warenkorb ist noch leer.
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Entdecken Sie unsere Bestseller und Lehrwerke.
                    </p>
                  </div>
                ) : (
                  cart.map(({ product, qty }) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 border border-neutral-200 rounded-sm bg-neutral-50"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-16 w-16 object-contain shrink-0 bg-white rounded p-1 border border-neutral-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-neutral-900 truncate">
                          {product.title}
                        </h4>
                        <div className="text-xs text-[#990000] font-bold mt-1">
                          {product.price}
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span className="text-neutral-500">Menge: {qty}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setCart((prev) =>
                                prev.filter((item) => item.product.id !== product.id)
                              );
                              toast.info(`"${product.title}" entfernt.`);
                            }}
                            className="text-red-600 hover:underline"
                          >
                            Entfernen
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Checkout Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-neutral-50 border-t border-neutral-200 space-y-3">
                  <div className="flex justify-between text-sm font-bold text-neutral-900">
                    <span>Gesamtsumme (inkl. MwSt.):</span>
                    <span>
                      {(
                        cart.reduce((sum, item) => {
                          const num = parseFloat(
                            item.product.price.replace("€", "").replace(",", ".").trim()
                          );
                          return sum + num * item.qty;
                        }, 0)
                      ).toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCheckoutViaWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-sm font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    <span>Jetzt per WhatsApp bestellen</span>
                  </button>
                  <div className="bg-emerald-50 border border-emerald-200 rounded p-2.5 text-[0.7rem] text-emerald-950 leading-snug">
                    <p className="font-bold text-emerald-900 mb-0.5 flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                      <span>Offizieller telc WhatsApp-Bestellservice:</span>
                    </p>
                    Ihre Artikelauswahl wird direkt an unseren Kundenservice (+49 176 14433079) übermittelt. Sie erhalten sofort Ihre Bestellbestätigung und bequeme Zahlungsoptionen.
                  </div>
                  <p className="text-[0.65rem] text-center text-neutral-500">
                    Kostenloser Versand innerhalb Deutschlands ab 30 €
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Quick View Modal ── */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setQuickViewProduct(null)}
          />
          <div className="relative bg-white rounded-md shadow-2xl max-w-lg w-full p-6 space-y-4">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex gap-6 items-start">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.title}
                className="w-36 h-36 object-contain rounded border border-neutral-200 p-2"
              />
              <div className="space-y-2">
                <span className="inline-block bg-[#990000]/10 text-[#990000] text-[0.65rem] font-bold px-2 py-0.5 rounded">
                  Niveau {quickViewProduct.level}
                </span>
                <h3 className="text-base font-extrabold text-neutral-900 leading-snug">
                  {quickViewProduct.title}
                </h3>
                <div className="text-lg font-black text-neutral-900">
                  {quickViewProduct.price}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => {
                  handleAddToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="flex-1 bg-[#990000] hover:bg-[#800000] text-white py-2.5 px-3 rounded-sm font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>In den Warenkorb</span>
              </button>
              <button
                type="button"
                onClick={() => handleDirectWhatsAppOrder(quickViewProduct)}
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-3 rounded-sm font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Direkt per WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  toggleWishlist(quickViewProduct.id, quickViewProduct.title);
                }}
                className="px-3 py-2.5 border border-neutral-300 rounded-sm text-neutral-700 hover:border-[#990000] hover:text-[#990000] transition-colors cursor-pointer"
                title="Auf die Merkliste"
              >
                <Heart
                  className={`h-4 w-4 ${
                    wishlist.includes(quickViewProduct.id) ? "fill-[#990000] text-[#990000]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
