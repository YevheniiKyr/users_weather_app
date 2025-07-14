import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../models/user.model";
import {NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {GetUsersReturnType} from "../../models/users-api.types";
import {SpinnerComponent} from "../../components/spinner/spinner.component";
import {take} from "rxjs";
import {WEATHER_ROUTE} from "../../consts/routes";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardActions,
    TitleCasePipe,
    MatCardImage,
    NgOptimizedImage,
    MatButton,
    SpinnerComponent,
  ],
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe({
      next: (res: GetUsersReturnType): void => {
        this.users = res.results;
        this.isLoading = false;
      },
      error: (err: Error) => {
        this.isLoading = false;
      }
    });
  }

  viewWeather(user: User): void {
    const lat: string = user.location.coordinates.latitude;
    const lon: string = user.location.coordinates.longitude;
    const name: string = `${user.name.first} ${user.name.last}`;
    this.router.navigate([WEATHER_ROUTE], {
      queryParams: {lat, lon, name}
    });
  }
}
