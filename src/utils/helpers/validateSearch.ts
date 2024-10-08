type ProductSearch = {
  page?: number;
  limit?: number;
  sort_by?: string;
  sort_type?: string;
};

export const validateSearch = (
  search: Record<string, unknown>
): ProductSearch => {
  return {
    page: Number(search?.page ?? 1),
    limit: Number(search?.limit ?? 10),
    sort_by: search?.sort_by as string,
    sort_type: search?.sort_type as string,
  };
};
