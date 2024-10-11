import TanStackTable from "@/components/core/Table/TanstackTable";
import { getAllPaginatedReports } from "@/utils/services/reports";
import {
  useMutation,
  usePrefetchQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { PaginationState, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { ResponseDataType, testColumns } from "./testColumns";
import Loading from "../core/Loading";
import { Button } from "../ui/button";
import { useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { addSerial } from "@/lib/helpers/addSerial";
import PreviewFile from "../core/CommonComponents/PreviewFile";
import DeleteResearchReports from "../core/CommonComponents/DeleteResearchReport";

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
  const location = useLocation();
  const router = useRouter();
  const queryClient = useQueryClient();

  const searchParams = new URLSearchParams(location.search);
  const pageIndexParam = Number(searchParams.get("current_page")) || 1;
  const pageSizeParam = Number(searchParams.get("page_size")) || 10;
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndexParam,
    pageSize: pageSizeParam,
  });
  const { mutate, isError, error, data, isPending } = useMutation({
    mutationFn: async () => {
      const response = await getAllPaginatedReports({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        asset_group,
        asset_type,
        asset_category,
      });

      const queryParams = {
        current_page: pagination.pageIndex,
        page_size: pagination.pageSize,
      };

      router.navigate({
        to: `/${asset_group}/${asset_type}`,
        search: queryParams,
      });

      return response;
    },
    onError: (err) => {
      console.error("Error fetching reports:", err);
    },
    onSuccess: (data) => {
      console.log("Fetched reports:", data);
    },
  });

  // mutate();

  // usePrefetchQuery({
  //   queryKey: ["articles"],
  //   queryFn: (...args) => {
  //     return getArticles(...args);
  //   },
  // });

  const getAllReports = async ({ pageIndex, pageSize }: any) => {
    setPagination({ pageIndex, pageSize });
    mutate();
  };

  const paginationInfo = data?.data?.data?.pagination_info;
  const records = data?.data?.data?.records;
  const recordsWithSerials = addSerial(
    records,
    paginationInfo?.current_page,
    paginationInfo?.page_size
  );
  const handleNavigation = () => {
    navigate({
      to: `/${asset_group}/${asset_type}/add`,
    });
  };

  const columnHelper = createColumnHelper<ResponseDataType>();

  const actionsColumns = [
    columnHelper.accessor("actions", {
      header: () => "Actions",
      cell: (info: any) => {
        return (
          <div>
            <PreviewFile info={info} />
            <DeleteResearchReports
              info={info}
              getAllReports={
                () =>
                  getAllPaginatedReports({
                    pageIndex: pagination.pageIndex,
                    pageSize: pagination.pageSize,
                    asset_group,
                    asset_type,
                    asset_category,
                  })
                // getAllReports({
                //   pageIndex: pagination.pageIndex,
                //   pageSize: pagination.pageSize,
                // })
              }
            />
          </div>
        );
      },
      footer: (info) => info.column.id,
    }),
  ];

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
              data={recordsWithSerials}
              columns={[...testColumns, ...actionsColumns]}
              paginationDetails={paginationInfo}
              getData={getAllReports}
            />
          </div>
        )}
        <Loading loading={isPending} />
      </div>
    </div>
  );
};

export default Reports;
