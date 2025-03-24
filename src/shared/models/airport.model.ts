export interface Airport {
    id: string;
    gmt: string;
    airport_id: string;
    iata_code: string;
    city_iata_code: string;
    icao_code: string;
    country_iso2: string;
    geoname_id: string;
    latitude: string;
    longitude: string;
    airport_name: string;
    country_name: string;
    phone_number: string | null;
    timezone: string;
    location: string;
    time: string;
}

export const AIRPORT_INITIAL: Airport = {
    id: "3178887",
    gmt: "-10",
    airport_id: "1",
    iata_code: "AAA",
    city_iata_code: "AAA",
    icao_code: "NTGA",
    country_iso2: "PF",
    geoname_id: "6947726",
    latitude: "-17.05",
    longitude: "-145.41667",
    airport_name: "Anaa",
    country_name: "French Polynesia",
    phone_number: null,
    timezone: "Pacific/Tahiti",
    location: "Pacific, Tahiti",
    time: "19/02/2025, 8:47:51"
};