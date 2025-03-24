'use client'

import Explorer from "@/pages/explorer/Explorer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const queryClient = new QueryClient();

const ExplorerPage = () => {
    const searchParams = useSearchParams()
    const keywordParam = searchParams?.get('keyword')
    const pageNumberParam = searchParams?.get('pageNumber') ?? '1'

    return (        
        <QueryClientProvider client={queryClient}>
            <Explorer keywordParam={keywordParam} pageNumberParam={Number.parseInt(pageNumberParam)}/>
        </QueryClientProvider>
    );
}

export default ExplorerPage;