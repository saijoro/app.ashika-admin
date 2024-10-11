import AddClient from '@/components/FundTransfer/AddClient'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/add-client')({
  component: () => (
    <div>
      <AddClient />
    </div>
  ),
})
