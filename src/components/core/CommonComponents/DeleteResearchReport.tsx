import { Button } from "@/components/ui/button";
// import { deleteResearchReportsAPI } from "@/lib/services/researchReports";
import Image from "next/image";
import { useState } from "react";
// import { toast } from "sonner";
import DeleteDialog from "../deleteDialog";
import { deleteReportAPI } from "@/utils/services/reports";
import { useMutation } from "@tanstack/react-query";

interface deleteProps {
  info: any;
  getAllMonthlyInsightReports: ({
    page,
    limit,
    sort_by,
    sort_type,
  }: Partial<any>) => void;
}

const DeleteResearchReports = ({
  info,
  getAllMonthlyInsightReports,
}: deleteProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [reportId, setReportId] = useState(0);
  const [loading, setLoading] = useState(false);

  const { mutate, isPending, isError, error, data, isSuccess } = useMutation({
    mutationFn: async (id: number) => {
      return await deleteReportAPI(id);
    },
  });

  const handleDeleteClick = () => {
    mutate(reportId);
  };

  const handleDelete = (id: number) => {
    setDeleteDialogOpen(true);
    setReportId(id);
  };

  return (
    <>
      <Button
        title="delete"
        onClick={() => handleDelete(info.row.original.id)}
        size={"sm"}
        variant={"ghost"}
      >
        <img src={"/table/delete.svg"} alt="view" height={16} width={16} />
      </Button>
      <DeleteDialog
        openOrNot={deleteDialogOpen}
        onCancelClick={() => setDeleteDialogOpen(false)}
        label="Are you sure you want to delete this file?"
        onOKClick={handleDeleteClick}
        deleteLoading={loading}
      />
    </>
  );
};
export default DeleteResearchReports;
