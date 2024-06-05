import React, { useEffect } from 'react'
import { dataAll } from '../../api/dataAll';

export const Maker = ({map}) => {

    useEffect(() => {

        dataAll.map(({ device, name, latitude, longitude}) => {
            
            const monument = [longitude, latitude];

            const popup = new mapboxgl.Popup({ offset: 25 }).setText(
                `${device} ${name}`
            );
          
            // create DOM element for the marker
            const el = document.createElement('div');
            el.id = 'marker';
          
            // create the marker
            new mapboxgl.Marker(el)
                .setLngLat(monument)
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);
        })
    }, [])
    
}
