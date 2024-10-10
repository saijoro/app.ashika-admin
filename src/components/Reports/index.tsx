import TanStackTable from "@/components/core/Table/TanstackTable";
import { getAllPaginatedReports } from "@/utils/services/reports";
import { useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { testColumns } from "./testColumns";
import Loading from "../core/Loading";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
interface ReportProps {
  asset_group: string;
  asset_type: string;
  asset_category: string;
}
const Reports: React.FC<ReportProps> = ({
  asset_group,
  asset_type,
  asset_category,
}) => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["projects", pagination],
    queryFn: async () =>
      await getAllPaginatedReports({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        asset_group,
        asset_type,
        asset_category,
      }),
  });

  const getAllReports = async ({ pageIndex, pageSize }: any) => {
    setPagination({ pageIndex, pageSize });
  };
  const handleNavigation = () => {
    navigate({
      to: `/${asset_group}/${asset_type}/add`,
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-end mb-4">
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleNavigation}
        >
          Add
        </Button>
      </div>
      <div>
        {isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <TanStackTable
              data={data?.data?.data}
              columns={testColumns}
              paginationDetails={data?.data}
              getData={getAllReports}
            />
          </div>
        )}
        <Loading loading={isLoading || isFetching} />
      </div>
    </div>
  );
};

export default Reports;
