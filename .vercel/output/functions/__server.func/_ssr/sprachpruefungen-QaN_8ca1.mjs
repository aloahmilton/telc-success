import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT } from "./i18n-hvpEkKsw.mjs";
import { s as routes } from "./content-NEnvee3a.mjs";
import { U as ChevronRight, d as Search } from "../_libs/lucide-react.mjs";
import { i as Prose, n as Layout, r as PageHero, t as CardGrid } from "./Layout-D_1yH2HR.mjs";
import { r as examsPage } from "./pages-nuTFZeKq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sprachpruefungen-QaN_8ca1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/sprachpruefungen.tsx?tsr-split=component";
function ExamsRoute() {
	const p = useT(examsPage);
	const [activeFilter, setActiveFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const filters = [
		{
			id: "all",
			label: "Alle Prüfungen"
		},
		{
			id: "a1a2",
			label: "Niveau A1 – A2"
		},
		{
			id: "b1b2",
			label: "Niveau B1 – B2"
		},
		{
			id: "c1c2",
			label: "Niveau C1 – C2"
		},
		{
			id: "beruf",
			label: "Beruf & Medizin"
		}
	];
	const filteredCards = p.cards.filter((card) => {
		if (!(card.title.toLowerCase().includes(search.toLowerCase()) || card.text.toLowerCase().includes(search.toLowerCase()))) return false;
		if (activeFilter === "all") return true;
		if (activeFilter === "a1a2") return card.title.includes("A1") || card.title.includes("A2");
		if (activeFilter === "b1b2") return card.title.includes("B1") || card.title.includes("B2");
		if (activeFilter === "c1c2") return card.title.includes("C1") || card.title.includes("C2");
		if (activeFilter === "beruf") return card.title.toLowerCase().includes("beruf") || card.title.toLowerCase().includes("pflege") || card.title.toLowerCase().includes("medizin");
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			title: p.title,
			text: p.intro
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-8",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-card md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setActiveFilter(f.id),
						className: `rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${activeFilter === f.id ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
						children: f.label
					}, f.id, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative w-full md:w-64",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "text",
						placeholder: "Prüfung suchen...",
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "w-full rounded-lg border border-border bg-secondary/30 py-1.5 pl-9 pr-3 text-xs font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardGrid, { items: filteredCards }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page pb-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-extrabold text-foreground",
						children: "Prüfungszentrum in Ihrer Nähe finden"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Suchen Sie nach Standorten & Terminen in Ihrer Stadt."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: routes.centerFinder,
						className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Zentrum suchen" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between rounded-xl border border-border bg-card p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-extrabold text-foreground",
						children: "Zertifikat auf Echtheit verifizieren"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Online-Validierung für Arbeitgeber & Behörden."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: routes.verifyCert,
						className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Zertifikat prüfen" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Prose, {
			title: p.proseTitle,
			paragraphs: p.prose
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
//#endregion
export { ExamsRoute as component };
