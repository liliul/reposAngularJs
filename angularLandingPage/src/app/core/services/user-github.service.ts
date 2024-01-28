import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observeble} from 'rxjs';

interface UserApiGithubInterface {
  name: string,
  company: string,
  location: string,
  avatar: string
}

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  urlApi = 'https://api.github.com/users/';
  userNameApiGithub = 'maykbrito';
   
  constructor(private http: HttpClient) { }

  getApiGithub(): Observeble<UserApiGithubInterface> {
    return this.http.get<UserApiGithubInterface>(`${urlApi}${userNameApiGithub}`)
  }
}
