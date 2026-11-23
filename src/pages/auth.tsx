import { AuthCard } from "@/components/auth-card";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function AuthPage() {
  usePageMeta({
    title: "Sign in — Video Speed Reader",
    description: "Sign in to Video Speed Reader to get your transcripts.",
  });
  return <AuthCard mode="signin" />;
}
