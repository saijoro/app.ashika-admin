import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl-reports/policies")({
  component: () => (
    <Reports
      reportGroup={"accl-reports"}
      reportType={"policies"}
      categoryType={""}
    />
  ),
});
