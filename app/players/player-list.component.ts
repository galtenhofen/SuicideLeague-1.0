import {IPlayer} from './player';
import {IResponse} from './response';
import {ILoadInfo} from './loadInfo';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PlayerFilterPipe} from './player-playerfilter.pipe';
import {BrowserModule} from '@angular/platform-browser';
//import {SquadComponent} from '../squad/squad.component';
import {PlayerService} from './player.service';
import {CreateTeamService} from '../create/create-team.service';
//import {ConfirmService} from '../shared/confirm/confirm.service';
//import {ConfirmComponent} from '../shared/confirm/confirm.component';
import { Routes, RouterModule } from '@angular/router';
//import { WindowService } from "../windowservice/window.service";


//declare var componentHandler:any;

@Component({
moduleId: module.id,
selector: 'player-app',
templateUrl: 'player-list.component.html',
styleUrls: ['player-list.component.css']

})



export class PlayerListComponent
                implements OnInit{
    
    nameFilter: string = '';
    positionFilter: string = '';
    teamFilter: string = '';
    errorMessage: string;
    httpStatus: string;
    beginDate: string;
    endDate: string;
    currentORFileGroupId: string;
    players: IPlayer[];
    offense: IPlayer[];
    response: IResponse;
    retryList: any[] = [];
    utilityList: any[] = [];
    postDataUtilities: string;
    postRetries: string;

    confirmResponse:string = '';
    loading: boolean = false;
   
     @Output() addPlayer: EventEmitter<IPlayer> =
                             new EventEmitter<IPlayer>();

constructor(private _playerService: PlayerService, private _createTeamService: CreateTeamService){
    this.loading = this._playerService.loading;

}


    ngOnInit(): any{
    console.log('IN  OnInit');
     
     //componentHandler.upgradeDom();
  
this.loading = true;
          this._playerService.getResponse()
                .subscribe(
                    response => this.players = response.players,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));


    }
/*
 showConfirmDialog(stringTitle) {
     console.log('IN showConfirmDialog  action: ' + stringTitle);
     var stringMessage:string;
     if(stringTitle === "DataUtilties"){
         stringMessage = "Are you sure you want to run selected Data Utilities?"
     }
      if(stringTitle === "ReleaseRetry"){
         stringMessage = "Are you sure you want to release selected Retry items?"


     }
        this._confirmService.activate(stringMessage, stringTitle)
       .then(res => this.completeRequest(stringTitle, res));

   }

   completeRequest(strTitle, boolConfirm) {

           if(boolConfirm){
               if(strTitle === "DataUtilities"){
                    this._orfileService.postRunUtilities(this.utilityObjects)
                    .subscribe(
                    data => this.postDataUtilities = JSON.stringify(data), 
                    error => this.errorMessage = <any>error);
                }
                if(strTitle === "ReleaseRetry"){
                    this._orfileService.postReleaseRetry(this.retryObjects)
                    .subscribe(
                    data => this.postRetries = JSON.stringify(data), 
                    error => this.errorMessage = <any>error);
                }
            }
            else{console.log('Requested cancelled by user');}
   }
*/

onClickrefreshPlayerList(): void{
        this.disableButtons();
      //var run:boolean = this.validateReceivedDates(this.beginDate, this.endDate);
      //  if (run == true){
          //this.players = [];
            this.loading = true;
          this._playerService.getResponse()
                .subscribe(
                    response => this.players = response.players,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));

                 
      //  }
      //  else{
      //      alert('You entered a begin date ('+this.beginDate+') that is after the end date ('+this.endDate+ ') and that makes no sense.');
      //      console.log('You fucked up the dates');
     //   }

    console.log('Leaving onClickrefreshPlayerList  this.loading: ' + this.loading);
    }


    onClickrefreshPlayerList2(): void{
        this.disableButtons();
      //var run:boolean = this.validateReceivedDates(this.beginDate, this.endDate);
      //  if (run == true){
            this.players = [];
            this.loading = true;
          this._playerService.getPlayers()
                .subscribe(
                    players => this.players = players,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));

        //console.log('Leaving onClickrefreshPlayerList  this.players: ' + this.players);            
      //  }
      //  else{
      //      alert('You entered a begin date ('+this.beginDate+') that is after the end date ('+this.endDate+ ') and that makes no sense.');
      //      console.log('You fucked up the dates');
     //   }

    console.log('Leaving onClickrefreshPlayerList  this.loading: ' + this.loading);
    }

    onClickClose(): void{
        console.log('Close App');
        if(confirm('You wanna close the app?')){
            alert("This app took me a long time to develop, so you're gonna sit there and use it some more.");
        }
        
    }

    onClickAddPlayer(player:IPlayer): void{
    console.log('Entering onClickAddPlayer');

    this._createTeamService.addPlayer(player);

    console.log('Leaving onClickAddPlayer');
    }


    showOrFileDetail(){
        console.log('IN  showOrFileDetail');
    }

    onRequestComplete(){
    this.loading = this._playerService.loading;
    this.offense = [];

     this.offense = this.players.filter(player => player.position != "DB" && player.position != "DL" && player.position != "LB");

    }

    disableButtons(){
        (<HTMLInputElement> document.getElementById('retryBtn')).disabled = true;
        (<HTMLInputElement> document.getElementById('utilityBtn')).disabled = true;
 
    }

    enableButtons(){
        
        (<HTMLInputElement> document.getElementById('retryBtn')).disabled = false;
        (<HTMLInputElement> document.getElementById('utilityBtn')).disabled = false;

    }


       makeTableScroll() {
            var maxRows = 10;

            var table: any = (<HTMLInputElement>document.getElementById('playersTable')).value;
            var wrapper: any = (<HTMLInputElement>document.getElementById('playersTable')).parentNode;
            //var wrapper = table.parentNode;
            var rowsInTable = table.rows.length;
            var height = 0;
            if (rowsInTable > maxRows) {
                for (var i = 0; i < maxRows; i++) {
                    height += table.rows[i].clientHeight;
                }
                wrapper.style.height = height + "px";
            }
        }

}
