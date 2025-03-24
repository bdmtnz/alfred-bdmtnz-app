'use client';

import Button from "@/shared/components/button/Button";
import Card from "@/pages/explorer/components/Card";
import Input from "@/shared/components/input/Input";
import MagnifierIcon from "@public/icons/magnifier.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Paginator from "./components/Paginator";
import SpawnToUp from "@/shared/transitions/SpawnToUp";
import type { Airport } from "@/shared/models/airport.model";
import Link from "next/link";
import useGetAirports from "./hooks/explorer.hooks";

const Explorer: React.FC<{ keywordParam?: string | null }> = ({ keywordParam }) => {
    const router = useRouter();
    const [keyword, setKeyword] = useState<string>(keywordParam ?? "");
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState<Airport[]>([]);
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
            setTotalPages(data.pagination.total);  
        }   
    }, [isSuccess, data]);

    useEffect(() => {   
        if (currentPage) {
            refetch();
        }
    }, [currentPage, refetch])

    return (
        <SpawnToUp className="page flex flex-col gap-4 bg-transparent">
            <div className="flex items-center justify-between mt-5 mb-6">
                <Link href="/"
                    className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-4xl text-nowrap cursor-pointer">
                    SkyConnect Explorer
                </Link>
                <div className="w-full px-20">
                    <Input
                        htmlForLabel={""}
                        label={""}
                        defaultErrorLabel={""}
                        placeholder="Buscar aeropuertos..."
                        isRequired={false}
                        type={"text"}
                        onChange={handleKeywordChange} 
                        value={keyword}
                        name={"KeywordEntry"}
                    />
                </div>
                <div className="grid w-[218px]">
                    <Button
                        icon={<MagnifierIcon/>}
                        onClick={() => router.push(`/explorer?keyword=${keyword}`)}
                        text="Buscar"
                    />
                </div>
            </div>
            <div className="h-full flex flex-col justify-center overflow-y-auto">
                {isLoading && <p>Cargando...</p>}
                {isError && <p>Ocurrió un error al cargar los aeropuertos</p>}
                {isSuccess && 
                    <div className="grid grid-cols-2 gap-6">
                        {page.map((airport) => (
                            <Card key={airport.airport_id} airport={airport} />
                        ))}
                    </div>
                }
            </div>
            <div className="flex justify-center items-center h-auto my-4">
                <Paginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>     
        </SpawnToUp>
    );
}

export default Explorer;