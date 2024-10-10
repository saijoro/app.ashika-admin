import CombineAdd from "@/components/core/AddReports/CombineAdd";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/accl/investor-relation-documents/add/"
)({
  component: () => (
    <CombineAdd showThumbnail={false} showYear={false} showMonth={false} />
  ),
});
