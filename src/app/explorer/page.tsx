'use client'

import Explorer from "@/pages/explorer/Explorer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const queryClient = new QueryClient();

const ExplorerPage = () => {
    const searchParams = useSearchParams()
    const keywordParam = searchParams?.get('keyword')

    return (        
        <QueryClientProvider client={queryClient}>
            <Explorer keywordParam={keywordParam} />
        </QueryClientProvider>
    );
}

export default ExplorerPage;