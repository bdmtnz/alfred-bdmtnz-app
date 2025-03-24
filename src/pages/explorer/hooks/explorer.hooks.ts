import { useQuery } from "@tanstack/react-query";
import ExplorerService from "../services/explorer.service";

export const useGetAirportsPaginated = (pageNumber = 1) => {
    return useQuery({
        queryKey: ['get-airports-paginateds'],
        queryFn: () => {
            return ExplorerService.GetAirports(pageNumber - 1, 6);
        }
    })
}

// const useGetAirportsPaginated = (pageNumber = 1) => {
//     const [airports, setAirports] = useState<Airport[]>([]);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [isSuccess, setIsSuccess] = useState<boolean>(false);
    
//     useEffect(() => {
//         ExplorerService.GetAirports(pageNumber - 1, 6).then((data) => {
//             const agent = {
//                 id: data.id,
//                 username: data.username,
//                 name: data.name,
//                 balance: data.balance,
//                 timezone: 'GMT-6'
//             }
//             setAgent(agent);
//             const subAgents = data.admins.map((admin) => ({
//                 id: admin.id,
//                 username: admin.username,
//                 name: admin.name,
//                 balance: admin.balance,
//                 timezone: 'GMT-5'
//             }));
//             setSubAgents(subAgents);        
//             setIsLoading(false);
//             setIsSuccess(true);
//         });
//     }, [agentId])

//     return {
//         agent,
//         subAgents,
//         isLoading,
//         isSuccess
//     }
// }

export default useGetAirportsPaginated;