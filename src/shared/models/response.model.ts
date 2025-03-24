export interface Pagination {
    offset: number;
    limit: number;
    count: number;
    total: number;
}

export interface ApiResponse<T> {
    pagination: Pagination;
    data: T;
}