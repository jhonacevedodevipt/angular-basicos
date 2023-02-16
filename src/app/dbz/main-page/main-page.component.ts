import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // these characters are sent to characters.component.html through the decorator @Input
  characters: Character[] = [
    {
      nameC: 'Goku',
      power: 15000,
    },
    {
      nameC: 'Vegeta',
      power: 7500,
    },
  ];

  new: Character = {
    nameC: 'Master Roshi',
    power: 1000
  }
}
