import { createFileRoute } from "@tanstack/react-router";

import { AuthCard } from "@/components/auth-card";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an account — Video Speed Reader" },
      {
        name: "description",
        content: "Create a Video Speed Reader account and turn videos into transcripts.",
      },
      { property: "og:title", content: "Create an account — Video Speed Reader" },
      { property: "og:description", content: "Sign up for Video Speed Reader." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <AuthCard mode="signup" />,
});
