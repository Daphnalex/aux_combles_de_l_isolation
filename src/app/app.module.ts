import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    MapComponent
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
