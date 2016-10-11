import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from './squad';
import { IPlayer } from '../players/player';
import {HomeService} from '../home/home.service';
//import {AppService} from '../app.service';
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


  constructor(private _homeService: HomeService) {
   
this.addedPlayer = null;

  this.subscription = _homeService.addPlayer$.subscribe(
     player => { 
         this.buildSquad(player);

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
         else if(player.position == "TE"){
               if(this.TE ==null)
                {
                    this.TE = player;
                }
             
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
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

  onSubmitTeam(squad:ISquad): void{
        console.log('IN onSubmitTeam.....Nice Team, dipshit');
    this.squad = {
        week: 5, 
        user: "admin",
        id: "admin-5-2016",
        QB: this.QB,
        RB1: this.RB1,
        RB2: this.RB2,
        WR1: this.WR1,
        WR2: this.WR2,
        WR3: this.WR3,
        TE: this.TE,
        FLX: this.FLX,
        DEF: this.DEF
        }    

this._homeService.addSquad(this.squad);


     //console.log('Your Team: ' + JSON.stringify(this.squad));

  }

  canEnableSubmit(): void{
      if(this.QB != null && this.RB1 != null && this.RB2 != null && this.WR1 != null && this.WR2 != null && this.WR3 != null && this.TE != null && this.FLX != null && this.DEF != null){
        (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = false;
      }
      else{
          (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = true;
      }
  }

 ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}