import { Icon } from "leaflet";

const Isize = [25,25];

const IconEM = new Icon({
    iconUrl: require("../../img/icon/EM.svg"),
    iconSize: Isize
});

const IconDMC = new Icon({
    iconUrl: require("../../img/icon/DMC.svg"),
    iconSize: Isize
});

const IconAEI = new Icon({
    iconUrl: require("../../img/icon/AEI.svg"),
    iconSize: Isize
});

const IconDOA = new Icon({
    iconUrl: require("../../img/icon/DOA.svg"),
    iconSize: Isize
});

const IconRepetidor = new Icon({
    iconUrl: require("../../img/icon/Repetidor.svg"),
    iconSize: Isize
});

const IconDIR = new Icon({
    iconUrl: require("../../img/icon/DIR.svg"),
    iconSize: Isize
});

const IconDDT = new Icon({
    iconUrl: require("../../img/icon/DDT.svg"),
    iconSize: Isize
});

const IconDefault = new Icon({
    iconUrl: require("../../img/icon/Default.svg"),
    iconSize: Isize
});

const IconEMError = new Icon({
    iconUrl: require("../../img/icon/EM_Error.svg"),
    iconSize: Isize
});

const IconDMCError = new Icon({
    iconUrl: require("../../img/icon/DMC_Error.svg"),
    iconSize: Isize
});

const IconAEIError = new Icon({
    iconUrl: require("../../img/icon/AEI_Error.svg"),
    iconSize: Isize
});

const IconDOAError = new Icon({
    iconUrl: require("../../img/icon/DOA_Error.svg"),
    iconSize: Isize
});

const IconDIRError = new Icon({
    iconUrl: require("../../img/icon/DIR_Error.svg"),
    iconSize: Isize
});

const IconRepetidorError = new Icon({
    iconUrl: require("../../img/icon/Repetidor_Error.svg"),
    iconSize: Isize
});

const IconDDTError = new Icon({
    iconUrl: require("../../img/icon/DDT_Error.svg"),
    iconSize: Isize
});

const IconDefaultError = new Icon({
    iconUrl: require("../../img/icon/Default_Error.svg"),
    iconSize: Isize
});

export {
    IconEM, IconEMError,
    IconDMC, IconDMCError,
    IconAEI, IconAEIError,
    IconDOA, IconDOAError,
    IconDIR, IconDIRError,
    IconRepetidor, IconRepetidorError,
    IconDDT, IconDDTError,
    IconDefault, IconDefaultError
};