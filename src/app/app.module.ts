import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ServicesComponent } from './services/services.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { Parallax1Component } from './parallax1/parallax1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    MapComponent,
    ServicesComponent,
    RealisationsComponent,
    ContactComponent,
    Parallax1Component
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvBWRfA64NCtNzAfXBrATbFKzaMEEc_xQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
