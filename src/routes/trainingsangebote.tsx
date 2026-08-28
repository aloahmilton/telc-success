import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, ChevronRight, GraduationCap, Users, Video } from "lucide-react";
import { useState } from "react";

import chalkboardIcon from "@/assets/chalkboard-teacher.svg";
import { Layout, PageHero, Prose } from "@/components/site/Layout";
import { routes } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { trainingPage } from "@/lib/pages";

export const Route = createFileRoute("/trainingsangebote")({
  head: () => ({
    meta: [
      { title: "Trainingsangebote & Fortbildungen | telc Training" },
      {
        name: "description",
        content:
          "Fortbildungen für Lehrkräfte, Qualifizierung von Prüfenden und lizenzierte Inhouse-Trainings der telc Training.",
      },
    ],
  }),
  component: TrainingRoute,
});

const sampleTrainings = [
  {
    id: 1,
    title: "Qualifizierung: Prüfer/in telc Deutsch B1–B2",
    target: "Prüfende & Lehrkräfte",
    format: "Online-Seminar",
    date: "18.09.2026",
    duration: "1 Tag (8 UE)",
    desc: "Voraussetzung zur Abnahme von telc B1-B2 Prüfungen. Bewertung von schriftlichen und mündlichen Leistungen.",
    badge: "Lizenzierung",
  },
  {
    id: 2,
    title: "Methodik & Didaktik in Fachsprachenkursen Medizin",
    target: "Lehrkräfte Deutsch für Medizin",
    format: "Präsenz (Bad Homburg)",
    date: "25.09.2026",
    duration: "2 Tage (16 UE)",
    desc: "Effektiver Unterricht für ausländische Ärztinnen und Pflegekräfte zur gezielten Prüfungsvorbereitung.",
    badge: "Fachfortbildung",
  },
  {
    id: 3,
    title: "Digitales Lehren mit telc Campus & Medien",
    target: "Kursleiter/innen & Schulen",
    format: "Webinar",
    date: "02.10.2026",
    duration: "3 Stunden",
    desc: "Interaktive Tools und digitale Unterrichtsgestaltung mit den telc Lehrwerken und Campus-Plattformen.",
    badge: "Gratis Webinar",
  },
];

function TrainingRoute() {
  const p = useT(trainingPage);
  const [activeFormat, setActiveFormat] = useState("all");

  const filteredTrainings = sampleTrainings.filter(
    (t) => activeFormat === "all" || t.format.toLowerCase().includes(activeFormat.toLowerCase())
  );

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />

      <section className="container-page py-12">
        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFormat("all")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                activeFormat === "all" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"
              }`}
            >
              Alle Formate
            </button>
            <button
              type="button"
              onClick={() => setActiveFormat("online")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                activeFormat === "online" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"
              }`}
            >
              Online-Seminare & Webinare
            </button>
            <button
              type="button"
              onClick={() => setActiveFormat("präsenz")}
              className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                activeFormat === "präsenz" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"
              }`}
            >
              Präsenzangebote
            </button>
          </div>

          <Link
            to={routes.contact}
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-dark transition-colors"
          >
            <Users className="h-4 w-4" />
            <span>Inhouse-Training anfragen</span>
          </Link>
        </div>

        {/* Trainings List Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {filteredTrainings.map((t) => (
            <article
              key={t.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary">
                    {t.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[0.6875rem] font-semibold text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> {t.date}
                  </span>
                </div>

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary p-3">
                  <img src={chalkboardIcon} alt="" className="h-full w-full object-contain" />
                </div>

                <h3 className="text-base font-extrabold text-foreground leading-snug">{t.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>

                <div className="mt-4 space-y-1 text-xs text-muted-foreground font-medium">
                  <p><strong>Zielgruppe:</strong> {t.target}</p>
                  <p><strong>Format:</strong> {t.format} ({t.duration})</p>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to={routes.contact}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-bold text-white hover:bg-primary-deep transition-colors"
                >
                  <span>Anmelden / Details</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Prose title={p.proseTitle} paragraphs={p.prose} />
    </Layout>
  );
}
