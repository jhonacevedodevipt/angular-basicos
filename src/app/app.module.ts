import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// homework:
// create a module named CounterModule
// declarations and exports

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //import here
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
