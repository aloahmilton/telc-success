import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { s as routes } from "./content-NEnvee3a.mjs";
import { U as ChevronRight, V as CircleCheck, i as UserCheck } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qualifizierung-DLJHVqBu.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/qualifizierung.tsx?tsr-split=component";
var qualificationLevels = [
	{
		title: "Prüferlizenz telc Deutsch A1/A2",
		target: "Lehrkräfte für Grundstufe A1–A2",
		validity: "3 Jahre gültig",
		reqs: [
			"Unterrichtserfahrung auf Niveau A1/A2 (mind. 100 UE)",
			"Kenntnis der telc Prüfungsordnungen",
			"Erfolgreicher Abschluss des Qualifizierungsseminars"
		]
	},
	{
		title: "Prüferlizenz telc Deutsch B1/B2",
		target: "Prüfende in Integrations- & Berufssprachkursen",
		validity: "3 Jahre gültig",
		reqs: [
			"Unterrichtserfahrung auf Niveau B1/B2 (mind. 300 UE)",
			"Zulassung als Lehrkraft für Integrationskurse (BAMF)",
			"Bewerungstraining und Bestehen der Lizenzprüfung"
		]
	},
	{
		title: "Prüferlizenz telc Deutsch C1/C2 & Medizin",
		target: "Hochschul- & Fachsprachenprüfende",
		validity: "3 Jahre gültig",
		reqs: [
			"Hochschulabschluss in Germanistik/DaF oder Medizin",
			"Langjährige Erfahrung in C1/C2 Fachsprachenkursen",
			"Teilnahme am Spezialisierungsseminar"
		]
	}
];
function QualificationRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: "Prüferqualifizierung & Lizenzen",
		text: "Werden Sie Teil eines Netzwerks von über 25.000 qualifizierten telc Prüferinnen und Prüfern weltweit. Erfahren Sie alles über die Lizenzierungskriterien und Qualifizierungsseminare."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-12",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary",
					children: "Qualitätsstandard der telc gGmbH"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-3 text-2xl font-black text-foreground md:text-3xl",
					children: "Voraussetzungen für die Prüferlizenz"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-xs text-muted-foreground md:text-sm max-w-xl mx-auto",
					children: "Die telc Prüferlizenz berechtigt Sie zur Abnahme mündlicher und schriftlicher Prüfungen im Auftrag akkreditierter telc Prüfungszentren."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: qualificationLevels.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCheck, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded border border-border bg-secondary px-2 py-0.5 text-[0.625rem] font-bold text-foreground",
							children: item.validity
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-extrabold text-foreground",
						children: item.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs font-semibold text-primary",
						children: item.target
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 space-y-2 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[0.6875rem] font-bold uppercase text-muted-foreground",
							children: "Kriterien:"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 19
						}, this), item.reqs.map((req) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: req }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 23
							}, this)]
						}, req, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 41
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 17
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 border-t border-border pt-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: routes.contact,
						className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-xs font-bold text-white hover:bg-primary-deep transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Seminar buchen" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 15
				}, this)]
			}, item.title, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 44
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 10
	}, this);
}
//#endregion
export { QualificationRoute as component };
