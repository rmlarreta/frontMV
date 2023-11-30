import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { CiudadDto } from './dtos/ciudad.interface';
import { GetWeatherRequest } from './dtos/request.interface';
import { WeatherRequestCityDto } from './dtos/report.interface';

@Injectable({
  providedIn: 'any'
})

export class ReportsService {
  private baseUrl = environment.baseUrl;
  private weatherResponseSubject = new Subject<WeatherRequestCityDto[]>(); 
  constructor(private http: HttpClient) { }

  getWeatherResponseObservable(): Observable<WeatherRequestCityDto[]> {
    return this.weatherResponseSubject.asObservable();
  }
  
  getAllCities(): Observable<CiudadDto[]> {
    const url = `${this.baseUrl}/cities/Get`;
    return this.http.get<CiudadDto[]>(url);
  }

  requestWeather(request: GetWeatherRequest): Observable<WeatherRequestCityDto[]> {
    return this.http.post<WeatherRequestCityDto[]>(`${this.baseUrl}/Weather/Get`, request)
      .pipe(
        tap((response: WeatherRequestCityDto[]) => {
          this.weatherResponseSubject.next(response);
        })
      );
  }
}
