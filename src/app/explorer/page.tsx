'use client'

import Explorer from "@/pages/explorer/Explorer";
import { useSearchParams } from "next/navigation";

const ExplorerPage = () => {    
    const searchParams = useSearchParams()
    const keyword = searchParams?.get('keyword')

    return (
        <Explorer keywordParam={keyword}/>
    );
}

export default ExplorerPage;