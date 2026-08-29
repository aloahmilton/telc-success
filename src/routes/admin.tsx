import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Edit,
  Eye,
  FileText,
  Filter,
  GraduationCap,
  Globe,
  Home,
  Layers,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreVertical,
  Plus,
  Search,
  Settings,
  ShieldAlert,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";

import { home, news } from "@/lib/content";
import { LANGS, useLang, useT } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal | telc Sprachprüfungen" },
      {
        name: "description",
        content: "Interne Verwaltungsplattform für telc Sprachprüfungen, Lehrmaterialien, Trainings und Prüfungszentren.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

type TabGroup = "overview" | "exams" | "materials" | "training" | "news" | "centers" | "partners" | "settings";

function AdminDashboard() {
  const h = useT(home);
  const { lang, setLang } = useLang();

  // Sidebar toggle state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Active tab state
  const [activeTab, setActiveTab] = useState<TabGroup>("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Sidebar Navigation Groups
  const navGroups = [
    {
      title: "ÜBERSICHT",
      items: [
        { id: "overview" as TabGroup, label: "Dashboard", icon: LayoutDashboard },
      ],
    },
    {
      title: "INHALTSVERWALTUNG",
      items: [
        { id: "exams" as TabGroup, label: "Sprachprüfungen", icon: FileText, badge: "128" },
        { id: "materials" as TabGroup, label: "Lehrmaterialien", icon: BookOpen, badge: "45" },
        { id: "training" as TabGroup, label: "Trainingsangebote", icon: GraduationCap, badge: "18" },
        { id: "news" as TabGroup, label: "Aktuelles & News", icon: Layers, badge: "4" },
      ],
    },
    {
      title: "NETZWERK & PARTNER",
      items: [
        { id: "centers" as TabGroup, label: "Prüfungszentren", icon: Building2, badge: "3.000+" },
        { id: "partners" as TabGroup, label: "Partner & Siegel", icon: Award },
      ],
    },
    {
      title: "SYSTEM",
      items: [
        { id: "settings" as TabGroup, label: "Einstellungen", icon: Settings },
      ],
    },
  ];

  // Dummy data for exams tab
  const sampleExams = [
    { id: "TELC-A1", title: "telc Deutsch A1 (Start Deutsch 1)", level: "A1", target: "Allgemein", status: "Aktiv", candidates: "12.450" },
    { id: "TELC-B1", title: "telc Deutsch B1 (Zertifikat Deutsch)", level: "B1", target: "Allgemein / BAMF", status: "Aktiv", candidates: "48.200" },
    { id: "TELC-B2", title: "telc Deutsch B2", level: "B2", target: "Beruf & Studium", status: "Aktiv", candidates: "32.100" },
    { id: "TELC-C1-MED", title: "telc Deutsch C1 Medizin", level: "C1", target: "Ärztinnen & Ärzte", status: "Aktiv", candidates: "8.900" },
    { id: "TELC-C2", title: "telc Deutsch C2", level: "C2", target: "Hochschule", status: "In Überarbeitung", candidates: "3.400" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f4f6f8] text-foreground font-sans">
      {/* 1. SIDEBAR (Collapsible & Grouped) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-[#1e293b] text-white transition-all duration-300 md:static ${
          sidebarCollapsed ? "w-20" : "w-64"
        } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-black text-white text-lg">
              t
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  telc<span className="text-primary">.</span>admin
                </span>
                <span className="text-[0.625rem] text-slate-400 font-semibold tracking-wider uppercase">
                  Management Portal
                </span>
              </div>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white md:block"
            title={sidebarCollapsed ? "Sidebar ausklappen" : "Sidebar einklappen"}
          >
            {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar Navigation Items Grouped */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.title}>
              {!sidebarCollapsed && (
                <p className="px-3 pb-2 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400">
                  {group.title}
                </p>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                      title={sidebarCollapsed ? item.label : undefined}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!sidebarCollapsed && (
                        <span className="flex-1 text-left truncate">{item.label}</span>
                      )}
                      {!sidebarCollapsed && item.badge && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[0.625rem] font-extrabold ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-white/10 p-3">
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4 shrink-0 text-red-400" />
            {!sidebarCollapsed && <span>Zur Website</span>}
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="rounded p-2 text-foreground hover:bg-secondary md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Global Search Input */}
            <div className="relative hidden w-72 sm:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Suchen in telc Portal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/50 py-1.5 pl-9 pr-4 text-xs font-medium text-foreground focus:border-primary focus:bg-card focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language switch */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary/50 p-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`rounded px-2 py-0.5 text-[0.6875rem] font-bold transition-all ${
                    l.code === lang ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                JK
              </div>
              <div className="hidden flex-col text-left md:flex">
                <span className="text-xs font-extrabold text-foreground">Jürgen Keicher</span>
                <span className="text-[0.625rem] text-muted-foreground">Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body View Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {/* TAB 1: OVERVIEW DASHBOARD */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Header Banner */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-black text-foreground">Willkommen im telc Portal</h1>
                  <p className="text-xs text-muted-foreground">
                    Verwaltung von Prüfungen, Lehrmaterialien und weltweiten Prüfungszentren.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Neue Prüfung erstellen</span>
                  </button>
                </div>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {h.stats.map((s, idx) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                        {s.prefix}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {idx === 0 && <Building2 className="h-4 w-4" />}
                        {idx === 1 && <Users className="h-4 w-4" />}
                        {idx === 2 && <FileText className="h-4 w-4" />}
                        {idx === 3 && <BarChart3 className="h-4 w-4" />}
                      </div>
                    </div>
                    <p className="mt-2 text-3xl font-black text-foreground">{s.value}</p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Content Tables Grid */}
              <div className="grid gap-8 lg:grid-cols-12">
                {/* News Items Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-8">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                    <h2 className="text-base font-extrabold text-foreground">Aktuelle News & Meldungen</h2>
                    <button
                      type="button"
                      onClick={() => setActiveTab("news")}
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Alle anzeigen
                    </button>
                  </div>
                  <div className="divide-y divide-border">
                    {news.map((n) => (
                      <div key={n.id} className="flex items-center justify-between py-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-primary/10 px-2 py-0.5 text-[0.625rem] font-bold text-primary">
                              {n.category[lang]}
                            </span>
                            <span className="text-[0.625rem] text-muted-foreground">{n.date}</span>
                          </div>
                          <p className="text-xs font-bold text-foreground">{n.title[lang]}</p>
                        </div>
                        <div className="flex gap-2">
                          <button type="button" className="p-1 text-muted-foreground hover:text-foreground">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Activity Panel */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-4">
                  <h2 className="mb-4 border-b border-border pb-3 text-base font-extrabold text-foreground">
                    Systemstatus & Prüfungszentren
                  </h2>
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3 text-emerald-700 font-semibold">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" /> Globales Netzwerk
                      </span>
                      <span className="font-extrabold">3.000+ Online</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-500/10 p-3 text-blue-700 font-semibold">
                      <span className="flex items-center gap-2">
                        <Globe className="h-4 w-4" /> Zertifikatsvalidierung
                      </span>
                      <span className="font-extrabold">100% OK</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-amber-500/10 p-3 text-amber-700 font-semibold">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Auswertungssystem
                      </span>
                      <span className="font-extrabold">1.500 Tag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPRACHPRÜFUNGEN TAB */}
          {activeTab === "exams" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-extrabold text-foreground">Sprachprüfungen (A1 – C2)</h1>
                  <p className="text-xs text-muted-foreground">
                    Verwaltung von Prüfungsformaten, Beschreibungen und Anmeldungen.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-deep"
                >
                  <Plus className="h-4 w-4" />
                  <span>Neues Prüfungsformat</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-secondary/50 text-[0.6875rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">ID / Code</th>
                      <th className="px-4 py-3">Prüfungsbezeichnung</th>
                      <th className="px-4 py-3">Niveau</th>
                      <th className="px-4 py-3">Zielgruppe</th>
                      <th className="px-4 py-3">Kandidaten / Jahr</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {sampleExams.map((exam) => (
                      <tr key={exam.id} className="hover:bg-secondary/30 transition-colors">
                        <td className="px-4 py-3.5 font-extrabold text-primary">{exam.id}</td>
                        <td className="px-4 py-3.5 font-bold text-foreground">{exam.title}</td>
                        <td className="px-4 py-3.5">
                          <span className="rounded bg-primary/10 px-2 py-0.5 font-extrabold text-primary">
                            {exam.level}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground">{exam.target}</td>
                        <td className="px-4 py-3.5 font-semibold text-foreground">{exam.candidates}</td>
                        <td className="px-4 py-3.5">
                          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.6875rem] font-extrabold text-emerald-600">
                            {exam.status}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button type="button" className="p-1 text-muted-foreground hover:text-foreground">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button type="button" className="p-1 text-muted-foreground hover:text-primary">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: LEHRMATERIALIEN & OTHER TABS */}
          {activeTab !== "overview" && activeTab !== "exams" && (
            <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Layers className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-extrabold text-foreground capitalize">
                Verwaltung: {activeTab}
              </h2>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground">
                Inhalte und Datensätze für diesen Bereich sind synchronisiert. Wählen Sie Aktionen zum Bearbeiten oder Konfigurieren.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-xs font-bold text-foreground hover:bg-muted"
              >
                <span>Zurück zum Dashboard</span>
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
