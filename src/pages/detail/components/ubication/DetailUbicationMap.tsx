import type React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

interface DetailUbicationMapProps {
    latitud: string;
    longitud: string;
}

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const DetailUbicationMap: React.FC<DetailUbicationMapProps> = ({ latitud, longitud }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBjD3wO_UKFT-PJ8IHJjix9EK1QCyVmxZc",
        libraries: ['geometry', 'drawing'],
    });
    
    const center = {
        lat: Number.parseFloat(latitud),
        lng: Number.parseFloat(longitud),
    };

    return (
        <>
            {isLoaded && 
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker position={center} />
                </GoogleMap>
            }
        </>
    );
};

export default DetailUbicationMap;