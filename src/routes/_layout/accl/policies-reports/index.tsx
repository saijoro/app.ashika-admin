import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl/policies-reports/")({
  component: () => (
    <Reports
      asset_group={"accl"}
      asset_type={"policies-reports"}
      asset_category={""}
    />
  ),
});
