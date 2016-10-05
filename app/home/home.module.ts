import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }  from './home.component';
import { PlayerListComponent }  from '../players/player-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {PlayerFilterPipe} from '../players/player-playerfilter.pipe';
import { routing } from '../app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]

})
export class HomeModule { }
