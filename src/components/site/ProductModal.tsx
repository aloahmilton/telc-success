import { CheckCircle2, ChevronRight, Mail, Package, Send, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

import bookIcon from "@/assets/book.svg";
import { submitContactInquiry } from "@/lib/actions";
import type { ProductItem } from "@/lib/productsData";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    quantity: "1",
    institution: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!product) return null;

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const topic = `Produkt-Anfrage: ${product.title} (ISBN: ${product.isbn})`;
      const message = `
Anfrage für telc Produkt:
----------------------------------------
Produkt: ${product.title}
Niveau: ${product.level} | Preis: ${product.price}
ISBN: ${product.isbn}

Bestellmenge: ${formState.quantity} Stück
Institution / Prüfungszentrum: ${formState.institution || "Privatperson"}
Anmerkungen: ${formState.notes || "Keine"}
      `.trim();

      const res = await submitContactInquiry({
        data: {
          name: formState.name,
          email: formState.email,
          topic,
          message,
        },
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Fehler beim Senden der Anfrage.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Netzwerkfehler.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-6 py-4 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
              {product.category}
            </span>
            <span className="rounded border border-border bg-secondary px-2 py-0.5 text-xs font-bold text-foreground">
              {product.level}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            {/* Product Image & Spec Card */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/30 p-6 text-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary p-5 shadow-inner">
                <img src={bookIcon} alt="" className="h-full w-full object-contain" />
              </div>
              <span className="text-2xl font-black text-foreground">{product.price}</span>
              <span className="mt-1 text-xs text-muted-foreground">inkl. MwSt. zzgl. Versand</span>

              <div className="mt-6 w-full space-y-2 border-t border-border pt-4 text-left text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>ISBN:</span>
                  <span className="font-bold text-foreground">{product.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Seitenumfang:</span>
                  <span className="font-bold text-foreground">{product.pages} Seiten</span>
                </div>
                <div className="flex justify-between">
                  <span>Herausgeber:</span>
                  <span className="font-bold text-foreground">{product.publisher}</span>
                </div>
              </div>
            </div>

            {/* Product Details & Actions */}
            <div>
              <h2 className="text-xl font-extrabold text-foreground leading-snug">{product.title}</h2>
              <p className="mt-1 text-xs font-semibold text-primary">{product.subtitle}</p>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{product.fullDescription}</p>

              {/* Key Features */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Features & Highlights</h4>
                <ul className="mt-2 space-y-2 text-xs text-muted-foreground">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="mt-6 rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground">
                <strong className="text-foreground font-bold">Zielgruppe:</strong> {product.targetAudience}
              </div>

              {/* Action Buttons */}
              {!showEnquiryForm && !submitted && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setShowEnquiryForm(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-white shadow-lift transition-all hover:bg-primary-deep cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Jetzt für Produkt anfragen</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-border px-5 py-3.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary cursor-pointer"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Embedded Product Enquiry Form */}
          {showEnquiryForm && !submitted && (
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 animate-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <span>Anfrage für "{product.title}"</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowEnquiryForm(false)}
                  className="text-xs text-muted-foreground hover:underline"
                >
                  Abbrechen
                </button>
              </div>

              {errorMsg && (
                <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-xs font-semibold text-red-600 border border-red-500/20">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Ihr Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Maria Muster"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Ihre E-Mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="ihre@email.de"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Gewünschte Menge (Stück)</label>
                    <input
                      type="number"
                      min="1"
                      value={formState.quantity}
                      onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Institution / Sprachschule (Optional)</label>
                    <input
                      type="text"
                      placeholder="z.B. VHS Frankfurt / Privat"
                      value={formState.institution}
                      onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Anmerkungen oder Fragen</label>
                  <textarea
                    rows={3}
                    placeholder="Spezielle Wünsche zum Versand oder Liefertermin..."
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lift transition-all hover:bg-primary-deep disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? "Sende Anfrage..." : "Verbindliche Anfrage absenden"}</span>
                </button>
              </form>
            </div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="mt-8 rounded-xl border border-teal/30 bg-teal/10 p-6 text-center animate-in zoom-in-95 duration-200">
              <ShieldCheck className="mx-auto h-12 w-12 text-teal" />
              <h3 className="mt-3 text-base font-extrabold text-foreground">Vielen Dank für Ihre Anfrage!</h3>
              <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                Ihre Anfrage für <strong>{product.title}</strong> ist bei uns eingegangen. Unser Serviceteam und der Systemadministrator wurden per E-Mail benachrichtigt und melden sich in Kürze bei Ihnen.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-1 rounded-lg bg-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-teal-dark transition-colors cursor-pointer"
              >
                <span>Zurück zum Katalog</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
