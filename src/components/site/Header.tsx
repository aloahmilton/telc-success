import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronUp, ExternalLink, Menu, Search, X } from "lucide-react";
import { useRef, useState } from "react";

import { SearchModal } from "@/components/site/SearchModal";
import { metaNav, nav, ui } from "@/lib/content";
import { LANGS, useLang, useT } from "@/lib/i18n";

function RoundFlag({ code, className = "h-5 w-5" }: { code: string; className?: string }) {
  if (code === "de") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect y="0" width="512" height="170.66" fill="#000000"/>
        <rect y="170.66" width="512" height="170.66" fill="#DD0000"/>
        <rect y="341.33" width="512" height="170.66" fill="#FFCE00"/>
      </svg>
    );
  }
  if (code === "en") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#012169"/>
        <path d="M0 0l512 512M512 0L0 512" stroke="#fff" strokeWidth="60"/>
        <path d="M0 0l512 512M512 0L0 512" stroke="#C8102E" strokeWidth="40"/>
        <path d="M256 0v512M0 256h512" stroke="#fff" strokeWidth="100"/>
        <path d="M256 0v512M0 256h512" stroke="#C8102E" strokeWidth="60"/>
      </svg>
    );
  }
  if (code === "es") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="128" fill="#AA151B"/>
        <rect y="128" width="512" height="256" fill="#F1BF00"/>
        <rect y="384" width="512" height="128" fill="#AA151B"/>
      </svg>
    );
  }
  if (code === "tr") {
    return (
      <svg className={`rounded-full shadow-sm shrink-0 object-cover ${className}`} viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#E30A17"/>
        <circle cx="200" cy="256" r="120" fill="#ffffff"/>
        <circle cx="230" cy="256" r="96" fill="#E30A17"/>
        <polygon fill="#ffffff" points="320,256 345,264 330,240 340,272 320,250"/>
      </svg>
    );
  }
  return null;
}

