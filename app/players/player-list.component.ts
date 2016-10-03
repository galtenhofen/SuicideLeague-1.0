import {IPlayer} from './player';
import {IResponse} from './response';
import {ILoadInfo} from './loadInfo';
import {Component, OnInit} from '@angular/core';
import {PlayerFilterPipe} from './player-playerfilter.pipe';
import {BrowserModule} from '@angular/platform-browser';
//import {SquadComponent} from '../squad/squad.component';
import {PlayerService} from './player.service';
//import {ConfirmService} from '../shared/confirm/confirm.service';
//import {ConfirmComponent} from '../shared/confirm/confirm.component';
import { Routes, RouterModule } from '@angular/router';
//import { WindowService } from "../windowservice/window.service";


declare var componentHandler:any;

@Component({
moduleId: module.id,
selector: 'player-app',
templateUrl: '../players/player-list.component.html',
styleUrls: ['../players/player-list.component.css'],
providers: [PlayerService]

})



export class PlayerListComponent
                implements OnInit{
    pageTitle: string = 'NFL Suicide Bowl';
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
   

constructor(private _playerService: PlayerService){
    this.loading = this._playerService.loading;

}


    ngOnInit(): any{
    console.log('IN  OnInit');
     
     componentHandler.upgradeDom();
  
this.loading = true;
          this._playerService.getResponse()
                .subscribe(
                    response => this.players = response.players,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));


     //this.beginDate = this.formatDate(new Date());
    // this.endDate = this.formatDate(new Date());
/*
    console.log('Retrieving Player List...');
    this.players = [];
    this.loading=true;
      this._playerService.getPlayers()
                .subscribe(
                    players => this.players = players,
                    error => this.errorMessage = <any>erro
                    r,
                    () => this.onRequestComplete());
*/
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

        console.log('Leaving onClickrefreshPlayerList  this.players: ' + this.players);            
      //  }
      //  else{
      //      alert('You entered a begin date ('+this.beginDate+') that is after the end date ('+this.endDate+ ') and that makes no sense.');
      //      console.log('You fucked up the dates');
     //   }

    console.log('Leaving onClickrefreshPlayerList  this.loading: ' + this.loading);
    }
/*
     onToggleRetry(ordfgId, checked, processStep, providerId): void{
        console.log('Retry button clicked.  ORDataFileGroupId: ' + ordfgId + '  Current value = ' + checked + '  Step: ' + processStep + '  ProviderId: ' + providerId);
        
       this.retry = {"orDataFileGroupId": ordfgId, "providerId": providerId, "step": processStep, "userName" : "galtenhofen"   };

        if(checked == true){
        this.retryObjects.push(this.retry);
        console.log('retryObj: ' + this.retryObjects);
        console.log('stringify retryObj: ' + JSON.stringify(this.retryObjects));
        }
        else{

            for(var i = 0; i <  this.retryObjects.length; i++) {
                if( this.retryObjects[i].orDataFileGroupId == ordfgId) {
                     this.retryObjects.splice(i, 1);
                    break;
                    }
        }
          
          console.log('stringify retryObj: ' + JSON.stringify(this.retryObjects));
        }

        this.canEnableButtons();    
    }

*/
/*  ORIGINAL

    onToggleRetry(ordfgId, checked, processStep, providerId): void{
        console.log('Retry button clicked.  ORDataFileGroupId: ' + ordfgId + '  Current value = ' + checked + '  Step: ' + processStep);
        
        if(checked == true){
        this.retryList.push(ordfgId,processStep);
        console.log('retryList: ' + this.retryList);
        }
        else{
           var removeIndex = this.retryList.indexOf(ordfgId);
           this.retryList.splice(removeIndex,2)
           console.log('retryList: ' + this.retryList);
        }
    }*/
/*
    onClickReleaseRetry(): void{
        console.log('Release Retry Items');
        console.log('utilityList: ' + this.utilityList);

        if(this.utilityList.length < 0){

        }
        else{
        this._orfileService.postReleaseRetry(this.retryObjects)
                .subscribe(
                    data => this.postRetries = JSON.stringify(data), 
                    error => this.errorMessage = <any>error);
        }
    }

    onClickRunDataUtilities(): void{
        console.log('IN onClickRunDataUtilties  ');
        console.log('utilityList: ' + this.utilityList);


        this._orfileService.postRunUtilities(this.utilityObjects)
                .subscribe(
                    data => this.postDataUtilities = JSON.stringify(data), 
                    error => this.errorMessage = <any>error);
    }
*/
    onClickClose(): void{
        console.log('Close App');
        if(confirm('You wanna close the app?')){
            alert("This app took me a long time to develop, so you're gonna sit there and use it some more.");
        }
        
    }

    onClickAddPlayer(playerId:any): void{
    console.log('Entering onClickAddPlayer');



    console.log('Leaving onClickAddPlayer');
    }
