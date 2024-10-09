import CombineAdd from "@/components/core/AddReports/CombineAdd";
import { CreateReportProvider } from "@/components/core/AddReports/CreateReportContext";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/research-reports/weekly-insight-reports/add"
)({
  component: () => <CombineAdd showCategory={false} showThumbnail={false} />,
});
