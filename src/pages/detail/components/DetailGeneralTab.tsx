import type React from 'react';
import InformationCircleIcon from '@public/icons/info-circle.svg';
import DetailTabLayout from './DetailTabLayout';

interface DetailGeneralTabProps {
    iataCode: string;
    icaoCode: string;
    country: string;
    cityIata: string;
    phone: string;
}

const DetailGeneralTab: React.FC<DetailGeneralTabProps> = ({ iataCode, icaoCode, country, cityIata, phone }) => {
    return (
        <DetailTabLayout content={
            <div>
                <div className="flex items-center mb-10">
                    <InformationCircleIcon className="scale-80 ml-[-10px]"/>
                    <h2 className="ml-2 text-3xl font-(family-name:--font-jumbo) font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Información General</h2>
                </div>
                <div className="text-xl space-y-4">
                    <p className="flex"><span className="font-bold w-[180px]">Código IATA:</span> {iataCode}</p>
                    <p className="flex"><span className="font-bold w-[180px]">Código ICAO:</span> {icaoCode}</p>
                    <p className="flex"><span className="font-bold w-[180px]">País:</span> {country}</p>
                    <p className="flex"><span className="font-bold w-[180px]">Ciudad IATA:</span> {cityIata}</p>
                    <p className="flex"><span className="font-bold w-[180px]">Teléfono:</span> {phone}</p>
                </div>
            </div>                        
        }/>
    );
};

export default DetailGeneralTab;