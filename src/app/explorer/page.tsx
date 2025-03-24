'use client'

import Explorer from "@/pages/explorer/Explorer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ExplorerPage = () => {
    return (        
        <QueryClientProvider client={queryClient}>
            <Explorer />
        </QueryClientProvider>
    );
}

export default ExplorerPage;