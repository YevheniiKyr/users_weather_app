import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {WeatherService} from "../../services/weather-service/weather.service";
import {MatIcon} from "@angular/material/icon";
import {WeatherResponse} from "../../models/weather.model";
import {take} from "rxjs";
import {SpinnerComponent} from "../../components/spinner/spinner.component";
import {IconInfo} from "../../models/icon-info.model";
import {ICON_HELP} from "../../consts/icons";

@Component({
  selector: 'app-user-weather',
  templateUrl: './user-weather.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    SpinnerComponent
  ],
  styleUrls: ['./user-weather.component.scss']
})
export class UserWeatherComponent implements OnInit {
  name: string = '';
  weatherData: WeatherResponse | null = null;
  isLoading: boolean = true;
  label: string = '';
  icon: string = '';
  isSvg: boolean = false;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    const queryParams: Params = this.route.snapshot.queryParams;
    const lat: string = queryParams['lat'];
    const lon: string = queryParams['lon'];
    this.name = queryParams['name'];

    this.weatherService.getWeather(lat, lon).pipe(
      take(1)
    ).subscribe({
      next: (res: WeatherResponse): void => {
        this.weatherData = res;
        this.isLoading = false;
        const weatherCode: number = this.weatherData.current_weather.weathercode
        const iconInfo: IconInfo | null = this.weatherService.getWeatherIconInfo(weatherCode);
        if(!iconInfo){
          this.icon = ICON_HELP;
          this.label = "Unknown"
        } else {
          this.icon = iconInfo.icon;
          this.label = iconInfo.label;
          this.isSvg = iconInfo.isSvg ?? false;
        }
      },
      error: (err: Error): void => {
        this.isLoading = false;
      }
    });
  }

}
