
import { Dispatch, SetStateAction } from "react";

export interface fileUploadProps {
    accept: string;
    setFileKey: Dispatch<SetStateAction<string>>;
  }
  export interface thumbnailUploadProps {
    accept: string;
    setThumbnailKey: Dispatch<SetStateAction<string>>;
    errMessage: string;
  }
  
  export interface fileDetail {
    fileName: string;
    fileSize: string;
    fileType?: string;
  }