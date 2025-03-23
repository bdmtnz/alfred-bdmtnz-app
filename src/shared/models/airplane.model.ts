export interface AviationResponse {
    pagination: Pagination;
    data: FlightData[];
}

export interface Pagination {
    limit: number;
    offset: number;
    count: number;
    total: number;
}

export interface FlightData {
    flight_date: string;
    flight_status: string;
    departure: Location;
    arrival: Location;
    airline: Airline;
    flight: Flight;
    aircraft: Aircraft;
    live: LiveData;
}

export interface Location {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    gate: string;
    delay?: number;
    baggage?: string;
    scheduled: string;
    estimated: string;
    actual: string | null;
    estimated_runway: string | null;
    actual_runway: string | null;
}

export interface Airline {
    name: string;
    iata: string;
    icao: string;
}

export interface Flight {
    number: string;
    iata: string;
    icao: string;
    codeshared: null | string;
}

export interface Aircraft {
    registration: string;
    iata: string;
    icao: string;
    icao24: string;
}

export interface LiveData {
    updated: string;
    latitude: number;
    longitude: number;
    altitude: number;
    direction: number;
    speed_horizontal: number;
    speed_vertical: number;
    is_ground: boolean;
}