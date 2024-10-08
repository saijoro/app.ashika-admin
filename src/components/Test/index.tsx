import TanStackTable from "@/components/core/Table/TanstackTable";
import { getAllPaginatedReports } from "@/utils/services/reports";
import { useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { testColumns } from "./testColumns";

function Todos() {
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
        reportType: "weekly_insights",
        reportGroup: "research_reports",
        categoryType: "projects",
      }),
  });
    console.log({ data }, 'test');
    
    const getAllReports = async ({ pageIndex, pageSize }: any) => {
        setPagination({ pageIndex, pageSize })
}

  return (
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
     
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default Todos;