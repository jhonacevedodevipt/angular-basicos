import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  deletedHero: string = ''
  deleteHero(): void{
    this.deletedHero = this.heroes.shift() || '';
  }

  showHeroDeleted() {
    let status = false;
    if(this.deletedHero === ''){

    }
  }

}
