import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {PlayerListComponent}  from '../players/player-list.component';
import {Router} from '@angular/router';

@Component({
     moduleId: module.id,
     selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent {

       constructor(private router: Router) {}

gotoCreate(): void {
  let link = ['/create'];
  this.router.navigate(link);
}


}