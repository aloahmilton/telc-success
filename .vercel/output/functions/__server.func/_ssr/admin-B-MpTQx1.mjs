import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as useT, n as LANGS, r as useLang } from "./i18n-hvpEkKsw.mjs";
import { o as news, r as home } from "./content-NEnvee3a.mjs";
import { D as Layers, E as LayoutDashboard, I as Eye, J as Building2, K as ChartColumn, M as Globe, N as FileText, R as Clock, S as LogOut, U as ChevronRight, V as CircleCheck, W as ChevronLeft, X as Award, Y as BookOpen, d as Search, f as Plus, j as GraduationCap, l as Settings, o as SquarePen, r as Users, y as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B-MpTQx1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/DELL/Desktop/telc-success-main/src/routes/admin.tsx?tsr-split=component";
function AdminDashboard() {
	const h = useT(home);
	const { lang, setLang } = useLang();
	const [sidebarCollapsed, setSidebarCollapsed] = (0, import_react.useState)(false);
	const [mobileSidebarOpen, setMobileSidebarOpen] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const navGroups = [
		{
			title: "ÜBERSICHT",
			items: [{
				id: "overview",
				label: "Dashboard",
				icon: LayoutDashboard
			}]
		},
		{
			title: "INHALTSVERWALTUNG",
			items: [
				{
					id: "exams",
					label: "Sprachprüfungen",
					icon: FileText,
					badge: "128"
				},
				{
					id: "materials",
					label: "Lehrmaterialien",
					icon: BookOpen,
					badge: "45"
				},
				{
					id: "training",
					label: "Trainingsangebote",
					icon: GraduationCap,
					badge: "18"
				},
				{
					id: "news",
					label: "Aktuelles & News",
					icon: Layers,
					badge: "4"
				}
			]
		},
		{
			title: "NETZWERK & PARTNER",
			items: [{
				id: "centers",
				label: "Prüfungszentren",
				icon: Building2,
				badge: "3.000+"
			}, {
				id: "partners",
				label: "Partner & Siegel",
				icon: Award
			}]
		},
		{
			title: "SYSTEM",
			items: [{
				id: "settings",
				label: "Einstellungen",
				icon: Settings
			}]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex h-screen w-full overflow-hidden bg-[#f4f6f8] text-foreground font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: `fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-[#1e293b] text-white transition-all duration-300 md:static ${sidebarCollapsed ? "w-20" : "w-64"} ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex h-16 items-center justify-between border-b border-white/10 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex items-center gap-2 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-black text-white text-lg",
							children: "t"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 13
						}, this), !sidebarCollapsed && /* @__PURE__ */ (void 0)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-lg font-black tracking-tight text-white leading-none",
								children: [
									"telc",
									/* @__PURE__ */ (void 0)("span", {
										className: "text-primary",
										children: "."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 23
									}, this),
									"admin"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-[0.625rem] text-slate-400 font-semibold tracking-wider uppercase",
								children: "Management Portal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 35
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setSidebarCollapsed(!sidebarCollapsed),
						className: "hidden rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white md:block",
						title: sidebarCollapsed ? "Sidebar ausklappen" : "Sidebar einklappen",
						children: sidebarCollapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 33
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 72
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex-1 overflow-y-auto px-3 py-4 space-y-6",
					children: navGroups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [!sidebarCollapsed && /* @__PURE__ */ (void 0)("p", {
						className: "px-3 pb-2 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400",
						children: group.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 37
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: group.items.map((item) => {
							const Icon = item.icon;
							const isActive = activeTab === item.id;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => {
									setActiveTab(item.id);
									setMobileSidebarOpen(false);
								},
								className: `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold transition-all ${isActive ? "bg-primary text-white shadow-md" : "text-slate-300 hover:bg-white/10 hover:text-white"}`,
								title: sidebarCollapsed ? item.label : void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 23
									}, this),
									!sidebarCollapsed && /* @__PURE__ */ (void 0)("span", {
										className: "flex-1 text-left truncate",
										children: item.label
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 45
									}, this),
									!sidebarCollapsed && item.badge && /* @__PURE__ */ (void 0)("span", {
										className: `rounded px-1.5 py-0.5 text-[0.625rem] font-extrabold ${isActive ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"}`,
										children: item.badge
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 59
									}, this)
								]
							}, item.id, true, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 22
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 15
					}, this)] }, group.title, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 35
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-t border-white/10 p-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-4 w-4 shrink-0 text-red-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this), !sidebarCollapsed && /* @__PURE__ */ (void 0)("span", { children: "Zur Website" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 35
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 113,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setMobileSidebarOpen(!mobileSidebarOpen),
						className: "rounded p-2 text-foreground hover:bg-secondary md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative hidden w-72 sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "text",
							placeholder: "Suchen in telc Portal...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-lg border border-border bg-secondary/50 py-1.5 pl-9 pr-4 text-xs font-medium text-foreground focus:border-primary focus:bg-card focus:outline-none"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 173,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1 rounded-lg border border-border bg-secondary/50 p-1",
						children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setLang(l.code),
							className: `rounded px-2 py-0.5 text-[0.6875rem] font-bold transition-all ${l.code === lang ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: l.short
						}, l.code, false, {
							fileName: _jsxFileName,
							lineNumber: 188,
							columnNumber: 31
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 border-l border-border pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs",
							children: "JK"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "hidden flex-col text-left md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-extrabold text-foreground",
								children: "Jürgen Keicher"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[0.625rem] text-muted-foreground",
								children: "Administrator"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 194,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 172,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1 overflow-y-auto p-4 md:p-8",
				children: [
					activeTab === "overview" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h1", {
									className: "text-2xl font-black text-foreground",
									children: "Willkommen im telc Portal"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: "Verwaltung von Prüfungen, Lehrmaterialien und weltweiten Prüfungszentren."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 212,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex gap-2",
									children: /* @__PURE__ */ (void 0)("button", {
										type: "button",
										className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 220,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Neue Prüfung erstellen" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 221,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 218,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 211,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: h.stats.map((s, idx) => /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-border bg-card p-5 shadow-sm",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground",
												children: s.prefix
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 230,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary",
												children: [
													idx === 0 && /* @__PURE__ */ (void 0)(Building2, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 234,
														columnNumber: 39
													}, this),
													idx === 1 && /* @__PURE__ */ (void 0)(Users, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 235,
														columnNumber: 39
													}, this),
													idx === 2 && /* @__PURE__ */ (void 0)(FileText, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 236,
														columnNumber: 39
													}, this),
													idx === 3 && /* @__PURE__ */ (void 0)(ChartColumn, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 237,
														columnNumber: 39
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 233,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 229,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "mt-2 text-3xl font-black text-foreground",
											children: s.value
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 240,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-xs font-semibold text-muted-foreground",
											children: s.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 21
										}, this)
									]
								}, s.label, true, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 42
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 227,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid gap-8 lg:grid-cols-12",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-8",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "mb-4 flex items-center justify-between border-b border-border pb-3",
										children: [/* @__PURE__ */ (void 0)("h2", {
											className: "text-base font-extrabold text-foreground",
											children: "Aktuelle News & Meldungen"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setActiveTab("news"),
											className: "text-xs font-bold text-primary hover:underline",
											children: "Alle anzeigen"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 251,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 249,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "divide-y divide-border",
										children: news.map((n) => /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between py-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary",
														children: n.category[lang]
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 259,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[0.625rem] text-muted-foreground",
														children: n.date
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 262,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 258,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("p", {
													className: "text-xs font-bold text-foreground",
													children: n.title[lang]
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 264,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 257,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex gap-2",
												children: /* @__PURE__ */ (void 0)("button", {
													type: "button",
													className: "p-1 text-muted-foreground hover:text-foreground",
													children: /* @__PURE__ */ (void 0)(SquarePen, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 268,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 267,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 266,
												columnNumber: 25
											}, this)]
										}, n.id, true, {
											fileName: _jsxFileName,
											lineNumber: 256,
											columnNumber: 36
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 255,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 248,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-4",
									children: [/* @__PURE__ */ (void 0)("h2", {
										className: "mb-4 border-b border-border pb-3 text-base font-extrabold text-foreground",
										children: "Systemstatus & Prüfungszentren"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 277,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-4 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-lg bg-emerald-500/10 p-3 text-emerald-700 font-semibold",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 283,
														columnNumber: 25
													}, this), " Globales Netzwerk"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 282,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-extrabold",
													children: "3.000+ Online"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 285,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 281,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-lg bg-blue-500/10 p-3 text-blue-700 font-semibold",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Globe, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 289,
														columnNumber: 25
													}, this), " Zertifikatsvalidierung"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 288,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-extrabold",
													children: "100% OK"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 291,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 287,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between rounded-lg bg-amber-500/10 p-3 text-amber-700 font-semibold",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)(Clock, { className: "h-4 w-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 295,
														columnNumber: 25
													}, this), " Auswertungssystem"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 294,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "font-extrabold",
													children: "1.500 Tag"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 297,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 293,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 280,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 276,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 209,
						columnNumber: 40
					}, this),
					activeTab === "exams" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h1", {
								className: "text-xl font-extrabold text-foreground",
								children: "Sprachprüfungen (A1 – C2)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 308,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground",
								children: "Verwaltung von Prüfungsformaten, Beschreibungen und Anmeldungen."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 307,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep",
								children: [/* @__PURE__ */ (void 0)(Plus, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 314,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", { children: "Neues Prüfungsformat" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 315,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 313,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 306,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm",
							children: /* @__PURE__ */ (void 0)("table", {
								className: "w-full text-left text-xs",
								children: [/* @__PURE__ */ (void 0)("thead", {
									className: "border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground",
									children: /* @__PURE__ */ (void 0)("tr", { children: [
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "ID / Code"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 324,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "Prüfungsbezeichnung"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 325,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "Niveau"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 326,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "Zielgruppe"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 327,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "Kandidaten / Jahr"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 328,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3",
											children: "Status"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 329,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)("th", {
											className: "px-4 py-3 text-right",
											children: "Aktionen"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 330,
											columnNumber: 23
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 323,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 322,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("tbody", {
									className: "divide-y divide-border",
									children: [
										{
											id: "TELC-A1",
											title: "telc Deutsch A1 (Start Deutsch 1)",
											level: "A1",
											target: "Allgemein",
											status: "Aktiv",
											candidates: "12.450"
										},
										{
											id: "TELC-B1",
											title: "telc Deutsch B1 (Zertifikat Deutsch)",
											level: "B1",
											target: "Allgemein / BAMF",
											status: "Aktiv",
											candidates: "48.200"
										},
										{
											id: "TELC-B2",
											title: "telc Deutsch B2",
											level: "B2",
											target: "Beruf & Studium",
											status: "Aktiv",
											candidates: "32.100"
										},
										{
											id: "TELC-C1-MED",
											title: "telc Deutsch C1 Medizin",
											level: "C1",
											target: "Ärztinnen & Ärzte",
											status: "Aktiv",
											candidates: "8.900"
										},
										{
											id: "TELC-C2",
											title: "telc Deutsch C2",
											level: "C2",
											target: "Hochschule",
											status: "In Überarbeitung",
											candidates: "3.400"
										}
									].map((exam) => /* @__PURE__ */ (void 0)("tr", {
										className: "hover:bg-secondary/30 transition-colors",
										children: [
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5 font-extrabold text-primary",
												children: exam.id
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 335,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5 font-bold text-foreground",
												children: exam.title
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 336,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5",
												children: /* @__PURE__ */ (void 0)("span", {
													className: "rounded bg-primary/10 px-2 py-0.5 font-extrabold text-primary",
													children: exam.level
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 338,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 337,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5 text-muted-foreground",
												children: exam.target
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 342,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5 font-semibold text-foreground",
												children: exam.candidates
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 343,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5",
												children: /* @__PURE__ */ (void 0)("span", {
													className: "rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.6875rem] font-extrabold text-emerald-600",
													children: exam.status
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 345,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 344,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ (void 0)("td", {
												className: "px-4 py-3.5 text-right",
												children: /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-end gap-2",
													children: [/* @__PURE__ */ (void 0)("button", {
														type: "button",
														className: "p-1 text-muted-foreground hover:text-foreground",
														children: /* @__PURE__ */ (void 0)(Eye, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 352,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 351,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														className: "p-1 text-muted-foreground hover:text-primary",
														children: /* @__PURE__ */ (void 0)(SquarePen, { className: "h-4 w-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 355,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 354,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 350,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 349,
												columnNumber: 25
											}, this)
										]
									}, exam.id, true, {
										fileName: _jsxFileName,
										lineNumber: 334,
										columnNumber: 46
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 333,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 321,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 320,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 305,
						columnNumber: 37
					}, this),
					activeTab !== "overview" && activeTab !== "exams" && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-xl border border-border bg-card p-12 text-center shadow-sm space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary",
								children: /* @__PURE__ */ (void 0)(Layers, { className: "h-8 w-8" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 368,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 367,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("h2", {
								className: "text-xl font-extrabold text-foreground capitalize",
								children: ["Verwaltung: ", activeTab]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 370,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mx-auto max-w-md text-xs leading-relaxed text-muted-foreground",
								children: "Inhalte und Datensätze für diesen Bereich sind synchronisiert. Wählen Sie Aktionen zum Bearbeiten oder Konfigurieren."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 373,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setActiveTab("overview"),
								className: "inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-xs font-bold text-foreground hover:bg-muted",
								children: /* @__PURE__ */ (void 0)("span", { children: "Zurück zum Dashboard" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 377,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 376,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 366,
						columnNumber: 65
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 207,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 170,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 111,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminDashboard as component };
