'use client'

import Button from "@/shared/components/button/Button";
import Input from "@/shared/components/input/Input";
import SpawnToUp from "@/shared/transitions/SpawnToUp";
import MagnifierIcon from "@public/icons/magnifier.svg";
import useHomeStateManager from "./hooks/home.hooks";

const Home: React.FC = () => {
    const {
        keywordParam,
        handleKeywordChange,
        handleRedirect
    } = useHomeStateManager();
    
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
                        value={keywordParam}
                        name={"KeywordEntry"}
                    />
                </div>
                <div className="grid w-[240px] h-[52px]">
                    <Button
                        icon={<MagnifierIcon/>}
                        onClick={handleRedirect}
                        text="Buscar"
                    />
                </div>
            </div>
        </SpawnToUp>
    );
}

export default Home;
