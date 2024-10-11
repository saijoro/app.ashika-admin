export const fundTransferColumns = [
  {
    accessorFn: (row: any) => row.serial,
    id: "serial",
    header: () => <span>S.No</span>,
    footer: (props: any) => props.column.id,
    width: "60px",
    maxWidth: "60px",
    minWidth: "60px",
  },
  {
    accessorFn: (row: any) => row.dp_id,
    id: "dp_id",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span> DP Id</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.dp_account_no,
    id: "dp_account_no",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>DP Account No</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.client_name,
    id: "client_name",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>Client Name</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.bank_name,
    id: "bank_name",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>Bank Name</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.bank_account_no,
    id: "bank_account_no",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>Account No</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.amount_paid,
    id: "amount_paid",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>Paid Amount</span>,
    footer: (props: any) => props.column.id,
  },
  {
    accessorFn: (row: any) => row.amount_due,
    id: "amount_due",
    cell: (info: any) => {
      let title = info.getValue();
      return <span>{title ? title : "-"}</span>;
    },
    width: "150px",
    maxWidth: "150px",
    minWidth: "150px",
    header: () => <span>Due Amount</span>,
    footer: (props: any) => props.column.id,
  },
];
