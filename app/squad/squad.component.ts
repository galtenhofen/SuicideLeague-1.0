import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
export class SquadComponent implements OnInit {
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
    currentSquadIDS:string[] = [];

  constructor(private _createTeamService: CreateTeamService) {
   
this.addedPlayer = null;

  this.subscription = _createTeamService.addPlayer$.subscribe(
     player => { 
         this.buildSquad(player);
         /*if(player.position == "QB" && this.QB == null){
             this.QB = player;
         }*/

    });

  }
ngOnInit(): any{
    console.log('IN  OnInit');
     
    this.canEnableSubmit();

    }

  

       buildSquad(player:IPlayer): void{
        console.log('IN buildSquad' + player);
        var pid = player.id;
        var index = this.currentSquadIDS.indexOf(pid);

        if(index == -1){ 
        console.log('IN buildSquad' + player);
        
        this.currentSquadIDS.push(pid);

        if(player.position == "QB" && this.QB == null){
             this.QB = player;
         }
         else if(player.position == "RB"){
             if(this.RB1 ==null)
                {
                    this.RB1 = player;
                }
                else if(this.RB2 ==null)
                {
                    this.RB2 = player;
                }
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
         }
          else if(player.position == "WR"){
             if(this.WR1 ==null)
                {
                    this.WR1 = player;
                }
                else if(this.WR2 ==null)
                {
                    this.WR2 = player;
                }
                else if(this.WR3 ==null)
                {
                    this.WR3 = player;
                }
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
         }
         else if(player.position == "TE" && this.TE == null){
             this.TE = player;
         }
         if(player.position == "DEF" && this.DEF == null){
             this.DEF = player;
         }
        }
        else{
            console.log('Leaving buildSquad  PLAYER ALREADY CHOSEN');
        }
        this.canEnableSubmit();
   console.log('Leaving buildSquad  currentSquadIDS:' + this.currentSquadIDS);
  } 
 

   onClickRemovePlayer(pos:string, pid:string): void{

       this.removeFromArray(pid);

        console.log('IN onClickRemovePlayer from ' + pos);
         if(pos == "Q"){
            this.QB = null;
         }
         if(pos == "R1"){
            this.RB1 = null;
         }
         if(pos == "R2"){
            this.RB2 = null;
         }
         if(pos == "W1"){
            this.WR1 = null;
         }
         if(pos == "W2"){
            this.WR2 = null;
         }
         if(pos == "W3"){
            this.WR3 = null;
         }
         if(pos == "T"){
            this.TE = null;
         }
         if(pos == "F"){
            this.FLX = null;
         }
         if(pos == "D"){
            this.DEF = null;
         }
   this.canEnableSubmit();
  }

  removeFromArray(pid:string): void{
var index = this.currentSquadIDS.indexOf(pid);
  if(index){  
    this.currentSquadIDS.splice(index, 1);
  }
  console.log('Leaving   removeFromArray:' + this.currentSquadIDS);
  }

  onClickTest(): void{
        console.log('IN onTest: added players:' + JSON.stringify(this.addedPlayer));

   
  }

  onSubmitTeam(): void{
        alert('Nice Team, asshole');
   
  }

  canEnableSubmit(): void{
      if(this.QB != null && this.RB1 != null && this.RB2 != null && this.WR1 != null && this.WR2 != null && this.WR3 != null && this.TE != null && this.FLX != null && this.DEF != null){
        (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = false;
      }
      else{
          (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = true;
      }
  }

/*
    disableButtons(){
        (<HTMLInputElement> document.getElementById('retryBtn')).disabled = true;
 
    }

    enableButtons(){
        
        (<HTMLInputElement> document.getElementById('retryBtn')).disabled = false;

    }*/

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