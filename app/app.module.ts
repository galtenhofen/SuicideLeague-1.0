import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { ResultsModule }  from './results/results.module';
//import { AppService }  from './app.service';
//import { LeaderboardModule }  from './leaderboard/leaderboard.module';
import { HomeModule }  from './home/home.module';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
//import { routing } from './app.routing';
//import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, HomeModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
