import {IPlayer} from '../players/player';

export interface ISquad {
        id: string
        user:string
        week: number
        QB: IPlayer
        RB1: IPlayer
        RB2: IPlayer
        WR1: IPlayer
        WR2: IPlayer
        WR3: IPlayer
        TE: IPlayer
        FLX: IPlayer
        DEF: IPlayer
}
