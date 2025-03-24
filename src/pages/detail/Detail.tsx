import DetailGeneralTab from "./components/DetailGeneralTab";
import DetailTimezoneTab from "./components/DetailTimezoneTab";
import DetailUbicationTab from "./components/ubication/DetailUbicationTab";
import Tabs from "./components/Tabs";
import SpawnToUp from "@/shared/transitions/SpawnToUp";

const Detail: React.FC<{ numberParam?: string | null }> = ({ numberParam }) => {
    return (
        <SpawnToUp className="page flex flex-col gap-4 bg-transparent">
            <div className="flex items-center justify-center mt-8 mb-6">
                <h1 className="bg-gradient-to-r from-[#006AFF] to-[#00DBFF] bg-clip-text text-transparent font-(family-name:--font-jumbo) text-5xl">
                    Title {numberParam ?? 'N/A'}
                </h1>
            </div>
            <Tabs tabs={[
                { 
                    key: 'tab-1',
                    label: 'General',
                    isDisabled: false,
                    content: <DetailGeneralTab iataCode="AAA" icaoCode="NTGA" country="French" cityIata="AAA" phone="Not Avalible"/>
                },
                { 
                    key: 'tab-2',
                    label: 'Ubicación',
                    isDisabled: false,
                    content: <DetailUbicationTab geonameId="6947726" latitud="-17.05" longitud="-145.41667" />
                },
                { 
                    key: 'tab-3',
                    label: 'Zona Horaria',
                    isDisabled: false,
                    content: <DetailTimezoneTab timeZone="Pacific/Tahití" gmt="-10" time={new Date().toISOString()}/>
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