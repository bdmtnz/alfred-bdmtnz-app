import { AIRPORT_INITIAL, type Airport } from "./airport.model";

export interface GlobalStore {
    keyword: string;
    airport: Airport;
    setKeyword: (keyword: string) => void;
    setAirport: (selected: Airport) => void;
}

export const GetGlobalStateInitial = (set: (state: Partial<GlobalStore>) => void): GlobalStore => {
    return {
        keyword: '',
        airport: { ...AIRPORT_INITIAL },
        setKeyword: (keyword: string) => set({ keyword }),
        setAirport: (selected: Airport) => set({ airport: selected })
    }
}