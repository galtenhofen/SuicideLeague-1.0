import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }  from './home/home.component';
import { PlayerListComponent }  from './players/player-list.component';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule,
    HttpModule,
    JsonpModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
