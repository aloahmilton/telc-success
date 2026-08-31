import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo-mark.png";
import type { Lang } from "@/lib/i18n";
import { useLang } from "@/lib/i18n";

const STORAGE_KEY = "ts-cookie-consent";

type Categories = {
  necessary: true;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

type Copy = {
  title: string;
  body: string;
  allow: string;
  necessaryOnly: string;
  details: string;
  labels: { necessary: string; preferences: string; statistics: string; marketing: string };
};

const copy: Record<Lang, Copy> = {
  de: {
    title: "Cookie-Einstellungen",
    body: "Wir verwenden Cookies für eine optimale Funktionalität, Anpassung und Nutzungsanalyse.",
    allow: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    details: "Details",
    labels: {
      necessary: "Notwendig",
      preferences: "Präferenzen",
      statistics: "Statistik",
      marketing: "Marketing",
    },
  },
  en: {
    title: "Cookie Settings",
    body: "We use cookies to ensure optimal site functionality, personalization, and performance analysis.",
    allow: "Accept all",
    necessaryOnly: "Necessary only",
    details: "Details",
    labels: {
      necessary: "Necessary",
      preferences: "Preferences",
      statistics: "Statistics",
      marketing: "Marketing",
    },
  },
  es: {
    title: "Ajustes de cookies",
    body: "Utilizamos cookies para garantizar la funcionalidad del sitio, la personalización y el análisis.",
    allow: "Aceptar todas",
    necessaryOnly: "Solo necesarias",
    details: "Detalles",
    labels: {
      necessary: "Necesarias",
      preferences: "Preferencias",
      statistics: "Estadísticas",
      marketing: "Marketing",
    },
  },
  tr: {
    title: "Çerez Ayarları",
    body: "Optimum site işlevselliği, kişiselleştirme ve analiz sağlamak için çerezler kullanıyoruz.",
    allow: "Tümünü Kabul Et",
    necessaryOnly: "Sadece Gerekli",
    details: "Detaylar",
    labels: {
      necessary: "Gerekli",
      preferences: "Tercihler",
      statistics: "İstatistik",
      marketing: "Pazarlama",
    },
  },
};

function Toggle({
  checked,
  onChange,
  label,
  locked,
}: {
  checked: boolean;
  onChange?: () => void;
  label: string;
  locked?: boolean;
}) {
  return (
    <label className="inline-flex items-center gap-1.5 cursor-pointer text-[11px] sm:text-xs font-semibold text-foreground select-none">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={locked}
        onClick={onChange}
        className={`relative h-4 w-7 sm:h-5 sm:w-9 shrink-0 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-muted-foreground/40"
        } ${locked ? "cursor-default opacity-80" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-card transition-all shadow-sm ${
            checked ? "left-3.5 sm:left-4.5" : "left-0.5"
          }`}
        />
      </button>
    </label>
  );
}

export function CookieConsent() {
  const { lang } = useLang();
  const c = copy[lang];
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cats, setCats] = useState<Categories>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  const save = (value: Categories) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...value, at: new Date().toISOString() }),
    );
    setVisible(false);
  };

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);

    const timer = setTimeout(() => {
      save({ necessary: true, preferences: true, statistics: true, marketing: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-md shadow-2xl max-h-[75vh] overflow-y-auto"
    >
      <div className="mx-auto grid max-w-7xl gap-3 p-3 sm:p-4 md:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Telc-success" width={20} height={20} loading="lazy" className="h-5 w-5 shrink-0" />
            <h2 className="text-xs sm:text-sm font-bold text-foreground">{c.title}</h2>
          </div>
          <p className="mt-1 text-[11px] sm:text-xs leading-normal text-muted-foreground line-clamp-2 sm:line-clamp-none">
            {c.body}
          </p>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Toggle checked locked label={c.labels.necessary} />
            <Toggle
              checked={cats.preferences}
              onChange={() => setCats((p) => ({ ...p, preferences: !p.preferences }))}
              label={c.labels.preferences}
            />
            <Toggle
              checked={cats.statistics}
              onChange={() => setCats((p) => ({ ...p, statistics: !p.statistics }))}
              label={c.labels.statistics}
            />
            <Toggle
              checked={cats.marketing}
              onChange={() => setCats((p) => ({ ...p, marketing: !p.marketing }))}
              label={c.labels.marketing}
            />
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-0.5 text-[11px] font-bold text-primary hover:underline cursor-pointer ml-auto sm:ml-0"
            >
              <span>{c.details}</span>
              <ChevronRight className={`h-3 w-3 transition-transform ${showDetails ? "rotate-90" : ""}`} />
            </button>
          </div>

          {showDetails && (
            <div className="mt-2.5 grid gap-2 rounded-md border border-border/80 bg-secondary/30 p-2.5 text-[11px] text-muted-foreground animate-in fade-in duration-150 max-h-40 overflow-y-auto">
              <div>
                <strong className="text-foreground font-semibold">{c.labels.necessary}:</strong>
                <span className="ml-1">Erforderlich für Grundfunktionen und Navigation.</span>
              </div>
              <div>
                <strong className="text-foreground font-semibold">{c.labels.preferences}:</strong>
                <span className="ml-1">Speichert Einstellungen wie die Sprache.</span>
              </div>
              <div>
                <strong className="text-foreground font-semibold">{c.labels.statistics}:</strong>
                <span className="ml-1">Anonyme Nutzungsanalyse zur Verbesserung der Plattform.</span>
              </div>
              <div>
                <strong className="text-foreground font-semibold">{c.labels.marketing}:</strong>
                <span className="ml-1">Relevante Angebote und Partner-Inhalte.</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-row lg:flex-col gap-2 shrink-0 pt-1 lg:pt-0">
          <button
            type="button"
            onClick={() =>
              save({ necessary: true, preferences: true, statistics: true, marketing: true })
            }
            className="flex-1 sm:flex-initial bg-primary px-4 py-2 text-xs font-bold text-primary-foreground rounded transition-colors hover:bg-primary/90 cursor-pointer text-center"
          >
            {c.allow}
          </button>
          <button
            type="button"
            onClick={() => save({ ...cats, preferences: false, statistics: false, marketing: false })}
            className="flex-1 sm:flex-initial border border-primary/80 px-4 py-2 text-xs font-bold text-primary rounded transition-colors hover:bg-secondary cursor-pointer text-center"
          >
            {c.necessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
}
