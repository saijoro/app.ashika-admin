import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";

import PreviewFile from "../core/CommonComponents/PreviewFile";
import DeleteResearchReports from "../core/CommonComponents/DeleteResearchReport";

export interface ResponseDataType {
  id: number;
  title: string;
  date: string;
  file_key: string;
  thumbnail_key: string;
  created_at: string;
  updated_at: string;
  serial: number;
  actions: any;
}

const columnHelper = createColumnHelper<ResponseDataType>();

export const testColumns = [
  columnHelper.accessor("serial", {
    header: () => "S.No",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("title", {
    header: () => "Title",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.created_at, {
    header: () => "Date",
    id: "created_at",
    cell: (info) => {
      const date: string = info.getValue();
      return <span>{date ? dayjs(date).format("MMMM YYYY") : "-"}</span>;
    },
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor("actions", {
  //   header: () => "Actions",
  //   cell: (info: any) => {
  //     return (
  //       <div>
  //         <PreviewFile info={info} />
  //         <DeleteResearchReports info={info} getAllReports={getAllReports} />
  //       </div>
  //     );
  //   },
  //   footer: (info) => info.column.id,
  // }),
];
