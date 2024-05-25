import React from 'react'
import { vatiablesFind } from '../../assets/data/variablesFind';
import { LayerGroup, LayersControl, Marker, Popup } from 'react-leaflet';
import { dataAll } from '../../assets/data/dataAll';
import { ControlMaker } from './ControlMaker';
import { dp } from '../../assets/data/dataprueba';

export const ControlOverlay = () => {
    
    const data = [];

    for (let i = 0; i < vatiablesFind.length; i++) {
        
        data.push({
                layer_overlay:vatiablesFind[i].context,
                marker_group: dataAll.filter(({device, division, region}) => device === vatiablesFind[i].name_find || division === vatiablesFind[i].name_find || region === vatiablesFind[i].name_find )
            });
        
    }

    console.log(data)

  return (
    <>
       {/*  <LayersControl.Overlay name="dp">
            <LayerGroup>
                {
                    dp.map((dato, i = 0) =>{
                        i++
                        return(
                        <Marker position={dato}>
                            <Popup>
                                {i}
                            </Popup>
                        </Marker>
                        );
                    })
                        
                }
            </LayerGroup>
        </LayersControl.Overlay> */}
        <LayersControl.Overlay checked name="Todos">
            <LayerGroup>
                <ControlMaker data={dataAll}/>
            </LayerGroup>
        </LayersControl.Overlay>
        {
            data.map(({layer_overlay,marker_group}, index = 0) => {
                index++
                return(
                <LayersControl.Overlay key={index} name={layer_overlay}>
                    <LayerGroup>
                        <ControlMaker data={marker_group}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                )
            })
        }
    </>
  )
}
