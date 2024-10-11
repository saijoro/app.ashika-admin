import Reports from "@/components/Reports";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/commodity-currency-reports/"
)({
  component: () => (
    <>
      <Reports
        asset_group={"research-reports"}
        asset_type={"commodity-currency-reports"}
        asset_category={""}
      />
    </>
  ),
});
