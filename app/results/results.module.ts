import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResultsComponent }  from './results.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from '../app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [ResultsComponent],
  exports: [ResultsComponent]

})
export class ResultsModule { }
