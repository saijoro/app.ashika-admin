import { cn } from "@/lib/utils";
import { useLocation } from "@tanstack/react-router";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronRight,
  CircleArrowRight,
  Layers,
  LayoutDashboard,
  Scale,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
function SideMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <ScrollArea className="h-[calc(100vh-5rem)]">
      <div className="mx-4 my-8 text-black text-md flex ">
        <div>
          <ul className="space-y-1 text-gray-600 mt-3">
            <li>
              <h6 className="text-sm text-blue-800">MAIN</h6>
              <Link
                href="/users"
                activeProps={{
                  className: "bg-blue-900 text-white  ",
                }}
                activeOptions={{ exact: true }}
              >
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/margin-updates")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/margin-updates")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/fund-transfer")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/download")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                to="/research-reports/daily-insights-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/daily-insights-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/weekly-insights-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>
                      <sub>Weekly Insights Report</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/research-reports/monthly-insights-reports"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/monthly-insights-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>
                      <sub>Monthly Insights Reports</sub>
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/fundamental-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/special-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/mutual-fund-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/research-reports/commodity-currency-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
              <h6 className="text-sm text-blue-800">ACCL INVESTOR RELATIONS</h6>
              <Link
                to="/accl-reports/policies"
                activeProps={{
                  className: "bg-blue-900 text-white",
                }}
                activeOptions={{ exact: true }}
              >
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/accl-reports/policies")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/accl-reports/familirization-programmie")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/accl-reports/investor-relation-documents")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
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
                <div
                  className={`relative flex items-center gap-3 px-2 py-1  text-gray-600 ${
                    isActive("/accl-reports/annual-reports")
                      ? "bg-blue-100 rounded "
                      : "hover:bg-blue-100 rounded"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>
                      <sub>Annual Return</sub>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <Link
            to="/login"
            activeProps={{
              className: "font-bold",
            }}
            className="flex justify-start items-center gap-1 font-normal text-lg text-red-500  "
          >
            <Layers strokeWidth={1.1} />
            Logout
          </Link>
        </div>
      </div>
    </ScrollArea>
  );
}
export default SideMenu;
