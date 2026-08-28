import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react";
import { useState } from "react";

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

  const toggleAccordion = (idx: number) => {
    setExpandedIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const activeLang = LANGS.find((l) => l.code === lang) || LANGS[0];

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
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold text-foreground transition-colors hover:text-primary py-2"
              activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right utility items (Desktop + Mobile search/language/trigger) */}
        <div className="ml-auto flex items-center gap-3.5 md:gap-5">
          {/* Meta Links (Desktop only) */}
          <div className="hidden items-center gap-3 border-r border-border pr-4 text-xs font-semibold text-muted-foreground lg:flex">
            {meta.map((m) => (
              <span key={m} className="cursor-pointer transition-colors hover:text-foreground">
                {m}
              </span>
            ))}
          </div>

          {/* Search Button (Clean icon without background circle) */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="p-2 text-foreground transition-colors hover:text-primary"
            aria-label={t.search}
          >
            <Search className="h-5 w-5 stroke-[2.2]" />
          </button>

          {/* Language Switcher Badge with Round Flag (No border) */}
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

      {/* Mobile Menu Drawer (Matches telc.net screenshot 3 expanded view) */}
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

            {/* Bottom Meta Nav Links (Shop, Campus, Training, Community) */}
            <div className="container-page flex items-center justify-between py-6 px-4 text-xs font-bold text-foreground/80 border-t border-border/80 bg-[#f8f9fa]">
              {meta.map((m) => (
                <span key={m} className="cursor-pointer transition-colors hover:text-primary">
                  {m}
                </span>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Global Live Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}



