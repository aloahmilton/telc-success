import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT, n as LANGS, r as useLang } from "./i18n-hvpEkKsw.mjs";
import { a as nav, c as ui, i as metaNav, n as footer, o as news, s as routes } from "./content-NEnvee3a.mjs";
import { D as Layers, F as Facebook, G as ChevronDown, H as ChevronUp, N as FileText, O as Instagram, T as Linkedin, U as ChevronRight, Y as BookOpen, d as Search, n as X, t as Youtube, y as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-D_1yH2HR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var logo_mark_default = "/assets/logo-mark-DAFjj3em.png";
var _jsxFileName$4 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/CookieConsent.tsx";
var STORAGE_KEY = "ts-cookie-consent";
var copy = {
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
			marketing: "Marketing"
		}
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
			marketing: "Marketing"
		}
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
			marketing: "Marketing"
		}
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
			marketing: "Pazarlama"
		}
	}
};
function Toggle({ checked, onChange, label, locked }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "text-xs font-bold text-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 94,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-label": label,
			disabled: locked,
			onClick: onChange,
			className: `relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? "bg-primary" : "bg-foreground"} ${locked ? "cursor-default" : "cursor-pointer"}`,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-card transition-all ${checked ? "left-[1.375rem]" : "left-0.5"}` }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 106,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 95,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 93,
		columnNumber: 5
	}, this);
}
function CookieConsent() {
	const { lang } = useLang();
	const c = copy[lang];
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [showDetails, setShowDetails] = (0, import_react.useState)(false);
	const [cats, setCats] = (0, import_react.useState)({
		necessary: true,
		preferences: false,
		statistics: false,
		marketing: false
	});
	(0, import_react.useEffect)(() => {
		if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
	}, []);
	const save = (value) => {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
			...value,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}));
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "dialog",
		"aria-label": c.title,
		className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card shadow-lift max-h-[90vh] overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-[105rem] gap-6 px-6 py-6 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-sm font-bold text-foreground",
					children: c.title
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 150,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 max-w-4xl text-xs leading-relaxed text-muted-foreground",
					children: c.body
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 151,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: logo_mark_default,
							alt: "Telc-success",
							width: 28,
							height: 28,
							loading: "lazy",
							className: "h-7 w-7"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 154,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
							checked: true,
							locked: true,
							label: c.labels.necessary
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 155,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
							checked: cats.preferences,
							onChange: () => setCats((p) => ({
								...p,
								preferences: !p.preferences
							})),
							label: c.labels.preferences
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 156,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
							checked: cats.statistics,
							onChange: () => setCats((p) => ({
								...p,
								statistics: !p.statistics
							})),
							label: c.labels.statistics
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 161,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
							checked: cats.marketing,
							onChange: () => setCats((p) => ({
								...p,
								marketing: !p.marketing
							})),
							label: c.labels.marketing
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 166,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setShowDetails(!showDetails),
							className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.details }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 176,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: `h-3.5 w-3.5 transition-transform ${showDetails ? "rotate-90" : ""}` }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 177,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 171,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 153,
					columnNumber: 11
				}, this),
				showDetails && /* @__PURE__ */ (void 0)("div", {
					className: "mt-4 grid gap-3 rounded-lg border border-border bg-secondary/40 p-4 text-xs text-muted-foreground animate-in fade-in duration-200",
					children: [
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("strong", {
							className: "text-foreground font-bold",
							children: [c.labels.necessary, ":"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 184,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "mt-0.5",
							children: "Notwendige Cookies helfen dabei, eine Website nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche ermöglichen."
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 185,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 183,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("strong", {
							className: "text-foreground font-bold",
							children: [c.labels.preferences, ":"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 188,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "mt-0.5",
							children: "Präferenz-Cookies ermöglichen einer Website sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Website verhält oder aussieht, wie z.B. Ihre bevorzugte Sprache."
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 189,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 187,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("strong", {
							className: "text-foreground font-bold",
							children: [c.labels.statistics, ":"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 192,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "mt-0.5",
							children: "Statistik-Cookies helfen Website-Besitzern zu verstehen, wie Besucher mit Websites interagieren, indem Informationen anonym gesammelt und gemeldet werden."
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 193,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 191,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("strong", {
							className: "text-foreground font-bold",
							children: [c.labels.marketing, ":"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 196,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "mt-0.5",
							children: "Marketing-Cookies werden verwendet, um Besuchern auf Websites zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind."
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 197,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 195,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 182,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 149,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3 lg:pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => save({
						necessary: true,
						preferences: true,
						statistics: true,
						marketing: true
					}),
					className: "w-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-deep cursor-pointer",
					children: c.allow
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 204,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => save({
						...cats,
						preferences: false,
						statistics: false,
						marketing: false
					}),
					className: "w-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary cursor-pointer",
					children: c.necessaryOnly
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 213,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 203,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 148,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 143,
		columnNumber: 5
	}, this);
}
var logo_alte_default = "/assets/logo-alte-DSmN2Ucy.png";
var logo_bamf_default = "/assets/logo-bamf-DVYcFOgx.png";
var logo_dekra_default = "/assets/logo-dekra-4MjSpufL.png";
var logo_eaquals_default = "/assets/logo-eaquals-D8BOD-1P.png";
var logo_imove_default = "/assets/logo-imove-Ba-ia-Q4.png";
var logo_vhs_default = "/assets/logo-vhs-J6_KsM_U.png";
var _jsxFileName$3 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/Footer.tsx";
function Footer() {
	const f = useT(footer);
	const t = useT(ui);
	const items = useT(nav);
	const partnerLogos = [
		{
			name: "vhs",
			src: logo_vhs_default,
			alt: "Volkshochschule"
		},
		{
			name: "DEKRA",
			src: logo_dekra_default,
			alt: "DEKRA ISO 9001 Zertifiziert"
		},
		{
			name: "BAMF",
			src: logo_bamf_default,
			alt: "Bundesamt für Migration und Flüchtlinge"
		},
		{
			name: "ALTE",
			src: logo_alte_default,
			alt: "Association of Language Testers in Europe"
		},
		{
			name: "Eaquals",
			src: logo_eaquals_default,
			alt: "Eaquals Excellence in Language Education"
		},
		{
			name: "iMOVE",
			src: logo_imove_default,
			alt: "iMOVE Training Made in Germany"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "bg-[#5c636a] text-white",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page flex h-16 items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-2xl font-black tracking-tighter text-white",
						children: "telc"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 33,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-1.5 w-1.5 rounded-full bg-white mb-1" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 34,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 32,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-5 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://www.facebook.com/telcLanguageTests/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "opacity-90 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Facebook, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 45,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 38,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://www.instagram.com/telc.official/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Instagram",
							className: "opacity-90 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 54,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://www.linkedin.com/in/telc-ggmbh-023393250/",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LinkedIn",
							className: "opacity-90 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Linkedin, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 63,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://www.youtube.com/user/telctube",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "YouTube",
							className: "opacity-90 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Youtube, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 72,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 65,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 37,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 31,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 30,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "bg-[#f1f3f5] py-14 text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "container-page grid gap-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mb-3 text-sm font-extrabold text-foreground",
							children: t.address
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 83,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("address", {
							className: "not-italic leading-relaxed text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "font-semibold text-foreground",
									children: "telc gGmbH"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 85,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Basler Straße 7" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 86,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "61352 Bad Homburg" }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 87,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 84,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 82,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mb-3 text-sm font-extrabold text-foreground",
							children: t.links
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 93,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "grid grid-cols-2 gap-y-1.5 gap-x-4 text-xs font-medium text-muted-foreground",
							children: [
								f.links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#",
									className: "hover:text-primary",
									children: l
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 97,
									columnNumber: 19
								}, this) }, l, false, {
									fileName: _jsxFileName$3,
									lineNumber: 96,
									columnNumber: 17
								}, this)),
								items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: i.to,
									className: "hover:text-primary",
									children: i.label
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 104,
									columnNumber: 19
								}, this) }, i.to, false, {
									fileName: _jsxFileName$3,
									lineNumber: 103,
									columnNumber: 17
								}, this)),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/sitemap",
									className: "hover:text-primary font-bold text-primary",
									children: "Sitemap"
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 110,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 109,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/admin",
									className: "hover:text-primary",
									children: t.admin
								}, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 115,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName$3,
									lineNumber: 114,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 94,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 92,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mb-3 text-sm font-extrabold text-foreground",
							children: "Aktuelles von telc, melden Sie sich für den Newsletter an"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 124,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#",
							className: "link-arrow mt-2 text-xs font-bold text-teal hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.subscribe }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 131,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 132,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 127,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$3,
							lineNumber: 123,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 80,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "container-page my-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "border-border" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 139,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 138,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "container-page",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center justify-center gap-8 md:justify-between",
						children: partnerLogos.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-center p-2 transition-transform hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: p.src,
								alt: p.alt,
								className: "h-12 w-auto max-w-[160px] object-contain"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 150,
								columnNumber: 17
							}, this)
						}, p.name, false, {
							fileName: _jsxFileName$3,
							lineNumber: 146,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 144,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 143,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 79,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/SearchModal.tsx";
function SearchModal({ isOpen, onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const { lang } = useLang();
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const searchableExams = [
		{
			title: "telc Deutsch A1 (Start Deutsch 1)",
			level: "A1",
			to: routes.exams
		},
		{
			title: "telc Deutsch A2 (Start Deutsch 2)",
			level: "A2",
			to: routes.exams
		},
		{
			title: "telc Deutsch B1 (Zertifikat Deutsch)",
			level: "B1",
			to: routes.exams
		},
		{
			title: "telc Deutsch B2",
			level: "B2",
			to: routes.exams
		},
		{
			title: "telc Deutsch C1 Hochschule",
			level: "C1",
			to: routes.exams
		},
		{
			title: "telc Deutsch C1 Medizin",
			level: "C1",
			to: routes.exams
		},
		{
			title: "telc Deutsch C2",
			level: "C2",
			to: routes.exams
		},
		{
			title: "telc English B1-B2 Business",
			level: "B1-B2",
			to: routes.exams
		}
	];
	const searchableMaterials = [
		{
			title: "Einfach zum Studium! Deutsch C1 Hochschule Lehrbuch",
			type: "Lehrwerk",
			to: routes.materials
		},
		{
			title: "telc Deutsch B1/B2 Pflege Übungstest 1",
			type: "Testheft",
			to: routes.materials
		},
		{
			title: "Handreichung für Lehrkräfte - Integration",
			type: "Download",
			to: routes.materials
		}
	];
	const filteredExams = searchableExams.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()) || e.level.toLowerCase().includes(query.toLowerCase()));
	const filteredMaterials = searchableMaterials.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));
	const filteredNews = news.filter((n) => n.title[lang].toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-16 backdrop-blur-sm px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lift animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex h-16 items-center gap-3 border-b border-border px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-5 w-5 text-primary shrink-0" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 64,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "text",
							autoFocus: true,
							placeholder: "Suchen Sie nach Prüfungen (z.B. B1, C1 Medizin), Materialien oder News...",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							className: "flex-1 bg-transparent text-sm font-semibold text-foreground placeholder:text-muted-foreground outline-none"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 65,
							columnNumber: 11
						}, this),
						query && /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setQuery(""),
							className: "text-xs font-bold text-muted-foreground hover:text-foreground",
							children: "Löschen"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 74,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 87,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 82,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-h-[60vh] overflow-y-auto p-4 space-y-6",
					children: [
						!query && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground",
							children: "Beliebte Suchen"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 96,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"telc Deutsch B1",
								"C1 Medizin",
								"Prüfungstermine",
								"Übungstest PDF",
								"vhs Kurse"
							].map((term) => /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setQuery(term),
								className: "rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors",
								children: term
							}, term, false, {
								fileName: _jsxFileName$2,
								lineNumber: 101,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 99,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						filteredExams.length > 0 && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary",
							children: [
								"Sprachprüfungen (",
								filteredExams.length,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 117,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1",
							children: filteredExams.map((exam) => /* @__PURE__ */ (void 0)(Link, {
								to: exam.to,
								onClick: onClose,
								className: "flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(FileText, { className: "h-4 w-4 text-primary" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 129,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", { children: exam.title }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 130,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 128,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] text-primary",
									children: exam.level
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 132,
									columnNumber: 21
								}, this)]
							}, exam.title, true, {
								fileName: _jsxFileName$2,
								lineNumber: 122,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 120,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 116,
							columnNumber: 13
						}, this),
						filteredMaterials.length > 0 && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary",
							children: [
								"Lehrmaterialien (",
								filteredMaterials.length,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 144,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1",
							children: filteredMaterials.map((mat) => /* @__PURE__ */ (void 0)(Link, {
								to: mat.to,
								onClick: onClose,
								className: "flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(BookOpen, { className: "h-4 w-4 text-teal" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 156,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", { children: mat.title }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 157,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 155,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[0.625rem] text-muted-foreground",
									children: mat.type
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 159,
									columnNumber: 21
								}, this)]
							}, mat.title, true, {
								fileName: _jsxFileName$2,
								lineNumber: 149,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 147,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 143,
							columnNumber: 13
						}, this),
						filteredNews.length > 0 && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "mb-2 text-[0.6875rem] font-bold uppercase tracking-wider text-primary",
							children: [
								"Aktuelles & Meldungen (",
								filteredNews.length,
								")"
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 169,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1",
							children: filteredNews.map((n) => /* @__PURE__ */ (void 0)(Link, {
								to: routes.about,
								onClick: onClose,
								className: "flex items-center justify-between rounded-lg p-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(Layers, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 181,
										columnNumber: 23
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "truncate max-w-md",
										children: n.title[lang]
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 182,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 180,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[0.625rem] text-muted-foreground",
									children: n.date
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 184,
									columnNumber: 21
								}, this)]
							}, n.id, true, {
								fileName: _jsxFileName$2,
								lineNumber: 174,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 172,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 168,
							columnNumber: 13
						}, this),
						query && filteredExams.length === 0 && filteredMaterials.length === 0 && filteredNews.length === 0 && /* @__PURE__ */ (void 0)("div", {
							className: "py-8 text-center text-xs text-muted-foreground",
							children: [
								"Keine Ergebnisse für \"",
								query,
								"\" gefunden."
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 193,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 92,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-3 text-[0.6875rem] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
						"Drücken Sie ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "ESC" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 201,
							columnNumber: 29
						}, this),
						" zum Schließen"
					] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 201,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-bold text-primary",
						children: "telc Suchportal"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 202,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 200,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 61,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 60,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/Header.tsx";
function RoundFlag({ code, className = "h-5 w-5" }) {
	if (code === "de") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: `rounded-full shadow-sm shrink-0 object-cover ${className}`,
		viewBox: "0 0 512 512",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				y: "0",
				width: "512",
				height: "170.66",
				fill: "#000000"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				y: "170.66",
				width: "512",
				height: "170.66",
				fill: "#DD0000"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				y: "341.33",
				width: "512",
				height: "170.66",
				fill: "#FFCE00"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 15,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 12,
		columnNumber: 7
	}, this);
	if (code === "en") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: `rounded-full shadow-sm shrink-0 object-cover ${className}`,
		viewBox: "0 0 512 512",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				width: "512",
				height: "512",
				fill: "#012169"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 22,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M0 0l512 512M512 0L0 512",
				stroke: "#fff",
				strokeWidth: "60"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M0 0l512 512M512 0L0 512",
				stroke: "#C8102E",
				strokeWidth: "40"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 24,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M256 0v512M0 256h512",
				stroke: "#fff",
				strokeWidth: "100"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M256 0v512M0 256h512",
				stroke: "#C8102E",
				strokeWidth: "60"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 26,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 21,
		columnNumber: 7
	}, this);
	if (code === "es") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: `rounded-full shadow-sm shrink-0 object-cover ${className}`,
		viewBox: "0 0 512 512",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				width: "512",
				height: "128",
				fill: "#AA151B"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 33,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				y: "128",
				width: "512",
				height: "256",
				fill: "#F1BF00"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				y: "384",
				width: "512",
				height: "128",
				fill: "#AA151B"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 35,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 32,
		columnNumber: 7
	}, this);
	if (code === "tr") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className: `rounded-full shadow-sm shrink-0 object-cover ${className}`,
		viewBox: "0 0 512 512",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				width: "512",
				height: "512",
				fill: "#E30A17"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 42,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
				cx: "200",
				cy: "256",
				r: "120",
				fill: "#ffffff"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 43,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
				cx: "230",
				cy: "256",
				r: "96",
				fill: "#E30A17"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 44,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
				fill: "#ffffff",
				points: "320,256 345,264 330,240 340,272 320,250"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 45,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 41,
		columnNumber: 7
	}, this);
	return null;
}
function Header() {
	const { lang, setLang } = useLang();
	const items = useT(nav);
	const meta = useT(metaNav);
	const t = useT(ui);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [langOpen, setLangOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [expandedIndices, setExpandedIndices] = (0, import_react.useState)([
		0,
		1,
		2,
		3
	]);
	const toggleAccordion = (idx) => {
		setExpandedIndices((prev) => prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]);
	};
	const activeLang = LANGS.find((l) => l.code === lang) || LANGS[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		id: "page-header",
		className: "sticky top-0 z-40 border-t-4 border-primary border-b border-border bg-card shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page flex h-20 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex shrink-0 items-center gap-1.5 py-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-3xl font-black tracking-tighter text-foreground",
								children: "telc"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 76,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-2 w-2 rounded-full bg-primary mb-1" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 77,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 75,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 74,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.to,
							className: "text-sm font-bold text-foreground transition-colors hover:text-primary py-2",
							activeProps: { className: "text-primary border-b-2 border-primary pb-1" },
							children: item.label
						}, item.to, false, {
							fileName: _jsxFileName$1,
							lineNumber: 84,
							columnNumber: 13
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 82,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "ml-auto flex items-center gap-3.5 md:gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "hidden items-center gap-3 border-r border-border pr-4 text-xs font-semibold text-muted-foreground lg:flex",
								children: meta.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "cursor-pointer transition-colors hover:text-foreground",
									children: m
								}, m, false, {
									fileName: _jsxFileName$1,
									lineNumber: 100,
									columnNumber: 15
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 98,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setSearchOpen(true),
								className: "p-2 text-foreground transition-colors hover:text-primary",
								"aria-label": t.search,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "h-5 w-5 stroke-[2.2]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 113,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 107,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setLangOpen((v) => !v),
									className: "flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-foreground transition-colors hover:text-primary border-0 bg-transparent",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoundFlag, {
										code: activeLang.code,
										className: "h-4.5 w-4.5"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 123,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "uppercase text-[0.75rem] font-extrabold",
										children: activeLang.code
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 124,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 118,
									columnNumber: 13
								}, this), langOpen && /* @__PURE__ */ (void 0)("ul", {
									className: "absolute right-0 top-10 z-50 w-36 overflow-hidden rounded-md border border-border bg-popover py-1 shadow-lift",
									children: LANGS.map((l) => /* @__PURE__ */ (void 0)("li", { children: /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => {
											setLang(l.code);
											setLangOpen(false);
										},
										className: `flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold hover:bg-secondary transition-colors ${l.code === lang ? "bg-secondary/60 text-primary font-bold" : "text-foreground"}`,
										children: [/* @__PURE__ */ (void 0)(RoundFlag, {
											code: l.code,
											className: "h-4.5 w-4.5"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 141,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", { children: l.label }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 142,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 131,
										columnNumber: 21
									}, this) }, l.code, false, {
										fileName: _jsxFileName$1,
										lineNumber: 130,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 128,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 117,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": t.menu,
								onClick: () => setOpen((v) => !v),
								className: "p-1 text-foreground transition-colors hover:text-primary lg:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-6 w-6 stroke-[2.2]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 157,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-6 w-6 stroke-[2.2]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 157,
									columnNumber: 62
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 151,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 96,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			open && /* @__PURE__ */ (void 0)("div", {
				className: "border-t border-border bg-[#f8f9fa] lg:hidden max-h-[80vh] overflow-y-auto",
				children: /* @__PURE__ */ (void 0)("nav", {
					className: "flex flex-col",
					children: [items.map((item, index) => {
						const isExpanded = expandedIndices.includes(index);
						const hasSub = item.subItems && item.subItems.length > 0;
						return /* @__PURE__ */ (void 0)("div", {
							className: "border-b border-border/60",
							children: [/* @__PURE__ */ (void 0)("div", {
								onClick: () => hasSub && toggleAccordion(index),
								className: "container-page flex cursor-pointer items-center justify-between py-4 text-sm font-extrabold text-foreground transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (void 0)("span", { children: item.label }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 176,
									columnNumber: 21
								}, this), hasSub && /* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: isExpanded ? /* @__PURE__ */ (void 0)(ChevronUp, { className: "h-4 w-4 stroke-[2.5]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 180,
										columnNumber: 27
									}, this) : /* @__PURE__ */ (void 0)(ChevronDown, { className: "h-4 w-4 stroke-[2.5]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 182,
										columnNumber: 27
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 178,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 172,
								columnNumber: 19
							}, this), hasSub && isExpanded && item.subItems && /* @__PURE__ */ (void 0)("div", {
								className: "bg-[#f1f3f5] py-1 border-t border-border/30",
								children: item.subItems.map((sub) => /* @__PURE__ */ (void 0)("a", {
									href: "#",
									onClick: () => setOpen(false),
									className: "block container-page py-2 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors",
									children: sub
								}, sub, false, {
									fileName: _jsxFileName$1,
									lineNumber: 192,
									columnNumber: 25
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 190,
								columnNumber: 21
							}, this)]
						}, item.to, true, {
							fileName: _jsxFileName$1,
							lineNumber: 171,
							columnNumber: 17
						}, this);
					}), /* @__PURE__ */ (void 0)("div", {
						className: "container-page flex items-center justify-between py-6 px-4 text-xs font-bold text-foreground/80 border-t border-border/80 bg-[#f8f9fa]",
						children: meta.map((m) => /* @__PURE__ */ (void 0)("span", {
							className: "cursor-pointer transition-colors hover:text-primary",
							children: m
						}, m, false, {
							fileName: _jsxFileName$1,
							lineNumber: 210,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 208,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 165,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 164,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchModal, {
				isOpen: searchOpen,
				onClose: () => setSearchOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 220,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 71,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/Layout.tsx";
function Layout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				id: "page-content",
				className: "flex-1",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CookieConsent, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
function PageHero({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "bg-hero-gradient py-16 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container-page max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-3xl font-extrabold sm:text-4xl",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 text-sm leading-relaxed opacity-90",
				children: text
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function CardGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "container-page -mt-10 grid gap-6 pb-4 md:grid-cols-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
			className: "flex flex-col rounded-md bg-card p-6 shadow-card transition-shadow hover:shadow-lift",
			children: [
				item.badge && /* @__PURE__ */ (void 0)("span", {
					className: "mb-3 w-fit bg-secondary px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-primary",
					children: item.badge
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-base font-bold text-foreground",
					children: item.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 flex-1 text-xs leading-relaxed text-muted-foreground",
					children: item.text
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this)
			]
		}, item.title, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 5
	}, this);
}
function Prose({ title, paragraphs }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page max-w-3xl py-16",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-2xl font-extrabold text-primary",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this), paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-4 text-sm leading-relaxed text-muted-foreground",
			children: p
		}, p, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
//#endregion
export { logo_alte_default as a, logo_eaquals_default as c, Prose as i, logo_imove_default as l, Layout as n, logo_bamf_default as o, PageHero as r, logo_dekra_default as s, CardGrid as t, logo_vhs_default as u };
