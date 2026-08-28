import { createFileRoute } from "@tanstack/react-router";
import { Building2, Calendar, CheckCircle2, Globe, Mail, MapPin, Navigation, Phone, Search } from "lucide-react";
import { useState } from "react";

import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/pruefungszentrum-finden")({
  head: () => ({
    meta: [
      { title: "telc Prüfungszentrum finden | Offizielle Suche" },
      {
        name: "description",
        content:
          "Finden Sie ein lizenziertes telc Prüfungszentrum in Ihrer Nähe. Über 3.000 Standorte weltweit für Sprachprüfungen A1–C2.",
      },
    ],
  }),
  component: CenterFinderRoute,
});

const sampleCenters = [
  {
    id: 1,
    name: "vhs Frankfurt am Main - Sonnemannstraße",
    city: "Frankfurt am Main",
    zip: "60314",
    address: "Sonnemannstraße 13",
    phone: "+49 (0)69 212 38000",
    email: "vhs@frankfurt.de",
    website: "www.vhs.frankfurt.de",
    nextExams: ["telc Deutsch B1 (12.09.2026)", "telc Deutsch B2 (24.09.2026)", "telc C1 Medizin (05.10.2026)"],
    accredited: true,
  },
  {
    id: 2,
    name: "telc Training & Prüfungszentrum Bad Homburg",
    city: "Bad Homburg",
    zip: "61352",
    address: "Basler Straße 7",
    phone: "+49 (0)6172 4567-0",
    email: "pruefungen@telc.net",
    website: "www.telc.net",
    nextExams: ["telc Deutsch A1–C2 (Wöchentlich)", "telc C1 Hochschule (18.09.2026)"],
    accredited: true,
  },
  {
    id: 3,
    name: "Volkshochschule Berlin Mitte",
    city: "Berlin",
    zip: "10178",
    address: "Linienstraße 162",
    phone: "+49 (0)30 9018 37411",
    email: "vhs@berlin-mitte.de",
    website: "www.vhs-berlin.de",
    nextExams: ["telc Deutsch B1/B2 Pflege (15.09.2026)", "telc B2 (28.09.2026)"],
    accredited: true,
  },
  {
    id: 4,
    name: "Münchner Volkshochschule (MVHS)",
    city: "München",
    zip: "80331",
    address: "Einsteinstraße 28",
    phone: "+49 (0)89 48006-0",
    email: "info@mvhs.de",
    website: "www.mvhs.de",
    nextExams: ["telc Deutsch A2 (10.09.2026)", "telc Deutsch C1 Hochschule (20.09.2026)"],
    accredited: true,
  },
  {
    id: 5,
    name: "Hamburger Volkshochschule Zentrale",
    city: "Hamburg",
    zip: "22083",
    address: "Schanzenstraße 75",
    phone: "+49 (0)40 42841-4284",
    email: "zentrale@vhs-hamburg.de",
    website: "www.vhs-hamburg.de",
    nextExams: ["telc Deutsch B1 (14.09.2026)", "telc English B2 (26.09.2026)"],
    accredited: true,
  },
  {
    id: 6,
    name: "vhs Köln Neumarkt",
    city: "Köln",
    zip: "50667",
    address: "Cäcilienstraße 35",
    phone: "+49 (0)221 221-25990",
    email: "vhs@stadt-koeln.de",
    website: "www.vhs-koeln.de",
    nextExams: ["telc Deutsch B2 (19.09.2026)", "telc C1 Medizin (02.10.2026)"],
    accredited: true,
  },
];

function CenterFinderRoute() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const filteredCenters = sampleCenters.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.zip.includes(searchQuery);

    const matchesLevel =
      selectedLevel === "all" ||
      c.nextExams.some((e) => e.toLowerCase().includes(selectedLevel.toLowerCase()));

    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      <PageHero
        title="Prüfungszentrum finden"
        text="Finden Sie ein lizenziertes telc Prüfungszentrum in Ihrer Nähe. Über 3.000 Standorte weltweit bieten telc Sprachprüfungen an."
      />

      <section className="container-page py-12">
        {/* Search & Filter Controls */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="relative md:col-span-8">
              <Search className="absolute left-3.5 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Stadt, PLZ oder Name des Prüfungszentrums eingeben (z.B. Frankfurt, 60314, Berlin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/40 py-2.5 pl-11 pr-4 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:outline-none"
              />
            </div>
            <div className="md:col-span-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/40 py-2.5 px-3 text-sm font-bold text-foreground focus:border-primary focus:bg-card focus:outline-none"
              >
                <option value="all">Alle Prüfungsniveaus (A1 – C2)</option>
                <option value="A1">Niveau A1</option>
                <option value="A2">Niveau A2</option>
                <option value="B1">Niveau B1</option>
                <option value="B2">Niveau B2</option>
                <option value="C1">Niveau C1 (inkl. Hochschule / Medizin)</option>
                <option value="C2">Niveau C2</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs font-bold text-muted-foreground">
            <span>Gefunden: <strong className="text-primary">{filteredCenters.length} Prüfungszentren</strong></span>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" /> 100% Lizenzierte telc Partner
              </span>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredCenters.map((center) => (
            <article
              key={center.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[0.6875rem] font-bold text-primary mb-2">
                      <Building2 className="h-3 w-3" /> Lizenzierter telc Partner
                    </span>
                    <h3 className="text-base font-extrabold text-foreground leading-snug">{center.name}</h3>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-muted-foreground font-medium">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>{center.address}, {center.zip} {center.city}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a href={`tel:${center.phone}`} className="hover:text-primary">{center.phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href={`mailto:${center.email}`} className="hover:text-primary">{center.email}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary shrink-0" />
                    <a href={`https://${center.website}`} target="_blank" rel="noreferrer" className="hover:text-primary">
                      {center.website}
                    </a>
                  </p>
                </div>

                {/* Upcoming Exam Dates */}
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> Nächste Prüfungstermine:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {center.nextExams.map((exam) => (
                      <span key={exam} className="rounded border border-border bg-secondary/60 px-2 py-1 text-[0.6875rem] font-bold text-foreground">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <a
                  href={`mailto:${center.email}?subject=Anfrage%20telc%20Pr%C3%BCfungstermin`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary-deep"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Prüfungszentrum kontaktieren</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredCenters.length === 0 && (
          <div className="mt-8 rounded-xl border border-border bg-card p-12 text-center shadow-card">
            <p className="text-sm font-bold text-muted-foreground">
              Keine Prüfungszentren für Ihre Suche &quot;{searchQuery}&quot; gefunden.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
