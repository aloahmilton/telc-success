import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Wie kann ich mich für eine telc Deutsch B2 Prüfung anmelden?",
    a: "Sie können sich direkt in über 3.000 lizenzierten telc Prüfungszentren in Ihrer Nähe anmelden. Nutzen Sie unseren Prüfungszentrum-Finder oder fordern Sie über unseren Candidate Support direkte Unterstützung an.",
  },
  {
    q: "Welche Teile umfasst die telc Deutsch B2 Prüfung?",
    a: "Die Prüfung besteht aus einem schriftlichen Teil (Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher Ausdruck - ca. 2 Std. 20 Min.) und einem mündlichen Teil (Mündliche Prüfung mit Partner - ca. 15 Min.).",
  },
  {
    q: "Wie lange dauert es, bis die telc B2 Prüfungsergebnisse vorliegen?",
    a: "In der Regel liegen die Ergebnisse ca. 4 bis 6 Wochen nach dem Prüfungstermin vor. Das offizielle telc Zertifikat wird anschließend direkt an Ihr Prüfungszentrum gesendet.",
  },
  {
    q: "Wie kann ein Arbeitgeber oder eine Behörde mein Zertifikat auf Echtheit prüfen?",
    a: "Über unser Zertifikats-Verifizierungsportal (/zertifikat-pruefen) können Arbeitgeber und Behörden den eindeutigen telc Zertifikatscode eingeben und die Gültigkeit sofort online überprüfen.",
  },
  {
    q: "Bietet telc auch Vorbereitungsmaterialien und Modelltests an?",
    a: "Ja, telc veröffentlicht offizielle Übungstests, Modellhefte und Lehrwerke für alle Niveaustufen von A1 bis C2. Diese finden Sie auf unserer Seite 'Lehrmaterialien' sowie zum Download.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-black text-foreground md:text-3xl">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="mt-2 text-xs text-muted-foreground md:text-sm">
            Wichtige Antworten rund um Sprachprüfungen, Anmeldeabläufe und Zertifikatsnachweis.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-card shadow-card overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-extrabold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs leading-relaxed text-muted-foreground border-t border-border/40 mt-1 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
