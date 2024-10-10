import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/fundamental-reports/"
)({
  component: () => (
    <Reports
      asset_group={"research-reports"}
      asset_type={"fundamental-reports"}
      asset_category={""}
    />
  ),
});
