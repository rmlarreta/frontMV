import { CiudadDto } from "./ciudad.interface";

export interface GetWeatherRequest {
    ciudad: CiudadDto;
    historial: boolean;
}