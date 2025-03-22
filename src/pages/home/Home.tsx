'use client'

import Button from "@/shared/components/button/Button";
import Input from "@/shared/components/input/Input";
import MagnifierIcon from "@public/icons/magnifier.svg";

const Home: React.FC = () => {
    return (
        <div className="w-full grid items-center justify-center h-dvh gap-4 bg-transparent">
            <div className="grid gap-20">
                <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-8xl">
                    SkyConnect Explorer
                </h1>
                <div className="grid gap-6 px-24">
                    <div className="grid">
                        <Input
                            htmlForLabel={""}
                            label={""}
                            defaultErrorLabel={""}
                            placeholder="Buscar aeropuertos..."
                            isRequired={false}
                            type={"text"}
                            name={"KeywordEntry"}
                        />
                    </div>
                    <div className="grid justify-center">                        
                        <div className="grid w-[240px]">
                            <Button
                                icon={<MagnifierIcon/>}
                                onClick={() => {}}
                                text="Buscar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
