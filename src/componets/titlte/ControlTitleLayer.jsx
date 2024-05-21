import { LayersControl, TileLayer } from "react-leaflet";

export const ControlTitleLayer = () => {
    return(
        <>
            <LayersControl.BaseLayer checked name="Street">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite">
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}'
                    minZoom={0}
                    maxZoom={20}
                    attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    ext= 'jpg'
                />
            </LayersControl.BaseLayer>
        </>
    );
};