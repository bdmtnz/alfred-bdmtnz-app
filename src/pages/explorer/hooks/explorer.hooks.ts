import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import ExplorerService from "../services/explorer.service";

const useGetAirports = (pageNumber = 0) => {
    return useQuery({
        queryKey: ['get-airports-paginated'],
        queryFn: async ({ signal }) => {            
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            const promise = ExplorerService.GetAirports(source, pageNumber, 6);            
            // Cancel the request if React Query signals to abort
            signal?.addEventListener('abort', () => {
                source.cancel('Query was cancelled by React Query')
            })

            return promise;
        },
        
    });
}

export default useGetAirports;