export function Header() {
  const { lang, setLang } = useLang();
  const items = useT(nav);
  const meta = useT(metaNav);
  const t = useT(ui);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2, 3]);
  const [megaOpenIndex, setMegaOpenIndex] = useState<number | null>(null);
  const megaLeaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleAccordion = (idx: number) => {
    setExpandedIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const activeLang = LANGS.find((l) => l.code === lang) || LANGS[0];

  // Hover handlers with a small delay to prevent flicker
  const handleNavEnter = (index: number) => {
    if (megaLeaveTimeout.current) clearTimeout(megaLeaveTimeout.current);
    if (items[index]?.megaDropdown) {
      setMegaOpenIndex(index);
    } else {
      setMegaOpenIndex(null);
    }
  };

  const handleNavLeave = () => {
    megaLeaveTimeout.current = setTimeout(() => setMegaOpenIndex(null), 120);
  };

  const handleDropdownEnter = () => {
    if (megaLeaveTimeout.current) clearTimeout(megaLeaveTimeout.current);
  };

  const activeMega = megaOpenIndex !== null ? items[megaOpenIndex]?.megaDropdown : null;

  return (
    <header id="page-header" className="sticky top-0 z-40 border-t-4 border-primary border-b border-border bg-card shadow-sm">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* telc official logo */}
        <Link to="/" className="flex shrink-0 items-center gap-1.5 py-2">
          <div className="flex items-center gap-0.5">
            <span className="text-3xl font-black tracking-tighter text-foreground">telc</span>
            <span className="h-2 w-2 rounded-full bg-primary mb-1"></span>
          </div>
        </Link>

        {/* Desktop Main Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {items.map((item, index) => (
            <div
              key={item.to}
              className="relative flex items-center"
              onMouseEnter={() => handleNavEnter(index)}
              onMouseLeave={handleNavLeave}
            >
              <Link
                to={item.to}
                className={`flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-primary py-2 ${
                  megaOpenIndex === index && item.megaDropdown ? "text-primary" : ""
                }`}
                activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
              >
                {item.label}
                {item.megaDropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 stroke-[2.5] transition-transform duration-200 ${
                      megaOpenIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right utility items (Desktop + Mobile search/language/trigger) */}
        <div className="ml-auto flex items-center gap-3.5 md:gap-5">
          {/* Meta Links (Desktop only) */}
          <div className="hidden items-center gap-3 border-r border-border pr-4 text-xs font-semibold text-muted-foreground lg:flex">
            {meta.map((m) => {
              const isShop = m.toLowerCase().includes("shop") || m.toLowerCase().includes("tienda") || m.toLowerCase().includes("mağaza");
              const isCampus = m.toLowerCase().includes("campus") || m.toLowerCase().includes("kampüs");
              const isTraining = m.toLowerCase().includes("train") || m.toLowerCase().includes("formac") || m.toLowerCase().includes("eğitim");
              const to = isShop ? "/shop" : isCampus ? "/campus" : isTraining ? "/trainingsangebote" : "/ueber-uns";
              return (
                <Link
                  key={m}
                  to={to}
                  className={`cursor-pointer transition-colors ${
                    isShop
                      ? "bg-primary text-primary-foreground font-bold px-2 py-0.5 rounded-sm hover:bg-primary/90"
                      : "hover:text-foreground"
                  }`}
                >
                  {m}
                </Link>
              );
            })}
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-foreground transition-colors hover:text-primary"
            aria-label={t.search}
          >
            <Search className="h-5 w-5 stroke-[2.2]" />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-foreground transition-colors hover:text-primary border-0 bg-transparent"
            >
              <RoundFlag code={activeLang.code} className="h-4.5 w-4.5" />
              <span className="uppercase text-[0.75rem] font-extrabold">{activeLang.code}</span>
            </button>

            {langOpen && (
              <ul className="absolute right-0 top-10 z-50 w-36 overflow-hidden rounded-md border border-border bg-popover py-1 shadow-lift">
                {LANGS.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-semibold hover:bg-secondary transition-colors ${
                        l.code === lang ? "bg-secondary/60 text-primary font-bold" : "text-foreground"
                      }`}
                    >
                      <RoundFlag code={l.code} className="h-4.5 w-4.5" />
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={t.menu}
            onClick={() => setOpen((v) => !v)}
            className="p-1 text-foreground transition-colors hover:text-primary lg:hidden"
          >
            {open ? <X className="h-6 w-6 stroke-[2.2]" /> : <Menu className="h-6 w-6 stroke-[2.2]" />}
          </button>
        </div>
      </div>

      {/* ── Mega Dropdown Panel ── */}
      {activeMega && (
        <div
          className="absolute left-0 right-0 z-50 border-t-2 border-primary bg-card shadow-xl"
          style={{
            animation: "megaFadeIn 0.18s ease-out both",
          }}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleNavLeave}
        >
          <div className="container-page py-8">
            <div className="grid grid-cols-3 gap-10">
              {activeMega.groups.map((group) => (
                <div key={group.heading}>
                  {/* Group heading */}
                  <p className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-widest text-primary border-b border-primary/20 pb-2">
                    {group.heading}
                  </p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1.5 rounded px-1 py-1 text-sm text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary hover:translate-x-0.5"
                          onClick={() => setMegaOpenIndex(null)}
                        >
                          <span className="h-1 w-1 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors" />
                          <span className="flex-1 leading-snug">{link.label}</span>
                          <ExternalLink className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-40 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="border-t border-border bg-[#f8f9fa] lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col">
            {items.map((item, index) => {
              const isExpanded = expandedIndices.includes(index);
              const hasSub = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.to} className="border-b border-border/60">
                  <div
                    onClick={() => hasSub && toggleAccordion(index)}
                    className="container-page flex cursor-pointer items-center justify-between py-4 text-sm font-extrabold text-foreground transition-colors hover:text-primary"
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <span className="text-muted-foreground">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Sub-items accordion list */}
                  {hasSub && isExpanded && item.subItems && (
                    <div className="bg-[#f1f3f5] py-1 border-t border-border/30">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          onClick={() => setOpen(false)}
                          className="block container-page py-2 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Meta Nav Links */}
            <div className="container-page flex items-center justify-between py-6 px-4 text-xs font-bold text-foreground/80 border-t border-border/80 bg-[#f8f9fa]">
              {meta.map((m) => {
                const isShop = m.toLowerCase().includes("shop") || m.toLowerCase().includes("tienda") || m.toLowerCase().includes("mağaza");
                const isCampus = m.toLowerCase().includes("campus") || m.toLowerCase().includes("kampüs");
                const isTraining = m.toLowerCase().includes("train") || m.toLowerCase().includes("formac") || m.toLowerCase().includes("eğitim");
                const to = isShop ? "/shop" : isCampus ? "/campus" : isTraining ? "/trainingsangebote" : "/ueber-uns";
                return (
                  <Link
                    key={m}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`cursor-pointer transition-colors ${
                      isShop ? "text-primary font-bold underline" : "hover:text-primary"
                    }`}
                  >
                    {m}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}

      {/* Mega dropdown fade-in keyframes */}
      <style>{`
        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Global Live Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
