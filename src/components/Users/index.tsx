import TanStackTable from "@/components/core/Table/TanstackTable";
import { useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import Loading from "../core/Loading";
import { Button } from "../ui/button";
import { useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { getAllPaginatedUsers } from "@/utils/services/users";
import { userColumns } from "./UserColumns";
import { addSerial } from "@/lib/helpers/addSerial";

const Users = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const router = useRouter();

  const searchParams = new URLSearchParams(location.search);
  const pageIndexParam = Number(searchParams.get("current_page")) || 1;
  const pageSizeParam = Number(searchParams.get("page_size")) || 10;

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndexParam,
    pageSize: pageSizeParam,
  });

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["projects", pagination],
    queryFn: async () => {
      const response = await getAllPaginatedUsers({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      });

      const queryParams = {
        current_page: +pagination.pageIndex,
        page_size: +pagination.pageSize,
    };
      router.navigate({
        to: "/users",
        search: queryParams,
      });

      return response;
    },
    staleTime: 5000,
  });

  const usersData = addSerial(
    data?.data?.data?.records,
    data?.data?.data?.pagination_info?.current_page,
    data?.data?.data?.pagination_info?.page_size
  ) || [];

  const getAllUsers = async ({ pageIndex, pageSize }: any) => {
    setPagination({ pageIndex, pageSize });
  };

  const handleNavigation = () => {
    navigate({
      to: "/users/add",
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
              data={usersData}
              columns={userColumns}
              paginationDetails={data?.data?.data?.pagination_info}
              getData={getAllUsers}
            />
          </div>
        )}
        <Loading loading={isLoading || isFetching} />
      </div>
    </div>
  );
};

export default Users;
