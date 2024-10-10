import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/accl/familiarization-programme/"
)({
  component: () => (
    <Reports
      asset_group={"accl"}
      asset_type={"familirization-programmie"}
      asset_category={""}
    />
  ),
});
