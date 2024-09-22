import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
//configuracion del locale de la app
import  localeESHN  from '@angular/common/locales/es-HN';
import  localeFRCA  from '@angular/common/locales/fr-CA';
import  {registerLocaleData}  from '@angular/common';

registerLocaleData(localeESHN);
registerLocaleData(localeFRCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'es-HN' } // cambiar el locale según la necesidad
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
