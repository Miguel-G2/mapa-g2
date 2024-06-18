import './assets/css/styles.css';
import 'leaflet/dist/leaflet.css';

import React from "react";
import { LayersControl, MapContainer } from "react-leaflet";
import { ControlTitleLayer } from './components/titlte/ControlTitleLayer';
import { ControlOverlay } from './components/maker/ControlOverlay';
import { LayersControlTree } from './components/tree/LayersControlTree';

export const Map = () => {

    
    
    
    return (
        <>
            <MapContainer center={[24,-104]} zoom={6} scrollWheelZoom={true}>
                <LayersControl  position="topright">
                    <ControlTitleLayer/>
                    <ControlOverlay/>
                </LayersControl>

                <LayersControlTree overlays={ControlOverlay}/>
            </MapContainer>
        </>
    );
};