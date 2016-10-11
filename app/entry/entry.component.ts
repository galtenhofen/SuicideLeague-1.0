import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from '../squad/squad';
import { IPlayer } from '../players/player';
import {HomeService} from '../home/home.service';
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
    loading: boolean = false;

    entry: ISquad;
    errorMessage: string;

    QB: IPlayer;
    RB1: IPlayer;
    RB2: IPlayer;
    WR1: IPlayer;
    WR2: IPlayer;
    WR3: IPlayer;
    TE: IPlayer;
    FLX: IPlayer;
    DEF: IPlayer;

  constructor(private _homeService: HomeService) {
   
this.addedSquad = null;

  this.subscription = _homeService.addSquad$.subscribe(
     squad=> { 
       this.addEntry(squad);
  });
  }
ngOnInit(): any{
    console.log('IN  OnInit');

this.entry=this._homeService.getEntry();
   /* this.loading = true;
          this._homeService.getEntry()
                .subscribe(
                    response => this.entry = response,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));
*/

    }

  ngOnDestroy() {
    console.log('IN  OnDestroy');
  }

 addEntry(squad:ISquad): void{
        //console.log('IN addEntry  SQUAD: '+ JSON.stringify(squad));
        this.addedSquad = squad;
        this.QB = this.addedSquad.QB;

 }


 onRequestComplete(){
    this.loading = this._homeService.loading;
   // this.offense = [];

    // this.offense = this.players.filter(player => player.position != "DB" && player.position != "DL" && player.position != "LB");

    }
}