import { LayerGroup, LayersControl, Polyline } from "react-leaflet"
import { dataVias } from "../../assets/data/dataVias"
import { dataVias2 } from "../../assets/data/dataVias2"

export const ControlPolyLine = () => {
  return (
    <>
        <LayersControl.Overlay checked name="Vías">
            <LayerGroup>
                <Polyline pathOptions={{color:'purple'}} positions={dataVias2}/>
            </LayerGroup>
        </LayersControl.Overlay>
    </>
  )
}
