import { createFileRoute, useNavigate } from "@tanstack/react-router";
import LogoPath from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import LoginComponent from "@/components/auth/LogIn";

export const Route = createFileRoute("/login")({
  component: () => (
    <div>
      <LoginComponent />
    </div>
  ),
});
