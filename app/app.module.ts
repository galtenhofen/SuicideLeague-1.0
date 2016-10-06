import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResultsModule }  from './results/results.module';
import { LeaderboardModule }  from './leaderboard/leaderboard.module';
import { HomeModule }  from './home/home.module';
import { CreateTeamModule }  from './create/create-team.module';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, HomeModule, ResultsModule, LeaderboardModule, CreateTeamModule, routing ],
  declarations: [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
