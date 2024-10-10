import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { FC, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./Pagination";
import { getRouteApi } from "@tanstack/react-router";

interface pageProps {
  columns: any[];
  data: any[];
  loading?: boolean;

  getData?: any;
  paginationDetails: any;
  removeSortingForColumnIds?: string[];
}

const TanStackTable: FC<pageProps> = ({
  columns,
  data,
  loading = false,
  getData,
  paginationDetails,
  removeSortingForColumnIds,
}) => {
  // const { page, limit, sort_by, sort_type } = testAPI.useSearch();

  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const capturePageNum = (value: number) => {
    // getData({ pageIndex: value, pageSize: limit });
  };
  const captureRowPerItems = (value: number) => {
    // getData({ pageIndex: 1, pageSize: value });
  };
  const SortItems = ({ header }: { header: { id: string } }) => (
    <img
      src={
        ""
        // sort_by === header.id
        //   ? sort_type === "asc"
        //     ? "/core/table/sort-asc.svg"
        //     : "/core/table/sort-desc.svg"
        //   : "/core/table/un-sort.svg"
      }
      height={28}
      width={28}
      alt={"unSort"}
    />
  );

  const getWidth = (id: string) => {
    const widthObj = columns.find((col) => col.id === id);
    return widthObj ? widthObj?.width || "100px" : "100px";
  };

  const sortAndGetData = (header: any) => {
    if (
      removeSortingForColumnIds &&
      removeSortingForColumnIds.includes(header.id)
    ) {
      return;
    }

    // const orderBy = sort_by === header.id ? header.id : "";
    // const orderType =
    //   sort_by === header.id && sort_type === "asc"
    //     ? "desc"
    //     : "asc";

    // getData({
    //   page: 1,
    //   orderBy,
    //   orderType,
    // });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="max-h-[100vh] overflow-y-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header: any, index: number) => {
                    return (
                      <TableHead
                        key={index}
                        colSpan={header.colSpan}
                        style={{
                          minWidth: getWidth(header.id),
                          width: getWidth(header.id),
                          color: "#000",
                          background: "#F0EDFF",
                        }}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                            }}
                            onClick={() => sortAndGetData(header)}
                            className="flex items-center gap-2 cursor-pointer"
                            style={{
                              minWidth: getWidth(header.id),
                              width: getWidth(header.id),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {/* <SortItems header={header} /> */}
                          </div>
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>
          <TableBody>
            {data?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="p-1.5" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : !loading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <img
                    src="/No-Files.jpg"
                    alt="No Data"
                    height={150}
                    width={250}
                  />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination
        paginationDetails={paginationDetails}
        capturePageNum={capturePageNum}
        captureRowPerItems={captureRowPerItems}
      />
    </div>
  );
};

export default TanStackTable;
