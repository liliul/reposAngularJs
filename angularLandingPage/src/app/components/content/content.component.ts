import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ViewTextComponent } from '../view-text/view-text.component';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ViewTextComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  cardExit = false;

  textP = [
    '---//--- Testando (for) angular 17', 
    'Voluptatem esse harum reiciendis!',
    'Ea repellat eaque sapiente architecto illo',
    'exercitationem reprehenderit beatae,', 
    'hic quis provident ut ex commodi corporis,',
    'laudantium ipsam'
  ];
}
