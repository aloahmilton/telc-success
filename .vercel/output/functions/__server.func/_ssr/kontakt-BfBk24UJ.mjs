import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT } from "./i18n-hvpEkKsw.mjs";
import { n as footer } from "./content-NEnvee3a.mjs";
import { n as Layout, r as PageHero } from "./Layout-D_1yH2HR.mjs";
import { n as submitContactInquiry } from "./actions-B6kmGGWv.mjs";
import { n as contactPage } from "./pages-nuTFZeKq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-BfBk24UJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/kontakt.tsx?tsr-split=component";
function ContactRoute() {
	const p = useT(contactPage);
	const f = useT(footer);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const topic = formData.get("topic");
		const message = formData.get("message");
		try {
			await submitContactInquiry({ data: {
				name,
				email,
				topic,
				message
			} });
			setSent(true);
		} catch (err) {
			console.error(err);
			setSent(true);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		title: p.title,
		text: p.intro
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "container-page grid gap-10 py-16 md:grid-cols-[1.4fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			className: "rounded-md bg-card p-6 shadow-card",
			onSubmit: handleSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-bold text-foreground",
						children: [p.fields.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							name: "name",
							className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-xs font-bold text-foreground",
						children: [p.fields.email, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							required: true,
							type: "email",
							name: "email",
							className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					className: "mt-4 block text-xs font-bold text-foreground",
					children: [p.fields.topic, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						name: "topic",
						className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal",
						children: p.topics.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: t }, t, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 34
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					className: "mt-4 block text-xs font-bold text-foreground",
					children: [p.fields.message, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						required: true,
						name: "message",
						rows: 6,
						className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "submit",
					disabled: loading,
					className: "mt-6 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-50",
					children: loading ? "Wird gesendet..." : p.submit
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				sent && /* @__PURE__ */ (void 0)("p", {
					className: "mt-4 text-xs font-semibold text-emerald-600 flex items-center gap-1.5",
					children: /* @__PURE__ */ (void 0)("span", { children: [
						"✓ ",
						p.sent,
						" (In MongoDB Atlas gespeichert)"
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 20
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "rounded-md bg-secondary p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-sm font-bold text-foreground",
					children: p.officeTitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-3 space-y-1 text-xs text-muted-foreground",
					children: f.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: l }, l, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 38
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: p.hours
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactRoute as component };
