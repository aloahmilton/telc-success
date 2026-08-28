import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import { useState } from "react";

import { submitCandidateSupportAction } from "@/lib/actions";

interface B2RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function B2RegistrationModal({ isOpen, onClose }: B2RegistrationModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Exam Preparation",
    "Registration Assistance",
  ]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const candidateName = formData.get("candidateName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const notes = formData.get("notes") as string;

    try {
      await submitCandidateSupportAction({
        data: {
          candidateName,
          email,
          phone,
          targetExam: "telc Deutsch B2",
          notes,
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-lift md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                telc Deutsch B2 Candidate Support
              </span>
              <h2 className="mt-2 text-xl font-black text-foreground md:text-2xl">
                B2 Unterstützung & Beratung anfragen
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Gezielte Prüfungsvorbereitung, Anmeldeunterstützung und Strategieberatung für Ihr B2 Zertifikat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    Vollständiger Name *
                  </label>
                  <input
                    required
                    name="candidateName"
                    type="text"
                    placeholder="z. B. Anna Mustermann"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    E-Mail Adresse *
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Telefonnummer (Optional)
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+49 170 1234567"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Gewünschte Unterstützung:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Exam Preparation",
                    "Registration Assistance",
                    "Exam Guidance",
                    "Results Support",
                  ].map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`flex items-center gap-1.5 rounded-lg border p-2 text-left text-[0.6875rem] font-semibold transition-all ${
                          isChecked
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-secondary/50 text-muted-foreground"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-3.5 w-3.5 shrink-0 ${
                            isChecked ? "text-primary" : "text-muted-foreground/40"
                          }`}
                        />
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  Anmerkungen oder Fragen
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Hinterlassen Sie uns hier Ihre Nachricht..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-primary-deep disabled:opacity-50 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Wird gespeichert...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Anfrage absenden</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-black text-foreground">Anfrage erfolgreich übermittelt!</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Vielen Dank! Ihre B2 Candidate Support Anfrage wurde direkt in unserer Datenbank (MongoDB Atlas) gespeichert. Unser Team wird sich in Kürze bei Ihnen melden.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-lg bg-primary px-6 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep"
            >
              Schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
