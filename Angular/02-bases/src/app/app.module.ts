import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent
    //HeroComponent,
    //ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
