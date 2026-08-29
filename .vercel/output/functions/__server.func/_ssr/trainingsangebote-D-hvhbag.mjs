import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT } from "./i18n-hvpEkKsw.mjs";
import { s as routes } from "./content-NEnvee3a.mjs";
import { U as ChevronRight, q as Calendar, r as Users } from "../_libs/lucide-react.mjs";
import { i as Prose, n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
import { a as trainingPage } from "./pages-nuTFZeKq.mjs";
import { t as chalkboard_teacher_default } from "./chalkboard-teacher-CWdBV-Zm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trainingsangebote-D-hvhbag.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/trainingsangebote.tsx?tsr-split=component";
var sampleTrainings = [
	{
		id: 1,
		title: "Qualifizierung: Prüfer/in telc Deutsch B1–B2",
		target: "Prüfende & Lehrkräfte",
		format: "Online-Seminar",
		date: "18.09.2026",
		duration: "1 Tag (8 UE)",
		desc: "Voraussetzung zur Abnahme von telc B1-B2 Prüfungen. Bewertung von schriftlichen und mündlichen Leistungen.",
		badge: "Lizenzierung"
	},
	{
		id: 2,
		title: "Methodik & Didaktik in Fachsprachenkursen Medizin",
		target: "Lehrkräfte Deutsch für Medizin",
		format: "Präsenz (Bad Homburg)",
		date: "25.09.2026",
		duration: "2 Tage (16 UE)",
		desc: "Effektiver Unterricht für ausländische Ärztinnen und Pflegekräfte zur gezielten Prüfungsvorbereitung.",
		badge: "Fachfortbildung"
	},
	{
		id: 3,
		title: "Digitales Lehren mit telc Campus & Medien",
		target: "Kursleiter/innen & Schulen",
		format: "Webinar",
		date: "02.10.2026",
		duration: "3 Stunden",
		desc: "Interaktive Tools und digitale Unterrichtsgestaltung mit den telc Lehrwerken und Campus-Plattformen.",
		badge: "Gratis Webinar"
	}
];
function TrainingRoute() {
	const p = useT(trainingPage);
	const [activeFormat, setActiveFormat] = (0, import_react.useState)("all");
	const filteredTrainings = sampleTrainings.filter((t) => activeFormat === "all" || t.format.toLowerCase().includes(activeFormat.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			title: p.title,
			text: p.intro
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-12",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveFormat("all"),
							className: `rounded-lg px-4 py-2 text-xs font-bold transition-all ${activeFormat === "all" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
							children: "Alle Formate"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveFormat("online"),
							className: `rounded-lg px-4 py-2 text-xs font-bold transition-all ${activeFormat === "online" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
							children: "Online-Seminare & Webinare"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setActiveFormat("präsenz"),
							className: `rounded-lg px-4 py-2 text-xs font-bold transition-all ${activeFormat === "präsenz" ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
							children: "Präsenzangebote"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: routes.contact,
					className: "inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-dark transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inhouse-Training anfragen" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: filteredTrainings.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary",
								children: t.badge
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-1 text-[0.6875rem] font-semibold text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 21
									}, this),
									" ",
									t.date
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary p-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: chalkboard_teacher_default,
								alt: "",
								className: "h-full w-full object-contain"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-base font-extrabold text-foreground leading-snug",
							children: t.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: t.desc
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 space-y-1 text-xs text-muted-foreground font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Zielgruppe:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 22
								}, this),
								" ",
								t.target
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Format:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 22
								}, this),
								" ",
								t.format,
								" (",
								t.duration,
								")"
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 border-t border-border pt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: routes.contact,
							className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-bold text-white hover:bg-primary-deep transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Anmelden / Details" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 15
					}, this)]
				}, t.id, true, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 39
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Prose, {
			title: p.proseTitle,
			paragraphs: p.prose
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 10
	}, this);
}
//#endregion
export { TrainingRoute as component };
