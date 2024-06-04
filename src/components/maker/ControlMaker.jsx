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
                data.map(({ latitude, longitude, _id, device, status, name, url_macazaga_get, url_macazaga_post, url_macazaga_id, url_miltifuncional }) => {
                    return(
                        <Marker key={_id} position={[latitude, longitude]} icon={checkDevice(device, status)}>
                            <Popup>
                                {
                                    `${_id} -_- ${ device } ${ name }`
                                }
                                <br/>
                                {
                                    `Estado: ${ (status ? "OK" : "Error") }`
                                }
                                <br/>
                                <form action={`${url_macazaga_get}`} method="POST" target="_blank">
                                    <input defaultValue={url_macazaga_id} name="device" hidden/>
                                    <button type="submit">macazaga</button>
                                </form>
                                <br/>
                                <a href={`${url_macazaga_get}`} target="_blank"> Macazaga </a>
                                <br/>
                                <a href={`${url_miltifuncional}`} target="_blank"> Multifuncional </a>
                            </Popup>
                        </Marker>
                    )
                })

            }
        </>
    );

};