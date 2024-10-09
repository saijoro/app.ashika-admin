import Todos from "@/components/Test";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/mutual-fund-reports"
)({
  component: () => <MainComponent />,
});

const MainComponent = () => {
  return (
    <Todos
      reportGroup={"research_reports"}
      reportType={"mutual-fund"}
      categoryType={""}
    />
  );
};
