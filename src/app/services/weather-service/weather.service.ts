import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherResponse} from "../../models/weather.model";
import {environment} from "../../../environments/environment";
import {WEATHER_ICON_MAP} from "../../consts/weathercode-icon-map";
import {IconInfo} from "../../models/icon-info.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = environment.weatherApiUrl;

  constructor(private http: HttpClient) {
  }



  getWeather(lat: string, lon: string): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('latitude', lat)
      .set('longitude', lon)
      .set('current_weather', 'true')
      .set('daily', 'temperature_2m_min,temperature_2m_max')
      .set('timezone', 'auto');

    return this.http.get<WeatherResponse>(this.apiUrl, {params});
  }

  getWeatherIconInfo(code: number): IconInfo | null {
    return WEATHER_ICON_MAP[code];
  }

}
