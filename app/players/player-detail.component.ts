import { Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

@Component({
    templateUrl: 'app/players/player-detail.component.html'
})
export class ORFileDetailComponent  {
    pageTitle: string = 'OR File Detail';
    /*
    constructor(private _routeParams: RouteParams,
                private _router: Router) {
          let id = this._routeParams.get('id');
          this.pageTitle += `: ${id}`;
   

    onBack(): void {
        this._router.navigate(['ORFiles']);
    }
 }*/
}
