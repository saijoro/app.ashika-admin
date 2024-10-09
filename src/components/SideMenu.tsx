import * as React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define your routes
const routes = [
  { path: "/users", label: "Users" },
  { path: "/margin-updates", label: "Margin Updates" },
  { path: "/fund-transfer", label: "Fund Transfer" },
  { path: "/download", label: "Downloads" },
  {
    path: "/research-reports/monthly-insights-reports",
    label: "Monthly Insights",
  },
  {
    path: "/research-reports/daily-insights-reports",
    label: "Daily Insights Reports",
  },
  {
    path: "/research-reports/weekly-insights-reports",
    label: "Weekly Insight Report",
  },
  {
    path: "/research-reports/fundamental-reports",
    label: "Fundamental Reports",
  },
  { path: "/research-reports/special-reports", label: "Special Reports" },
  {
    path: "/research-reports/mutual-fund-reports",
    label: "Mutual Fund Report",
  },
  {
    path: "/research-reports/commodity-currency-reports",
    label: "Commodity Currency Reports",
  },
  { path: "/accl-reports/policies", label: "Policies" },
  {
    path: "/accl-reports/familirization-programmie",
    label: "Familirization Programmie",
  },
  {
    path: "/accl-reports/investor-relation-documents",
    label: "Investor Relation Documents",
  },
  { path: "/accl-reports/annual-reports", label: "Annual Return" },
];

export default function SidebarNavigation() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-60 rounded-md border">
      <div className="flex">
        {/* <nav className={cn("w-full bg-white text-gray-800 py-4 px-3")}> */}
        <div>
          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">MAIN</h6>
              {routes.slice(0, 4).map((route) => (
                <NavLink key={route.path} to={route.path} label={route.label} />
              ))}
            </li>
          </ul>

          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">RESEARCH REPORTS</h6>
              {routes.slice(4, 11).map((route) => (
                <NavLink key={route.path} to={route.path} label={route.label} />
              ))}
            </li>
          </ul>

          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">ACCL INVESTOR RELATIONS</h6>
              {routes.slice(11).map((route) => (
                <NavLink key={route.path} to={route.path} label={route.label} />
              ))}
            </li>
          </ul>

          <Link
            to="/login"
            className="flex justify-start items-center gap-1 font-normal text-lg text-red-500 mt-4"
            activeProps={{
              className: "font-bold",
            }}
          >
            <Layers strokeWidth={1.1} />
            Logout
          </Link>
        </div>
        {/* </nav> */}
      </div>
    </ScrollArea>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const router = useRouter();
  const isActive = router.state.location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "block relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600",
        isActive && "bg-blue-900 text-white"
      )}
      activeProps={{
        className: "bg-blue-900 text-white",
      }}
    >
      <div className="flex flex-col">
        <span>
          <sub>{label}</sub>
        </span>
      </div>
    </Link>
  );
}
