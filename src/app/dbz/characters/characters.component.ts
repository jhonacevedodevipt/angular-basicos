import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  // @Input() decorator allows us to create a flow of information from the parent to the child.
  @Input() characters: Character[] = [];
}
