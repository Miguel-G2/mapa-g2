import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { TokenMapBox } from './assets/js/variables/variables';
import { Maker } from './components/maker/Maker';


export const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = TokenMapBox; // Reemplaza con tu propio token

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-104, 24],
      zoom: 5,
      minZoom: 5
    });

    // return () => map.remove();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      <div ref={mapContainerRef} className='container-map'>
        <Maker map={map}/>
      </div>
    </>
  )
}