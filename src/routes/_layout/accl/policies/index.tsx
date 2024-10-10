import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl/policies/")({
  component: () => (
    <Reports
      asset_group={"margins"}
      asset_type={"margin-reports"}
      asset_category={"Margin Reports"}
    />
  ),
});
