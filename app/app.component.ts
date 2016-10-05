import { Component } from '@angular/core';
import { HomeComponent }  from './home/home.component';
import {Routes, RouterModule} from '@angular/router';


@Component({
    selector: 'nfl-app',
    template: `<div><h1 align="center" style="color:white"> {{pageTitle}} </h1>
    <router-outlet></router-outlet>
    </div>`
})
export class AppComponent { 


    pageTitle: string = 'NFL Suicide League'


}
