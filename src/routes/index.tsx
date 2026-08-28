import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, CheckCircle2, ChevronRight, FileCheck, GraduationCap, Send } from "lucide-react";
import { useState } from "react";

import bookIcon from "@/assets/book.svg";
import certificateIcon from "@/assets/certificate.svg";
import chalkboardIcon from "@/assets/chalkboard-teacher.svg";
import heroPeople from "@/assets/hero-people.png";
import juergenKeicher from "@/assets/juergen-keicher.png";
import meetingImg from "@/assets/meeting.jpg";
import zusammenarbeitImg from "@/assets/zusammenarbeit.jpg";
import { B2RegistrationModal } from "@/components/site/B2RegistrationModal";
import { FaqSection } from "@/components/site/FaqSection";
import { Layout } from "@/components/site/Layout";
import { candidateSupport, home, news, routes, ui } from "@/lib/content";
import { useLang, useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "telc Sprachprüfungen und Zertifikate | Startseite" },
      {
        name: "description",
        content:
          "Anerkannte Sprachzertifikate von A1 bis C2, passende Lehrmaterialien und Fortbildungen für Lehrkräfte, Unternehmen und Lernende.",
      },
      { property: "og:title", content: "telc Sprachprüfungen und Zertifikate" },
      {
        property: "og:description",
        content:
          "Zertifikate A1–C2, Lehrwerke und Trainings – in über 3.000 Prüfungszentren weltweit.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const h = useT(home);
  const cs = useT(candidateSupport);
  const t = useT(ui);
  const { lang } = useLang();

  const [isB2ModalOpen, setIsB2ModalOpen] = useState(false);

  const pillarIcons = [certificateIcon, bookIcon, chalkboardIcon];
  const serviceIcons = [BookOpen, FileCheck, GraduationCap, Award];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "telc gGmbH",
    url: "https://www.telc.net",
    logo: "https://www.telc.net/fileadmin/user_upload/icons/certificate.svg",
    description: "Anerkannte Sprachzertifikate von A1 bis C2, passende Lehrmaterialien und Fortbildungen.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Basler Straße 7",
      addressLocality: "Bad Homburg",
      postalCode: "61352",
      addressCountry: "DE",
    },
    sameAs: [
      "https://www.facebook.com/telcLanguageTests/",
      "https://www.instagram.com/telc.official/",
      "https://www.linkedin.com/in/telc-ggmbh-023393250/",
      "https://www.youtube.com/user/telctube",
    ],
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Stage Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="container-page relative grid min-h-[460px] items-end gap-8 pt-10 pb-0 md:grid-cols-12 md:pt-14">
          <div className="z-10 pb-12 md:col-span-6 lg:col-span-6">
            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {h.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed opacity-95 sm:text-lg">
              {h.heroText}
            </p>
          </div>
          <div className="relative flex items-end justify-end self-end md:col-span-6 lg:col-span-6">
            <img
              src={heroPeople}
              alt="Die Zukunft spricht telc - Team"
              className="h-auto max-h-[400px] w-full max-w-xl object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] md:max-h-[460px]"
            />
          </div>
        </div>

        {/* 3 Floating Cards Overlapping Bottom of Hero */}
        <div className="container-page relative z-20 pb-12 md:-mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {h.pillars.map((p, idx) => (
              <article
                key={p.title}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-secondary p-2.5">
                    <img src={pillarIcons[idx]} alt="" className="h-full w-full object-contain" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
                <div className="mt-6 border-t border-border/50 pt-4">
                  <Link to={p.to} className="link-arrow">
                    <span>{t.learnMore}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for floating cards */}
      <div className="h-12 md:h-20" />

      {/* 2. Section: Verantwortung, Qualität und Zusammenarbeit */}
      <section className="container-page py-12 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-7">
            <img
              src={zusammenarbeitImg}
              alt="Verantwortung, Qualität und Zusammenarbeit"
              loading="lazy"
              className="h-80 w-full rounded-xl object-cover shadow-card md:h-[440px]"
            />
          </div>
          <div className="md:col-span-6 lg:-ml-16 lg:col-span-5 z-10">
            <div className="rounded-xl border border-border bg-card p-8 shadow-lift">
              <h2 className="text-2xl font-black text-primary md:text-3xl leading-snug">
                {h.valuesTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {h.valuesText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Key Statistics / Numbers Band */}
      <section className="border-y border-border bg-card py-14">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {h.stats.map((s) => (
              <div key={s.label} className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {s.prefix}
                </p>
                <p className="mt-1 text-5xl font-black tracking-tight text-foreground">
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Candidate Support & Service Center (NEW Section) */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">
              telc Deutsch B2 Spezialisierung & Service
            </span>
            <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">
              {cs.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {cs.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cs.services.map((item, idx) => {
              const Icon = serviceIcons[idx];
              return (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={() => setIsB2ModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer"
                    >
                      <span>Mehr erfahren</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsB2ModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-deep transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>{cs.contactCta}</span>
            </button>
          </div>
        </div>
      </section>

      <B2RegistrationModal
        isOpen={isB2ModalOpen}
        onClose={() => setIsB2ModalOpen(false)}
      />

      {/* 5. Section: Global vernetzt */}
      <section className="container-page py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="z-10 md:col-span-6 lg:mr-[-4rem] lg:col-span-5">
            <div className="rounded-xl bg-[#5c636a] p-8 text-white shadow-lift">
              <h2 className="text-2xl font-black md:text-3xl">{h.networkTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed opacity-95 md:text-base">
                {h.networkText}
              </p>
              <div className="mt-6 flex justify-end border-t border-white/20 pt-4">
                <Link to={routes.exams} className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline">
                  <span>{t.learnMore}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7">
            <img
              src={meetingImg}
              alt="Global vernetzt"
              loading="lazy"
              className="h-80 w-full rounded-xl object-cover shadow-card md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* 5. Section: Teal CTA Block */}
      <section className="bg-teal py-16 text-teal-foreground">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {h.serviceCards.map((c, idx) => (
              <article
                key={c.title}
                className={`flex flex-col justify-between rounded-xl bg-card p-6 text-card-foreground shadow-card ${
                  idx === 2 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
                <div className="mt-6 flex justify-end border-t border-border pt-4">
                  <Link to={c.to} className="link-arrow text-xs">
                    <span>{t.learnMore}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section: CEO Statement / Quote */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 shadow-card md:flex md:items-center md:gap-10">
          <div className="shrink-0 md:w-60">
            <img
              src={juergenKeicher}
              alt="Jürgen Keicher, Geschäftsführer von telc"
              className="h-64 w-full object-cover rounded-lg shadow-md"
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

      {/* 7. FAQ Accordion Section */}
      <FaqSection />

      {/* 7. Section: Aktuelles (News) */}
      <section className="bg-secondary py-16">
        <div className="container-page">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-black text-foreground md:text-3xl">{t.latest}</h2>
            <Link to={routes.about} className="link-arrow">
              <span>{t.learnMore}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {news.map((n) => (
              <article key={n.id} className="flex flex-col justify-between rounded-xl bg-card p-6 shadow-card">
                <div>
                  <p className="text-xs font-bold text-primary">
                    {n.date} | {n.category[lang]}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-foreground leading-snug">{n.title[lang]}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{n.teaser[lang]}</p>
                </div>
                <div className="mt-5 flex justify-end border-t border-border/50 pt-3">
                  <span className="link-arrow text-xs">
                    <span>{t.readArticle}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}


