/*import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {IPlayer} from '../players/player';

@Injectable()
export class CreateTeamService {

  // Observable string sources
  private addedPlayer = new Subject<IPlayer>();
//private addedPlayer: IPlayer;

  // Observable string streams
  addPlayer$ = this.addedPlayer.asObservable();
  
  // Service message commands
  addPlayer(player: IPlayer) {
      console.log('Adding Player: '+ JSON.stringify(player));
    this.addedPlayer.next(player);

    console.log('addedPlayer: '+ this.addedPlayer);
  }
 

}*/