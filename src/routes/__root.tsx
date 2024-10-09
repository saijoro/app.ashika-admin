import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CreateReportProvider } from "@/components/core/AddReports/CreateReportContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <CreateReportProvider>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </CreateReportProvider>
    </>
  );
}
