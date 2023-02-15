import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  character: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  new: Character = {
    name: 'Trunks',
    power: 14000,
  };

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    console.log(this.new);


    this.characters.push( this.new)
    this.new = {
      name: '',
      power: 0
    }
  }
}
