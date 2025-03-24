import DetailGeneralTab from "./components/DetailGeneralTab";
import DetailTimezoneTab from "./components/DetailTimezoneTab";
import DetailUbicationTab from "./components/ubication/DetailUbicationTab";
import Tabs from "./components/Tabs";
import SpawnToUp from "@/shared/transitions/SpawnToUp";
import type { Airport } from "@/shared/models/airport.model";

const Detail: React.FC<{ airport: Airport, numberParam?: string | null }> = ({ airport }) => {
    return (
        <SpawnToUp className="page flex flex-col gap-4 bg-transparent">
            <div className="flex items-center justify-center mt-8 mb-6">
                <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-5xl">
                    {airport.airport_name}
                </h1>
            </div>
            <Tabs tabs={[
                { 
                    key: 'tab-1',
                    label: 'General',
                    isDisabled: false,
                    content: <DetailGeneralTab iataCode={airport.iata_code} icaoCode={airport.icao_code} country={airport.country_name} cityIata={airport.city_iata_code} phone={airport.phone_number}/>
                },
                { 
                    key: 'tab-2',
                    label: 'Ubicación',
                    isDisabled: false,
                    content: <DetailUbicationTab geonameId={airport.geoname_id} latitud={airport.latitude} longitud={airport.longitude} />
                },
                { 
                    key: 'tab-3',
                    label: 'Zona Horaria',
                    isDisabled: false,
                    content: <DetailTimezoneTab timeZone={airport.timezone} gmt={airport.gmt} time={new Date().toISOString()}/>
                },
                { 
                    key: 'tab-4',
                    label: 'Estadísticas',
                    isDisabled: true,
                    content: <div>Tab 3 content</div>
                }
            ]}/>
        </SpawnToUp>
    );
}

export default Detail;