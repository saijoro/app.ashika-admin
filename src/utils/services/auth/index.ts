import { ILoginAPI } from "@/lib/interfaces/auth/login";
import { $fetch } from "@/utils/fetch";

export const loginAPI = async ({ payload }: ILoginAPI) => {
  try {
    return await $fetch.post("/auth/login", payload);
  } catch (err) {
    throw err;
  }
};
