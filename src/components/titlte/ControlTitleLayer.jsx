import { LayersControl, TileLayer } from "react-leaflet";

export const ControlTitleLayer = () => {

    const style = [
        {
            name: 'Streets',
            id: 'mapbox/streets-v12',
        },
        {
            name: 'Satellite',
            id: 'mapbox/satellite-v9',
        },
        {
            name: 'Light',
            id: 'mapbox/light-v11',
        },
        {
            name: 'Dark',
            id: 'mapbox/dark-v11',
        }
    ];
    
    return(
        <>
            { style.map(({ id, name, index = 0 }) => {
                    index++;
                    return(
                        <LayersControl.BaseLayer key={index} checked={name === 'Streets' ? true : false}   name={name}>
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
                                attribution='Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                                accessToken='pk.eyJ1IjoicG9zaS1nMiIsImEiOiJjbHgyN3hlc28wZDB2MnFwcjg0MWZ6eXRkIn0.9SS5L3lWXUUShNzecb7Ovw'
                            />
                        </LayersControl.BaseLayer>
                    );
                })
            };
        </>
    );
};