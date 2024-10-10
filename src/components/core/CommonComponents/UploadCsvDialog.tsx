import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import FileUpload from "./UploadPage";

const UploadCsvDialog = ({
  openOrNot,
  onCancelClick,
  onOKClick,
  uploadLoading,
  setFileUpload,
}: {
  openOrNot: boolean;
  onCancelClick: () => void;
  onOKClick: () => void;
  uploadLoading: boolean;
  setFileUpload: any;
}) => {
  return (
    <AlertDialog open={openOrNot}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <FileUpload accept=".csv" setFileKey={setFileUpload} type="import" />
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancelClick}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white"
            onClick={onOKClick}
          >
            {uploadLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UploadCsvDialog;
