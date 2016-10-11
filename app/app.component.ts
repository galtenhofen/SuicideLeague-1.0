import { Component } from '@angular/core';
import { HomeComponent }  from './home/home.component';
//import {Routes, RouterModule} from '@angular/router';


@Component({
    selector: 'nfl-app',
    template: `<div><h1 align="center" style="color:white"> {{pageTitle}} </h1>
    <home-app></home-app>
    </div>`,
    styleUrls: ['./app/app.component.css']
})
export class AppComponent { 

    viewController: string = 'Home';
    pageTitle: string = 'NFL Suicide League'


}
