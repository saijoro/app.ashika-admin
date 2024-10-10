import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/users/add/')({
  component: () => <div>Hello /_layout/users/add/!</div>,
})
