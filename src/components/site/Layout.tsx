import type { ReactNode } from "react";

import { CookieConsent } from "./CookieConsent";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main id="page-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-hero-gradient py-16 text-primary-foreground">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed opacity-90">{text}</p>
      </div>
    </section>
  );
}

export function CardGrid({
  items,
}: {
  items: { title: string; text: string; badge?: string }[];
}) {
  return (
    <div className="container-page -mt-10 grid gap-6 pb-4 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex flex-col rounded-md bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
        >
          {item.badge && (
            <span className="mb-3 w-fit bg-secondary px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-primary">
              {item.badge}
            </span>
          )}
          <h2 className="text-base font-bold text-foreground">{item.title}</h2>
          <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Prose({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="container-page max-w-3xl py-16">
      <h2 className="text-2xl font-extrabold text-primary">{title}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
    </section>
  );
}
