import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() new: Character = {
    nameC: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {} // para usar nuestro servicio tenemos que pasarlo como argumento en el constructor conel modificador de acceso correspondiente

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if (this.new.nameC.trim().length === 0) { return; }

    // this.onNewCharacter.emit(this.new);
    this.dbzService.addCharacter( this.new )
    console.log(this.new)
    this.new = {
      nameC: '',
      power: 0,
    };
  }
}
