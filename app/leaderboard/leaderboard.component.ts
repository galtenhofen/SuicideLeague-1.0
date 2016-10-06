import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
     moduleId: module.id,
     selector: 'leaderboard-app',
    templateUrl: 'leaderboard.component.html',
    styleUrls: ['leaderboard.component.css']

})
export class LeaderboardComponent {

       constructor(private router: Router) {}

gotoCreate(): void {
  let link = ['/create'];
  this.router.navigate(link);
}

gotoHome(): void {
  let link = ['/home'];
  this.router.navigate(link);
}

gotoResults(): void {
  let link = ['/results'];
  this.router.navigate(link);
}

}