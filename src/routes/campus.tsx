import { createFileRoute, Link } from "@tanstack/react-router";
import { Headphones, Download, Play, Pause, CheckCircle2, FileText, Globe, Smartphone, Lock } from "lucide-react";
import { useState } from "react";

import { Layout, PageHero } from "@/components/site/Layout";
import { routes } from "@/lib/content";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "telc Campus | Digitale Lernplattform & Audio-Downloads" },
      {
        name: "description",
        content:
          "Interaktive Übungstests, Audio-Downloads für Hörverstehen und digitale Lernmedien auf dem offiziellen telc Campus.",
      },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
  component: CampusRoute,
});

const sampleAudioTracks = [
  { id: 1, title: "telc Deutsch B2 - Mündliche Prüfung Teil 1 (Präsentation)", level: "B2", duration: "03:45" },
  { id: 2, title: "telc Deutsch B1 - Hörverstehen Teil 2 (Globalverstehen)", level: "B1", duration: "04:12" },
  { id: 3, title: "telc Deutsch C1 Hochschule - Hörverstehen Vortrag", level: "C1", duration: "06:30" },
  { id: 4, title: "telc Deutsch B1/B2 Pflege - Übergabegespräch Pflegekräften", level: "B2 Pflege", duration: "05:15" },
];

function CampusRoute() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <Layout>
      <PageHero
        title="telc Campus"
        text="Die digitale Plattform für flexibles Lernen. Nutzen Sie interaktive Übungstests, Audio-Dateien für Hörverstehen und digitale Materialien auf allen Endgeräten."
      />

      {/* Feature Highlights */}
      <section className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <Headphones className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">Hörverstehen Audios</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Offizielle Audio-Dateien zu allen telc Modelltests direkt im Browser abspielen oder herunterladen.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">Mobil & App-Bereit</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Optimiert für Smartphones, Tablets und Desktop. Lernen Sie unterwegs in Ihrem eigenen Tempo.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">Modelltests PDF</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Kostenlose Antwortbögen, Lösungsschlüssel und Aufgabenhefte zum sofortigen PDF-Download.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">Geschützter Zugang</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Für Prüfungszentren & Lehrkräfte: Exklusive Zusatzmaterialien im geschützten Campus-Bereich.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Audio Player Hub */}
      <section className="bg-secondary/40 py-12">
        <div className="container-page">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                Hörbeispiele & Vorbereitung
              </span>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
                Interaktiver Audio-Player für Prüfungen
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {sampleAudioTracks.map((track) => {
              const isPlaying = playingId === track.id;
              return (
                <div
                  key={track.id}
                  className={`flex flex-col gap-4 rounded-xl border p-5 transition-all md:flex-row md:items-center md:justify-between ${
                    isPlaying
                      ? "border-primary bg-card shadow-lift"
                      : "border-border bg-card shadow-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => togglePlay(track.id)}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all cursor-pointer ${
                        isPlaying ? "bg-primary text-white shadow-md" : "bg-secondary text-primary hover:bg-primary/10"
                      }`}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-secondary border border-border px-1.5 py-0.5 text-[0.625rem] font-bold text-foreground">
                          {track.level}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">{track.duration}</span>
                      </div>
                      <h4 className="mt-1 text-sm font-extrabold text-foreground">{track.title}</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-border pt-3 md:border-t-0 md:pt-0">
                    {isPlaying && (
                      <span className="animate-pulse text-xs font-bold text-primary flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-primary" /> Audio wird abgespielt...
                      </span>
                    )}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Download gestartet: ${track.title}.mp3`);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Audio MP3</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Access Form */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-card text-center">
          <h3 className="text-xl font-black text-foreground md:text-2xl">
            Möchten Sie telc Campus für Ihren Unterricht nutzen?
          </h3>
          <p className="mt-2 text-xs text-muted-foreground md:text-sm">
            Als lizenziertes Prüfungszentrum oder Lehrkraft erhalten Sie unbeschränkten Zugriff auf den vollständigen Katalog.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to={routes.contact}
              className="rounded-lg bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-deep"
            >
              Zugangsdaten anfragen
            </Link>
            <Link
              to={routes.materials}
              className="rounded-lg border border-border bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:bg-secondary/80"
            >
              Lehrmaterialien ansehen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
