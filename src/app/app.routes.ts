import { Routes } from '@angular/router';
import {UsersComponent} from "./pages/users/users.component";
import {UserWeatherComponent} from "./pages/user-weather/user-weather.component";

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/weather', component: UserWeatherComponent },
];

