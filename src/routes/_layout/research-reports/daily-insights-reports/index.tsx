import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/daily-insights-reports/"
)({
  component: () => (
    <Reports
      asset_group={"research-reports"}
      asset_type={"daily-insights-reports"}
      asset_category={""}
    />
  ),
});
