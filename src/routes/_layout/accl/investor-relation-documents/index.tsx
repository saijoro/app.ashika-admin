import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/accl/investor-relation-documents/"
)({
  component: () => (
    <Reports
      reportGroup={"accl"}
      reportType={"investor-relation-documents"}
      categoryType={""}
    />
  ),
});
