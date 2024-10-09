import Reports from "@/components/Test";
import Todos from "@/components/Test";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/weekly-insights-reports"
)({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"weekly-insights-reports"}
      categoryType={""}
    />
  ),
});
