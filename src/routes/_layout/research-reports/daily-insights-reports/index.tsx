import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/daily-insights-reports/"
)({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"daily-insights-reports"}
      categoryType={""}
    />
  ),
});
