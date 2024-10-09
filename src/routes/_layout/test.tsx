import Reports from "@/components/Reports";
import { validateSearch } from "@/utils/helpers/validateSearch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/test")({
  component: () => (
    <Reports
      reportGroup={"research-reports"}
      reportType={"daily-insights-reports"}
      categoryType={""}
    />
  ),
  validateSearch: validateSearch,
});
