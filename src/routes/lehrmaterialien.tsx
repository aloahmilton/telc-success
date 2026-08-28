import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ChevronRight, Download, FileText, Filter, ShoppingCart } from "lucide-react";
import { useState } from "react";

import bookIcon from "@/assets/book.svg";
import { Layout, PageHero, Prose } from "@/components/site/Layout";
import { routes } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { materialsPage } from "@/lib/pages";

export const Route = createFileRoute("/lehrmaterialien")({
  head: () => ({
    meta: [
      { title: "Lehrmaterialien & Übungstests | telc Katalog" },
      {
        name: "description",
        content:
          "Offizielle Lehrwerke, Modelltests, Übungshefte und gratis Download-Materialien passend zu allen telc Sprachprüfungen.",
      },
    ],
  }),
  component: MaterialsRoute,
});

const sampleBooks = [
  {
    id: 1,
    title: "Einfach zum Studium! Deutsch C1 Hochschule",
    type: "Lehrbuch",
    level: "C1",
    desc: "Kompressives Lehrwerk zur gezielten Vorbereitung auf telc Deutsch C1 Hochschule. Inklusive Audios.",
    badge: "Bestseller",
    price: "24,90 €",
  },
  {
    id: 2,
    title: "telc Deutsch B1/B2 Pflege - Übungstest 1",
    type: "Testheft",
    level: "B1-B2",
    desc: "Originaler telc Modelltest mit Antwortbogen, Hörtexten und ausführlichen Bewertungshinweisen.",
    badge: "Original Modelltest",
    price: "12,50 €",
  },
  {
    id: 3,
    title: "Mit Erfolg zu telc Deutsch B2",
    type: "Übungsbuch",
    level: "B2",
    desc: "Gezieltes Training aller Prüfungsteile: Lesen, Hören, Schreiben und Mündliche Prüfung.",
    badge: "Neuerscheinung",
    price: "19,80 €",
  },
  {
    id: 4,
    title: "Handreichung für Lehrkräfte: Deutsch Integration",
    type: "Download",
    level: "A1-B1",
    desc: "Didaktische Hinweise und Methodentipps für den Unterricht in Integrationskursen.",
    badge: "Gratis PDF",
    price: "Kostenlos",
  },
];

function MaterialsRoute() {
  const p = useT(materialsPage);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Alle Materialien" },
    { id: "Lehrbuch", label: "Lehr- & Kursbücher" },
    { id: "Testheft", label: "Modell- & Testhefte" },
    { id: "Download", label: "Gratis Downloads" },
  ];

  const filteredBooks = sampleBooks.filter(
    (b) => activeCategory === "all" || b.type === activeCategory
  );

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />

      {/* Catalog Category Filters */}
      <section className="container-page py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary/60 text-foreground hover:bg-secondary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <a
            href="https://www.telc.net/shop"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-dark transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Zum telc Online-Shop</span>
          </a>
        </div>

        {/* Materials Catalog Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-lift transition-all"
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

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary p-3">
                  <img src={bookIcon} alt="" className="h-full w-full object-contain" />
                </div>

                <h3 className="text-base font-extrabold text-foreground leading-snug">{book.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{book.desc}</p>
              </div>

              <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                <span className="text-sm font-black text-foreground">{book.price}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  {book.price === "Kostenlos" ? (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      <span>Download</span>
                    </>
                  ) : (
                    <>
                      <span>Details</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Prose title={p.proseTitle} paragraphs={p.prose} />
    </Layout>
  );
}
