import type { Airport } from "@/shared/models/airport.model";
import { addMinutes } from "date-fns";

const getLocalTime = (utcTime: string, gmtOffset: string): string => {
    const utcDate = new Date(utcTime);
    const gmtOffsetMinutes = Number.parseInt(gmtOffset) * 60;
    const localDate = addMinutes(utcDate, gmtOffsetMinutes);
    console.log(utcTime, gmtOffset, localDate.toUTCString(), );
    return `${localDate.getUTCDate()}/${localDate.getUTCMonth() + 1}/${localDate.getUTCFullYear()}, ${localDate.getUTCHours()}:${localDate.getUTCMinutes()}:${localDate.getUTCSeconds()}`;
}

const AirportResponseAdapter = (airport: Airport) : Airport => {
    return {
        ...airport,
        phone_number: airport.phone_number ?? "No disponible",
        country_name: airport.country_name ?? "No disponible",
        location: `${airport.timezone}`.split("/").reverse().join(", ").replace("_", " "),
        timezone: `${airport.timezone}`.replace("_", " "),
        time: getLocalTime(new Date().toUTCString(), airport.gmt)
    }
}

export default AirportResponseAdapter;