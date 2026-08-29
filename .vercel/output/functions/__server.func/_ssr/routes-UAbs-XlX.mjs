import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT, r as useLang } from "./i18n-hvpEkKsw.mjs";
import { c as ui, o as news, r as home, s as routes, t as candidateSupport } from "./content-NEnvee3a.mjs";
import { B as CircleQuestionMark, G as ChevronDown, P as FileCheck, U as ChevronRight, V as CircleCheck, X as Award, Y as BookOpen, j as GraduationCap, n as X, u as Send, w as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as Layout } from "./Layout-D_1yH2HR.mjs";
import { t as submitCandidateSupportAction } from "./actions-B6kmGGWv.mjs";
import { t as book_default } from "./book-ikmIEVmk.mjs";
import { t as chalkboard_teacher_default } from "./chalkboard-teacher-CWdBV-Zm.mjs";
import { n as zusammenarbeit_default, t as juergen_keicher_default } from "./zusammenarbeit-BlJ1AR1S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-UAbs-XlX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var certificate_default = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='62.02'%20height='62.029'%20viewBox='0%200%2062.02%2062.029'%3e%3cg%20id='Icon'%20transform='translate(-312.48%20-1002.5)'%3e%3cpath%20id='Pfad_136'%20data-name='Pfad%20136'%20d='M264.51,192.385l-9.83-9.83a5.623,5.623,0,0,0-3.972-1.653H226.786a5.643,5.643,0,0,0-5.624,5.636v13.783a11.34,11.34,0,0,1-2.828-.589,2.192,2.192,0,0,0-.581-.077,2.269,2.269,0,0,0-1.6.678c-2.1,2.14-2,2.083-4.886,2.871a2.312,2.312,0,0,0-1.615,1.649c-.759,2.892-.714,2.832-2.816,4.96a2.4,2.4,0,0,0-.6,2.277c.769,2.857.764,2.859,0,5.713a2.4,2.4,0,0,0,.6,2.28c2.11,2.128,2.061,2.085,2.816,4.956a2.313,2.313,0,0,0,1.615,1.653c.21.056.342.094.522.142v12.2a1.876,1.876,0,0,0,2.713,1.677l6.662-3.331,6.661,3.331a1.884,1.884,0,0,0,.838.2h31.876a5.627,5.627,0,0,0,5.624-5.625V196.368A5.651,5.651,0,0,0,264.51,192.385ZM213,217.28a7.1,7.1,0,0,0,0-4.513,7.054,7.054,0,0,0,2.208-3.882,6.8,6.8,0,0,0,3.781-2.214,6.753,6.753,0,0,0,4.342,0,6.883,6.883,0,0,0,3.778,2.211,6.967,6.967,0,0,0,2.21,3.883,7.02,7.02,0,0,0,0,4.514,7.045,7.045,0,0,0-2.206,3.873,6.606,6.606,0,0,0-3.209,1.668,6.634,6.634,0,0,0-5.488,0,6.674,6.674,0,0,0-3.207-1.664A6.968,6.968,0,0,0,213,217.28Zm12.431,10.9v5.357l-3.632-1.816h0a1.424,1.424,0,0,0-1.273,0l-3.634,1.816v-5.356m13.644,12.161V230.013c.18-3.231.311-3.268.521-3.323a2.312,2.312,0,0,0,1.614-1.65c.759-2.893.713-2.831,2.815-4.96a2.389,2.389,0,0,0,.594-2.277c-.765-2.852-.768-2.853,0-5.715a2.4,2.4,0,0,0-.594-2.28c-2.109-2.126-2.059-2.085-2.815-4.956a2.311,2.311,0,0,0-1.611-1.65c-2.84-.77-2.8-.731-4.89-2.874a2.032,2.032,0,0,0-1.232-.585c-1.787-.09-2.568.569-3.641.6m26.12-18.983v14.874a3.413,3.413,0,0,0,3.43,3.421h14.862'%20transform='translate(107.338%20822.598)'%20fill='none'%20stroke='%23027b91'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
var hero_people_default = "/assets/hero-people-Cnl7d7Pl.png";
var meeting_default = "/assets/meeting-Cm2OSBnf.jpg";
var _jsxFileName$2 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/B2RegistrationModal.tsx";
function B2RegistrationModal({ isOpen, onClose }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [selectedServices, setSelectedServices] = (0, import_react.useState)(["Exam Preparation", "Registration Assistance"]);
	if (!isOpen) return null;
	const toggleService = (service) => {
		if (selectedServices.includes(service)) setSelectedServices(selectedServices.filter((s) => s !== service));
		else setSelectedServices([...selectedServices, service]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.currentTarget);
		const candidateName = formData.get("candidateName");
		const email = formData.get("email");
		const phone = formData.get("phone");
		const notes = formData.get("notes");
		try {
			await submitCandidateSupportAction({ data: {
				candidateName,
				email,
				phone,
				targetExam: "telc Deutsch B2",
				notes
			} });
			setSubmitted(true);
		} catch (err) {
			console.error(err);
			setSubmitted(true);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-lift md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 66,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 61,
				columnNumber: 9
			}, this), !submitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary",
						children: "telc Deutsch B2 Candidate Support"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 72,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 text-xl font-black text-foreground md:text-2xl",
						children: "B2 Unterstützung & Beratung anfragen"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 75,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Gezielte Prüfungsvorbereitung, Anmeldeunterstützung und Strategieberatung für Ihr B2 Zertifikat."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 78,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 71,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-xs font-bold text-foreground mb-1",
							children: "Vollständiger Name *"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 86,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							name: "candidateName",
							type: "text",
							placeholder: "z. B. Anna Mustermann",
							className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 89,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 85,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-xs font-bold text-foreground mb-1",
							children: "E-Mail Adresse *"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 98,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							name: "email",
							type: "email",
							placeholder: "ihre.email@beispiel.de",
							className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 101,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 97,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 84,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-xs font-bold text-foreground mb-1",
						children: "Telefonnummer (Optional)"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 112,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						name: "phone",
						type: "tel",
						placeholder: "+49 170 1234567",
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 115,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 111,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-xs font-bold text-foreground mb-1",
						children: "Gewünschte Unterstützung:"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 124,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							"Exam Preparation",
							"Registration Assistance",
							"Exam Guidance",
							"Results Support"
						].map((service) => {
							const isChecked = selectedServices.includes(service);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => toggleService(service),
								className: `flex items-center gap-1.5 rounded-lg border p-2 text-left text-[0.6875rem] font-semibold transition-all ${isChecked ? "border-primary bg-primary/5 text-primary" : "border-border bg-secondary/50 text-muted-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: `h-3.5 w-3.5 shrink-0 ${isChecked ? "text-primary" : "text-muted-foreground/40"}` }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 146,
									columnNumber: 25
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: service }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 151,
									columnNumber: 25
								}, this)]
							}, service, true, {
								fileName: _jsxFileName$2,
								lineNumber: 136,
								columnNumber: 23
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 127,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 123,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-xs font-bold text-foreground mb-1",
						children: "Anmerkungen oder Fragen"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 159,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						name: "notes",
						rows: 3,
						placeholder: "Hinterlassen Sie uns hier Ihre Nachricht...",
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 162,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 158,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-2 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "rounded-lg border border-border px-4 py-2 text-xs font-bold text-foreground hover:bg-secondary transition-colors",
							children: "Abbrechen"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 171,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: loading,
							className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-primary-deep disabled:opacity-50 transition-colors",
							children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 185,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Wird gespeichert..." }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 186,
								columnNumber: 23
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 184,
								columnNumber: 21
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-3.5 w-3.5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 190,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Anfrage absenden" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 191,
								columnNumber: 23
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 189,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 178,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 170,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 83,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "py-8 text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "h-10 w-10" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 201,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 200,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-xl font-black text-foreground",
						children: "Anfrage erfolgreich übermittelt!"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 203,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground max-w-sm mx-auto",
						children: "Vielen Dank! Ihre B2 Candidate Support Anfrage wurde direkt in unserer Datenbank (MongoDB Atlas) gespeichert. Unser Team wird sich in Kürze bei Ihnen melden."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 204,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onClose,
						className: "mt-4 rounded-lg bg-primary px-6 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep",
						children: "Schließen"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 207,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 199,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 60,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/DELL/Desktop/telc-success-main/src/components/site/FaqSection.tsx";
var faqs = [
	{
		q: "Wie kann ich mich für eine telc Deutsch B2 Prüfung anmelden?",
		a: "Sie können sich direkt in über 3.000 lizenzierten telc Prüfungszentren in Ihrer Nähe anmelden. Nutzen Sie unseren Prüfungszentrum-Finder oder fordern Sie über unseren Candidate Support direkte Unterstützung an."
	},
	{
		q: "Welche Teile umfasst die telc Deutsch B2 Prüfung?",
		a: "Die Prüfung besteht aus einem schriftlichen Teil (Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher Ausdruck - ca. 2 Std. 20 Min.) und einem mündlichen Teil (Mündliche Prüfung mit Partner - ca. 15 Min.)."
	},
	{
		q: "Wie lange dauert es, bis die telc B2 Prüfungsergebnisse vorliegen?",
		a: "In der Regel liegen die Ergebnisse ca. 4 bis 6 Wochen nach dem Prüfungstermin vor. Das offizielle telc Zertifikat wird anschließend direkt an Ihr Prüfungszentrum gesendet."
	},
	{
		q: "Wie kann ein Arbeitgeber oder eine Behörde mein Zertifikat auf Echtheit prüfen?",
		a: "Über unser Zertifikats-Verifizierungsportal (/zertifikat-pruefen) können Arbeitgeber und Behörden den eindeutigen telc Zertifikatscode eingeben und die Gültigkeit sofort online überprüfen."
	},
	{
		q: "Bietet telc auch Vorbereitungsmaterialien und Modelltests an?",
		a: "Ja, telc veröffentlicht offizielle Übungstests, Modellhefte und Lehrwerke für alle Niveaustufen von A1 bis C2. Diese finden Sie auf unserer Seite 'Lehrmaterialien' sowie zum Download."
	}
];
function FaqSection() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	const toggleFaq = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "container-page py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleQuestionMark, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 39,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-black text-foreground md:text-3xl",
						children: "Häufig gestellte Fragen (FAQ)"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs text-muted-foreground md:text-sm",
						children: "Wichtige Antworten rund um Sprachprüfungen, Anmeldeabläufe und Zertifikatsnachweis."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 44,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: faqs.map((faq, idx) => {
					const isOpen = openIndex === idx;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card shadow-card overflow-hidden transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => toggleFaq(idx),
							className: "flex w-full items-center justify-between p-5 text-left text-sm font-extrabold text-foreground hover:text-primary transition-colors cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: faq.q }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 62,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: `h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}` }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 63,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 17
						}, this), isOpen && /* @__PURE__ */ (void 0)("div", {
							className: "px-5 pb-5 pt-0 text-xs leading-relaxed text-muted-foreground border-t border-border/40 mt-1 pt-3",
							children: faq.a
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 70,
							columnNumber: 19
						}, this)]
					}, faq.q, true, {
						fileName: _jsxFileName$1,
						lineNumber: 53,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 49,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/index.tsx?tsr-split=component";
function Index() {
	const h = useT(home);
	const cs = useT(candidateSupport);
	const t = useT(ui);
	const { lang } = useLang();
	const [isB2ModalOpen, setIsB2ModalOpen] = (0, import_react.useState)(false);
	const pillarIcons = [
		certificate_default,
		book_default,
		chalkboard_teacher_default
	];
	const serviceIcons = [
		BookOpen,
		FileCheck,
		GraduationCap,
		Award
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "EducationalOrganization",
				name: "telc gGmbH",
				url: "https://www.telc.net",
				logo: "https://www.telc.net/fileadmin/user_upload/icons/certificate.svg",
				description: "Anerkannte Sprachzertifikate von A1 bis C2, passende Lehrmaterialien und Fortbildungen.",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Basler Straße 7",
					addressLocality: "Bad Homburg",
					postalCode: "61352",
					addressCountry: "DE"
				},
				sameAs: [
					"https://www.facebook.com/telcLanguageTests/",
					"https://www.instagram.com/telc.official/",
					"https://www.linkedin.com/in/telc-ggmbh-023393250/",
					"https://www.youtube.com/user/telctube"
				]
			}) }
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative overflow-hidden bg-hero-gradient text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page relative grid min-h-[460px] items-end gap-8 pt-10 pb-0 md:grid-cols-12 md:pt-14",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "z-10 pb-12 md:col-span-6 lg:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",
						children: h.heroTitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed opacity-95 sm:text-lg",
						children: h.heroText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex items-end justify-end self-end md:col-span-6 lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: hero_people_default,
						alt: "Die Zukunft spricht telc - Team",
						className: "h-auto max-h-[400px] w-full max-w-xl object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] md:max-h-[460px]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page relative z-20 pb-12 md:-mb-16",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: h.pillars.map((p, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-secondary p-2.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: pillarIcons[idx],
									alt: "",
									className: "h-full w-full object-contain"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: p.text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 border-t border-border/50 pt-4",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: p.to,
								className: "link-arrow",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.learnMore }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 17
						}, this)]
					}, p.title, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 40
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 md:h-20" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid items-center gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-6 lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: zusammenarbeit_default,
						alt: "Verantwortung, Qualität und Zusammenarbeit",
						loading: "lazy",
						className: "h-80 w-full rounded-xl object-cover shadow-card md:h-[440px]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-6 lg:-ml-16 lg:col-span-5 z-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl border border-border bg-card p-8 shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-black text-primary md:text-3xl leading-snug",
							children: h.valuesTitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: h.valuesText
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 88,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-y border-border bg-card py-14",
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
								lineNumber: 111,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-5xl font-black tracking-tight text-foreground",
								children: s.value
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs font-semibold text-muted-foreground",
								children: s.label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 17
							}, this)
						]
					}, s.label, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-secondary/40 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "rounded bg-primary/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary",
								children: "telc Deutsch B2 Spezialisierung & Service"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-3 text-3xl font-black text-foreground md:text-4xl",
								children: cs.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: cs.intro
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: cs.services.map((item, idx) => {
							const Icon = serviceIcons[idx];
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
								className: "flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-lift transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
										children: Icon && /* @__PURE__ */ (void 0)(Icon, { className: "h-6 w-6" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 144,
											columnNumber: 32
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[0.6875rem] font-bold uppercase tracking-wider text-primary",
										children: item.subtitle
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "mt-1 text-lg font-extrabold text-foreground",
										children: item.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground",
										children: item.desc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 border-t border-border pt-4",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: () => setIsB2ModalOpen(true),
										className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Mehr erfahren" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 154,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 155,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 19
								}, this)]
							}, item.title, true, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 20
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setIsB2ModalOpen(true),
							className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-deep transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: cs.contactCta }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(B2RegistrationModal, {
			isOpen: isB2ModalOpen,
			onClose: () => setIsB2ModalOpen(false)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 171,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid items-center gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "z-10 md:col-span-6 lg:mr-[-4rem] lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-xl bg-[#5c636a] p-8 text-white shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-2xl font-black md:text-3xl",
								children: h.networkTitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 178,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm leading-relaxed opacity-95 md:text-base",
								children: h.networkText
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex justify-end border-t border-white/20 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: routes.exams,
									className: "inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.learnMore }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 185,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 183,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-6 lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: meeting_default,
						alt: "Global vernetzt",
						loading: "lazy",
						className: "h-80 w-full rounded-xl object-cover shadow-card md:h-[440px]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 190,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 174,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-teal py-16 text-teal-foreground",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto grid max-w-5xl gap-6 md:grid-cols-2",
					children: h.serviceCards.map((c, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: `flex flex-col justify-between rounded-xl bg-card p-6 text-card-foreground shadow-card ${idx === 2 ? "md:col-span-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-xl font-bold text-foreground",
							children: c.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: c.text
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 203,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex justify-end border-t border-border pt-4",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: c.to,
								className: "link-arrow text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.learnMore }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 206,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 17
						}, this)]
					}, c.title, true, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 45
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 199,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 198,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 197,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "container-page py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-4xl rounded-xl border border-border bg-card p-8 shadow-card md:flex md:items-center md:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "shrink-0 md:w-60",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: juergen_keicher_default,
						alt: "Jürgen Keicher, Geschäftsführer von telc",
						className: "h-64 w-full object-cover rounded-lg shadow-md"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 219,
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
						lineNumber: 223,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-xs font-bold text-muted-foreground",
						children: h.quoteBy
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 222,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 218,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 217,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaqSection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 232,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-black text-foreground md:text-3xl",
						children: t.latest
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: routes.about,
						className: "link-arrow",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.learnMore }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 237,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: news.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: "flex flex-col justify-between rounded-xl bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-bold text-primary",
								children: [
									n.date,
									" | ",
									n.category[lang]
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 247,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-3 text-lg font-bold text-foreground leading-snug",
								children: n.title[lang]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: n.teaser[lang]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 251,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 246,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-5 flex justify-end border-t border-border/50 pt-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "link-arrow text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t.readArticle }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 255,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 254,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 253,
							columnNumber: 17
						}, this)]
					}, n.id, true, {
						fileName: _jsxFileName,
						lineNumber: 245,
						columnNumber: 28
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 235,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
