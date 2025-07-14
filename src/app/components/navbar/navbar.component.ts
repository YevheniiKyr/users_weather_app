import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {HOME_ROUTE} from "../../consts/routes";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly HOME_ROUTE = HOME_ROUTE;
}
