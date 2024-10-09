import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/commodity-currency-reports"
)({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"daily-insights-reports"}
      categoryType={""}
    />
  ),
});
