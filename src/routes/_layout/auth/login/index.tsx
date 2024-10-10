import SignIn from "@/components/Auth";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_layout/auth/login/")({
  component: () => <SignIn />,
});
