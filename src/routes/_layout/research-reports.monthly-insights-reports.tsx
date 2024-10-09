import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/monthly-insights-reports"
)({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"monthly-insights-reports"}
      categoryType={""}
    />
  ),
});
