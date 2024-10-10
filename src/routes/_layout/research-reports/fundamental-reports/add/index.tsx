import CombineAdd from '@/components/core/AddReports/CombineAdd'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_layout/research-reports/fundamental-reports/add/',
)({
  component: () => <CombineAdd showThumbnail={false} />,
})
