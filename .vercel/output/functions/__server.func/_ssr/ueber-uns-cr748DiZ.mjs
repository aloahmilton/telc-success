import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT } from "./i18n-hvpEkKsw.mjs";
import { r as home, s as routes } from "./content-NEnvee3a.mjs";
import { U as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as logo_alte_default, c as logo_eaquals_default, i as Prose, l as logo_imove_default, n as Layout, o as logo_bamf_default, r as PageHero, s as logo_dekra_default, u as logo_vhs_default } from "./Layout-D_1yH2HR.mjs";
import { t as aboutPage } from "./pages-nuTFZeKq.mjs";
import { n as zusammenarbeit_default, t as juergen_keicher_default } from "./zusammenarbeit-BlJ1AR1S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ueber-uns-cr748DiZ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/ueber-uns.tsx?tsr-split=component";
function AboutRoute() {
	const p = useT(aboutPage);
	const h = useT(home);
	const partners = [
		{
			name: "vhs",
			src: logo_vhs_default
		},
		{
			name: "DEKRA",
			src: logo_dekra_default
		},
		{
			name: "BAMF",
			src: logo_bamf_default
		},
		{
			name: "ALTE",
			src: logo_alte_default
		},
		{
			name: "Eaquals",
			src: logo_eaquals_default
		},
		{
			name: "iMOVE",
			src: logo_imove_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			title: p.title,
			text: p.intro
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid items-center gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-6 lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: zusammenarbeit_default,
						alt: "Über telc Organisation",
						className: "h-80 w-full rounded-xl object-cover shadow-card md:h-[400px]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-6 lg:col-span-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
							children: "Gemeinnützige Bildungseinrichtung"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-black text-foreground md:text-3xl leading-snug",
							children: "Verantwortung, Qualität und weltweite Zusammenarbeit"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs leading-relaxed text-muted-foreground md:text-sm",
							children: "Die telc gGmbH ist ein Tochterunternehmen des Deutschen Volkshochschul-Verbandes e.V. (DVV). Seit mehr als 50 Jahren stehen wir für transparente, faire und wissenschaftlich fundierte Sprachprüfungen."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: routes.contact,
								className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-deep transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Kontakt aufnehmen" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-y border-border bg-card py-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
					children: h.stats.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: s.prefix
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-4xl font-black text-foreground md:text-5xl",
								children: s.value
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs font-semibold text-muted-foreground",
								children: s.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 17
							}, this)
						]
					}, s.label, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 shadow-card md:flex md:items-center md:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "shrink-0 md:w-60",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: juergen_keicher_default,
						alt: "Jürgen Keicher, Geschäftsführer",
						className: "h-64 w-full rounded-lg object-cover shadow-md"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 md:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
						className: "text-base font-semibold leading-relaxed text-foreground md:text-lg",
						children: [
							"„",
							h.quote,
							"“"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-xs font-bold text-muted-foreground",
						children: h.quoteBy
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-secondary/40 py-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6",
					children: "Qualitätsnetzwerke & Partnerorganisationen"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center justify-center gap-8 md:justify-between",
					children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center p-2 rounded bg-white shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: partner.src,
							alt: partner.name,
							className: "h-10 w-auto max-w-[140px] object-contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 17
						}, this)
					}, partner.name, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 38
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Prose, {
			title: p.proseTitle,
			paragraphs: p.prose
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
//#endregion
export { AboutRoute as component };
