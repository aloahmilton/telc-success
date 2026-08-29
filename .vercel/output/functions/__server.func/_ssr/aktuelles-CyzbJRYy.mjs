import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as useLang } from "./i18n-hvpEkKsw.mjs";
import { o as news, s as routes } from "./content-NEnvee3a.mjs";
import { U as ChevronRight, _ as Newspaper, a as Tag, q as Calendar } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aktuelles-CyzbJRYy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/aktuelles.tsx?tsr-split=component";
function NewsRoute() {
	const { lang } = useLang();
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const categories = [
		{
			id: "all",
			label: "Alle Artikel"
		},
		{
			id: "Allgemeines",
			label: "Allgemeines & Presse"
		},
		{
			id: "Prüfungen",
			label: "Prüfungen & Formate"
		},
		{
			id: "Veranstaltungen",
			label: "Veranstaltungen"
		}
	];
	const filteredNews = news.filter((item) => {
		const categoryText = item.category[lang] || item.category.de;
		return activeCategory === "all" || categoryText.toLowerCase().includes(activeCategory.toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: "Aktuelles & Presse",
		text: "Bleiben Sie informiert über aktuelle Entwicklungen, neue Prüfungsformate, Veranstaltungshinweise und Pressemitteilungen der telc gGmbH."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-12",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-card mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setActiveCategory(c.id),
					className: `rounded-lg px-4 py-2 text-xs font-bold transition-all ${activeCategory === c.id ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
					children: c.label
				}, c.id, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 34
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "https://www.telc.net/presse",
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Newspaper, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Pressebereich besuchen" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: filteredNews.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1 text-[0.6875rem] font-bold text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 21
								}, this),
								" ",
								item.category[lang] || item.category.de
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "flex items-center gap-1 text-[0.6875rem] font-semibold text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 21
								}, this),
								" ",
								item.date
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-extrabold text-foreground leading-snug",
						children: item.title[lang] || item.title.de
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: item.teaser[lang] || item.teaser.de
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 17
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 border-t border-border pt-4",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: routes.contact,
						className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Artikel lesen" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 15
				}, this)]
			}, item.id, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 37
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
//#endregion
export { NewsRoute as component };
