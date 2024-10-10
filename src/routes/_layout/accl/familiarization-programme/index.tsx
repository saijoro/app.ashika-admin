import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/accl/familiarization-programme/"
)({
  component: () => (
    <Reports
      reportGroup={"accl"}
      reportType={"familirization-programmie"}
      categoryType={""}
    />
  ),
});
