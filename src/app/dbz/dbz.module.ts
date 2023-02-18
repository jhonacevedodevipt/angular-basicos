// IMPORTS
// modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// componentes
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';

// servicios
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, AddComponent],
  exports: [MainPageComponent, CharactersComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService] // los providers son los servicios
})
export class DbzModule {}
