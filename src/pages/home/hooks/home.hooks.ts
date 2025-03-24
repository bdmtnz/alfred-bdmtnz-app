import { globalStore } from "@/shared/stores/global.store";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useHomeStateManager = () => {
    const router = useRouter();
    const {setKeyword} = globalStore.getState();
    const [keywordParam, setKeywordParam] = useState<string>('');

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywordParam(e.target.value);
        setKeyword(e.target.value);
    }

    const handleRedirect = () => {
        router.push('/explorer');
    }

    return {
        keywordParam,
        handleKeywordChange,
        handleRedirect
    }
};

export default useHomeStateManager;