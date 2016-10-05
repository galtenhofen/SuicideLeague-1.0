import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from './squad';
import { IPlayer } from '../players/player';
import {CreateTeamService} from '../create/create-team.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
  selector: 'nfl-squad',
  templateUrl: 'squad.component.html',
  styleUrls: ['squad.component.css']
})
export class SquadComponent implements OnChanges {
    addedPlayer: IPlayer; 
    subscription: Subscription;
    squad: ISquad;
    players: IPlayer[] = [];
    QB: IPlayer;
    RB1: IPlayer;
    RB2: IPlayer;
    WR1: IPlayer;
    WR2: IPlayer;
    WR3: IPlayer;
    TE: IPlayer;
    FLX: IPlayer;
    DEF: IPlayer;

  constructor(private _createTeamService: CreateTeamService) {
   
this.addedPlayer = null;

  this.subscription = _createTeamService.addPlayer$.subscribe(
     player => {
         if(player.position == "QB" && this.QB == null){
             this.QB = player;
         }
         
         //this.addedPlayer = player;
     /* player => {
          this.players.push(player);*/
    });

  }
          
  
  ngOnChanges(): void {
    console.log('IN ngOnChanges');

      }


   onClickRemoveQB(player:IPlayer): void{
        console.log('IN onClickRemovePlayer' + player);
        this.QB = null;

   
  }

  onClickTest(): void{
        console.log('IN onTest: added players:' + JSON.stringify(this.addedPlayer);

   
  }

  onSubmitTeam(): void{
        alert('Nice Team, asshole.')
   
  }

       /* makeTableScroll() {
            var maxRows = 5;

            var table: any = (<HTMLInputElement>document.getElementById('squadTable')).value;
            var wrapper: any = (<HTMLInputElement>document.getElementById('squadTable')).parentNode;
            //var wrapper = table.parentNode;
            var rowsInTable = table.rows.length;
            var height = 0;
            if (rowsInTable > maxRows) {
                for (var i = 0; i < maxRows; i++) {
                    height += table.rows[i].clientHeight;
                }
                wrapper.style.height = height + "px";
            }
        }*/

}