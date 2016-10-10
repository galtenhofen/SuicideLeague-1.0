import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerListComponent }  from '../players/player-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {PlayerFilterPipe} from '../players/player-playerfilter.pipe';
import {PlayerService} from '../players/player.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [PlayerListComponent, PlayerFilterPipe ],
  exports: [PlayerListComponent],
  providers: [PlayerService]

})
export class PlayerListModule { }
