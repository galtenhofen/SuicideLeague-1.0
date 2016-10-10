import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LeaderboardComponent }  from './leaderboard.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [LeaderboardComponent],
  exports: [LeaderboardComponent]

})
export class LeaderboardModule { }
