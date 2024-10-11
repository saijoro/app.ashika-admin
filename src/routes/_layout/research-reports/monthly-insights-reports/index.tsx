import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/monthly-insights-reports/"
)({
  component: () => (
    <Reports
      asset_group={"research-reports"}
      asset_type={"monthly-insights-reports"}
      asset_category={""}
    />
  ),
});
