import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {PlayerListComponent}  from '../players/player-list.component';


@Component({
     moduleId: module.id,
     selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent {
    public pageTitle: string = "Suicide League";
}