import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Layout, PageHero } from "@/components/site/Layout";
import { submitContactInquiry } from "@/lib/actions";
import { footer } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { contactPage } from "@/lib/pages";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | Telc-success" },
      {
        name: "description",
        content:
          "Kontaktformular, Adresse und Servicezeiten von Telc-success – wir leiten Ihre Anfrage an das richtige Team weiter.",
      },
      { property: "og:title", content: "Kontakt | Telc-success" },
      { property: "og:description", content: "Schreiben Sie uns – Antwort in zwei Werktagen." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  const p = useT(contactPage);
  const f = useT(footer);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const topic = formData.get("topic") as string;
    const message = formData.get("message") as string;

    try {
      await submitContactInquiry({ data: { name, email, topic, message } });
      setSent(true);
    } catch (err) {
      console.error(err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageHero title={p.title} text={p.intro} />
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.4fr_1fr]">
        <form
          className="rounded-md bg-card p-6 shadow-card"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-foreground">
              {p.fields.name}
              <input
                required
                name="name"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
              />
            </label>
            <label className="text-xs font-bold text-foreground">
              {p.fields.email}
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
              />
            </label>
          </div>
          <label className="mt-4 block text-xs font-bold text-foreground">
            {p.fields.topic}
            <select
              name="topic"
              className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
            >
              {p.topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-xs font-bold text-foreground">
            {p.fields.message}
            <textarea
              required
              name="message"
              rows={6}
              className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-50"
          >
            {loading ? "Wird gesendet..." : p.submit}
          </button>
          {sent && (
            <p className="mt-4 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
              <span>✓ {p.sent} (In MongoDB Atlas gespeichert)</span>
            </p>
          )}
        </form>

        <aside className="rounded-md bg-secondary p-6">
          <h2 className="text-sm font-bold text-foreground">{p.officeTitle}</h2>
          <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
            {f.addressLines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{p.hours}</p>
        </aside>
      </div>
    </Layout>
  );
}
