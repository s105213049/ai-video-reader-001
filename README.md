# Video Speed Reader (ai-video-reader)

Upload your video, get a clean transcript in three minutes.

A plain **Vite + React single-page app** using **React Router** for client-side routing and
**Supabase** for email/password auth. It builds to static files and is ready to host on Vercel.

## Routes

| Path      | Page                                  |
| --------- | ------------------------------------- |
| `/`       | Landing page                          |
| `/auth`   | Sign in                               |
| `/signup` | Sign up                               |
| `/app`    | Dashboard (signed-in users only)      |

Routes are declared in `src/routes.tsx`; page components live in `src/pages/`.

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm test
```

## Build

```sh
npm run build    # outputs the static SPA to dist/
npm run preview
```

## Deploying to Vercel

Import the repo in Vercel. `vercel.json` sets the Vite framework preset, the `dist` output
directory, and a catch-all rewrite to `/index.html`, so deep links like `/app` load the SPA
and resolve on the client.

Required environment variables (already in `.env`; set them in Vercel if you remove that file):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Add your Vercel domain to Supabase → Authentication → URL Configuration (Site URL / redirect
URLs) so sign-up confirmation links point back to the deployed app.
