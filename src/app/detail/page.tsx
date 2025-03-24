'use client'

import Detail from "@/pages/detail/Detail";
import { globalStore } from "@/shared/stores/global.store";
import { useSearchParams } from "next/navigation";

const DetailPage = () => {
    const searchParams = useSearchParams()
    const numberParam = searchParams?.get('number')
    
    const { airport } = globalStore.getState();
    
    return (
        <Detail airport={airport} numberParam={numberParam}/>
    );
}

export default DetailPage;