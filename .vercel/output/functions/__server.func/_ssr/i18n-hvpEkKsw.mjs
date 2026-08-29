import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/i18n-hvpEkKsw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/lib/i18n.tsx";
var LANGS = [
	{
		code: "de",
		label: "Deutsch",
		short: "DE"
	},
	{
		code: "en",
		label: "English",
		short: "EN"
	},
	{
		code: "es",
		label: "Español",
		short: "ES"
	},
	{
		code: "tr",
		label: "Türkçe",
		short: "TR"
	}
];
var STORAGE_KEY = "ts-lang";
var I18nContext = (0, import_react.createContext)({
	lang: "de",
	setLang: () => {}
});
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("de");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored && LANGS.some((l) => l.code === stored)) setLangState(stored);
	}, []);
	const setLang = (0, import_react.useCallback)((l) => {
		setLangState(l);
		window.localStorage.setItem(STORAGE_KEY, l);
		document.documentElement.lang = l;
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang
	}), [lang, setLang]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 10
	}, this);
}
function useLang() {
	return (0, import_react.useContext)(I18nContext);
}
/** Pick the active language variant out of a translation record. */
function useT(dict) {
	const { lang } = useLang();
	return dict[lang];
}
//#endregion
export { useT as i, LANGS as n, useLang as r, I18nProvider as t };
