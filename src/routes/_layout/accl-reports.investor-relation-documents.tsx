import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/accl-reports/investor-relation-documents"
)({
  component: () => (
    <Reports
      reportGroup={"accl-reports"}
      reportType={"investor-relation-documents"}
      categoryType={""}
    />
  ),
});
