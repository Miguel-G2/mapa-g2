import React from 'react'
import { vatiablesFind } from '../../assets/data/variablesFind';
import { LayerGroup, LayersControl, Marker, Popup } from 'react-leaflet';
import { dataAll } from '../../assets/data/dataAll';
import { ControlMaker } from './ControlMaker';
// import { dp } from '../../assets/data/dataprueba';

export const ControlOverlay = () => {
    
    const data = [];

    for (let i = 0; i < vatiablesFind.length; i++) {
        
        data.push({
                layer_overlay:vatiablesFind[i].context,
                marker_group: dataAll.filter(({device, region, division, distrito, connection }) => device === vatiablesFind[i].name_find || division === vatiablesFind[i].name_find || region[0] === vatiablesFind[i].name_find || region[1] === vatiablesFind[i].name_find || distrito === vatiablesFind[i].name_find  || connection === vatiablesFind[i].name_find )
            });
        
    }

    // console.log(data)

  return (
    <>
        {/* <LayersControl.Overlay checked name="dp">
            <LayerGroup>
                {
                    dp.map((d, index = 0) => {
                        index++
                        return(
                            <Marker key={index} position={d}>
                                <Popup>
                                    { index }
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </LayerGroup>
        </LayersControl.Overlay> */}
        <LayersControl.Overlay checked name="EALV FERRO MEX">
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
