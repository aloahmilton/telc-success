import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

import { Layout, PageHero } from "@/components/site/Layout";
import { getSiteUrl } from "@/lib/siteUrl";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | telc Service" },
      {
        name: "description",
        content:
          "Nehmen Sie Kontakt mit telc auf – FAQ, Öffnungszeiten und Kontaktformular für Anfragen zu Sprachprüfungen, Lehrmaterialien und Fortbildungen.",
      },
      { property: "og:title", content: "Kontakt | telc Service" },
      { property: "og:url", content: getSiteUrl("/kontakt") },
    ],
    links: [{ rel: "canonical", href: getSiteUrl("/kontakt") }],
  }),
  component: KontaktRoute,
});

// ─── Data ────────────────────────────────────────────────────────────────────

const faqs = [
  "Wie kann ich Duplikate von meinem Zertifikat anfordern?",
  "Wie können Prüfungszentren Korrekturen anfordern oder Zertifikate anpassen lassen?",
  "Wo kann ich mich bei telc bewerben?",
  "Wo kann ich Lehrmaterialien bestellen?",
  "Eine Nachmeldung zur Prüfungsanmeldung funktioniert nicht, was soll ich tun?",
  "Was passiert mit den Prüfungsmaterialien, wenn die Prüfung ausfällt?",
  "Wo und wie melde ich eine barrierefreie Prüfung an?",
  "Wie sehe ich den Stand der Auswertung meiner Prüfung?",
  "Mir fehlen Prüfungsunterlagen, was soll ich machen?",
  "Kann ich die angemeldete Prüfung verschieben?",
  "Sind Kopien von Prüfungsmaterialien erlaubt?",
  "Was kann ich tun, wenn ich kein Protokoll für eine Prüfung habe?",
  "Wie kann ich die Echtheit meiner Zertifikate bestätigen?",
  "Wie kann ich mich als Teilnehmende*r für eine Prüfung anmelden?",
  "Ich habe mein Zertifikat verloren und habe keine hilfreichen Daten mehr, was soll ich tun?",
  "Wo kann ich Prüfungszentren finden?",
  "Wie kann ich/ können meine Lehrkräfte eine Prüfer-/ Bewerterlizenz erwerben?",
  "Welche Fortbildungen und Qualifizierungen bietet telc für Lehrkräfte?",
];

const regularHours = [
  { day: "Montag", hours: "08:30 — 17:00 Uhr", note: "" },
  { day: "Dienstag", hours: "08:30 — 17:00 Uhr", note: "" },
  { day: "Mittwoch", hours: "08:30 — 17:00 Uhr", note: "" },
  { day: "Donnerstag", hours: "08:30 — 17:00 Uhr", note: "" },
  { day: "Freitag", hours: "08:30 — 16:00 Uhr", note: "" },
  {
    day: "Samstag",
    hours: "08:00 — 12:00 Uhr",
    note: "Nur für laufende Prüfungen und Seminare",
  },
];

const specialHours = [
  { day: "Samstag, 26. Dezember 2026", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Montag, 28. Dezember 2026", hours: "09:00 — 16:00 Uhr", note: "Geänderte Servicezeiten" },
  { day: "Dienstag, 29. Dezember 2026", hours: "09:00 — 16:00 Uhr", note: "Geänderte Servicezeiten" },
  { day: "Mittwoch, 30. Dezember 2026", hours: "09:00 — 16:00 Uhr", note: "Geänderte Servicezeiten" },
  { day: "Neujahr (1. Januar)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Karfreitag, Karsamstag, Ostermontag", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Tag der Arbeit (1. Mai)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Christi Himmelfahrt (29. Mai)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Pfingstmontag (9. Juni)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Fronleichnam (19. Juni)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Tag der Deutschen Einheit (3. Oktober)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Heiligabend (24. Dezember)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "1. Weihnachtstag (25. Dezember)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "2. Weihnachtstag (26. Dezember)", hours: "—", note: "Kundenservice geschlossen" },
  { day: "Silvester (31. Dezember)", hours: "—", note: "Kundenservice geschlossen" },
];

const userTypes = [
  "Bitte auswählen",
  "Ich bin Mitarbeiter eines Prüfungszentrums oder Bildungseinrichtung",
  "Ich bin Prüfungsteilnehmer:in",
  "Ich bin Shop-Kund:in",
  "Ich bin Prüfer:in oder Bewerter:in",
  "Andere",
];

// ─── Component ────────────────────────────────────────────────────────────────

function KontaktRoute() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [userType, setUserType] = useState("");

  return (
    <Layout>
      <PageHero
        title="Sie möchten Kontakt zu telc aufnehmen?"
        text="Schreiben Sie uns, rufen Sie uns an oder vereinbaren Sie einen persönlichen Termin mit unserem Außendienstteam – wir freuen uns auf Sie! Eventuell können Sie auch bereits Antworten auf Ihre Fragen in unserem FAQ finden."
      />

      <div className="container-page py-12 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground flex gap-1.5 items-center">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Kontakt</span>
        </nav>

        {/* FAQ Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-6">
            Antworten auf häufig gestellte Fragen (FAQ)
          </h2>
          <div className="divide-y divide-border rounded-md border border-border overflow-hidden">
            {faqs.map((q, i) => (
              <button
                key={i}
                id={`faq-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors"
              >
                <span>{q}</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 ml-4 text-muted-foreground transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </section>

        {/* Contact Help Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Wie können wir Ihnen weiterhelfen?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">Wer sind Sie?</p>
          <select
            id="user-type-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full max-w-lg rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {userTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </section>

        {/* Customer Service */}
        <section>
          <div className="flex items-start gap-3 mb-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">Kundenservice</h2>
              <a
                href="tel:+496172388200077"
                className="text-lg font-bold text-primary hover:underline"
              >
                +49 6172 38820 - 77
              </a>
            </div>
          </div>

          {/* Regular hours table */}
          <div className="overflow-x-auto rounded-md border border-border mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Tag</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Öffnungszeiten</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Hinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {regularHours.map((row) => (
                  <tr key={row.day} className="hover:bg-secondary/30 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground">{row.day}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.hours}</td>
                    <td className="px-5 py-3 text-muted-foreground text-xs">{row.note || "–"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Special / holiday hours table */}
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Tag</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Öffnungszeiten</th>
                  <th className="px-5 py-3 text-left font-semibold text-foreground">Hinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {specialHours.map((row) => (
                  <tr key={row.day} className="hover:bg-secondary/30 transition-colors">
                    <td className="px-5 py-3 font-medium text-primary/80">{row.day}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.hours}</td>
                    <td className="px-5 py-3 text-muted-foreground text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
