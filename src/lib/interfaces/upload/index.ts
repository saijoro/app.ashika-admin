
import { Dispatch, SetStateAction } from "react";

export interface fileUploadProps {
  accept: string;
  setFileKey: Dispatch<SetStateAction<string>>;
  type?: string
}
export interface fileProps {
  accept: string;
  type?: string
}


export interface thumbnailUploadProps {
  accept: string;
}

export interface fileDetail {
  fileName: string;
  fileSize: string;
  fileType?: string;
}