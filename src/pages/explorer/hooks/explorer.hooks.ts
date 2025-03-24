/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { Airport } from "@/shared/models/airport.model";
import useGetAirports from "./data.hooks";
import { globalStore } from "@/shared/stores/global.store";

const useExplorerStateManager = () => {
    const {keyword, setKeyword} = globalStore.getState();
    const [keywordParam, setKeywordParam] = useState<string>(keyword);
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
        setKeywordParam(e.target.value);
        if (!e.target.value) {
            setFiltered(page);
        }
    }

    const handleSearchClick = () => handleFilter(page);

    const handleFilter = (datasource: Airport[]) => {
        if (!keyword) {
            setFiltered(datasource);
            return;
        }
        const filtered = datasource.filter((airport) => 
            airport.airport_name.toLowerCase().includes(keyword.toLowerCase()) ||
            airport.airport_id.toLowerCase().includes(keyword.toLowerCase())
        );
        setFiltered(filtered);
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (isSuccess) {
            setPage(data.data);
            handleFilter(data.data);
            setTotalPages(data.pagination.total);  
        }   
    }, [isSuccess, data]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {   
        if (currentPage) {
            refetch();
        }
    }, [currentPage])

    return {
        keyword: keywordParam,
        filtered,
        totalPages,
        isSuccess,
        isLoading,
        isError,
        currentPage,
        handlePageChange,
        handleKeywordChange,
        handleSearchClick
    }
};

export default useExplorerStateManager;