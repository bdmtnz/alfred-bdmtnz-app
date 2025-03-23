'use client'

import Button from "@/shared/components/button/Button";
import Card from "@/shared/components/card/Card";
import Input from "@/shared/components/input/Input";
import MagnifierIcon from "@public/icons/magnifier.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Explorer: React.FC<{ keywordParam?: string | null }> = ({ keywordParam }) => {
    const router = useRouter();
    const [keyword, setKeyword] = useState<string>(keywordParam ?? "");

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }
    return (
        <div className="flex flex-col gap-4 bg-transparent">
            <div className="flex items-center justify-between mt-5 mb-6">
                <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-4xl">
                    SkyConnect Explorer
                </h1>
                <div className="max-w-[760px] w-full px-20">
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
                <div className="grid w-[240px]">
                    <Button
                        icon={<MagnifierIcon/>}
                        onClick={() => router.push(`/explorer?keyword=${keyword}`)}
                        text="Buscar"
                    />
                </div>
            </div>
            <div className="h-full bg-blue-500 flex flex-col justify-center">
                <div className="overflow-y-auto grid grid-cols-2 gap-8 bg-amber-600">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div> 
            </div>         
        </div>
    );
}

export default Explorer;