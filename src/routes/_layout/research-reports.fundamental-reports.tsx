import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/fundamental-reports"
)({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"fundamental-reports"}
      categoryType={""}
    />
  ),
});
