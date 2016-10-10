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

  constructor(private _appService: AppService) {
   
this.addedSquad = null;

  this.subscription = _appService.addSquad$.subscribe(
     squad=> { 
       this.addEntry(squad);
  });
  }
ngOnInit(): any{
    console.log('IN  OnInit');

    }

 addEntry(squad:ISquad): void{
        console.log('IN addEntry  SQUAD: '+ JSON.stringify(squad));
        this.addedSquad = squad;
        console.log('IN addEntry  this.addedSquad: '+ JSON.stringify(this.addedSquad));
 }

}