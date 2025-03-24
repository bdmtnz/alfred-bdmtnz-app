/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { Airport } from "@/shared/models/airport.model";
import useGetAirports from "./data.hooks";

const useExplorerStateManager = (keywordParam?: string | null) => {
    const [keyword, setKeyword] = useState<string>(keywordParam ?? "");
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState<Airport[]>([]);
    const [filtered, setFiltered] = useState<Airport[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    const { data, isLoading, isSuccess, isError, refetch } = useGetAirports(currentPage - 1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if (isSuccess) {
            setPage(data.data);
            setFiltered(data.data);
            setTotalPages(data.pagination.total);  
        }   
    }, [isSuccess, data]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {   
        if (currentPage) {
            refetch();
        }
    }, [currentPage])

    useEffect(() => {
        if (!keyword) {
            setFiltered(page);
            return;
        }
        const filtered = page.filter((airport) => 
            airport.airport_name.toLowerCase().includes(keyword.toLowerCase()) ||
            airport.airport_id.toLowerCase().includes(keyword.toLowerCase())
        );
        setFiltered(filtered);
    }, [keyword, page])

    return {
        keyword,
        filtered,
        totalPages,
        isSuccess,
        isLoading,
        isError,
        currentPage,
        handlePageChange,
        handleKeywordChange
    }
};

export default useExplorerStateManager;