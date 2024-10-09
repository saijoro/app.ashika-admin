import { apiPropsForQueryParams } from "@/lib/helpers/prepareQueryParams";
import { $fetch } from "../fetch";


export const getAllFundTransferAPI = async (
  params: Partial<apiPropsForQueryParams>
) => {
  try {
    return await $fetch.get("/fund-transfers/dp-clients", params);
  } catch (err) {
    throw err;
  }
};

export const deleteClientAPI = async (id: number) => {
  try {
    return await $fetch.delete(`/fund-transfers/dp-clients/${id}`);
  } catch (err) {
    throw err;
  }
};

export const getExportDpClientsAPI = async (queryParams:any) => {
  try {
    const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fund-transfers/dp-clients/export`);
     if(response.status == 200 || response.status == 201){
      return await response.text();
    }else{
      throw await response.json()
     }
   } catch (err: any) {
    console.log(err);
  }
}

export const getSingleCategoryAPI = async (id: number) => {
  try {
    return await $fetch.get(`/categories/${id}`);
  } catch (err) {
    throw err;
  }
};

export const addClientAPI = async (payload: any) => {
  try {
    return await $fetch.post(`/fund-transfers/dp-clients`, payload);
  } catch (err) {
    throw err;
  }
};

export const importClientAPI = async (formData: any) => {
  try {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fund-transfers/dp-clients/import`, {
      method: 'POST',
      body: formData,
    });
  } catch (err) {
    throw err;
  }
};
