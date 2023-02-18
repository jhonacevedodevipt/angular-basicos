import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // these characters are sent to characters.component.html through the decorator @Input

  new: Character = {
    nameC: 'Master Roshi',
    power: 1000,
  };

  addNewCharacter(arg: Character) {
    // this.characters.push(arg);
  }

  constructor(private dbzService: DbzService) {
    // al usar modificadores de acceso nos permite definir de manera corta de definir valores en typescript | inyección de dependencias
  }

  // get characters(): Character[] {
  //   //
  //   return this.dbzService.characters;
  // }
}