/*
    onChangeDateReceivedFrom(selectedDate): void{
        console.log('Changed Date Received From.  Setting this.beginDate');
        console.log('Selected Date: ' + selectedDate);
       // this.beginDate = selectedDate.toString();
        console.log('Begin Date: ' + this.beginDate);
       // var beginString: string = ((this.beginDate).getFullYear()).toString() + "/" + ((this.beginDate).getMonth()).toString() + "/" + ((this.beginDate).getDay()).toString();
        //console.log('beginString: ' + beginString);

    }

    onChangeDateReceivedTo(selectedDate): void{
        console.log('Changed Date Received To');
     //   this.endDate = selectedDate.toString();
        //var endString: string = ((this.endDate).getFullYear()).toString() + "/" + ((this.endDate).getMonth()).toString() + "/" + ((this.endDate).getDay()).toString();        
        console.log('End Date: ' + this.endDate);
    }

  onUtilitySelected(message:string, ordfgId, providerId): void{
         console.log('IN onUtilitySelected  orfile-list component ');
         console.log('IN onUtilitySelected  message: ' + message);
        console.log('IN onUtilitySelected  ORDataFileGroupId: ' + ordfgId + '  ProviderId: ' + providerId  );

         if(message == '2' || message == '3'){

            //var existIndex = this.utilityList.indexOf("orDataFileGroupId:"+ordfgId);
            
            console.log('IN onUtilitySelected  ORDataFileGroupId : '+ ordfgId + ' exists in arraty at position ' + existIndex);
            
            if(existIndex > -1){
                this.utilityList.splice(existIndex,3)
                console.log('IN onUtilitySelected utilityList: ' + this.utilityList);
                }
    
                if(message == '2'){   
                    this.utilityList.push(ordfgId, providerId, "unconvert"); 
                    //this.utilityList.push("orDataFileGroupId:"+ordfgId, "providerId:"+providerId, "type:unconvert");
                }
                else if(message == '3'){
                    this.utilityList.push(ordfgId, providerId, "purgeAll"); 
                   // this.utilityList.push("orDataFileGroupId:"+ordfgId, "providerId:"+providerId, "type:purgeAll");
                }
             console.log('IN onUtilitySelected utilityList: ' + this.utilityList);
    
        }
        else{
            var existIndex = this.utilityList.indexOf("orDataFileGroupId:"+ordfgId);
            console.log('IN onUtilitySelected  ORDataFileGroupId : '+ ordfgId + ' exists in arraty at position ' + existIndex);
            if(existIndex > -1){
                this.utilityList.splice(existIndex,3)
                console.log('IN onUtilitySelected utilityList: ' + this.utilityList);
            }
            else{
            console.log('IN onUtilitySelected  NO UTILITY CHOSEN: ');
            console.log('IN onUtilitySelected utilityList: ' + this.utilityList);
       	    }
        }
    }*/

/*
    onUtilitySelected(message:string, ordfgId, providerId): void{
         console.log('IN onUtilitySelected  orfile-list component ');
         console.log('IN onUtilitySelected  message: ' + message);
         console.log('IN onUtilitySelected  ORDataFileGroupId: ' + ordfgId + '  ProviderId: ' + providerId  );
        var type: string;

        if(message == '2'){type = 'unconvert'}
        else if(message == '3'){type = 'purgeAll'}
        else{type = ''}

        this.utility = {"orDataFileGroupId": ordfgId, "providerId": providerId, "step": type, "userName" : "galtenhofen"  };

             for(var i = 0; i <  this.utilityObjects.length; i++) {
                if( this.utilityObjects[i].orDataFileGroupId == ordfgId) {
                     this.utilityObjects.splice(i, 1);
                    break;
                    }
                }

        if(message == '2' || message == '3'){
            this.utilityObjects.push(this.utility);
            console.log('retryObj: ' + this.retryObjects);
            console.log('stringify retryObj: ' + JSON.stringify(this.utilityObjects)); 
        }
    this.canEnableButtons();   
    }*/

    formatDate(dateToFormat:Date): string{
        var dayNum:number = dateToFormat.getDate();
        var monthNum:number = dateToFormat.getMonth();
        var dayString:string;
        var monthString:string;

        if(dayNum < 10)
            {dayString = '0'+ dayNum.toString()}
        else 
            {dayString = dayNum.toString()}
        if(monthNum < 10)
            {monthString = '0' + (monthNum + 1).toString()}
        else
            {monthString = monthNum.toString()}

        console.log('IN  formatDate : ' + dateToFormat.getFullYear().toString() +"-"+monthString+"-"+dayString);

        return (dateToFormat.getFullYear().toString() +"-"+monthString+"-"+dayString)

    }

    buildRunUtility(utilityList:any[]){
        var jsonData = {};

    }
/*
    containsObject(ordfgid){
        if (this.utilityList.filter(function(e){return e.orDataFileGroupId == ordfgid}).length>0) {
        }
    }*/

    showOrFileDetail(){
        console.log('IN  showOrFileDetail');
    }

    onRequestComplete(){
    this.loading = this._playerService.loading;
    this.offense = [];

     this.offense = this.players.filter(player => player.position != "DB" && player.position != "DL" && player.position != "LB");

    //this.canEnableButtons();
    //this.enableButtons();
    console.log('Leaving  onRequestComplete  this.players: ' + JSON.stringify(this.players));

    //console.log('Leaving  onRequestComplete  this.response.players: ' + JSON.stringify(this.response.players));

    }
/*
    canEnableButtons(){
    if(!this.retryObjects || this.retryObjects.length < 1 ){
            (<HTMLInputElement> document.getElementById('retryBtn')).disabled = true;
        }
        else{
            (<HTMLInputElement> document.getElementById('retryBtn')).disabled = false;
        }
     if(!this.utilityObjects || this.utilityObjects.length < 1 ){
            (<HTMLInputElement> document.getElementById('utilityBtn')).disabled = true;
        }
        else{
            (<HTMLInputElement> document.getElementById('utilityBtn')).disabled = false;
        }    
    }*/

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
