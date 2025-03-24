import axios from "@/axios.config";
import type { ApiResponse } from "@/shared/models/response.model";
import type { Airport } from "@/shared/models/airport.model";
import AirportResponseAdapter from "../adapters/explorer.adapter";

const ExplorerService = {
	async GetAirports(offset = 0, limit = 6): Promise<ApiResponse<Airport[]>> {
		const { data: { pagination, data } } = await axios.get<ApiResponse<Airport[]>>(`/airports?limit=${limit}&offset=${offset}`);
		return {
            pagination: pagination,
            data: data.map((airport): Airport => AirportResponseAdapter(airport)),
        };
	}    
}

export default ExplorerService;