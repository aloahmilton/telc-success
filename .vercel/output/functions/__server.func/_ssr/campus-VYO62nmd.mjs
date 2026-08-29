import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { s as routes } from "./content-NEnvee3a.mjs";
import { A as Headphones, C as Lock, L as Download, N as FileText, h as Pause, p as Play, s as Smartphone } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campus-VYO62nmd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/campus.tsx?tsr-split=component";
var sampleAudioTracks = [
	{
		id: 1,
		title: "telc Deutsch B2 - Mündliche Prüfung Teil 1 (Präsentation)",
		level: "B2",
		duration: "03:45"
	},
	{
		id: 2,
		title: "telc Deutsch B1 - Hörverstehen Teil 2 (Globalverstehen)",
		level: "B1",
		duration: "04:12"
	},
	{
		id: 3,
		title: "telc Deutsch C1 Hochschule - Hörverstehen Vortrag",
		level: "C1",
		duration: "06:30"
	},
	{
		id: 4,
		title: "telc Deutsch B1/B2 Pflege - Übergabegespräch Pflegekräften",
		level: "B2 Pflege",
		duration: "05:15"
	}
];
function CampusRoute() {
	const [playingId, setPlayingId] = (0, import_react.useState)(null);
	const togglePlay = (id) => {
		setPlayingId(playingId === id ? null : id);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			title: "telc Campus",
			text: "Die digitale Plattform für flexibles Lernen. Nutzen Sie interaktive Übungstests, Audio-Dateien für Hörverstehen und digitale Materialien auf allen Endgeräten."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Headphones, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-extrabold text-foreground",
								children: "Hörverstehen Audios"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Offizielle Audio-Dateien zu allen telc Modelltests direkt im Browser abspielen oder herunterladen."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Smartphone, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-extrabold text-foreground",
								children: "Mobil & App-Bereit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Optimiert für Smartphones, Tablets und Desktop. Lernen Sie unterwegs in Ihrem eigenen Tempo."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-extrabold text-foreground",
								children: "Modelltests PDF"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Kostenlose Antwortbögen, Lösungsschlüssel und Aufgabenhefte zum sofortigen PDF-Download."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-base font-extrabold text-foreground",
								children: "Geschützter Zugang"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Für Prüfungszentren & Lehrkräfte: Exklusive Zusatzmaterialien im geschützten Campus-Bereich."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-secondary/40 py-12",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-8 flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
						children: "Hörbeispiele & Vorbereitung"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 text-2xl font-black text-foreground md:text-3xl",
						children: "Interaktiver Audio-Player für Prüfungen"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-4",
					children: sampleAudioTracks.map((track) => {
						const isPlaying = playingId === track.id;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: `flex flex-col gap-4 rounded-xl border p-5 transition-all md:flex-row md:items-center md:justify-between ${isPlaying ? "border-primary bg-card shadow-lift" : "border-border bg-card shadow-card hover:border-primary/50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => togglePlay(track.id),
									className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all cursor-pointer ${isPlaying ? "bg-primary text-white shadow-md" : "bg-secondary text-primary hover:bg-primary/10"}`,
									children: isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { className: "h-5 w-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 36
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "h-5 w-5 ml-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 68
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded bg-secondary border border-border px-1.5 py-0.5 text-[0.625rem] font-bold text-foreground",
										children: track.level
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 25
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-semibold text-muted-foreground",
										children: track.duration
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "mt-1 text-sm font-extrabold text-foreground",
									children: track.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 23
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3 border-t border-border pt-3 md:border-t-0 md:pt-0",
								children: [isPlaying && /* @__PURE__ */ (void 0)("span", {
									className: "animate-pulse text-xs font-bold text-primary flex items-center gap-1",
									children: [/* @__PURE__ */ (void 0)("span", { className: "h-2 w-2 rounded-full bg-primary" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 25
									}, this), " Audio wird abgespielt..."]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 35
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#",
									onClick: (e) => {
										e.preventDefault();
										alert(`Download gestartet: ${track.title}.mp3`);
									},
									className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "h-3.5 w-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Audio MP3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 19
							}, this)]
						}, track.id, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 20
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
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
			className: "container-page py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-card text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-xl font-black text-foreground md:text-2xl",
						children: "Möchten Sie telc Campus für Ihren Unterricht nutzen?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs text-muted-foreground md:text-sm",
						children: "Als lizenziertes Prüfungszentrum oder Lehrkraft erhalten Sie unbeschränkten Zugriff auf den vollständigen Katalog."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: routes.contact,
							className: "rounded-lg bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-deep",
							children: "Zugangsdaten anfragen"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: routes.materials,
							className: "rounded-lg border border-border bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:bg-secondary/80",
							children: "Lehrmaterialien ansehen"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 133,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 10
	}, this);
}
//#endregion
export { CampusRoute as component };
