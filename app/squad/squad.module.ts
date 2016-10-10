import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SquadComponent }  from '../squad/squad.component';
import { HttpModule, JsonpModule } from '@angular/http';



@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [SquadComponent],
  exports: [SquadComponent]

})
export class SquadModule { }
