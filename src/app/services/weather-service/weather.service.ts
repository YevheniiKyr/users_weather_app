import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherResponse} from "../../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = `https://api.open-meteo.com/v1/forecast`;

  constructor(private http: HttpClient) {
  }

  weatherCodeMap: Record<number, { label: string; icon: string }> = {
    0: {label: 'Clear sky', icon: 'wb_sunny'},
    1: {label: 'Mainly clear', icon: 'wb_sunny'},
    2: {label: 'Partly cloudy', icon: 'partly_cloudy_day'},
    3: {label: 'Overcast', icon: 'cloud'},
    45: {label: 'Fog', icon: 'foggy'},
    48: {label: 'Depositing rime fog', icon: 'foggy'},
    51: {label: 'Light drizzle', icon: 'grain'},
    53: {label: 'Moderate drizzle', icon: 'grain'},
    55: {label: 'Dense drizzle', icon: 'grain'},
    61: {label: 'Slight rain', icon: 'umbrella'},
    63: {label: 'Moderate rain', icon: 'umbrella'},
    65: {label: 'Heavy rain', icon: 'umbrella'},
    71: {label: 'Slight snow fall', icon: 'ac_unit'},
    73: {label: 'Moderate snow fall', icon: 'ac_unit'},
    75: {label: 'Heavy snow fall', icon: 'ac_unit'},
    80: {label: 'Slight rain showers', icon: 'shower'},
    81: {label: 'Moderate rain showers', icon: 'shower'},
    82: {label: 'Violent rain showers', icon: 'shower'},
    95: {label: 'Thunderstorm', icon: 'thunderstorm'},
    96: {label: 'Thunderstorm with slight hail', icon: 'thunderstorm'},
    99: {label: 'Thunderstorm with heavy hail', icon: 'thunderstorm'},
  };

  getWeather(lat: string, lon: string): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('latitude', lat)
      .set('longitude', lon)
      .set('current_weather', 'true')
      .set('daily', 'temperature_2m_min,temperature_2m_max')
      .set('timezone', 'auto');

    return this.http.get<WeatherResponse>(this.apiUrl, {params});
  }

  getWeatherLabel(code: number): string {
    return this.weatherCodeMap[code]?.label || 'Unknown';
  }

  getWeatherIcon(code: number): string {
    return this.weatherCodeMap[code]?.icon || 'help_outline';
  }
}
