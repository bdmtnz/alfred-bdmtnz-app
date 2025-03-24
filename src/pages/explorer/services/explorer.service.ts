import axiosConfig from "@/axios.config";
import type { ApiResponse } from "@/shared/models/response.model";
import type { Airport } from "@/shared/models/airport.model";
import AirportResponseAdapter from "../adapters/explorer.adapter";
import type { CancelTokenSource } from "axios";

const ExplorerService = {
	async GetAirports(source: CancelTokenSource, offset = 0, limit = 6): Promise<ApiResponse<Airport[]>> {
		const { data: { pagination, data } } = await axiosConfig.get<ApiResponse<Airport[]>>(
			`/airports?limit=${limit}&offset=${offset}`, {
			cancelToken: source.token,
		});
		return {
            pagination: pagination,
            data: data.map((airport): Airport => AirportResponseAdapter(airport)),
        };
	}    
}

export default ExplorerService;