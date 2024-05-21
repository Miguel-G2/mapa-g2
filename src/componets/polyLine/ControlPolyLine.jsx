import { LayerGroup, LayersControl, Polyline } from "react-leaflet"
import { dataVias } from "../../assets/data/dataVias"

export const ControlPolyLine = () => {
  return (
    <>
        <LayersControl.Overlay checked name="Vías">
            <LayerGroup>
                <Polyline pathOptions={{color:'purple'}} positions={dataVias}/>
            </LayerGroup>
        </LayersControl.Overlay>
    </>
  )
}
