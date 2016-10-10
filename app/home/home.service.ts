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
        
  loading:boolean; 

  constructor(private _http: Http){ this.loading=false; }

  // Observable string sources
  private addedPlayer = new Subject<IPlayer>();
    private addedSquad = new Subject<ISquad>();
//private addedPlayer: IPlayer;

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

    console.log('IN AppService  addedSquad: '+ JSON.stringify(squad));
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