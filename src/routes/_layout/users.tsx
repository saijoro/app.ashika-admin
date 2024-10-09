import Reports from "@/components/Reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/users")({
  component: () => (
    <Reports
      reportGroup={"accl-reports"}
      reportType={"users"}
      categoryType={""}
    />
  ),
});
