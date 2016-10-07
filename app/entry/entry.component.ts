import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from '../squad/squad';
import { IPlayer } from '../players/player';
import {AppService} from '../app.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
  selector: 'nfl-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})
export class EntryComponent implements OnInit {
    addedPlayer: IPlayer; 
    subscription: Subscription;
    addedSquad: ISquad;


    /*players: IPlayer[] = [];
    QB: IPlayer;
    RB1: IPlayer;
    RB2: IPlayer;
    WR1: IPlayer;
    WR2: IPlayer;
    WR3: IPlayer;
    TE: IPlayer;
    FLX: IPlayer;
    DEF: IPlayer;
    currentSquadIDS:string[] = [];*/

  constructor(private _appService: AppService) {
   
this.addedSquad = null;

  this.subscription = _appService.addSquad$.subscribe(
     squad=> { this.addedSquad;
         //this.addEntry(squad);
    });

  }
ngOnInit(): any{
    console.log('IN  OnInit');

    }

 addEntry(squad:ISquad): void{
        console.log('IN addEntry' + squad);
        console.log('IN addEntry  SQUAD: '+ JSON.stringify(squad));

 }

}