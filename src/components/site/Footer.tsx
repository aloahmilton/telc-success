import { Link } from "@tanstack/react-router";
import { ChevronRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import logoAlte from "@/assets/logo-alte.png";
import logoBamf from "@/assets/logo-bamf.png";
import logoDekra from "@/assets/logo-dekra.png";
import logoEaquals from "@/assets/logo-eaquals.png";
import logoImove from "@/assets/logo-imove.png";
import logoVhs from "@/assets/logo-vhs.png";
import { footer, nav, ui } from "@/lib/content";
import { useT } from "@/lib/i18n";

export function Footer() {
  const f = useT(footer);
  const t = useT(ui);
  const items = useT(nav);

  const partnerLogos = [
    { name: "vhs", src: logoVhs, alt: "Volkshochschule" },
    { name: "DEKRA", src: logoDekra, alt: "DEKRA ISO 9001 Zertifiziert" },
    { name: "BAMF", src: logoBamf, alt: "Bundesamt für Migration und Flüchtlinge" },
    { name: "ALTE", src: logoAlte, alt: "Association of Language Testers in Europe" },
    { name: "Eaquals", src: logoEaquals, alt: "Eaquals Excellence in Language Education" },
    { name: "iMOVE", src: logoImove, alt: "iMOVE Training Made in Germany" },
  ];

  return (
    <footer className="mt-20">
      {/* 1. Header Slate Grey Bar with White Logo & Social Icons */}
      <div className="bg-[#5c636a] text-white">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tighter text-white">telc</span>
            <span className="h-1.5 w-1.5 rounded-full bg-white mb-1"></span>
          </Link>

          <div className="flex items-center gap-5 text-white">
            <a
              href="https://www.facebook.com/telcLanguageTests/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="opacity-90 hover:opacity-100"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/telc.official/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="opacity-90 hover:opacity-100"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/telc-ggmbh-023393250/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-90 hover:opacity-100"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/user/telctube"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="opacity-90 hover:opacity-100"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body (Light Grey Background) */}
      <div className="bg-[#f1f3f5] py-14 text-foreground">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {/* Address Column */}
          <div>
            <h3 className="mb-3 text-sm font-extrabold text-foreground">{t.address}</h3>
            <address className="not-italic leading-relaxed text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">telc gGmbH</p>
              <p>Basler Straße 7</p>
              <p>61352 Bad Homburg</p>
            </address>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-3 text-sm font-extrabold text-foreground">{t.links}</h3>
            <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-xs font-medium text-muted-foreground">
              {f.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
              {items.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-primary">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/sitemap" className="hover:text-primary font-bold text-primary">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary">
                  {t.admin}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="mb-3 text-sm font-extrabold text-foreground">
              Aktuelles von telc, melden Sie sich für den Newsletter an
            </h3>
            <a
              href="#"
              className="link-arrow mt-2 text-xs font-bold text-teal hover:underline"
            >
              <span>{t.subscribe}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="container-page my-10">
          <hr className="border-border" />
        </div>

        {/* Partner Logos Strip */}
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
            {partnerLogos.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center p-2 transition-transform hover:scale-105"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-12 w-auto max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}



