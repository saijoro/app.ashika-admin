import { cn } from "@/lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronRight,
  CircleArrowRight,
  Layers,
  LayoutDashboard,
  Scale,
} from "lucide-react";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <nav
        className={cn(
          "fixed h-[100vh] w-60 bg-white text-gray-800 py-4 px-3",
          "shadow-lg border-r border-gray-200 overflow-y-auto"
        )}
      >
        <div>
          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">MAIN</h6>
              <Link
                href="/users"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Users</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/margin-updates"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Margin Updates</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/fund-transfer"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Fund Transfer</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Downloads</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>

          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">RESEARCH REPORTS</h6>
              <Link
                to="/research-reports/monthly-insights-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Monthly Insights</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/daily-insights-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Daily Insights Reports</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/weekly-insights-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Weekly Insight Report</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/fundamental-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Fundamental Reports</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/special-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  {/* <Image
                    src="/core/table/document-tick.svg"
                    alt="special-reports"
                    width={15}
                    height={15}
                  /> */}
                  <div className="flex flex-col">
                    <span>
                      <sub>Special Reports</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/mutual-fund-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Mutual Fund Report</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/commodity-currency-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Commodity Currency Reports</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">
                ACCL - INVESTOR RELATIONS
              </h6>
              <Link
                href="/accl/policies"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Policies</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/accl-reports/familirization-programmie"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Familirization Programmie</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/accl-reports/investor-relation-documents"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Investor Relation Documents</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/accl-reports/annual-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div className="relative flex items-center gap-3 px-2 py-1 hover:bg-blue-100 text-gray-600">
                  <div className="flex flex-col">
                    <span>
                      <sub>Annual Return</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideMenu;
