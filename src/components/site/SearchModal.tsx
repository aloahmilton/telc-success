import { Link } from "@tanstack/react-router";
import { BookOpen, Building2, ChevronRight, FileText, GraduationCap, Layers, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { home, news, routes } from "@/lib/content";
import { useLang } from "@/lib/i18n";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { lang } = useLang();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchableExams = [
    { title: "telc Deutsch A1 (Start Deutsch 1)", level: "A1", to: routes.exams },
    { title: "telc Deutsch A2 (Start Deutsch 2)", level: "A2", to: routes.exams },
    { title: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", to: routes.exams },
    { title: "telc Deutsch B2", level: "B2", to: routes.exams },
    { title: "telc Deutsch C1 Hochschule", level: "C1", to: routes.exams },
    { title: "telc Deutsch C1 Medizin", level: "C1", to: routes.exams },
    { title: "telc Deutsch C2", level: "C2", to: routes.exams },
    { title: "telc English B1-B2 Business", level: "B1-B2", to: routes.exams },
  ];

  const searchableMaterials = [
    { title: "Einfach zum Studium! Deutsch C1 Hochschule Lehrbuch", type: "Lehrwerk", to: routes.materials },
    { title: "telc Deutsch B1/B2 Pflege Übungstest 1", type: "Testheft", to: routes.materials },
    { title: "Handreichung für Lehrkräfte - Integration", type: "Download", to: routes.materials },
  ];

  const filteredExams = searchableExams.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()) || e.level.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMaterials = searchableMaterials.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNews = news.filter((n) =>
    n.title[lang].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-16 backdrop-blur-sm px-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lift animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex h-16 items-center gap-3 border-b border-border px-4">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Suchen Sie nach Prüfungen (z.B. B1, C1 Medizin), Materialien oder News..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm font-semibold text-foreground placeholder:text-muted-foreground outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs font-bold text-muted-foreground hover:text-foreground"
            >
              Löschen
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Quick Links */}
          {!query && (
            <div>
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                Beliebte Suchen
              </p>
              <div className="flex flex-wrap gap-2">
                {["telc Deutsch B1", "C1 Medizin", "Prüfungstermine", "Übungstest PDF", "vhs Kurse"].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Exams Results */}
          {filteredExams.length > 0 && (
            <div>
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
                Sprachprüfungen ({filteredExams.length})
              </p>
              <div className="space-y-1">
                {filteredExams.map((exam) => (
                  <Link
                    key={exam.title}
                    to={exam.to}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>{exam.title}</span>
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] text-primary">
                      {exam.level}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Materials Results */}
          {filteredMaterials.length > 0 && (
            <div>
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
                Lehrmaterialien ({filteredMaterials.length})
              </p>
              <div className="space-y-1">
                {filteredMaterials.map((mat) => (
                  <Link
                    key={mat.title}
                    to={mat.to}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-teal" />
                      <span>{mat.title}</span>
                    </span>
                    <span className="text-[0.625rem] text-muted-foreground">{mat.type}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* News Results */}
          {filteredNews.length > 0 && (
            <div>
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
                Aktuelles & Meldungen ({filteredNews.length})
              </p>
              <div className="space-y-1">
                {filteredNews.map((n) => (
                  <Link
                    key={n.id}
                    to={routes.about}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate max-w-md">{n.title[lang]}</span>
                    </span>
                    <span className="text-[0.625rem] text-muted-foreground">{n.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {query && filteredExams.length === 0 && filteredMaterials.length === 0 && filteredNews.length === 0 && (
            <div className="py-8 text-center text-xs text-muted-foreground">
              Keine Ergebnisse für &quot;{query}&quot; gefunden.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-3 text-[0.6875rem] text-muted-foreground">
          <span>Drücken Sie <strong>ESC</strong> zum Schließen</span>
          <span className="font-bold text-primary">telc Suchportal</span>
        </div>
      </div>
    </div>
  );
}
