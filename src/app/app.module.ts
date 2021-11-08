import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CockailListComponent } from './cocktail-list/cocktail-list.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CockailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
