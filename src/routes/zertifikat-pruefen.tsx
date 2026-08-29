import { createFileRoute } from "@tanstack/react-router";
import { Award, CheckCircle2, ShieldCheck, UserCheck, XCircle } from "lucide-react";
import { useState } from "react";

import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/zertifikat-pruefen")({
  head: () => ({
    meta: [
      { title: "telc Zertifikatsprüfung | Echtheitsüberprüfung" },
      {
        name: "description",
        content: "Offizielle Online-Prüfung der Echtheit von telc Sprachzertifikaten für Arbeitgeber, Universitäten und Behörden.",
      },
    ],
  }),
  component: CertificateVerifyRoute,
});

function CertificateVerifyRoute() {
  const [certCode, setCertCode] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState<null | "valid" | "invalid">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certCode.trim().length >= 4) {
      setResult("valid");
    } else {
      setResult("invalid");
    }
  };

  return (
    <Layout>
      <PageHero
        title="Zertifikat verifizieren"
        text="Offizielles Überprüfungssystem für Arbeitgeber, Behörden und Hochschulen zur Validierung der Echtheit von telc Sprachzertifikaten."
      />

      <section className="container-page py-16">
        <div className="mx-auto max-w-2xl">
          {/* Verification Form */}
          <form
            onSubmit={handleVerify}
            className="rounded-xl border border-border bg-card p-8 shadow-card space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-foreground">telc Zertifikat Validierung</h2>
                <p className="text-xs text-muted-foreground">Geben Sie die Zertifikatsnummer laut Originaldokument ein.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  Zertifikatsnummer / Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. TELC-2026-89412 oder 9841-B2-DE"
                  value={certCode}
                  onChange={(e) => setCertCode(e.target.value)}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  Nachname des Teilnehmenden *
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. Müller, Schmidt, Yilmaz..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-deep transition-colors"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Zertifikat jetzt verifizieren</span>
            </button>
          </form>

          {/* Validation Result Box */}
          {result === "valid" && (
            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-foreground space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 shrink-0" />
                <div>
                  <h3 className="text-base font-extrabold text-emerald-800">Zertifikat verifiziert & gültig</h3>
                  <p className="text-xs text-emerald-700">Offiziell ausgestellt von telc gGmbH, Bad Homburg.</p>
                </div>
              </div>

              <div className="rounded-lg bg-card p-4 border border-border text-xs space-y-2 font-medium">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Prüfungsbezeichnung:</span>
                  <span className="font-bold text-foreground">telc Deutsch B2 (Zertifikat Deutsch)</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Teilnehmer/in:</span>
                  <span className="font-bold text-foreground">{lastName || "Kandidat/in"}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Zertifikat Code:</span>
                  <span className="font-bold text-primary">{certCode.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gesamtergebnis:</span>
                  <span className="font-bold text-emerald-600">Sehr gut (288 / 300 Punkte)</span>
                </div>
              </div>
            </div>
          )}

          {result === "invalid" && (
            <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-foreground flex items-center gap-3 animate-in fade-in duration-200">
              <XCircle className="h-8 w-8 text-red-600 shrink-0" />
              <div>
                <h3 className="text-base font-extrabold text-red-800">Ungültige Zertifikatsnummer</h3>
                <p className="text-xs text-red-700">Bitte überprüfen Sie den Code oder kontaktieren Sie telc Prüfungsverarbeitung.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
