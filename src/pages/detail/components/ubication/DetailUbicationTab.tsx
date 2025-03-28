import type React from 'react';
import MapPointIcon from '@public/icons/map-point.svg';
import DetailTabLayout from '../shared/DetailTabLayout';
import DetailUbicationMap from './DetailUbicationMap';

interface DetailUbicationTabProps {
    latitud: string;
    longitud: string;
    geonameId: string;
}

const DetailUbicationTab: React.FC<DetailUbicationTabProps> = ({ latitud, longitud, geonameId }) => {
    return (
        <div className="flex flex-col gap-7 sm:gap-10">
            <DetailTabLayout content={
                <div>
                    <div className="flex items-center justify-center sm:justify-start mb-10">
                        <MapPointIcon className="scale-80 ml-[-10px] min-w-[60px]"/>
                        <h2 className="ml-2 text-2xl sm:text-3xl font-(family-name:--font-jumbo) font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Ubicación</h2>
                    </div>
                    <div className="text-2sm sm:text-xl space-y-4">
                        <p className="flex"><span className="font-bold w-[140px] sm:w-[180px]">Latitud:</span> {latitud}</p>
                        <p className="flex"><span className="font-bold w-[140px] sm:w-[180px]">Longitud:</span> {longitud}</p>
                        <p className="flex"><span className="font-bold w-[140px] sm:w-[180px]">ID Geoname:</span> {geonameId}</p>
                    </div>
                </div>                        
            }/>
            <DetailUbicationMap latitud={latitud} longitud={longitud}/>
        </div>
    );
};

export default DetailUbicationTab;