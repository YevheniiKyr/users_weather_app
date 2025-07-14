import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {GetUsersReturnType} from "../../models/users-api.types";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private apiUrl: string = "https://randomuser.me/api/";

  public getUsers(): Observable<GetUsersReturnType> {
    const params = new HttpParams()
      .set('inc', "name,gender,picture,location,email")
      .set('results', 10)

    return this.http.get<GetUsersReturnType>(this.apiUrl, { params });
  }
}
