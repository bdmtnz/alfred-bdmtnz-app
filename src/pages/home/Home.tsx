'use client'

import Button from "@/shared/components/button/Button";
import Input from "@/shared/components/input/Input";
import SpawnToUp from "@/shared/transitions/SpawnToUp";
import MagnifierIcon from "@public/icons/magnifier.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home: React.FC = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState<string>("");

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    return (
        <SpawnToUp className="flex flex-col bg-transparent items-center justify-center gap-[170px]">
            <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-8xl text-center">
                SkyConnect Explorer
            </h1>
            <div className="w-full items-center flex flex-col gap-10">
                <div className="max-w-[780px] w-full">
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
                <div className="grid w-[240px] h-[52px]">
                    <Button
                        icon={<MagnifierIcon/>}
                        onClick={() => router.push(`/explorer?pageNumber=1&keyword=${keyword}`)}
                        text="Buscar"
                    />
                </div>
            </div>
        </SpawnToUp>
    );
}

export default Home;
