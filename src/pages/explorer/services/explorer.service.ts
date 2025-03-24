import { HTTP_STATUS_CODE } from "@/shared/constants/http";
import axios from "@/axios.config";
import type { ApiResponse } from "@/shared/models/response.model";
import type { Airport } from "@/shared/models/airport.model";

const ExplorerService = {
	async GetAirports(offset = 0, limit = 6): Promise<Airport[]> {
		const { data: { data }, status, } = await axios.get<ApiResponse<Airport[]>>(`/airports?limit=${limit}&offset=${offset}`);
		if (status === HTTP_STATUS_CODE.OK) {
			return data;
		}
		return [];
	}    
}

export default ExplorerService;