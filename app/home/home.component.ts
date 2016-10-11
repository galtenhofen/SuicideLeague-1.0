import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {PlayerListComponent}  from '../players/player-list.component';
import {ISquad}  from '../squad/squad';
//import { IPlayer } from '../players/player';
import { Subscription }   from 'rxjs/Subscription';
import {HomeService} from '../home/home.service';


@Component({
     moduleId: module.id,
     selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit{

highlightHome:string;
highlightCreate:string;
highlightResults:string;
highlightLeader:string;
homeHighlighted: boolean;
createHighlighted: boolean;
resultsHighlighted: boolean;
leaderHighlighted: boolean;


    subscription: Subscription;
    addedSquad: ISquad;

public squad:ISquad;


constructor(private _homeService: HomeService) { 
    this.highlightHome = 'highlight-class';
    this.highlightCreate = 'nolight-class';
    this.highlightResults = 'nolight-class';
    this.highlightLeader = 'nolight-class';
    this.homeHighlighted = true;
    this.createHighlighted = false;
    this.resultsHighlighted = false;
    this.leaderHighlighted = false;


    this.addedSquad = null;

  this.subscription = _homeService.addSquad$.subscribe(
     squad=> { 
       this.addEntry(squad);
       this.updateResults();
  });

  }

   
  viewController: string;
  //isClassHighlighted:boolean = false;



ngOnInit(): any{
this.viewController = "Home";
}

updateHome(): void {
    this.viewController = "Home"
    console.log('IN updateView  viewController: ' + this.viewController);

    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  this.highlightHome = 'highlight-class';
  this.highlightCreate = 'nolight-class';
  this.highlightResults= 'nolight-class';
  this.highlightLeader = 'nolight-class';
}

updateCreate(): void {
    this.viewController = "Create"
    console.log('IN updateView  viewController: ' + this.viewController);

   // this.createHighlighted = !this.createHighlighted;
    //this.highlightCreate = this.createHighlighted ? 'highlight-class' : 'nolight-class';
    this.highlightCreate = 'highlight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'nolight-class';
    this.highlightLeader = 'nolight-class';
  
}

updateResults(): void {
    this.viewController = "Results"
    console.log('IN updateView  viewController: ' + this.viewController);

    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  this.highlightCreate = 'nolight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'highlight-class';
    this.highlightLeader = 'nolight-class';
}

updateLeaderboard(): void {
    this.viewController = "Leader"
    console.log('IN updateView  viewController: ' + this.viewController);

this.highlightCreate = 'nolight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'nolight-class';
    this.highlightLeader = 'highlight-class';
    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  
}

 addEntry(squad:ISquad): void{
        console.log('IN addEntry - home.component ');
        this.addedSquad = squad;
        //this.QB = this.addedSquad.QB;

 }

newEntry(squad:ISquad): void{
        console.log('IN newEntry - home.component ');
        this.addedSquad = squad;
        console.log('inputSquad: ' + JSON.stringify(squad));

 }


}