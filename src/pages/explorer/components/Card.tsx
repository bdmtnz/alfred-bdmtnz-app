import CardImage from "@public/pictures/card-avion.png";
import FlightIcon from "@public/icons/flight.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Airport } from "@/shared/models/airport.model";
import { globalStore } from "@/shared/stores/global.store";

interface CardProps {
    airport: Airport;
}

const Card: React.FC<CardProps> = ({ airport }) => {

    const router = useRouter();
    const { setAirport } = globalStore.getState();

    const handleCardClick = () => {
        setAirport(airport);
        router.push(`/detail?number=${airport.airport_id}`);
    }

    return (
        <button
            type="button"
            onClick={handleCardClick}
            className="rounded-xl flex overflow-hidden shadow-lg bg-gray-800 text-white border border-gray-400 h-auto min-h-[235px] bg-gradient-to-r from-[#3F495F] to-[#0E1934] cursor-pointer"
        >
            <div className="p-8 w-[55%] flex flex-col justify-between">
                <div>
                    <div className="font-bold text-xl mb-2 text-left">{airport.airport_name}</div>
                    <p className="text-gray-400 text-base text-left">{airport.location}</p>
                </div>
                <h1 className="bg-gradient-to-r 90deg from-[#006AFF] from-0% to-[#00F9FF] to-100% bg-clip-text text-transparent font-(family-name:--font-jumbo) text-4xl max-w-[120px] w-auto mb-2 text-left">
                    {airport.iata_code}
                </h1>
            </div>
            <div className="relative h-full w-[45%]">
                <Image
                    src={CardImage}
                    alt={airport.airport_name}
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

