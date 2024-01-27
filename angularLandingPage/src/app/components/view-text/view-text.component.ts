import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-text',
  standalone: true,
  imports: [],
  templateUrl: './view-text.component.html',
  styleUrl: './view-text.component.scss'
})
export class ViewTextComponent {
  @Input({required: true})
  name = '';
}
