import {Component,Injectable,Input,Output,EventEmitter } from '@angular/core';
import {IPlayer} from './player';
import {IResponse} from './response';
import {ILoadInfo} from './loadInfo';
import {Http, Request, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PlayerService{
        //private _orfileUrl = 'http://crp12vdtib03:8080/ORWorkflow/service';
        private _playerUrl = 'http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&week=2&format=json';
        
         private _playerTest = '../../api/players/players.json';
       
        
        loading:boolean; 

        constructor(private _http: Http){ this.loading=false; }
    /*
        getORFilesToday(): Observable<IPlayer[]>{
                     return this._http.get(this._orfileUrl)
                    .map((response: Response) => <IPlayer[]>response.json())
                    .do(data => console.log("All: " + JSON.stringify(data)))
                    .catch(this.throwStatus);
                    }
*/
        getPlayers(): Observable<IPlayer[]>{ 
                     console.log("IN getPlayers -   URL: " +this._playerUrl);
                     return this._http.get(this._playerUrl) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IPlayer[]>response.json())
                    //.do(data => console.log("IN getPlayers:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }

                getResponse(): Observable<IResponse>{ 
                     console.log("IN getResponse -   URL: " +this._playerUrl);
                     return this._http.get(this._playerUrl) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IResponse>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }

                    getInitialResponse(): Observable<IResponse>{ 
                     console.log("IN getResponse -   URL: " +this._playerTest);
                     return this._http.get(this._playerTest) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IResponse>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }
/*
        postRunUtilities(utilities) {
                console.log('IN postRunUtility  utilities: ' + utilities);
                let body = JSON.stringify(utilities);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(this._orfileUrl + "/ordatalist", body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
                    }
        
        postReleaseRetry(retries) {
                console.log('IN postReleaseRetry  retries: ' + retries);
                let body = JSON.stringify(retries);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(this._orfileUrl + "/ordatalist", body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
                    }
*/
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