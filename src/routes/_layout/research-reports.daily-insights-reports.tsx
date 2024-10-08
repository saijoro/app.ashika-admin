import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  PaginationState
} from '@tanstack/react-table'
import { getData } from '@/utils/http'

export const Route = createFileRoute(
  '/_layout/research-reports/daily-insights-reports',
)({
  component: RRDailyInsightsReportsComponent,
})


function RRDailyInsightsReportsComponent() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  })

  const { isPending, error, data } = useQuery({
    queryKey: ['dailyInsights', pagination],
    queryFn: async () => {
      return await getData(
        `research-reports/monthly-insights-reports?report_group=research_reports&report_type=daily_insights&page=${pagination.pageIndex}&limit=${pagination.pageSize}`
      );
    },
  })
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h3>Research Reports :: Daily Insights Reports</h3>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default RRDailyInsightsReportsComponent