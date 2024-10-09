import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/margin-updates")({
  component: () => (
    <Reports
      reportGroup={"accl-reports"}
      reportType={"margin-updates"}
      categoryType={""}
    />
  ),
});
