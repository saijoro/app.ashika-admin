import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/mutual-fund-reports"
)({
  component: () => <MainComponent />,
});

const MainComponent = () => {
  return (
    <Reports
      reportGroup={"research_reports"}
      reportType={"mutual-fund"}
      categoryType={""}
    />
  );
};
