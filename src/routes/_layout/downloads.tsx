import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/downloads")({
  component: () => (
    <Reports reportGroup={""} reportType={"downloads"} categoryType={""} />
  ),
});
