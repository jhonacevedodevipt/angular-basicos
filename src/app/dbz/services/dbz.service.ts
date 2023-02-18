import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable() // los servicios son reconocidos por su decorador @Injectable
// si queremos usar nuestro servicio de forma global debemos exportarlo(export)
export class DbzService {
  private _characters: Character[] = [
    // el guion bajo(_) se usa como estandar para indicar que una propiedad es privada, pero lo que realmente lo hace privado es la palabra reservada "private"
    {
      nameC: 'Goku',
      power: 15000,
    },
    {
      nameC: 'Vegeta',
      power: 7500,
    },
  ];

  get characters(): Character[] {
    return [...this._characters]; // caution: javascript todo lo mando por referencia | operador spread, separa cada uno de los elementos independientes y create uno nuevo
  }

  constructor() {}

  addCharacter( character: Character ) {
    this._characters.push( character );
  }
}
