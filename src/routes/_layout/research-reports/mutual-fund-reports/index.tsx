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
      asset_group={"research-reports"}
      asset_type={"mutual-fund-reports"}
      asset_category={""}
    />
  );
};
