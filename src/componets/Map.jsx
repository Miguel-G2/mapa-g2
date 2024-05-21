import '../assets/css/styles.css'
import 'leaflet/dist/leaflet.css'

import React from "react";
import { LayersControl, MapContainer, Marker, Popup } from "react-leaflet";
import { ControlTitleLayer } from './titlte/ControlTitleLayer';
import { ControlOverlay } from './maker/ControlOverlay';
import { ControlPolyLine } from './polyLine/ControlPolyLine';

export const Map = () => {

    
    
    
    return (
        <>
            <MapContainer center={[24,-104]} zoom={6} scrollWheelZoom={true}>
                <LayersControl  position="topright">
                    <ControlTitleLayer/>
                    <ControlPolyLine/>
                    <ControlOverlay/>
                </LayersControl>
            </MapContainer>
        </>
    );
};