import axios from "@/axios.config";
import type { ApiResponse } from "@/shared/models/response.model";
import type { Airport } from "@/shared/models/airport.model";

const ExplorerService = {
	async GetAirports(offset = 0, limit = 6): Promise<ApiResponse<Airport[]>> {
		const { data } = await axios.get<ApiResponse<Airport[]>>(`/airports?limit=${limit}&offset=${offset}`);
		return data;
	}    
}

export default ExplorerService;