import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileText, Filter, Search } from "lucide-react";
import { useState } from "react";

import { CardGrid, Layout, PageHero, Prose } from "@/components/site/Layout";
import { routes } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { examsPage } from "@/lib/pages";
import { getSiteUrl } from "@/lib/siteUrl";

export const Route = createFileRoute("/sprachpruefungen")({
  head: () => ({
    meta: [
      { title: "Sprachprüfungen A1–C2 | telc Sprachzertifikate" },
      {
        name: "description",
        content:
          "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Studium und Aufenthalt – in über 3.000 Prüfungszentren weltweit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Sprachprüfungen A1–C2 | telc Sprachzertifikate" },
      {
        property: "og:description",
        content:
          "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Studium und Aufenthalt – in über 3.000 Prüfungszentren weltweit.",
      },
      { property: "og:url", content: getSiteUrl("/sprachpruefungen") },
      { property: "og:image", content: "https://telcsuccess.org/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sprachprüfungen A1–C2 | telc Sprachzertifikate" },
      {
        name: "twitter:description",
        content:
          "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Studium und Aufenthalt.",
      },
      { name: "twitter:image", content: "https://telcsuccess.org/favicon.png" },
    ],
    links: [{ rel: "canonical", href: getSiteUrl("/sprachpruefungen") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalCredential",
          "name": "telc Sprachzertifikate A1–C2",
          "description":
            "Anerkannte europäische Sprachprüfungen von A1 bis C2 für Alltag, Beruf, Studium und Einbürgerung.",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "telc-success",
            "url": "https://telcsuccess.org",
          },
        }),
      },
    ],
  }),
  component: ExamsRoute,
});

function ExamsRoute() {
  const p = useT(examsPage);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filters = [
    { id: "all", label: "Alle Prüfungen" },
    { id: "a1a2", label: "Niveau A1 – A2" },
    { id: "b1b2", label: "Niveau B1 – B2" },
    { id: "c1c2", label: "Niveau C1 – C2" },
    { id: "beruf", label: "Beruf & Medizin" },
  ];

  const filteredCards = p.cards.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.text.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "all") return true;
    if (activeFilter === "a1a2") return card.title.includes("A1") || card.title.includes("A2");
    if (activeFilter === "b1b2") return card.title.includes("B1") || card.title.includes("B2");
    if (activeFilter === "c1c2") return card.title.includes("C1") || card.title.includes("C2");
    if (activeFilter === "beruf") return card.title.toLowerCase().includes("beruf") || card.title.toLowerCase().includes("pflege") || card.title.toLowerCase().includes("medizin");

    return true;
  });

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />

      {/* Interactive Level Filter & Search Bar */}
      <section className="container-page py-8">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-card md:flex-row md:items-center md:justify-between">
          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeFilter === f.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary/60 text-foreground hover:bg-secondary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Prüfung suchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary/30 py-1.5 pl-9 pr-3 text-xs font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Filtered Exam Cards */}
      <CardGrid items={filteredCards} />

      {/* Quick Action Links */}
      <section className="container-page pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-card">
            <div>
              <h3 className="text-base font-extrabold text-foreground">Prüfungszentrum in Ihrer Nähe finden</h3>
              <p className="mt-1 text-xs text-muted-foreground">Suchen Sie nach Standorten & Terminen in Ihrer Stadt.</p>
            </div>
            <Link
              to={routes.centerFinder}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline shrink-0"
            >
              <span>Zentrum suchen</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-card">
            <div>
              <h3 className="text-base font-extrabold text-foreground">Zertifikat auf Echtheit verifizieren</h3>
              <p className="mt-1 text-xs text-muted-foreground">Online-Validierung für Arbeitgeber & Behörden.</p>
            </div>
            <Link
              to={routes.verifyCert}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline shrink-0"
            >
              <span>Zertifikat prüfen</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Prose title={p.proseTitle} paragraphs={p.prose} />
    </Layout>
  );
}
