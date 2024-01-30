import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface UserApiGithubInterface {
//   id: number;
//   name: string;
//   description: string;
//   html_url: string;
// }

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  private userNameApiGithub = 'maykbrito/repos';
  private urlApi = `https://api.github.com/users/${this.userNameApiGithub}`;

  // constructor(private http: HttpClient) { }

  // getApiGithub(): Observable<UserApiGithubInterface> {
    // return this.http.get<UserApiGithubInterface>(this.urlApi)
  // }
}
