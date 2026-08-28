import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, ChevronRight, Download, FileText, Filter, Mail, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

import bookIcon from "@/assets/book.svg";
import { ProductModal } from "@/components/site/ProductModal";
import { Layout, PageHero, Prose } from "@/components/site/Layout";
import { routes } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { materialsPage } from "@/lib/pages";
import { productsData, type ProductItem } from "@/lib/productsData";

export const Route = createFileRoute("/lehrmaterialien")({
  head: () => ({
    meta: [
      { title: "Lehrmaterialien & Übungstests | telc Katalog (126 Produkte)" },
      {
        name: "description",
        content:
          "Offizielle Lehrwerke, Modelltests, Übungshefte und gratis Download-Materialien passend zu allen telc Sprachprüfungen.",
      },
    ],
  }),
  component: MaterialsRoute,
});

const PRODUCTS_PER_PAGE = 16;

function MaterialsRoute() {
  const p = useT(materialsPage);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: "all", label: "Alle Materialien" },
    { id: "Lehrbuch", label: "Lehr- & Kursbücher" },
    { id: "Testheft", label: "Modell- & Testhefte" },
    { id: "Übungsbuch", label: "Übungsbücher" },
    { id: "Download", label: "Gratis Downloads" },
    { id: "Didaktik", label: "Lehrkräfte & Didaktik" },
  ];

  const levels = ["all", "A1", "A2", "B1", "B2", "C1", "C2", "A1-B1", "B1-B2", "B2-C1"];

  const filteredProducts = productsData.filter((b) => {
    const matchesCategory = activeCategory === "all" || b.category === activeCategory;
    const matchesLevel = activeLevel === "all" || b.level === activeLevel;
    const matchesSearch =
      searchQuery === "" ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.isbn.includes(searchQuery);

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />

      {/* Catalog Search & Category Filters */}
      <section className="container-page py-10">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-card">
          {/* Top Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Titel, Niveau oder ISBN suchen..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-border bg-secondary/50 pl-9 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-muted-foreground">
                {filteredProducts.length} von 126 Produkten
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(c.id);
                    setCurrentPage(1);
                  }}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === c.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary/60 text-foreground hover:bg-secondary"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Level Filter Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-muted-foreground">Niveau:</span>
              <select
                value={activeLevel}
                onChange={(e) => {
                  setActiveLevel(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-bold text-foreground focus:border-primary focus:outline-hidden"
              >
                <option value="all">Alle Niveaus (A1–C2)</option>
                {levels.filter((l) => l !== "all").map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Materials Catalog Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paginatedProducts.map((book) => (
            <article
              key={book.id}
              onClick={() => setSelectedProduct(book)}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-lift transition-all cursor-pointer hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary">
                    {book.badge}
                  </span>
                  <span className="rounded border border-border bg-secondary px-1.5 py-0.5 text-[0.625rem] font-bold text-foreground">
                    {book.level}
                  </span>
                </div>

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary p-3 group-hover:scale-105 transition-transform">
                  <img src={bookIcon} alt="" className="h-full w-full object-contain" />
                </div>

                <h3 className="text-sm font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{book.desc}</p>
              </div>

              <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                <span className="text-sm font-black text-foreground">{book.price}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(book);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Details & Anfrage</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-secondary disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Zurück</span>
            </button>

            <span className="px-4 text-xs font-bold text-muted-foreground">
              Seite {currentPage} von {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-secondary disabled:opacity-40 cursor-pointer"
            >
              <span>Weiter</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      <Prose title={p.proseTitle} paragraphs={p.prose} />

      {/* Product Detail & Direct Enquiry Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Layout>
  );
}
