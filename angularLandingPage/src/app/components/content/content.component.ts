import { NgOptimizedImage, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ViewTextComponent } from '../view-text/view-text.component';
import { UserGithubService, UserApiGithubInterface, ReposGithubInterface } from '../../core/services/user-github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    ViewTextComponent
  ],
  providers: [
    UserGithubService
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  cardExit = false;

  textP = [
    '---//--- Testando (for) angular 17',
    'Voluptatem esse harum reiciendis!',
    'Ea repellat eaque sapiente architecto illo',
    'exercitationem reprehenderit beatae,',
    'hic quis provident ut ex commodi corporis,',
    'laudantium ipsam'
  ];

  arrayNames = [
    'Naruto',
    'Goku',
    'Sasuke',
    'Vegeta',
    'Kakashi',
    'Itachi',
    'Madara',
    'Kisame'
  ];

  // connectando com api do github
  public userGithub$!: Observable<UserApiGithubInterface>;
  public reposGithub$!: Observable<ReposGithubInterface>;

  constructor(private service: UserGithubService) {console.log(this.userGithub$,this.reposGithub$ ) }

  ngOnInit(): void {
    this.userGithub$ = this.service.getApiGithub();
    this.reposGithub$= this.service.getReposGithub();
  }
}
