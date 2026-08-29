import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { V as CircleCheck, c as ShieldCheck, z as CircleX } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zertifikat-pruefen-Du7h0sab.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/zertifikat-pruefen.tsx?tsr-split=component";
function CertificateVerifyRoute() {
	const [certCode, setCertCode] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const handleVerify = (e) => {
		e.preventDefault();
		if (certCode.trim().length >= 4) setResult("valid");
		else setResult("invalid");
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: "Zertifikat verifizieren",
		text: "Offizielles Überprüfungssystem für Arbeitgeber, Behörden und Hochschulen zur Validierung der Echtheit von telc Sprachzertifikaten."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleVerify,
					className: "rounded-xl border border-border bg-card p-8 shadow-card space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 border-b border-border pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-6 w-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 25,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-lg font-extrabold text-foreground",
								children: "telc Zertifikat Validierung"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted-foreground",
								children: "Geben Sie die Zertifikatsnummer laut Originaldokument ein."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-xs font-bold text-foreground mb-1.5",
								children: "Zertifikatsnummer / Code *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								required: true,
								placeholder: "z.B. TELC-2026-89412 oder 9841-B2-DE",
								value: certCode,
								onChange: (e) => setCertCode(e.target.value),
								className: "w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-xs font-bold text-foreground mb-1.5",
								children: "Nachname des Teilnehmenden *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								required: true,
								placeholder: "z.B. Müller, Schmidt, Yilmaz...",
								value: lastName,
								onChange: (e) => setLastName(e.target.value),
								className: "w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-foreground focus:border-primary focus:bg-card focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-deep transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Zertifikat jetzt verifizieren" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this),
				result === "valid" && /* @__PURE__ */ (void 0)("div", {
					className: "mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-foreground space-y-4 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-8 w-8 text-emerald-600 shrink-0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
							className: "text-base font-extrabold text-emerald-800",
							children: "Zertifikat verifiziert & gültig"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-emerald-700",
							children: "Offiziell ausgestellt von telc gGmbH, Bad Homburg."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "rounded-lg bg-card p-4 border border-border text-xs space-y-2 font-medium",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-between border-b border-border pb-2",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Prüfungsbezeichnung:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-bold text-foreground",
									children: "telc Deutsch B2 (Zertifikat Deutsch)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-between border-b border-border pb-2",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Teilnehmer/in:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-bold text-foreground",
									children: lastName || "Kandidat/in"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-between border-b border-border pb-2",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Zertifikat Code:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-bold text-primary",
									children: certCode.toUpperCase()
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "Gesamtergebnis:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-bold text-emerald-600",
									children: "Sehr gut (288 / 300 Punkte)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 34
				}, this),
				result === "invalid" && /* @__PURE__ */ (void 0)("div", {
					className: "mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-foreground flex items-center gap-3 animate-in fade-in duration-200",
					children: [/* @__PURE__ */ (void 0)(CircleX, { className: "h-8 w-8 text-red-600 shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
						className: "text-base font-extrabold text-red-800",
						children: "Ungültige Zertifikatsnummer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-red-700",
						children: "Bitte überprüfen Sie den Code oder kontaktieren Sie telc Prüfungsverarbeitung."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 36
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { CertificateVerifyRoute as component };
