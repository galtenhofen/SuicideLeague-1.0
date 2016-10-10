import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
     moduleId: module.id,
     selector: 'results-app',
    templateUrl: 'results.component.html',
    styleUrls: ['results.component.css']

})
export class ResultsComponent {

       constructor(private router: Router) {}

gotoCreate(): void {
  let link = ['/create'];
  this.router.navigate(link);
}

gotoHome(): void {
  let link = ['/home'];
  this.router.navigate(link);
}

gotoLeaderboard(): void {
  let link = ['/leaderboard'];
  this.router.navigate(link);
}

}