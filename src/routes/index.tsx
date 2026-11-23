import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — 上傳影片，三分鐘內拿到逐字稿" },
      {
        name: "description",
        content:
          "Upload your video, get a clean transcript in three minutes. Whisper-powered transcripts in Chinese and English for creators, educators and engineers.",
      },
      { property: "og:title", content: "Video Speed Reader — transcripts in three minutes" },
      {
        property: "og:description",
        content: "Upload your video, get a clean, accurate transcript in three minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Sparkles,
    title: "高準確度逐字稿",
    en: "High-accuracy transcripts",
    body: "Powered by OpenAI Whisper. Supports Chinese and English.",
  },
  {
    icon: Clock,
    title: "三分鐘交付",
    en: "Three-minute turnaround",
    body: "Processed in the background — you get an email when it's ready.",
  },
  {
    icon: ShieldCheck,
    title: "可商用授權",
    en: "Commercial-use ready",
    body: "You own the output. Use it however you like.",
  },
];

const transcript = [
  { t: "00:00", line: "大家好，今天我們來聊聊如何把長影片變成文章。" },
  { t: "00:07", line: "First, upload the recording — any length works." },
  { t: "00:14", line: "三分鐘後，逐字稿就會寄到你的信箱。" },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero" />
          <div className="pointer-events-none absolute inset-0 bg-grid" />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24 lg:pb-28">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary-glow" />
                Video → transcript, in minutes
              </span>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-gradient sm:text-6xl lg:text-7xl">
                Video Speed Reader
              </h1>
              <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
                上傳影片，三分鐘內拿到逐字稿。
              </p>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Upload your video, get a clean transcript in three minutes.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/signup">
                    Get started free <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/auth">Sign in / 登入</Link>
                </Button>
              </div>
            </Reveal>

            {/* Product preview */}
            <Reveal delay={150} className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-border bg-card/80 p-1.5 shadow-card backdrop-blur">
                <div className="rounded-xl border border-border/60 bg-surface">
                  <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 items-center gap-[3px]" aria-hidden="true">
                        {Array.from({ length: 14 }).map((_, i) => (
                          <span
                            key={i}
                            className="h-full w-[3px] rounded-full bg-primary animate-wave"
                            style={{ animationDelay: `${(i % 7) * 120}ms` }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        lecture-04.mp4 · 52:18
                      </span>
                    </div>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
                      Transcribing
                    </span>
                  </div>
                  <ul className="space-y-3 px-4 py-5 text-left text-sm sm:text-[15px]">
                    {transcript.map((row, i) => (
                      <li key={row.t} className="flex gap-4">
                        <span className="shrink-0 font-mono text-xs leading-6 text-primary-glow">
                          {row.t}
                        </span>
                        <span className="leading-6 text-foreground/90">
                          {row.line}
                          {i === transcript.length - 1 && (
                            <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-primary-glow animate-caret" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
                Why Video Speed Reader
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                From long recordings to ready-to-use text.
              </h2>
              <p className="mt-4 text-muted-foreground">
                For creators, educators and engineers turning long-form video into blog posts,
                course notes and searchable archives.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.en} delay={i * 100}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40">
                    <div className="grid size-10 place-items-center rounded-lg bg-accent text-primary-glow transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <f.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{f.en}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{f.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
