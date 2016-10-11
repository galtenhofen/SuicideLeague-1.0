import {Component,Injectable,Input,Output,EventEmitter } from '@angular/core';
import {IPlayer} from '../players/player';
import {ISquad} from '../squad/squad';
import {IResponse} from '../players/response';
import {ILoadInfo} from '../players/loadInfo';
import {Http, Request, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class HomeService {
  private _playerUrl = 'http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&week=5&format=json';
  private _savedEntry= 'app/saved/squad.json'
  private _newSavedEntry= 'app/saved/entry.json'

  loading:boolean; 

  constructor(private _http: Http){ this.loading=false; }

  // Observable string sources
  public addedPlayer = new Subject<IPlayer>();
  public addedSquad = new Subject<ISquad>();
//private addedPlayer: IPlayer;

  currentEntry:ISquad;
  currentEntryJSON:JSON;

  // Observable string streams
  addPlayer$ = this.addedPlayer.asObservable();
  addSquad$ = this.addedSquad.asObservable();
  // Service message commands
  addPlayer(player: IPlayer) {
      console.log('Adding Player: '+ JSON.stringify(player));
    this.addedPlayer.next(player);

    console.log('addedPlayer: '+ this.addedPlayer);
  }

    addSquad(squad: ISquad) {
     // console.log('Adding Player: '+ JSON.stringify(player));
    this.addedSquad.next(squad);
    
    //using this until it can be replaced with database calls
    this.currentEntry = squad;
    
    

  }
/*
  getEntry(): Observable<ISquad>{
    console.log('IN getEntry ');
    return this._http.get(this._newSavedEntry) 
    .finally( () => this.loading = false)
                    .map((response: Response) => <ISquad>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
} 

 setEntry(entry:ISquad){
   console.log('IN setEntry');
                let body = JSON.stringify(entry);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(this._newSavedEntry , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }
 */

getEntry():ISquad{
    return this.currentEntry
    
} 



  getResponse(): Observable<IResponse>{ 
                     console.log("IN getResponse -   URL: " +this._playerUrl);
                     return this._http.get(this._playerUrl) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IResponse>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }

                   private throwStatus(error: Response){
            console.log('IN throwStatus  error.status = ' + error.status);
            console.error(error.status);
            return Observable.throw(error.status || 'Server error');

        }

        private checkResponseStatus(res: Response) {
            let status:any;

            // check if empty, before call json
             if (res.status) {
                status = res.status;
                }
            console.log('IN  checkResponseStatus STATUS:' + status);
            return status || {};
        }

}