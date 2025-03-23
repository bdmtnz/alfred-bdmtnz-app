import type { FlightData } from "@/shared/models/airplane.model";
import CardImage from "@public/pictures/card-avion.png";
import FlightIcon from "@public/icons/flight.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

// const aviationResponse = {
//     "pagination": {
//         "limit": 100,
//         "offset": 0,
//         "count": 100,
//         "total": 1669022
//     },
//     "data": [
//         {
//             "flight_date": "2019-12-12",
//             "flight_status": "active",
//             "departure": {
//                 "airport": "San Francisco International",
//                 "timezone": "America/Los_Angeles",
//                 "iata": "SFO",
//                 "icao": "KSFO",
//                 "terminal": "2",
//                 "gate": "D11",
//                 "delay": 13,
//                 "scheduled": "2019-12-12T04:20:00+00:00",
//                 "estimated": "2019-12-12T04:20:00+00:00",
//                 "actual": "2019-12-12T04:20:13+00:00",
//                 "estimated_runway": "2019-12-12T04:20:13+00:00",
//                 "actual_runway": "2019-12-12T04:20:13+00:00"
//             },
//             "arrival": {
//                 "airport": "Dallas/Fort Worth International",
//                 "timezone": "America/Chicago",
//                 "iata": "DFW",
//                 "icao": "KDFW",
//                 "terminal": "A",
//                 "gate": "A22",
//                 "baggage": "A17",
//                 "delay": 0,
//                 "scheduled": "2019-12-12T04:20:00+00:00",
//                 "estimated": "2019-12-12T04:20:00+00:00",
//                 "actual": null,
//                 "estimated_runway": null,
//                 "actual_runway": null
//             },
//             "airline": {
//                 "name": "American Airlines",
//                 "iata": "AA",
//                 "icao": "AAL"
//             },
//             "flight": {
//                 "number": "1004",
//                 "iata": "AA1004",
//                 "icao": "AAL1004",
//                 "codeshared": null
//             },
//             "aircraft": {
//                "registration": "N160AN",
//                "iata": "A321",
//                "icao": "A321",
//                "icao24": "A0F1BB"
//             },
//             "live": {
//                 "updated": "2019-12-12T10:00:00+00:00",
//                 "latitude": 36.28560000,
//                 "longitude": -106.80700000,
//                 "altitude": 8846.820,
//                 "direction": 114.340,
//                 "speed_horizontal": 894.348,
//                 "speed_vertical": 1.188,
//                 "is_ground": false
//             }
//         }
//     ]
// }


interface CardProps {
    aviation?: FlightData;
}

const Card: React.FC<CardProps> = ({ aviation = null }) => {
    aviation = {
        "flight_date": "2019-12-12",
        "flight_status": "active",
        "departure": {
            "airport": "San Francisco International",
            "timezone": "America/Los_Angeles",
            "iata": "SFO",
            "icao": "KSFO",
            "terminal": "2",
            "gate": "D11",
            "delay": 13,
            "scheduled": "2019-12-12T04:20:00+00:00",
            "estimated": "2019-12-12T04:20:00+00:00",
            "actual": "2019-12-12T04:20:13+00:00",
            "estimated_runway": "2019-12-12T04:20:13+00:00",
            "actual_runway": "2019-12-12T04:20:13+00:00"
        },
        "arrival": {
            "airport": "Dallas/Fort Worth International",
            "timezone": "America/Chicago",
            "iata": "DFW",
            "icao": "KDFW",
            "terminal": "A",
            "gate": "A22",
            "baggage": "A17",
            "delay": 0,
            "scheduled": "2019-12-12T04:20:00+00:00",
            "estimated": "2019-12-12T04:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "American Airlines",
            "iata": "AA",
            "icao": "AAL"
        },
        "flight": {
            "number": "1004",
            "iata": "AA1004",
            "icao": "AAL1004",
            "codeshared": null
        },
        "aircraft": {
           "registration": "N160AN",
           "iata": "A321",
           "icao": "A321",
           "icao24": "A0F1BB"
        },
        "live": {
            "updated": "2019-12-12T10:00:00+00:00",
            "latitude": 36.28560000,
            "longitude": -106.80700000,
            "altitude": 8846.820,
            "direction": 114.340,
            "speed_horizontal": 894.348,
            "speed_vertical": 1.188,
            "is_ground": false
        }
    };

    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/detail?number=${aviation.flight.number}`);
    }

    return (
        <button
            type="button"
            onClick={handleCardClick}
            className="rounded-xl flex overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-400 h-auto min-h-[235px] bg-gradient-to-r from-[#3F495F] to-[#0E1934] cursor-pointer"
        >
            <div className="p-8 w-[55%] flex flex-col justify-between">
                <div>
                    <div className="font-bold text-xl mb-2 text-left">{aviation.departure.airport}</div>
                    <p className="text-gray-400 text-base text-left">{aviation.departure.timezone}</p>
                </div>
                <h1 className="bg-gradient-to-r 90deg from-[#006AFF] from-0% to-[#00F9FF] to-100% bg-clip-text text-transparent font-(family-name:--font-jumbo) text-4xl max-w-[120px] w-auto mb-2 text-left">
                    {aviation.departure.iata}
                </h1>
            </div>
            <div className="relative h-full w-[45%]">
                <Image
                    src={CardImage}
                    alt={aviation.departure.airport}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-6"
                />
                <div className="absolute top-0 right-0 m-4 rounded-full w-[55px] h-[55px]">
                    <FlightIcon />
                </div>
            </div>          
        </button>
    );
};

export default Card;

// background: linear-gradient(90deg, #006AFF 0%, #00F9FF 100%);

