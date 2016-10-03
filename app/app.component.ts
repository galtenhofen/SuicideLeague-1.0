import { Component } from '@angular/core';
import { HomeComponent }  from './home/home.component';


@Component({
    selector: 'nfl-app',
    template: `<div><h1> {{pageTitle}} </h1>
    <home-app></home-app>
    </div>`
})
export class AppComponent { pageTitle: string = 'NFL Suicide League'}
