import { redirect, type RouteObject } from "react-router";

import { supabase } from "@/integrations/supabase/client";
import { AUTHENTICATED_ROUTE_ID } from "@/lib/route-ids";
import AppPage from "@/pages/app";
import AuthPage from "@/pages/auth";
import IndexPage from "@/pages/index";
import { NotFoundPage, RootErrorPage, RootLayout } from "@/pages/root-layout";
import SignupPage from "@/pages/signup";

/** Client-side guard for signed-in pages: redirects to /auth when there is no user. */
export async function requireUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    throw redirect("/auth");
  }
  return { user: data.user };
}

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <RootErrorPage />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/signup", element: <SignupPage /> },
      {
        id: AUTHENTICATED_ROUTE_ID,
        loader: requireUser,
        children: [{ path: "/app", element: <AppPage /> }],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
