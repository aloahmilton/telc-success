import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LANGS = [
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "tr", label: "Türkçe", short: "TR" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

const STORAGE_KEY = "ts-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const I18nContext = createContext<Ctx>({ lang: "de", setLang: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLang() {
  return useContext(I18nContext);
}

/** Pick the active language variant out of a translation record. */
export function useT<T>(dict: Record<Lang, T>): T {
  const { lang } = useLang();
  return dict[lang];
}
