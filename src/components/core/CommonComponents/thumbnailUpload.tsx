import { thumbnailUploadProps } from "@/lib/interfaces/upload";
import useUploadFileHook from "./useUploadFileHook";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ThumbnailPreview = ({
  accept,
  setThumbnailKey,
  errMessage,
}: thumbnailUploadProps) => {
  const {
    startUploading,
    handleFileDrop,
    handleDragOver,
    handleFileSelect,
    selectedFiles,
    uploadSuccess,
    handleRemoveFile,
    isDragging,
    preview,
  } = useUploadFileHook({
    accept,
    setFileKey: setThumbnailKey,
  });

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];
  //     if (file) {
  //       const objectUrl = URL.createObjectURL(file);
  //       setPreview(objectUrl);
  //       handleFileSelect(event);
  //     }
  //   };

  return (
    <div className="lg:w-1/3 space-y-4">
      <div
        className={`border rounded-lg p-4 h-48 flex items-center justify-center ${
          isDragging ? "border-blue-500 bg-blue-50" : ""
        }`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="h-full w-auto object-contain"
          />
        ) : (
          <p className="text-gray-400">Drag & Drop the Thumbnail</p>
        )}
      </div>
      <input
        type="file"
        accept={accept}
        id="file-input"
        className="hidden"
        onChange={handleFileSelect}
      />
      <Button
        variant="outline"
        className={`w-full ${
          startUploading ? "bg-gray-300 cursor-not-allowed" : ""
        }`}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        Upload Preview Image
      </Button>
      {errMessage && <p className="text-red-500">{errMessage}</p>}
    </div>
  );
};

export default ThumbnailPreview;
