import { o as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as I18nProvider } from "./i18n-hvpEkKsw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-iU03H_MT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-5sMHdflX.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Get dynamic site URL based on environment configuration or window location.
* Safe for Node.js SSR, Vercel, and Client-side browser execution.
*/
var getSiteUrl = (path = "") => {
	let base = "https://telcsuccess.org";
	if (typeof process !== "undefined" && process?.env && process.env["SITE_URL"]) base = process.env["SITE_URL"];
	else if (typeof window !== "undefined" && window.location?.origin) base = window.location.origin;
	return `${base.replace(/\/$/, "")}${path ? path.startsWith("/") ? path : `/${path}` : ""}`;
};
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Telc-success" },
			{
				name: "description",
				content: "Telc-success: Sprachprüfungen von A1 bis C2, Lehrmaterialien und Fortbildungen."
			},
			{
				name: "author",
				content: "Telc-success"
			},
			{
				property: "og:site_name",
				content: "Telc-success"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Telc-success",
				url: getSiteUrl(),
				address: {
					"@type": "PostalAddress",
					streetAddress: "Bahnhofstraße 7",
					postalCode: "61352",
					addressLocality: "Bad Homburg",
					addressCountry: "DE"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "de",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 131,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 130,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 133,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 129,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 145,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$12 = () => import("./routes-UAbs-XlX.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "telc Sprachprüfungen und Zertifikate | Startseite" },
			{
				name: "description",
				content: "Anerkannte Sprachzertifikate von A1 bis C2, passende Lehrmaterialien und Fortbildungen für Lehrkräfte, Unternehmen und Lernende."
			},
			{
				property: "og:title",
				content: "telc Sprachprüfungen und Zertifikate"
			},
			{
				property: "og:description",
				content: "Zertifikate A1–C2, Lehrwerke und Trainings – in über 3.000 Prüfungszentren weltweit."
			},
			{
				property: "og:url",
				content: getSiteUrl("/")
			}
		],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./admin-B-MpTQx1.mjs");
var Route$11 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin Portal | telc Sprachprüfungen" },
		{
			name: "description",
			content: "Interne Verwaltungsplattform für telc Sprachprüfungen, Lehrmaterialien, Trainings und Prüfungszentren."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./aktuelles-CyzbJRYy.mjs");
var Route$10 = createFileRoute("/aktuelles")({
	head: () => ({
		meta: [{ title: "Aktuelles & Presse | telc News Center" }, {
			name: "description",
			content: "Neueste Nachrichten, Pressemitteilungen und Informationen zu Prüfungsordnung, Terminen und Bildungsveranstaltungen."
		}],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/aktuelles")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./campus-VYO62nmd.mjs");
var Route$9 = createFileRoute("/campus")({
	head: () => ({
		meta: [{ title: "telc Campus & Audio Hub | Übungstests & Hörverstehen" }, {
			name: "description",
			content: "Interaktive Übungstests, Audio-Downloads für Hörverstehen und digitale Lernmedien auf dem offiziellen telc Campus."
		}],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/campus")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./kontakt-BfBk24UJ.mjs");
var Route$8 = createFileRoute("/kontakt")({
	head: () => ({
		meta: [
			{ title: "Kontakt & Beratung | telc Service" },
			{
				name: "description",
				content: "Nehmen Sie Kontakt mit telc auf – Formular für Anfragen zu Sprachprüfungen, Lehrmaterialien und Fortbildungen."
			},
			{
				property: "og:title",
				content: "Kontakt & Beratung | telc Service"
			},
			{
				property: "og:description",
				content: "Schreiben Sie uns – Antwort in zwei Werktagen."
			},
			{
				property: "og:url",
				content: getSiteUrl("/kontakt")
			}
		],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/kontakt")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./lehrmaterialien-DrmO2mmZ.mjs");
var Route$7 = createFileRoute("/lehrmaterialien")({
	head: () => ({ meta: [{ title: "Lehrmaterialien & Übungstests | telc Katalog (126 Produkte)" }, {
		name: "description",
		content: "Offizielle Lehrwerke, Modelltests, Übungshefte und gratis Download-Materialien passend zu allen telc Sprachprüfungen."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./pruefungszentrum-finden-DOvE6Dcc.mjs");
var Route$6 = createFileRoute("/pruefungszentrum-finden")({
	head: () => ({ meta: [{ title: "telc Prüfungszentrum finden | Offizielle Suche" }, {
		name: "description",
		content: "Finden Sie ein lizenziertes telc Prüfungszentrum in Ihrer Nähe. Über 3.000 Standorte weltweit für Sprachprüfungen A1–C2."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./qualifizierung-DLJHVqBu.mjs");
var Route$5 = createFileRoute("/qualifizierung")({
	head: () => ({
		meta: [{ title: "Prüferqualifizierung & Lizenzen | telc Portal" }, {
			name: "description",
			content: "Werden Sie zertifizierte/r telc Prüfer/in oder Beworter/in. Alle Seminare, Qualifizierungsstufen und Lizenzkriterien."
		}],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/qualifizierung")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./sitemap-DIk-jRD3.mjs");
var Route$4 = createFileRoute("/sitemap")({
	head: () => ({
		meta: [
			{ title: "Sitemap | telc Übersicht aller Seiten" },
			{
				name: "description",
				content: "Vollständige Übersicht aller telc Prüfungen, Lehrmaterialien, Fortbildungen und Services auf telc-success."
			},
			{
				property: "og:title",
				content: "Sitemap | telc Übersicht aller Seiten"
			},
			{
				property: "og:description",
				content: "Übersicht über alle Inhalte und Seiten von telc."
			},
			{
				property: "og:url",
				content: getSiteUrl("/sitemap")
			}
		],
		links: [{
			rel: "canonical",
			href: getSiteUrl("/sitemap")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./sprachpruefungen-QaN_8ca1.mjs");
var Route$3 = createFileRoute("/sprachpruefungen")({
	head: () => ({ meta: [{ title: "Sprachprüfungen A1–C2 | telc Sprachzertifikate" }, {
		name: "description",
		content: "Anerkannte Sprachzertifikate von A1 bis C2 für Beruf, Studium und Aufenthalt – in über 3.000 Prüfungszentren weltweit."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./trainingsangebote-D-hvhbag.mjs");
var Route$2 = createFileRoute("/trainingsangebote")({
	head: () => ({ meta: [{ title: "Trainingsangebote & Fortbildungen | telc Training" }, {
		name: "description",
		content: "Fortbildungen für Lehrkräfte, Qualifizierung von Prüfenden und lizenzierte Inhouse-Trainings der telc Training."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./ueber-uns-cr748DiZ.mjs");
var Route$1 = createFileRoute("/ueber-uns")({
	head: () => ({ meta: [{ title: "Über telc gGmbH | Organisation, Qualität & Auftrag" }, {
		name: "description",
		content: "telc gGmbH ist ein gemeinnütziges Bildungsunternehmen. Erfahren Sie mehr über unsere Werte, Qualitätssicherung und Partner."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./zertifikat-pruefen-Du7h0sab.mjs");
var Route = createFileRoute("/zertifikat-pruefen")({
	head: () => ({ meta: [{ title: "telc Zertifikatsprüfung | Echtheitsüberprüfung" }, {
		name: "description",
		content: "Offizielle Online-Prüfung der Echtheit von telc Sprachzertifikaten für Arbeitgeber, Universitäten und Behörden."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$12.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	AdminRoute: Route$11.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$13
	}),
	AktuellesRoute: Route$10.update({
		id: "/aktuelles",
		path: "/aktuelles",
		getParentRoute: () => Route$13
	}),
	CampusRoute: Route$9.update({
		id: "/campus",
		path: "/campus",
		getParentRoute: () => Route$13
	}),
	KontaktRoute: Route$8.update({
		id: "/kontakt",
		path: "/kontakt",
		getParentRoute: () => Route$13
	}),
	LehrmaterialienRoute: Route$7.update({
		id: "/lehrmaterialien",
		path: "/lehrmaterialien",
		getParentRoute: () => Route$13
	}),
	PruefungszentrumFindenRoute: Route$6.update({
		id: "/pruefungszentrum-finden",
		path: "/pruefungszentrum-finden",
		getParentRoute: () => Route$13
	}),
	QualifizierungRoute: Route$5.update({
		id: "/qualifizierung",
		path: "/qualifizierung",
		getParentRoute: () => Route$13
	}),
	SitemapRoute: Route$4.update({
		id: "/sitemap",
		path: "/sitemap",
		getParentRoute: () => Route$13
	}),
	SprachpruefungenRoute: Route$3.update({
		id: "/sprachpruefungen",
		path: "/sprachpruefungen",
		getParentRoute: () => Route$13
	}),
	TrainingsangeboteRoute: Route$2.update({
		id: "/trainingsangebote",
		path: "/trainingsangebote",
		getParentRoute: () => Route$13
	}),
	UeberUnsRoute: Route$1.update({
		id: "/ueber-uns",
		path: "/ueber-uns",
		getParentRoute: () => Route$13
	}),
	ZertifikatPruefenRoute: Route.update({
		id: "/zertifikat-pruefen",
		path: "/zertifikat-pruefen",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
