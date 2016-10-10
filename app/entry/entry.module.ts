import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntryComponent }  from '../entry/entry.component';
import { HttpModule, JsonpModule } from '@angular/http';



@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule],
  declarations: [EntryComponent],
  exports: [EntryComponent]

})
export class EntryModule { }
