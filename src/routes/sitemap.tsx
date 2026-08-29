import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, Building2, ChevronRight, FileText, Globe, GraduationCap, Home, Layers, MapPin, ShieldCheck } from "lucide-react";

import { Layout, PageHero } from "@/components/site/Layout";
import { routes } from "@/lib/content";

import { getSiteUrl } from "@/lib/siteUrl";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap | telc Übersicht aller Seiten" },
      {
        name: "description",
        content:
          "Vollständige Übersicht aller telc Prüfungen, Lehrmaterialien, Fortbildungen und Services auf telc-success.",
      },
      { property: "og:title", content: "Sitemap | telc Übersicht aller Seiten" },
      { property: "og:description", content: "Übersicht über alle Inhalte und Seiten von telc." },
      { property: "og:url", content: getSiteUrl("/sitemap") },
    ],
    links: [{ rel: "canonical", href: getSiteUrl("/sitemap") }],
  }),
  component: SitemapRoute,
});

const sitemapSections = [
  {
    title: "Hauptseiten & Navigation",
    icon: Home,
    links: [
      { label: "Startseite (Home)", to: routes.home, desc: "Übersicht über telc Sprachprüfungen, Werte und Partner." },
      { label: "Sprachprüfungen (A1–C2)", to: routes.exams, desc: "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Schule & Studium." },
      { label: "Lehrmaterialien", to: routes.materials, desc: "Lehrwerke, Modelltests, Übungshefte und gratis Download-Material." },
      { label: "Trainingsangebote", to: routes.training, desc: "Fortbildungen für Lehrkräfte, Prüferqualifizierung und Inhouse-Trainings." },
      { label: "Über telc", to: routes.about, desc: "Profil, gemeinnütziger Bildungauftrag, Qualitätssicherung und DVV-Verbund." },
      { label: "Kontakt & Anfragen", to: routes.contact, desc: "Kontaktformular, Adresse Bad Homburg und Servicezeiten." },
    ],
  },
  {
    title: "Interaktive Portale & Services",
    icon: ShieldCheck,
    links: [
      { label: "Prüfungszentrum finden", to: routes.centerFinder, desc: "Suche in über 3.000 lizenzierten telc Prüfungszentren weltweit nach Stadt & PLZ." },
      { label: "Zertifikat verifizieren", to: routes.verifyCert, desc: "Online-Echtheitsprüfung von telc Zertifikaten für Arbeitgeber & Behörden." },
      { label: "telc Campus & Audio-Hub", to: routes.campus, desc: "Digitale Lernplattform mit Hörbeispielen, Audios & Modelltest-Downloads." },
      { label: "Prüferqualifizierung & Lizenzen", to: routes.qualifizierung, desc: "Lizenzkriterien, Qualifizierungsseminare & Prüferportal." },
      { label: "Aktuelles & Pressemitteilungen", to: routes.aktuelles, desc: "Neueste Entwicklungen, Nachrichten und Veranstaltungshinweise." },
      { label: "Candidate B2 Support", to: routes.home, desc: "Spezialisierte Begleitung, Vorbereitung & Anmeldung zur telc Deutsch B2 Prüfung." },
      { label: "Admin Portal", to: "/admin", desc: "Verwaltung von Prüfungen, Anfragen und Netzwerkstatus (Intern)." },
    ],
  },
  {
    title: "Prüfungsformate nach Niveau",
    icon: FileText,
    links: [
      { label: "telc Deutsch A1 (Start Deutsch 1)", to: routes.exams, desc: "Anfängerniveau für Visum und Familiennachzug." },
      { label: "telc Deutsch A2 (Start Deutsch 2)", to: routes.exams, desc: "Grundlegende Deutschkenntnisse im Alltag." },
      { label: "telc Deutsch B1 (Zertifikat Deutsch)", to: routes.exams, desc: "Nachweis für Einbürgerung und BAMF Integrationskurse." },
      { label: "telc Deutsch B2", to: routes.exams, desc: "Fortgeschrittene Deutschkenntnisse für Beruf und Studium." },
      { label: "telc Deutsch C1 Hochschule", to: routes.exams, desc: "Anerkannter Nachweis für den Hochschulzugang in Deutschland." },
      { label: "telc Deutsch C1 Medizin", to: routes.exams, desc: "Fachsprachenprüfung für Ärztinnen und Ärzte." },
      { label: "telc Deutsch C2", to: routes.exams, desc: "Exzellente Sprachkompetenz auf muttersprachlichem Niveau." },
    ],
  },
  {
    title: "Lehrmaterialien & Medien",
    icon: BookOpen,
    links: [
      { label: "Lehrwerke & Kursbücher", to: routes.materials, desc: "Gezielte Lehrwerke für Kursunterricht und Selbstlernen." },
      { label: "Modell- & Testhefte", to: routes.materials, desc: "Original telc Übungstests mit Hörtexten & Lösungsschlüsseln." },
      { label: "Gratis Downloads", to: routes.materials, desc: "Handreichungen für Lehrkräfte, Übungsmaterialien und PDFs." },
      { label: "telc Online-Shop", to: routes.materials, desc: "Direkte Bestellung aller Veröffentlichungen." },
    ],
  },
];

function SitemapRoute() {
  return (
    <Layout>
      <PageHero
        title="Sitemap"
        text="Vollständige Inhalts- und Seitenübersicht der telc gGmbH. Finden Sie schnell alle Prüfungen, Materialien, Services und Formulare."
      />

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {sitemapSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-extrabold text-foreground">{section.title}</h2>
                </div>

                <div className="divide-y divide-border/60">
                  {section.links.map((link) => (
                    <div key={link.label} className="py-3">
                      <Link
                        to={link.to}
                        className="group flex items-center justify-between text-sm font-bold text-foreground hover:text-primary transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{link.label}</span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">{link.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
