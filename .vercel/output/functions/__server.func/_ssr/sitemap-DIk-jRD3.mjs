import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { s as routes } from "./content-NEnvee3a.mjs";
import { N as FileText, U as ChevronRight, Y as BookOpen, c as ShieldCheck, k as House } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap-DIk-jRD3.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/sitemap.tsx?tsr-split=component";
var sitemapSections = [
	{
		title: "Hauptseiten & Navigation",
		icon: House,
		links: [
			{
				label: "Startseite (Home)",
				to: routes.home,
				desc: "Übersicht über telc Sprachprüfungen, Werte und Partner."
			},
			{
				label: "Sprachprüfungen (A1–C2)",
				to: routes.exams,
				desc: "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Schule & Studium."
			},
			{
				label: "Lehrmaterialien",
				to: routes.materials,
				desc: "Lehrwerke, Modelltests, Übungshefte und gratis Download-Material."
			},
			{
				label: "Trainingsangebote",
				to: routes.training,
				desc: "Fortbildungen für Lehrkräfte, Prüferqualifizierung und Inhouse-Trainings."
			},
			{
				label: "Über telc",
				to: routes.about,
				desc: "Profil, gemeinnütziger Bildungauftrag, Qualitätssicherung und DVV-Verbund."
			},
			{
				label: "Kontakt & Anfragen",
				to: routes.contact,
				desc: "Kontaktformular, Adresse Bad Homburg und Servicezeiten."
			}
		]
	},
	{
		title: "Interaktive Portale & Services",
		icon: ShieldCheck,
		links: [
			{
				label: "Prüfungszentrum finden",
				to: routes.centerFinder,
				desc: "Suche in über 3.000 lizenzierten telc Prüfungszentren weltweit nach Stadt & PLZ."
			},
			{
				label: "Zertifikat verifizieren",
				to: routes.verifyCert,
				desc: "Online-Echtheitsprüfung von telc Zertifikaten für Arbeitgeber & Behörden."
			},
			{
				label: "telc Campus & Audio-Hub",
				to: routes.campus,
				desc: "Digitale Lernplattform mit Hörbeispielen, Audios & Modelltest-Downloads."
			},
			{
				label: "Prüferqualifizierung & Lizenzen",
				to: routes.qualifizierung,
				desc: "Lizenzkriterien, Qualifizierungsseminare & Prüferportal."
			},
			{
				label: "Aktuelles & Pressemitteilungen",
				to: routes.aktuelles,
				desc: "Neueste Entwicklungen, Nachrichten und Veranstaltungshinweise."
			},
			{
				label: "Candidate B2 Support",
				to: routes.home,
				desc: "Spezialisierte Begleitung, Vorbereitung & Anmeldung zur telc Deutsch B2 Prüfung."
			},
			{
				label: "Admin Portal",
				to: "/admin",
				desc: "Verwaltung von Prüfungen, Anfragen und Netzwerkstatus (Intern)."
			}
		]
	},
	{
		title: "Prüfungsformate nach Niveau",
		icon: FileText,
		links: [
			{
				label: "telc Deutsch A1 (Start Deutsch 1)",
				to: routes.exams,
				desc: "Anfängerniveau für Visum und Familiennachzug."
			},
			{
				label: "telc Deutsch A2 (Start Deutsch 2)",
				to: routes.exams,
				desc: "Grundlegende Deutschkenntnisse im Alltag."
			},
			{
				label: "telc Deutsch B1 (Zertifikat Deutsch)",
				to: routes.exams,
				desc: "Nachweis für Einbürgerung und BAMF Integrationskurse."
			},
			{
				label: "telc Deutsch B2",
				to: routes.exams,
				desc: "Fortgeschrittene Deutschkenntnisse für Beruf und Studium."
			},
			{
				label: "telc Deutsch C1 Hochschule",
				to: routes.exams,
				desc: "Anerkannter Nachweis für den Hochschulzugang in Deutschland."
			},
			{
				label: "telc Deutsch C1 Medizin",
				to: routes.exams,
				desc: "Fachsprachenprüfung für Ärztinnen und Ärzte."
			},
			{
				label: "telc Deutsch C2",
				to: routes.exams,
				desc: "Exzellente Sprachkompetenz auf muttersprachlichem Niveau."
			}
		]
	},
	{
		title: "Lehrmaterialien & Medien",
		icon: BookOpen,
		links: [
			{
				label: "Lehrwerke & Kursbücher",
				to: routes.materials,
				desc: "Gezielte Lehrwerke für Kursunterricht und Selbstlernen."
			},
			{
				label: "Modell- & Testhefte",
				to: routes.materials,
				desc: "Original telc Übungstests mit Hörtexten & Lösungsschlüsseln."
			},
			{
				label: "Gratis Downloads",
				to: routes.materials,
				desc: "Handreichungen für Lehrkräfte, Übungsmaterialien und PDFs."
			},
			{
				label: "telc Online-Shop",
				to: routes.materials,
				desc: "Direkte Bestellung aller Veröffentlichungen."
			}
		]
	}
];
function SitemapRoute() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: "Sitemap",
		text: "Vollständige Inhalts- und Seitenübersicht der telc gGmbH. Finden Sie schnell alle Prüfungen, Materialien, Services und Formulare."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-10 md:grid-cols-2",
			children: sitemapSections.map((section) => {
				const Icon = section.icon;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-xl border border-border bg-card p-6 shadow-card space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 border-b border-border pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-lg font-extrabold text-foreground",
							children: section.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "divide-y divide-border/60",
						children: section.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "py-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: link.to,
								className: "group flex items-center justify-between text-sm font-bold text-foreground hover:text-primary transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: link.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 27
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 25
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: link.desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 23
							}, this)]
						}, link.label, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 46
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 17
					}, this)]
				}, section.title, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 18
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 119,
		columnNumber: 10
	}, this);
}
//#endregion
export { SitemapRoute as component };
