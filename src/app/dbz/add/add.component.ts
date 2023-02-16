import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() characters: Character[] = [];
  @Input() new: Character = {
    nameC: '',
    power: 0,
  }

  add() {
    if (this.new.nameC.trim().length === 0) {
      //deletes spaces
      return;
    }
    // console.log(this.new);

    this.characters.push(this.new);
    this.new = {
      nameC: '',
      power: 0,
    };
  }
}
