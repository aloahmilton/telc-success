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
    title: "Diese Website verwendet Cookies",
    body: "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Informationen zu Ihrer Nutzung geben wir außerdem an unsere Partner für soziale Medien, Werbung und Analysen weiter.",
    allow: "Alle Cookies erlauben",
    necessaryOnly: "Nur notwendige Cookies",
    details: "Details anzeigen",
    labels: {
      necessary: "Notwendig",
      preferences: "Präferenzen",
      statistics: "Statistiken",
      marketing: "Marketing",
    },
  },
  en: {
    title: "This website uses cookies",
    body: "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.",
    allow: "Allow all cookies",
    necessaryOnly: "Use necessary cookies only",
    details: "Show details",
    labels: {
      necessary: "Necessary",
      preferences: "Preferences",
      statistics: "Statistics",
      marketing: "Marketing",
    },
  },
  es: {
    title: "Este sitio web utiliza cookies",
    body: "Utilizamos cookies para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. También compartimos información sobre su uso del sitio con nuestros socios de redes sociales, publicidad y análisis.",
    allow: "Permitir todas las cookies",
    necessaryOnly: "Solo cookies necesarias",
    details: "Ver detalles",
    labels: {
      necessary: "Necesarias",
      preferences: "Preferencias",
      statistics: "Estadísticas",
      marketing: "Marketing",
    },
  },
  tr: {
    title: "Bu web sitesi çerez kullanır",
    body: "İçerikleri ve reklamları kişiselleştirmek, sosyal medya özellikleri sunmak ve trafiğimizi analiz etmek için çerezler kullanıyoruz. Sitemizi kullanımınıza ilişkin bilgileri sosyal medya, reklam ve analiz ortaklarımızla da paylaşıyoruz.",
    allow: "Tüm çerezleri kabul et",
    necessaryOnly: "Sadece gerekli çerezler",
    details: "Ayrıntıları göster",
    labels: {
      necessary: "Gerekli",
      preferences: "Tercihler",
      statistics: "İstatistikler",
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
    <div className="flex items-center gap-2.5">
      <span className="text-xs font-bold text-foreground">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={locked}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-foreground"
        } ${locked ? "cursor-default" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-card transition-all ${
            checked ? "left-[1.375rem]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function CookieConsent() {
  const { lang } = useLang();
  const c = copy[lang];
  const [visible, setVisible] = useState(false);
  const [cats, setCats] = useState<Categories>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const save = (value: Categories) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...value, at: new Date().toISOString() }),
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={c.title}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card shadow-lift"
    >
      <div className="mx-auto grid max-w-[105rem] gap-6 px-6 py-6 lg:grid-cols-[1fr_20rem]">
        <div>
          <h2 className="text-sm font-bold text-foreground">{c.title}</h2>
          <p className="mt-2 max-w-4xl text-xs leading-relaxed text-muted-foreground">{c.body}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <img src={logo} alt="Telc-success" width={28} height={28} loading="lazy" className="h-7 w-7" />
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
            <button type="button" className="link-arrow">
              {c.details}
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:pt-1">
          <button
            type="button"
            onClick={() =>
              save({ necessary: true, preferences: true, statistics: true, marketing: true })
            }
            className="w-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            {c.allow}
          </button>
          <button
            type="button"
            onClick={() => save({ ...cats, preferences: false, statistics: false, marketing: false })}
            className="w-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary"
          >
            {c.necessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
}
