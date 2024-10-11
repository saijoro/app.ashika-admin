import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl/annual-reports/")({
  component: () => (
    <Reports
      asset_group={"accl"}
      asset_type={"annual-reports"}
      asset_category={""}
    />
  ),
});
