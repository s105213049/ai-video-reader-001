import { AuthCard } from "@/components/auth-card";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function SignupPage() {
  usePageMeta({
    title: "Create an account — Video Speed Reader",
    description: "Create a Video Speed Reader account and turn videos into transcripts.",
  });
  return <AuthCard mode="signup" />;
}
