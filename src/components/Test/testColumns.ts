import { createColumnHelper } from "@tanstack/react-table";

interface ResponseDataType {
  id: number;
  title: string;
  date: string;
  file_key: string;
  thumbnail_key: string;
  created_at: string;
  updated_at: string;
}
const columnHelper = createColumnHelper<ResponseDataType>();

export const testColumns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => row.date, {
    id: "date",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("file_key", {
    header: () => "File Key",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];