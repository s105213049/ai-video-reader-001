import { createFileRoute } from "@tanstack/react-router";
import { LogOut, UploadCloud } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/use-sign-out";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Video Speed Reader" },
      { name: "description", content: "Your Video Speed Reader dashboard." },
      { property: "og:title", content: "Dashboard — Video Speed Reader" },
      { property: "og:description", content: "Your Video Speed Reader dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppHome,
});

function AppHome() {
  const { user } = Route.useRouteContext();
  const signOut = useSignOut();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <Button variant="glass" size="sm" onClick={signOut}>
            <LogOut /> Sign out
          </Button>
        </div>
      </header>

      <main className="relative flex-1">
        <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 py-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h1 className="break-words text-3xl font-semibold tracking-tight sm:text-4xl">
            Hi {user.email}
          </h1>
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/70 p-8 text-center shadow-card">
            <div className="mx-auto grid size-12 place-items-center rounded-xl bg-accent text-primary-glow">
              <UploadCloud className="size-6" />
            </div>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              Your dashboard is coming soon. Upload functionality will be added in the next
              milestone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
