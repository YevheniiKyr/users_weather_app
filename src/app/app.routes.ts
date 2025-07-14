import { Routes } from '@angular/router';
import {UsersComponent} from "./pages/users/users.component";
import {UserWeatherComponent} from "./pages/user-weather/user-weather.component";
import {HOME_ROUTE, WEATHER_ROUTE} from "./consts/routes";

export const routes: Routes = [
  { path: '', redirectTo: HOME_ROUTE, pathMatch: 'full' },
  { path: HOME_ROUTE, component: UsersComponent },
  { path: WEATHER_ROUTE, component: UserWeatherComponent },
];

