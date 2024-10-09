import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_layout/research-reports/weekly-insights-reports',
)({
  component: RRWeeklyInsightsReportsComponent,
})

function RRWeeklyInsightsReportsComponent() {
  return (
    <div>
      <h3>Research Reports :: Weekly Insights Reports</h3>
    </div>
  )
}

export default RRWeeklyInsightsReportsComponent
