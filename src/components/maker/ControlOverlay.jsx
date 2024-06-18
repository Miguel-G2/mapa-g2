import React from 'react'
import { vatiablesFind } from '../../assets/data/variablesFind';
import { LayerGroup, LayersControl, Marker, Popup } from 'react-leaflet';
import { dataAll } from '../../assets/data/dataAll';
import { ControlMaker } from './ControlMaker';

export const ControlOverlay = () => {
    
    const data = [{
        layer_overlay: "EALV FERRO MEX",
        marker_group: dataAll
    }];

    for (let i = 0; i < vatiablesFind.length; i++) {
        
        data.push({
                layer_overlay:vatiablesFind[i].context,
                marker_group: dataAll.filter(({device, region, connection }) => 
                    device === vatiablesFind[i].name_find ||
                    region[0] === vatiablesFind[i].name_find ||
                    region[1] === vatiablesFind[i].name_find ||
                    connection === vatiablesFind[i].name_find
                )
            });
        
    }

  return (
    <>
        {
            data.map(({layer_overlay,marker_group}, index = 0) => {
                index++
                return(
                <LayersControl.Overlay checked={ layer_overlay === 'EALV FERRO MEX' ? true : false }  key={index} name={layer_overlay}>
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
