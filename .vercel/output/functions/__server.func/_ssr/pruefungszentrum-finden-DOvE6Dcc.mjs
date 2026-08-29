import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { J as Building2, M as Globe, V as CircleCheck, b as MapPin, d as Search, m as Phone, q as Calendar, v as Navigation, x as Mail } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pruefungszentrum-finden-DOvE6Dcc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/pruefungszentrum-finden.tsx?tsr-split=component";
var sampleCenters = [
	{
		id: 1,
		name: "vhs Frankfurt am Main - Sonnemannstraße",
		city: "Frankfurt am Main",
		zip: "60314",
		address: "Sonnemannstraße 13",
		phone: "+49 (0)69 212 38000",
		email: "vhs@frankfurt.de",
		website: "www.vhs.frankfurt.de",
		nextExams: [
			"telc Deutsch B1 (12.09.2026)",
			"telc Deutsch B2 (24.09.2026)",
			"telc C1 Medizin (05.10.2026)"
		],
		accredited: true
	},
	{
		id: 2,
		name: "telc Training & Prüfungszentrum Bad Homburg",
		city: "Bad Homburg",
		zip: "61352",
		address: "Basler Straße 7",
		phone: "+49 (0)6172 4567-0",
		email: "pruefungen@telc.net",
		website: "www.telc.net",
		nextExams: ["telc Deutsch A1–C2 (Wöchentlich)", "telc C1 Hochschule (18.09.2026)"],
		accredited: true
	},
	{
		id: 3,
		name: "Volkshochschule Berlin Mitte",
		city: "Berlin",
		zip: "10178",
		address: "Linienstraße 162",
		phone: "+49 (0)30 9018 37411",
		email: "vhs@berlin-mitte.de",
		website: "www.vhs-berlin.de",
		nextExams: ["telc Deutsch B1/B2 Pflege (15.09.2026)", "telc B2 (28.09.2026)"],
		accredited: true
	},
	{
		id: 4,
		name: "Münchner Volkshochschule (MVHS)",
		city: "München",
		zip: "80331",
		address: "Einsteinstraße 28",
		phone: "+49 (0)89 48006-0",
		email: "info@mvhs.de",
		website: "www.mvhs.de",
		nextExams: ["telc Deutsch A2 (10.09.2026)", "telc Deutsch C1 Hochschule (20.09.2026)"],
		accredited: true
	},
	{
		id: 5,
		name: "Hamburger Volkshochschule Zentrale",
		city: "Hamburg",
		zip: "22083",
		address: "Schanzenstraße 75",
		phone: "+49 (0)40 42841-4284",
		email: "zentrale@vhs-hamburg.de",
		website: "www.vhs-hamburg.de",
		nextExams: ["telc Deutsch B1 (14.09.2026)", "telc English B2 (26.09.2026)"],
		accredited: true
	},
	{
		id: 6,
		name: "vhs Köln Neumarkt",
		city: "Köln",
		zip: "50667",
		address: "Cäcilienstraße 35",
		phone: "+49 (0)221 221-25990",
		email: "vhs@stadt-koeln.de",
		website: "www.vhs-koeln.de",
		nextExams: ["telc Deutsch B2 (19.09.2026)", "telc C1 Medizin (02.10.2026)"],
		accredited: true
	}
];
function CenterFinderRoute() {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedLevel, setSelectedLevel] = (0, import_react.useState)("all");
	const filteredCenters = sampleCenters.filter((c) => {
		const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.city.toLowerCase().includes(searchQuery.toLowerCase()) || c.zip.includes(searchQuery);
		const matchesLevel = selectedLevel === "all" || c.nextExams.some((e) => e.toLowerCase().includes(selectedLevel.toLowerCase()));
		return matchesSearch && matchesLevel;
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: "Prüfungszentrum finden",
		text: "Finden Sie ein lizenziertes telc Prüfungszentrum in Ihrer Nähe. Über 3.000 Standorte weltweit bieten telc Sprachprüfungen an."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-xl border border-border bg-card p-6 shadow-card space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-4 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative md:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3.5 top-3 h-5 w-5 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "text",
							placeholder: "Stadt, PLZ oder Name des Prüfungszentrums eingeben (z.B. Frankfurt, 60314, Berlin)...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-lg border border-border bg-secondary/40 py-2.5 pl-11 pr-4 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:outline-none"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							value: selectedLevel,
							onChange: (e) => setSelectedLevel(e.target.value),
							className: "w-full rounded-lg border border-border bg-secondary/40 py-2.5 px-3 text-sm font-bold text-foreground focus:border-primary focus:bg-card focus:outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "all",
									children: "Alle Prüfungsniveaus (A1 – C2)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "A1",
									children: "Niveau A1"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "A2",
									children: "Niveau A2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "B1",
									children: "Niveau B1"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "B2",
									children: "Niveau B2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "C1",
									children: "Niveau C1 (inkl. Hochschule / Medizin)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "C2",
									children: "Niveau C2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs font-bold text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Gefunden: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
						className: "text-primary",
						children: [filteredCenters.length, " Prüfungszentren"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 29
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-700",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 17
							}, this), " 100% Lizenzierte telc Partner"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: filteredCenters.map((center) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[0.6875rem] font-bold text-primary mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Building2, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 23
								}, this), " Lizenzierter telc Partner"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-extrabold text-foreground leading-snug",
								children: center.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 space-y-2 text-xs text-muted-foreground font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
										center.address,
										", ",
										center.zip,
										" ",
										center.city
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: `tel:${center.phone}`,
										className: "hover:text-primary",
										children: center.phone
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: `mailto:${center.email}`,
										className: "hover:text-primary",
										children: center.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: `https://${center.website}`,
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-primary",
										children: center.website
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[0.6875rem] font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 21
								}, this), " Nächste Prüfungstermine:"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap gap-1.5",
								children: center.nextExams.map((exam) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded border border-border bg-secondary/60 px-2 py-1 text-[0.6875rem] font-bold text-foreground",
									children: exam
								}, exam, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 51
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 17
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 border-t border-border pt-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `mailto:${center.email}?subject=Anfrage%20telc%20Pr%C3%BCfungstermin`,
							className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary-deep",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Prüfungszentrum kontaktieren" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 15
					}, this)]
				}, center.id, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 42
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, this),
			filteredCenters.length === 0 && /* @__PURE__ */ (void 0)("div", {
				className: "mt-8 rounded-xl border border-border bg-card p-12 text-center shadow-card",
				children: /* @__PURE__ */ (void 0)("p", {
					className: "text-sm font-bold text-muted-foreground",
					children: [
						"Keine Prüfungszentren für Ihre Suche \"",
						searchQuery,
						"\" gefunden."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 169,
				columnNumber: 42
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 10
	}, this);
}
//#endregion
export { CenterFinderRoute as component };
