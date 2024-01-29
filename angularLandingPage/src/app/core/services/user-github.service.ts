import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserApiGithubInterface {
  repos: [];
  id: number;
  name: string;
  description: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  urlApi = 'https://api.github.com/users/';
  userNameApiGithub = 'maykbrito/repos';

  constructor(private http: HttpClient) { }

  getApiGithub(): Observable<UserApiGithubInterface> {
    return this.http.get<UserApiGithubInterface>(`${this.urlApi}${this.userNameApiGithub}`)
  }
}
