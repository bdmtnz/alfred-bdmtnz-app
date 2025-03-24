import { AIRPORT_INITIAL, type Airport } from "./airport.model";

export interface GlobalStore {
    airport: Airport; 
    setAirport: (selected: Airport) => void;
}

export const GetGlobalStateInitial = (set: (state: Partial<GlobalStore>) => void): GlobalStore => {
    return {
        airport: { ...AIRPORT_INITIAL },
        setAirport: (selected: Airport) => set({ airport: selected })
    }
}