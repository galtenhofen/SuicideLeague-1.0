import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent }  from './home.component';
import { PlayerListComponent }  from '../players/player-list.component';
import { PlayerFilterPipe } from '../players/player-playerfilter.pipe';
import { PlayerService}  from '../players/player.service';
import { PlayerListModule }  from '../players/player-list.module';
import { SquadModule }  from '../squad/squad.module';
import { HomeService }  from './home.service';
import { EntryModule }  from '../entry/entry.module';
import { EntryComponent }  from '../entry/entry.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, PlayerListModule, SquadModule, EntryModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [HomeService]

})
export class HomeModule { }
