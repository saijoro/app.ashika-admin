import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl/policies/")({
  component: () => (
    <Reports reportGroup={"accl"} reportType={"policies"} categoryType={""} />
  ),
});
