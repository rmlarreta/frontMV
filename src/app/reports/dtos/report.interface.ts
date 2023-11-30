import { CiudadDto } from "./ciudad.interface";

 export interface WeatherRequestCityDto {
    ciudad: CiudadDto | null;
    clima: number | null;
    termica: number | null;
    validez: string;
}