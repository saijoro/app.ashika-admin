import { $fetch } from "@/utils/fetch";


export const fileUploadAPI = async (payload: any) => {
    try {
      return await $fetch.post(`/upload-presigned-url`, payload);
    } catch (err) {
      throw err;
    }
  };

export const uploadToS3API = async (url: string, file: File) => {
    try {
        const options = {
            method : "PUT",
            body: file
        }
       return await fetch (url,options);
    } catch (err) {
        throw err;
    }
}

export const filePreviewAPI = async (payload: any) => {
  try {
    return await $fetch.post(`/download-presigned-url`, payload);
  } catch (err) {
    throw err;
  }
};