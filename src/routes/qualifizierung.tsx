import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Calendar, CheckCircle2, ChevronRight, GraduationCap, ShieldCheck, UserCheck } from "lucide-react";

import { Layout, PageHero } from "@/components/site/Layout";
import { routes } from "@/lib/content";

export const Route = createFileRoute("/qualifizierung")({
  head: () => ({
    meta: [
      { title: "Prüferqualifizierung & Lizenzen | telc Training" },
      {
        name: "description",
        content:
          "Werden Sie zertifizierte/r telc Prüfer/in oder Beworter/in. Alle Seminare, Qualifizierungsstufen und Lizenzkriterien.",
      },
    ],
    links: [{ rel: "canonical", href: "/qualifizierung" }],
  }),
  component: QualificationRoute,
});

const qualificationLevels = [
  {
    title: "Prüferlizenz telc Deutsch A1/A2",
    target: "Lehrkräfte für Grundstufe A1–A2",
    validity: "3 Jahre gültig",
    reqs: [
      "Unterrichtserfahrung auf Niveau A1/A2 (mind. 100 UE)",
      "Kenntnis der telc Prüfungsordnungen",
      "Erfolgreicher Abschluss des Qualifizierungsseminars",
    ],
  },
  {
    title: "Prüferlizenz telc Deutsch B1/B2",
    target: "Prüfende in Integrations- & Berufssprachkursen",
    validity: "3 Jahre gültig",
    reqs: [
      "Unterrichtserfahrung auf Niveau B1/B2 (mind. 300 UE)",
      "Zulassung als Lehrkraft für Integrationskurse (BAMF)",
      "Bewerungstraining und Bestehen der Lizenzprüfung",
    ],
  },
  {
    title: "Prüferlizenz telc Deutsch C1/C2 & Medizin",
    target: "Hochschul- & Fachsprachenprüfende",
    validity: "3 Jahre gültig",
    reqs: [
      "Hochschulabschluss in Germanistik/DaF oder Medizin",
      "Langjährige Erfahrung in C1/C2 Fachsprachenkursen",
      "Teilnahme am Spezialisierungsseminar",
    ],
  },
];

function QualificationRoute() {
  return (
    <Layout>
      <PageHero
        title="Prüferqualifizierung & Lizenzen"
        text="Werden Sie Teil eines Netzwerks von über 25.000 qualifizierten telc Prüferinnen und Prüfern weltweit. Erfahren Sie alles über die Lizenzierungskriterien und Qualifizierungsseminare."
      />

      <section className="container-page py-12">
        <div className="mb-10 text-center">
          <span className="rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Qualitätsstandard der telc gGmbH
          </span>
          <h2 className="mt-3 text-2xl font-black text-foreground md:text-3xl">
            Voraussetzungen für die Prüferlizenz
          </h2>
          <p className="mt-2 text-xs text-muted-foreground md:text-sm max-w-xl mx-auto">
            Die telc Prüferlizenz berechtigt Sie zur Abnahme mündlicher und schriftlicher Prüfungen im Auftrag akkreditierter telc Prüfungszentren.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {qualificationLevels.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <span className="rounded border border-border bg-secondary px-2 py-0.5 text-[0.625rem] font-bold text-foreground">
                    {item.validity}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold text-primary">{item.target}</p>

                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <p className="text-[0.6875rem] font-bold uppercase text-muted-foreground">Kriterien:</p>
                  {item.reqs.map((req) => (
                    <div key={req} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to={routes.contact}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-bold text-white hover:bg-primary-deep transition-colors"
                >
                  <span>Seminar buchen</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
