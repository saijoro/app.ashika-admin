import { $fetch } from "../fetch";

interface GetAllPaginatedReportPropTypes {
  pageIndex: number;
  pageSize: number;
  asset_group: string;
  asset_type: string;
  asset_category: string;
}

export const getAllPaginatedReports = async ({
  pageIndex,
  pageSize,
  asset_group,
  asset_type,
  asset_category,
}: GetAllPaginatedReportPropTypes) => {
  try {
    // return await $fetch.get(`reports?page=${pageIndex}&limit=${pageSize}&report_group=${reportGroup}&report_type=${reportType}&category_type=${categoryType}`)
    const queryParams = {
      page: pageIndex,
      page_size: pageSize,
      asset_group,
      asset_type,
      asset_category,
    };
    return await $fetch.get("/assets", queryParams);
  } catch (err) {
    throw err;
  }
};
