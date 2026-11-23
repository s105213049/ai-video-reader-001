> [!IMPORTANT]
> Avoid rewriting published git history (force pushing, or rebasing/amending/squashing
> commits that are already pushed). Keep `main` in a working state.

## Project rules

- The app is a plain Vite + React SPA (no SSR) using React Router; routes are declared in `src/routes.tsx`, page components live in `src/pages/`, and `vercel.json` rewrites every path to `index.html` so deep links resolve client-side.
- Backend is the project's own Supabase project (`ktnycqogkstujhmvutpa`). The single Supabase client is `src/integrations/supabase/client.ts`; it reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` from `import.meta.env` — never hardcode URLs or keys.
- Auth is Supabase email/password only; signed-in pages are children of the `authenticated` route in `src/routes.tsx`, whose loader redirects to `/auth` when there is no user — keeps the session check in one place.
- Only browser-safe keys (the `sb_publishable_*` key) may appear in client code or `.env`. Never commit a secret/service-role key.
- No custom database tables yet (only built-in auth users) — later milestones add them via migrations in `supabase/migrations/`.
- All colors, gradients and shadows are tokens/utilities in `src/styles.css`; components use semantic classes and Button variants (`hero`, `glass`) — keeps the theme consistent.
