import { Link, useNavigate } from "@tanstack/react-router"
import { ChevronRight, CircleArrowRight, Layers, LayoutDashboard, Scale } from "lucide-react"

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="mx-4 my-12 text-blue-500 text-sm">
      <p className="text-md font-light uppercase"> Research Reports</p>
      <Link
        to="/research-reports/daily-insights-reports"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Daily Insights Reports
      </Link>
      <Link
        to="/research-reports/weekly-insights-reports"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Weekly Insights Reports
      </Link>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Monthly Insights Reports
      </Link>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Fundamental Reports
      </Link>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Special Reports
      </Link>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Mutual Fund Reports
      </Link>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Commodity & Currency Reports
      </Link>
      {/* <Link
        to="/services/request"
        activeProps={{
          className: 'font-bold',
        }}
        className="flex justify-start items-center gap-3 font-normal mb-10"
        hash={Date.now().toString()}
        onClick={(e) => {
          e.preventDefault();
          navigate({
            to: '/services/request',
            search: { hash: Date.now() }
          });
        }}
      >
        <Scale strokeWidth={1.1} />
        Services
      </Link> */}
      <p className="text-md font-light uppercase mt-6"> ACCL Reports</p>
      <Link
        to="/about"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Policies
      </Link>
      <Link
        to="/about"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Familiarization Programme
      </Link>
      <Link
        to="/about"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Investor Relation Documents
      </Link>
      <Link
        to="/about"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        className="flex justify-start items-center py-2 font-normal text-black"
      >
        <ChevronRight size={20} strokeWidth={1} />
        Annual Reports
      </Link>

      <Link
        to="/login"
        activeProps={{
          className: 'font-bold',
        }}
        className="flex justify-start items-center gap-1 font-normal text-lg text-red-500 absolute bottom-10"
      >
        <Layers strokeWidth={1.1} />
        Logout
      </Link>
    </div>
  )
}

export default SideMenu