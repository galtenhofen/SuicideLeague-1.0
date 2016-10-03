import {IPlayer} from './player';

export interface IResponse {
   statType: string
   season: string
   week: string
   players: IPlayer[]
        
}

