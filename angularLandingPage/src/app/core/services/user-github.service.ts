import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserApiGithubInterface {
  id?: number;
  name?: string;
  company?: string;
  avatar_url?: string;
  bio: string;
  location: string;
  type: string;
}
export interface ReposGithubInterface {
  name: string;
  description: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  private userNameApiGithub = 'maykbrito';
  private urlApi = `https://api.github.com/users/${this.userNameApiGithub}`;
  private urlRepos = 'https://api.github.com/users/maykbrito/repos'

  constructor(private http: HttpClient) { console.log(this.urlApi) }

  getApiGithub(): Observable<UserApiGithubInterface> {
    return this.http.get<UserApiGithubInterface>(this.urlApi)
  }
  getReposGithub(): Observable<ReposGithubInterface> {
    return this.http.get<ReposGithubInterface>(this.urlRepos)
  }
}
