'use client'

import Detail from "@/pages/detail/Detail";
import { useSearchParams } from "next/navigation";

const DetailPage = () => {
    const searchParams = useSearchParams()
    const numberParam = searchParams?.get('number')
    
    return (
        <Detail numberParam={numberParam}/>
    );
}

export default DetailPage;