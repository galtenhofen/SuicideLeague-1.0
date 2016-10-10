/*import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {ISquad} from './squad/squad';

@Injectable()
export class AppService {

  // Observable string sources
  private addedSquad = new Subject<ISquad>();
//private addedPlayer: IPlayer;

  // Observable string streams
  addSquad$ = this.addedSquad.asObservable();
  
  // Service message commands
  addSquad(squad: ISquad) {
     // console.log('Adding Player: '+ JSON.stringify(player));
    this.addedSquad.next(squad);

    console.log('IN AppService  addedSquad: '+ JSON.stringify(squad));
  }
 

}*/