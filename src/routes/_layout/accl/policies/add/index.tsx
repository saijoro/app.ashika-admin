import CombineAdd from "@/components/core/AddReports/CombineAdd";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/accl/policies/add/")({
  component: () => (
    <CombineAdd
      showThumbnail={false}
      showCategory={false}
      showMonth={false}
      showYear={false}
    />
  ),
});
