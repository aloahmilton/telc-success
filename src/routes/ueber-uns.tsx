import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Building2, CheckCircle2, ChevronRight, Globe, ShieldCheck, Users } from "lucide-react";

import juergenKeicher from "@/assets/juergen-keicher.png";
import logoAlte from "@/assets/logo-alte.png";
import logoBamf from "@/assets/logo-bamf.png";
import logoDekra from "@/assets/logo-dekra.png";
import logoEaquals from "@/assets/logo-eaquals.png";
import logoImove from "@/assets/logo-imove.png";
import logoVhs from "@/assets/logo-vhs.png";
import zusammenarbeitImg from "@/assets/zusammenarbeit.jpg";
import { Layout, PageHero, Prose } from "@/components/site/Layout";
import { home, routes } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { aboutPage } from "@/lib/pages";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über telc gGmbH | Organisation, Qualität & Auftrag" },
      {
        name: "description",
        content:
          "telc gGmbH ist ein gemeinnütziges Bildungsunternehmen. Erfahren Sie mehr über unsere Werte, Qualitätssicherung und Partner.",
      },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  const p = useT(aboutPage);
  const h = useT(home);

  const partners = [
    { name: "vhs", src: logoVhs },
    { name: "DEKRA", src: logoDekra },
    { name: "BAMF", src: logoBamf },
    { name: "ALTE", src: logoAlte },
    { name: "Eaquals", src: logoEaquals },
    { name: "iMOVE", src: logoImove },
  ];

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />

      {/* Mission & Organization Banner */}
      <section className="container-page py-12">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7">
            <img
              src={zusammenarbeitImg}
              alt="Über telc Organisation"
              className="h-80 w-full rounded-xl object-cover shadow-card md:h-[400px]"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
              Gemeinnützige Bildungseinrichtung
            </span>
            <h2 className="text-2xl font-black text-foreground md:text-3xl leading-snug">
              Verantwortung, Qualität und weltweite Zusammenarbeit
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
              Die telc gGmbH ist ein Tochterunternehmen des Deutschen Volkshochschul-Verbandes e.V. (DVV).
              Seit mehr als 50 Jahren stehen wir für transparente, faire und wissenschaftlich fundierte Sprachprüfungen.
            </p>
            <div className="pt-2">
              <Link
                to={routes.contact}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-deep transition-colors"
              >
                <span>Kontakt aufnehmen</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card py-12">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {h.stats.map((s) => (
              <div key={s.label} className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">{s.prefix}</p>
                <p className="mt-1 text-4xl font-black text-foreground md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Statement */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 shadow-card md:flex md:items-center md:gap-10">
          <div className="shrink-0 md:w-60">
            <img
              src={juergenKeicher}
              alt="Jürgen Keicher, Geschäftsführer"
              className="h-64 w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <blockquote className="text-base font-semibold leading-relaxed text-foreground md:text-lg">
              „{h.quote}“
            </blockquote>
            <p className="mt-4 text-xs font-bold text-muted-foreground">{h.quoteBy}</p>
          </div>
        </div>
      </section>

      {/* Accredited Partners Strip */}
      <section className="bg-secondary/40 py-12">
        <div className="container-page">
          <h3 className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
            Qualitätsnetzwerke & Partnerorganisationen
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center p-2 rounded bg-white shadow-sm">
                <img src={partner.src} alt={partner.name} className="h-10 w-auto max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Prose title={p.proseTitle} paragraphs={p.prose} />
    </Layout>
  );
}
