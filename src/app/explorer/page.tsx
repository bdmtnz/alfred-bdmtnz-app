'use client'

import Explorer from "@/pages/explorer/Explorer";
import { useSearchParams } from "next/navigation";

const ExplorerPage = () => {
    const searchParams = useSearchParams()
    const keywordParam = searchParams?.get('keyword')

    return (
        <Explorer keywordParam={keywordParam}/>
    );
}

export default ExplorerPage;