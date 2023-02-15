import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base: <strong>{{ base }}</strong>
    </h3>

    <button (click)="accumulate(base)">+{{ base }}</button>

    <span> {{ number }}</span>

    <button (click)="accumulate(-base)">{{ -base }}</button>
  `,
})
export class CounterComponent {

  title: string = 'Counter App';
  number: number = 0;

  base: number = 5;

  accumulate(value: number) {
    this.number += value;
  }
}
