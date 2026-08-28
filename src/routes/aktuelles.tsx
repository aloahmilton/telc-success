import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Newspaper, Tag } from "lucide-react";
import { useState } from "react";

import { Layout, PageHero } from "@/components/site/Layout";
import { news, routes } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/aktuelles")({
  head: () => ({
    meta: [
      { title: "Aktuelles & Presse | telc Nachrichten" },
      {
        name: "description",
        content:
          "Neueste Nachrichten, Pressemitteilungen und Informationen zu Prüfungsordnung, Terminen und Bildungsveranstaltungen.",
      },
    ],
    links: [{ rel: "canonical", href: "/aktuelles" }],
  }),
  component: NewsRoute,
});

function NewsRoute() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Alle Artikel" },
    { id: "Allgemeines", label: "Allgemeines & Presse" },
    { id: "Prüfungen", label: "Prüfungen & Formate" },
    { id: "Veranstaltungen", label: "Veranstaltungen" },
  ];

  const filteredNews = news.filter((item) => {
    const categoryText = item.category[lang] || item.category.de;
    return activeCategory === "all" || categoryText.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <Layout>
      <PageHero
        title="Aktuelles & Presse"
        text="Bleiben Sie informiert über aktuelle Entwicklungen, neue Prüfungsformate, Veranstaltungshinweise und Pressemitteilungen der telc gGmbH."
      />

      <section className="container-page py-12">
        {/* News Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card mb-8">
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
            href="https://www.telc.net/presse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <Newspaper className="h-4 w-4" />
            <span>Pressebereich besuchen</span>
          </a>
        </div>

        {/* News Articles Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1 text-[0.6875rem] font-bold text-primary">
                    <Tag className="h-3 w-3" /> {item.category[lang] || item.category.de}
                  </span>
                  <span className="flex items-center gap-1 text-[0.6875rem] font-semibold text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {item.date}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-foreground leading-snug">
                  {item.title[lang] || item.title.de}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.teaser[lang] || item.teaser.de}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to={routes.contact}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <span>Artikel lesen</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
