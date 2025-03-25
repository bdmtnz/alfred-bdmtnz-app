'use client';

import Button from "@/shared/components/button/Button";
import Card from "@/pages/explorer/components/Card";
import Input from "@/shared/components/input/Input";
import MagnifierIcon from "@public/icons/magnifier.svg";
import Paginator from "./components/Paginator";
import SpawnToUp from "@/shared/transitions/SpawnToUp";
import Link from "next/link";
import useExplorerStateManager from "./hooks/explorer.hooks";
import PaginatorMobile from "./components/PaginatorMobile";
import FilteredCardContainer from "./components/FilteredCardContainer";

const Explorer = () => {
    const {
        isMobile,
        keyword,
        filtered,
        totalPages,
        isSuccess,
        isLoading,
        isError,
        currentPage,
        handlePageChange,
        handleKeywordChange,
        handleSearchClick
    } = useExplorerStateManager();

    return (
        <SpawnToUp className="page flex flex-col gap-4 bg-transparent">
            <div className="flex flex-col xl:flex-row items-center justify-between mt-5 mb-6">
                <Link href="/"
                    className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-center text-4xl sm:text-5xl md:text-6xl xl:text-4xl sm:text-left md:text-nowrap cursor-pointer mb-4 xl:mb-0">
                    SkyConnect Explorer
                </Link>
                <div className="w-full xl:w-auto xl:flex-1 px-0 xl:px-10 mb-4 xl:mb-0">
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
                <div className="grid w-full xl:w-auto">
                    <Button
                        icon={<MagnifierIcon/>}
                        onClick={handleSearchClick}
                        text="Buscar"
                    />
                </div>
            </div>
            <div className="h-full flex flex-col justify-center overflow-y-auto">
                {isLoading && <p className="font-bold text-center">Cargando...</p>}
                {isError && <p className="font-bold text-center">Límite de peticiones gratis alcanzada</p>}
                {isSuccess && <FilteredCardContainer items={filtered}/>}
                {filtered.length === 0 && !isError && !isLoading && <p className="font-bold text-center">No se encontraron resultados para la búsqueda con {keyword}</p>}
            </div>
            <div className="flex justify-center items-center h-auto my-4">
                {isMobile ? (
                    <PaginatorMobile
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                ) : (
                    <Paginator
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>     
        </SpawnToUp>
    );
}

export default Explorer;