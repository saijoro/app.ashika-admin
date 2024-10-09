<<<<<<< HEAD
=======
import Reports from "@/components/Reports";
import { validateSearch } from "@/utils/helpers/validateSearch";
>>>>>>> de500cd6d5b5ee8172d632f75fd6994d763ac842
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/test")({
  component: () => <div>Hello /_layout/test!</div>,
});
