import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/mutual-fund-reports/"
)({
  component: () => <MainComponent />,
});

const MainComponent = () => {
  return (
    <Reports
      reportGroup={"research-reports"}
      reportType={"mutual-fund-reports"}
      categoryType={""}
    />
  );
};
