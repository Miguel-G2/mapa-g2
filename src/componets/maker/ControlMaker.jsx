import { Marker, Popup } from "react-leaflet";
import { IconFunction } from '../../assets/data/IconFunction';

export const ControlMaker = ({data}) => {
    const iconFind = (device, status) => {
        return IconFunction.find(({dispositivo, status_active}) => (dispositivo === device && status_active === status )).icon_function;
    }

    const checkDevice = (device, status) => {
        device = ((device !== "DMC" && device !== "EM" && device !== "DOA" && device !== "DDT" && device !== "DIR" && device !== "LETIE" && device !== "Repetidor") ? "Default" : device);
        return(iconFind(device, status));
    }

    return (
        <>
            {
                data.map(({ latitude, longitude, _id, device, status, name }) => {
                    return(
                        <Marker key={_id} position={[latitude, longitude]} icon={checkDevice(device, status)}>
                            <Popup>
                                {
                                    `${ device } ${ name }`
                                }
                                <br/>
                                {
                                    `Estado: ${ (status ? "OK" : "Error") }`
                                }
                                <br/>
                                <a href="http://www.grupodos.com.mx" target="_blank"> G2 </a>
                            </Popup>
                        </Marker>
                    )
                })

            }
        </>
    );

};