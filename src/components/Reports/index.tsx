import TanStackTable from "@/components/core/Table/TanstackTable";
import { getAllPaginatedReports } from "@/utils/services/reports";
import { useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { testColumns } from "./testColumns";
import Loading from "../core/Loading";
interface ReportProps {
  reportGroup: string;
  reportType: string;
  categoryType: string;
}
const Reports: React.FC<ReportProps> = ({
  reportGroup,
  reportType,
  categoryType,
}) => {
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
        reportGroup,
        reportType,
        categoryType,
      }),
  });

  const getAllReports = async ({ pageIndex, pageSize }: any) => {
    setPagination({ pageIndex, pageSize });
  };

  return (
    <div className="relative">
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
  );
};

export default Reports;
