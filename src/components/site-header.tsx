import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";

export function SiteHeader() {
  const { session, ready } = useSession();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <div className="flex items-center gap-2">
          {ready && session ? (
            <Button asChild variant="hero" size="sm">
              <Link to="/app">Open app</Link>
            </Button>
          ) : (
            <Button asChild variant="hero" size="sm">
              <Link to="/auth">Sign in / 登入</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
