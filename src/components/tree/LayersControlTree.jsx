import React, { useEffect, useRef } from 'react'
import 'leaflet.control.layers.tree'

export const LayersControlTree = ({ overlays }) => {

    const mapRef = useRef(null);

    

    useEffect(() => {
        
        const map = mapRef.current.leafletElement;

        L.control.layers.tree(null, overlays).addTo(map)

    
    }, [overlays])
    
  return null;
}
