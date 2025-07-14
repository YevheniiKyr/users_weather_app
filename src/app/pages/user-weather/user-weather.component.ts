import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {WeatherService} from "../../services/weather-service/weather.service";
import {MatIcon} from "@angular/material/icon";
import {WeatherResponse} from "../../models/weather.model";

@Component({
  selector: 'app-user-weather',
  templateUrl: './user-weather.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatProgressSpinner,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgIf,
    MatIcon
  ],
  styleUrls: ['./user-weather.component.scss']
})
export class UserWeatherComponent implements OnInit {
  name: string = '';
  weatherData: WeatherResponse | null = null;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    const queryParams: Params = this.route.snapshot.queryParams;
    const lat: string = queryParams['lat'];
    const lon: string = queryParams['lon'];
    this.name = queryParams['name'];


    this.weatherService.getWeather(lat, lon).subscribe({
      next: (res: WeatherResponse): void => {
        this.weatherData = res;
        this.isLoading = false;
      },
      error: (err): void => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  getLabel(code: number): string {
    return this.weatherService.getWeatherLabel(code);
  }

  getIcon(code: number): string {
    return this.weatherService.getWeatherIcon(code);
  }
}
