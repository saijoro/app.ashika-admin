import Todos from "@/components/Test";
import { validateSearch } from "@/utils/helpers/validateSearch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/test")({
  component: () => <Todos />,
  validateSearch: validateSearch,
});
