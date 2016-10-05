import {PipeTransform, Pipe} from '@angular/core';
import {IPlayer} from './player';

@Pipe({
    name: 'playerFilter'
})

export class PlayerFilterPipe implements PipeTransform{
                transform(value:IPlayer[], argName:string, argTeam:string, argPos:string): IPlayer[]{
                    let namefilter: string = argName ? argName.toLocaleLowerCase(): null;
                    let teamfilter: string = argTeam ? argTeam.toLocaleLowerCase(): null;
                    let positionfilter: string = argPos ? argPos.toLocaleLowerCase(): null;
                    console.log("name: " + namefilter + " - team: " + teamfilter  + " - position: " + positionfilter);

            if(namefilter){
                value = value.filter((player: IPlayer) =>
                    player.name.toLocaleLowerCase().indexOf(namefilter) != -1);
                       
            }
             if(teamfilter){
                value = value.filter((value: IPlayer) =>
                    value.teamAbbr.toLocaleLowerCase().indexOf(teamfilter) != -1);
                    
            }
             if(positionfilter){
                    if (positionfilter==="off"){
                        value = value.filter((value: IPlayer) =>
                        (value.position.toLocaleLowerCase().indexOf("qb") != -1 || value.position.toLocaleLowerCase().indexOf("rb") != -1 || value.position.toLocaleLowerCase().indexOf("wr") != -1 || value.position.toLocaleLowerCase().indexOf("te") != -1 ));
                    }
                     if (positionfilter==="flex"){
                        value = value.filter((value: IPlayer) =>
                        (value.position.toLocaleLowerCase().indexOf("rb") != -1 || value.position.toLocaleLowerCase().indexOf("wr") != -1 || value.position.toLocaleLowerCase().indexOf("te") != -1 ));
                    }
                    if (positionfilter==="qb" || positionfilter==="rb" || positionfilter==="wr" || positionfilter==="te" || positionfilter==="def"){
                        value = value.filter((value: IPlayer) =>
                        (value.position.toLocaleLowerCase().indexOf(positionfilter) != -1 ));
                    }
                    else {
                        value = value.filter((value: IPlayer) =>
                             (value.position.toLocaleLowerCase().indexOf("qb") != -1 || value.position.toLocaleLowerCase().indexOf("rb") != -1 || value.position.toLocaleLowerCase().indexOf("wr") != -1 || value.position.toLocaleLowerCase().indexOf("te") != -1 || value.position.toLocaleLowerCase().indexOf("def") != -1 ));
                   
                    }
            }
           return value;
                
            }
}