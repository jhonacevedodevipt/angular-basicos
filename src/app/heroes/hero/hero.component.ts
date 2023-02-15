import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;

  get upperCaseName(): string {
    //metodos get solo tomas el nombre y lo colocas en el html
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`; //template literal -> poner un string dentro del ``
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30
  }
}
