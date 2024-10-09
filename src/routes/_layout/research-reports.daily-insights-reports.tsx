import Reports from "@/components/Reports";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/daily-insights-reports"
)({
  component: () => <RootComponent />,
});

{
  /* <Reports
      reportGroup={"research-reports"}
      reportType={"daily-insights-reports"}
      categoryType={""}
    /> */
}

function RootComponent() {
  return (
    <>
      <Reports
        reportGroup={"research-reports"}
        reportType={"daily-insights-reports"}
        categoryType={""}
      />
      <Outlet />
    </>
  );
}
