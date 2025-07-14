import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatToolbar} from "@angular/material/toolbar";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../models/user.model";
import {NgForOf, NgIf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {GetUsersReturnType} from "../../models/users-api.types";

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
    MatProgressSpinner,
    MatToolbar,
    MatCardActions,
    NgIf,
    NgForOf,
    TitleCasePipe,
    MatCardImage,
    NgOptimizedImage,
    MatButton,
  ],
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res: GetUsersReturnType): void => {
        this.users = res.results;
        console.log(this.users);
        this.isLoading = false;
      },
      error: err => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  viewWeather(user: User): void {
    const lat: string = user.location.coordinates.latitude;
    const lon: string = user.location.coordinates.longitude;
    const name: string = `${user.name.first} ${user.name.last}`;
    this.router.navigate(['/users/weather'], {
      queryParams: { lat, lon, name }
    });  }
}
