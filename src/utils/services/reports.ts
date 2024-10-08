import { $fetch } from "../fetch"

interface GetAllPaginatedReportPropTypes {
    reportType: string
    reportGroup: string
    categoryType: string
    pageIndex: number
    pageSize: number
}

export const getAllPaginatedReports = async ({ reportType, reportGroup, categoryType, pageIndex, pageSize }: GetAllPaginatedReportPropTypes) => {
    try {
        // return await $fetch.get(`reports?page=${pageIndex}&limit=${pageSize}&report_group=${reportGroup}&report_type=${reportType}&category_type=${categoryType}`)
        const queryParams = {
            page: pageIndex,
            limit: pageSize,
            report_group: reportGroup,
            report_type: reportType,
            category_type: categoryType
        }
        return await $fetch.get("/research-reports/monthly-insights-reports", queryParams);
        
    } catch (err) {
        throw err
    }
    
}