import CombineAdd from '@/components/core/AddReports/CombineAdd'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_layout/research-reports/special-reports/add/',
)({
  component: () => <CombineAdd showCategory={true} showThumbnail={false} />,
})
