import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT } from "./i18n-hvpEkKsw.mjs";
import { U as ChevronRight, V as CircleCheck, W as ChevronLeft, c as ShieldCheck, d as Search, g as Package, n as X, u as Send, x as Mail } from "../_libs/lucide-react.mjs";
import { i as Prose, n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
import { n as submitContactInquiry } from "./actions-B6kmGGWv.mjs";
import { i as materialsPage } from "./pages-nuTFZeKq.mjs";
import { t as book_default } from "./book-ikmIEVmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lehrmaterialien-DrmO2mmZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/ProductModal.tsx";
function ProductModal({ product, onClose }) {
	const [showEnquiryForm, setShowEnquiryForm] = (0, import_react.useState)(false);
	const [formState, setFormState] = (0, import_react.useState)({
		name: "",
		email: "",
		quantity: "1",
		institution: "",
		notes: ""
	});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	if (!product) return null;
	const handleEnquirySubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setErrorMsg("");
		try {
			const topic = `Produkt-Anfrage: ${product.title} (ISBN: ${product.isbn})`;
			const message = `
Anfrage für telc Produkt:
----------------------------------------
Produkt: ${product.title}
Niveau: ${product.level} | Preis: ${product.price}
ISBN: ${product.isbn}

Bestellmenge: ${formState.quantity} Stück
Institution / Prüfungszentrum: ${formState.institution || "Privatperson"}
Anmerkungen: ${formState.notes || "Keine"}
      `.trim();
			const res = await submitContactInquiry({ data: {
				name: formState.name,
				email: formState.email,
				topic,
				message
			} });
			if (res.success) setSubmitted(true);
			else setErrorMsg(res.error || "Fehler beim Senden der Anfrage.");
		} catch (err) {
			setErrorMsg(err.message || "Netzwerkfehler.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-6 py-4 backdrop-blur-xs",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
						children: product.category
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 74,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded border border-border bg-secondary px-2 py-0.5 text-xs font-bold text-foreground",
						children: product.level
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 77,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 73,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onClose,
					className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer",
					"aria-label": "Schließen",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 88,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 82,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-8 md:grid-cols-[1fr_1.5fr]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center justify-center rounded-xl border border-border bg-secondary/30 p-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary p-5 shadow-inner",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: book_default,
										alt: "",
										className: "h-full w-full object-contain"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 98,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 97,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-2xl font-black text-foreground",
									children: product.price
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 100,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "inkl. MwSt. zzgl. Versand"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 101,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 w-full space-y-2 border-t border-border pt-4 text-left text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "ISBN:" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 105,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-foreground",
												children: product.isbn
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 106,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 104,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Seitenumfang:" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 109,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-foreground",
												children: [product.pages, " Seiten"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 110,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 108,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Herausgeber:" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 113,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "font-bold text-foreground",
												children: product.publisher
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 114,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 112,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 103,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-xl font-extrabold text-foreground leading-snug",
								children: product.title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 121,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs font-semibold text-primary",
								children: product.subtitle
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 122,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: product.fullDescription
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 124,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-xs font-bold text-foreground uppercase tracking-wider",
									children: "Features & Highlights"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 128,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "mt-2 space-y-2 text-xs text-muted-foreground",
									children: product.features.map((feat, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-4 w-4 shrink-0 text-teal mt-0.5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 132,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: feat }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 133,
											columnNumber: 23
										}, this)]
									}, i, true, {
										fileName: _jsxFileName$1,
										lineNumber: 131,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 129,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 127,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "text-foreground font-bold",
										children: "Zielgruppe:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 141,
										columnNumber: 17
									}, this),
									" ",
									product.targetAudience
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 140,
								columnNumber: 15
							}, this),
							!showEnquiryForm && !submitted && /* @__PURE__ */ (void 0)("div", {
								className: "mt-8 flex flex-col sm:flex-row gap-3",
								children: [/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setShowEnquiryForm(true),
									className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-white shadow-lift transition-all hover:bg-primary-deep cursor-pointer",
									children: [/* @__PURE__ */ (void 0)(Mail, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 152,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", { children: "Jetzt für Produkt anfragen" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 153,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 147,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: onClose,
									className: "rounded-xl border border-border px-5 py-3.5 text-xs font-bold text-foreground transition-colors hover:bg-secondary cursor-pointer",
									children: "Schließen"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 155,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 146,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 120,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 94,
						columnNumber: 11
					}, this),
					showEnquiryForm && !submitted && /* @__PURE__ */ (void 0)("div", {
						className: "mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 animate-in slide-in-from-bottom-2 duration-300",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-sm font-extrabold text-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)(Package, { className: "h-4 w-4 text-primary" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 172,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("span", { children: [
										"Anfrage für \"",
										product.title,
										"\""
									] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 173,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 171,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => setShowEnquiryForm(false),
									className: "text-xs text-muted-foreground hover:underline",
									children: "Abbrechen"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 175,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 170,
								columnNumber: 15
							}, this),
							errorMsg && /* @__PURE__ */ (void 0)("div", {
								className: "mb-4 rounded-lg bg-red-500/10 p-3 text-xs font-semibold text-red-600 border border-red-500/20",
								children: errorMsg
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 185,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("form", {
								onSubmit: handleEnquirySubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
											className: "block text-xs font-bold text-foreground mb-1",
											children: "Ihr Name *"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 193,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "text",
											required: true,
											placeholder: "z.B. Maria Muster",
											value: formState.name,
											onChange: (e) => setFormState({
												...formState,
												name: e.target.value
											}),
											className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 194,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 192,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
											className: "block text-xs font-bold text-foreground mb-1",
											children: "Ihre E-Mail *"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 204,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "email",
											required: true,
											placeholder: "ihre@email.de",
											value: formState.email,
											onChange: (e) => setFormState({
												...formState,
												email: e.target.value
											}),
											className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 205,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 203,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 191,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
											className: "block text-xs font-bold text-foreground mb-1",
											children: "Gewünschte Menge (Stück)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 218,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "number",
											min: "1",
											value: formState.quantity,
											onChange: (e) => setFormState({
												...formState,
												quantity: e.target.value
											}),
											className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 219,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 217,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
											className: "block text-xs font-bold text-foreground mb-1",
											children: "Institution / Sprachschule (Optional)"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 228,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("input", {
											type: "text",
											placeholder: "z.B. VHS Frankfurt / Privat",
											value: formState.institution,
											onChange: (e) => setFormState({
												...formState,
												institution: e.target.value
											}),
											className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 229,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 227,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 216,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
										className: "block text-xs font-bold text-foreground mb-1",
										children: "Anmerkungen oder Fragen"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 240,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("textarea", {
										rows: 3,
										placeholder: "Spezielle Wünsche zum Versand oder Liefertermin...",
										value: formState.notes,
										onChange: (e) => setFormState({
											...formState,
											notes: e.target.value
										}),
										className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-hidden"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 241,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 239,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "submit",
										disabled: submitting,
										className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lift transition-all hover:bg-primary-deep disabled:opacity-50 cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(Send, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 255,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: submitting ? "Sende Anfrage..." : "Verbindliche Anfrage absenden" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 256,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 250,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 190,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 169,
						columnNumber: 13
					}, this),
					submitted && /* @__PURE__ */ (void 0)("div", {
						className: "mt-8 rounded-xl border border-teal/30 bg-teal/10 p-6 text-center animate-in zoom-in-95 duration-200",
						children: [
							/* @__PURE__ */ (void 0)(ShieldCheck, { className: "mx-auto h-12 w-12 text-teal" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 265,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("h3", {
								className: "mt-3 text-base font-extrabold text-foreground",
								children: "Vielen Dank für Ihre Anfrage!"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 266,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-xs text-muted-foreground max-w-md mx-auto",
								children: [
									"Ihre Anfrage für ",
									/* @__PURE__ */ (void 0)("strong", { children: product.title }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 268,
										columnNumber: 34
									}, this),
									" ist bei uns eingegangen. Unser Serviceteam und der Systemadministrator wurden per E-Mail benachrichtigt und melden sich in Kürze bei Ihnen."
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 267,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: onClose,
								className: "mt-5 inline-flex items-center gap-1 rounded-lg bg-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-teal-dark transition-colors cursor-pointer",
								children: /* @__PURE__ */ (void 0)("span", { children: "Zurück zum Katalog" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 275,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 270,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 264,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 93,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 70,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 69,
		columnNumber: 5
	}, this);
}
var levels = [
	"A1",
	"A2",
	"B1",
	"B2",
	"C1",
	"C2",
	"A1-B1",
	"B1-B2",
	"B2-C1",
	"Alle Stufen"
];
var categories = [
	"Lehrbuch",
	"Testheft",
	"Übungsbuch",
	"Download",
	"Didaktik"
];
var productsData = [
	{
		id: "telc-p-1",
		title: "Einfach zum Studium! Deutsch C1 Hochschule",
		subtitle: "Lehr- und Arbeitsbuch mit integrierten Audios",
		category: "Lehrbuch",
		level: "C1",
		price: "24,90 €",
		badge: "Bestseller",
		isbn: "978-3-946447-12-0",
		pages: 248,
		publisher: "telc gGmbH Edition",
		desc: "Kompressives Lehrwerk zur gezielten Vorbereitung auf telc Deutsch C1 Hochschule.",
		fullDescription: "Einfach zum Studium! Deutsch C1 Hochschule bereitet Studienbewerberinnen und -bewerber intensiv auf die sprachlichen Anforderungen an deutschen Hochschulen vor. Das Buch deckt alle prüfungsrelevanten Themen ab, vermittelt akademische Wortfelder und beinhaltet authentische Hör- und Lesetexte.",
		features: [
			"Integrierte MP3-Audios und Transkripte",
			"Gezieltes Training des wissenschaftlichen Schreibens",
			"Strategien für die mündliche C1 Prüfung",
			"Lösungsschlüssel für alle Übungen enthalten"
		],
		targetAudience: "Studienbewerber, Studierende, C1-Lernende und Lehrkräfte an Universitäten."
	},
	{
		id: "telc-p-2",
		title: "telc Deutsch B1/B2 Pflege - Original Übungstest 1",
		subtitle: "Modelltest mit Audios und Bewertungskriterien",
		category: "Testheft",
		level: "B1-B2",
		price: "12,50 €",
		badge: "Original Modelltest",
		isbn: "978-3-946447-45-8",
		pages: 96,
		publisher: "telc gGmbH Edition",
		desc: "Originaler telc Modelltest für Pflegekräfte mit Lösungsschlüssel und Hörtexten.",
		fullDescription: "Dieser originale telc Übungstest dient der optimalen Vorbereitung auf die Prüfung telc Deutsch B1-B2 Pflege. Er enthält ein komplettes Testset mit Hörverstehen, Leseverstehen, schriftlichem Ausdruck und mündlicher Prüfung unter realistischen Bedingungen.",
		features: [
			"Originalgetreues Testformat der telc gGmbH",
			"Authentische Pflege-Fallbeispiele & Anamnesebögen",
			"Bewertungskriterien für die mündliche Prüfung",
			"Inklusive Audiodownload für den Hörteil"
		],
		targetAudience: "Pflegekräfte, medizinische Fachkräfte, Fachsprachenzentren."
	},
	{
		id: "telc-p-3",
		title: "Mit Erfolg zu telc Deutsch B2",
		subtitle: "Gezieltes Prüfungstraining Wortschatz & Grammatik",
		category: "Übungsbuch",
		level: "B2",
		price: "19,80 €",
		badge: "Neuerscheinung",
		isbn: "978-3-946447-88-5",
		pages: 180,
		publisher: "telc gGmbH Edition",
		desc: "Intensives Training aller Prüfungsteile: Lesen, Hören, Schreiben und Sprechen.",
		fullDescription: "Mit Erfolg zu telc Deutsch B2 bietet ein strukturiertes Schritt-für-Schritt-Training für die telc B2 Prüfung. Es vermittelt prüfungsrelevante Grammatikstrukturen, typische Redemittel für die mündliche Prüfung sowie Tipps zur Vermeidung häufiger Fehler.",
		features: [
			"Umfassende Wortschatzlisten nach B2 Themen",
			"Schreibschablonen für Briefe und Beschwerden",
			"Prüfungstipps von erfahrenen telc Prüfern",
			"Online-Übungsmaterialien inklusive"
		],
		targetAudience: "B2-Kandidaten, Berufstätige, Kursteilnehmer."
	},
	{
		id: "telc-p-4",
		title: "Handreichung für Lehrkräfte: Deutsch Integration",
		subtitle: "Didaktischer Leitfaden für Integrationskurse",
		category: "Download",
		level: "A1-B1",
		price: "Kostenlos",
		badge: "Gratis PDF",
		isbn: "978-3-946447-00-7",
		pages: 64,
		publisher: "telc gGmbH Edition",
		desc: "Didaktische Hinweise und Methodentipps für den Unterricht in Integrationskursen.",
		fullDescription: "Dieser kostenlose didaktische Leitfaden richtet sich an Lehrkräfte in Integrationskursen. Er bietet praxisnahe Methoden zur Vorbereitung auf den Deutsch-Test für Zuwanderer (DTZ) A2-B1 sowie praktische Kopiervorlagen.",
		features: [
			"Sofort herunterladbare PDF-Datei",
			"Methodische Tipps zur Binnendifferenzierung",
			"Kopiervorlagen für Partner- und Gruppenarbeiten",
			"Leitfaden zur Bewertung des schriftlichen Ausdrucks"
		],
		targetAudience: "DaF/DaZ-Lehrkräfte, Sprachschulen, Träger von Integrationskursen."
	},
	...Array.from({ length: 122 }).map((_, idx) => {
		const pId = idx + 5;
		const level = levels[idx % levels.length];
		const category = categories[idx % categories.length];
		const priceVal = category === "Download" ? "Kostenlos" : `${(10 + idx % 18 * 1.5).toFixed(2).replace(".", ",")} €`;
		const isBestseller = idx % 5 === 0;
		const titles = [
			`telc Deutsch ${level} Praxisbuch Band ${pId}`,
			`Einfach Weiter! Deutsch ${level} Kompakt`,
			`telc ${level} Prüfungstraining & Modelltest ${idx % 3 + 1}`,
			`Fachsprache Deutsch ${level} für Medizin & Pflege`,
			`Grammatik & Wortschatz Intensiv ${level}`,
			`Deutscher Sprachtest ${level} Trainingsprogramm`,
			`telc Deutsch ${level} Beruf & Kommunikation`,
			`Handbuch Prüferqualifizierung ${level}`
		];
		const titleStr = titles[idx % titles.length] + ` (Ausgabe ${2024 + idx % 3})`;
		return {
			id: `telc-p-${pId}`,
			title: titleStr,
			subtitle: `Offizielle telc Studienausgabe für Sprachniveau ${level}`,
			category,
			level,
			price: priceVal,
			badge: category === "Download" ? "Gratis PDF" : isBestseller ? "Empfehlung" : `Niveau ${level}`,
			isbn: `978-3-946447-${(100 + idx).toString().padStart(3, "0")}`,
			pages: 80 + idx % 15 * 12,
			publisher: "telc gGmbH Edition",
			desc: `Offizielles telc Unterrichts- und Vorbereitungsmaterial für das Sprachniveau ${level}. Ideal für Prüflinge und Lehrkräfte.`,
			fullDescription: `Dieses Lehr- und Übungswerk (${titleStr}) wurde speziell entwickelt, um Lernende zielgerichtet auf das Sprachniveau ${level} vorzubereiten. Es kombiniert praxisnahe Übungen, authentische Sprachsituationen und originalgetreue Prüfungsaufgaben.`,
			features: [
				`Ausführliche Vorbereitung auf Niveau ${level}`,
				"Originale telc Aufgabenstruktur & Zeitangaben",
				"Audios und digitale Ergänzungsmaterialien",
				"Vollständiger Lösungs- und Bewertungsschlüssel"
			],
			targetAudience: `Lernende des Niveaus ${level}, Lehrkräfte, Prüfungszentren und Bildungseinrichtungen.`
		};
	})
];
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/lehrmaterialien.tsx?tsr-split=component";
var PRODUCTS_PER_PAGE = 16;
function MaterialsRoute() {
	const p = useT(materialsPage);
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const [activeLevel, setActiveLevel] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const categories = [
		{
			id: "all",
			label: "Alle Materialien"
		},
		{
			id: "Lehrbuch",
			label: "Lehr- & Kursbücher"
		},
		{
			id: "Testheft",
			label: "Modell- & Testhefte"
		},
		{
			id: "Übungsbuch",
			label: "Übungsbücher"
		},
		{
			id: "Download",
			label: "Gratis Downloads"
		},
		{
			id: "Didaktik",
			label: "Lehrkräfte & Didaktik"
		}
	];
	const levels = [
		"all",
		"A1",
		"A2",
		"B1",
		"B2",
		"C1",
		"C2",
		"A1-B1",
		"B1-B2",
		"B2-C1"
	];
	const filteredProducts = productsData.filter((b) => {
		const matchesCategory = activeCategory === "all" || b.category === activeCategory;
		const matchesLevel = activeLevel === "all" || b.level === activeLevel;
		const matchesSearch = searchQuery === "" || b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.desc.toLowerCase().includes(searchQuery.toLowerCase()) || b.isbn.includes(searchQuery);
		return matchesCategory && matchesLevel && matchesSearch;
	});
	const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;
	const paginatedProducts = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			title: p.title,
			text: p.intro
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col sm:flex-row items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative w-full sm:w-80",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								placeholder: "Titel, Niveau oder ISBN suchen...",
								value: searchQuery,
								onChange: (e) => {
									setSearchQuery(e.target.value);
									setCurrentPage(1);
								},
								className: "w-full rounded-xl border border-border bg-secondary/50 pl-9 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-bold text-muted-foreground",
								children: [filteredProducts.length, " von 126 Produkten"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-2",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setActiveCategory(c.id);
									setCurrentPage(1);
								},
								className: `rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${activeCategory === c.id ? "bg-primary text-white shadow-sm" : "bg-secondary/60 text-foreground hover:bg-secondary"}`,
								children: c.label
							}, c.id, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 36
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-bold text-muted-foreground",
								children: "Niveau:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								value: activeLevel,
								onChange: (e) => {
									setActiveLevel(e.target.value);
									setCurrentPage(1);
								},
								className: "rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-bold text-foreground focus:border-primary focus:outline-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "all",
									children: "Alle Niveaus (A1–C2)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 17
								}, this), levels.filter((l) => l !== "all").map((lvl) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: lvl,
									children: lvl
								}, lvl, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 61
								}, this))]
							}, void 0, true, {
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
						lineNumber: 70,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: paginatedProducts.map((book) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						onClick: () => setSelectedProduct(book),
						className: "group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-lift transition-all cursor-pointer hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary",
									children: book.badge
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded border border-border bg-secondary px-1.5 py-0.5 text-[0.625rem] font-bold text-foreground",
									children: book.level
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary p-3 group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: book_default,
									alt: "",
									className: "h-full w-full object-contain"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-sm font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors",
								children: book.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3",
								children: book.desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 border-t border-border pt-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-sm font-black text-foreground",
								children: book.price
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: (e) => {
									e.stopPropagation();
									setSelectedProduct(book);
								},
								className: "inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Details & Anfrage" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this)]
					}, book.id, true, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 42
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 9
				}, this),
				totalPages > 1 && /* @__PURE__ */ (void 0)("div", {
					className: "mt-10 flex items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							disabled: currentPage === 1,
							onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
							className: "inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-secondary disabled:opacity-40 cursor-pointer",
							children: [/* @__PURE__ */ (void 0)(ChevronLeft, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", { children: "Zurück" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("span", {
							className: "px-4 text-xs font-bold text-muted-foreground",
							children: [
								"Seite ",
								currentPage,
								" von ",
								totalPages
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							type: "button",
							disabled: currentPage === totalPages,
							onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
							className: "inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-secondary disabled:opacity-40 cursor-pointer",
							children: [/* @__PURE__ */ (void 0)("span", { children: "Weiter" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 28
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Prose, {
			title: p.proseTitle,
			paragraphs: p.prose
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 150,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductModal, {
			product: selectedProduct,
			onClose: () => setSelectedProduct(null)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
//#endregion
export { MaterialsRoute as component };
