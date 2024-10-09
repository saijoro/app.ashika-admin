import FundTransfer from '@/components/FundTransfer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/fund-transfer')({
  component: () => <div>
    <FundTransfer />
  </div>,
})
