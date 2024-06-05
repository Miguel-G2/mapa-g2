import { 
    IconAEI, IconAEIError, 
    IconDDT, IconDDTError, 
    IconDIR, IconDIRError, 
    IconDMC, IconDMCError, 
    IconDOA, IconDOAError, 
    IconDefault, IconDefaultError, 
    IconEM, IconEMError, 
    IconRepetidor, IconRepetidorError, } from "../js/icon/IconMarker";

export const IconFunction = [
    {
        dispositivo: "EM",
        status_active: 1,
        icon_function: IconEM
    } , {
        dispositivo: "DMC",
        status_active: 1,
        icon_function: IconDMC
    } , {
        dispositivo: "LETIE",
        status_active: 1,
        icon_function: IconAEI
    } , {
        dispositivo: "DOA",
        status_active: 1,
        icon_function: IconDOA
    } , {
        dispositivo: "Repetidor",
        status_active: 1,
        icon_function: IconRepetidor
    } , {
        dispositivo: "DIR",
        status_active: 1,
        icon_function: IconDIR
    } , {
        dispositivo: "DDT",
        status_active: 1,
        icon_function: IconDDT
    } , {
        dispositivo: "Default",
        status_active: 1,
        icon_function: IconDefault
    } , {
        dispositivo: "EM",
        status_active: 0,
        icon_function: IconEMError
    } , {
        dispositivo: "DMC",
        status_active: 0,
        icon_function: IconDMCError
    } , {
        dispositivo: "LETIE",
        status_active: 0,
        icon_function: IconAEIError
    } , {
        dispositivo: "DOA",
        status_active: 0,
        icon_function: IconDOAError
    } , {
        dispositivo: "Repetidor",
        status_active: 0,
        icon_function: IconRepetidorError
    } , {
        dispositivo: "DIR",
        status_active: 0,
        icon_function: IconDIRError
    } , {
        dispositivo: "DDT",
        status_active: 0,
        icon_function: IconDDTError
    } , {
        dispositivo: "Default",
        status_active: 0,
        icon_function: IconDefaultError
    }
];