import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BackgroundComponent {
  clouds = [1, 2, 3, 4, 5];
}
