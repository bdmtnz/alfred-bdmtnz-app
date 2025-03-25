import type React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface DetailUbicationMapProps {
    latitud: string;
    longitud: string;
}

const mapContainerStyle = {
    width: '100%',
    height: 'inherit',
};

const DetailUbicationMap: React.FC<DetailUbicationMapProps> = ({ latitud, longitud }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.PUBLIC_MAPS_API_KEY ?? '',
        libraries: ['geometry', 'drawing'],
    });
    
    const center = {
        lat: Number.parseFloat(latitud),
        lng: Number.parseFloat(longitud),
    };

    return (
        <div className='relative h-[300px] sm:h-[400px]'>
            {isLoaded && 
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker position={center} />
                </GoogleMap>
            }
        </div>
    );
};

export default DetailUbicationMap;