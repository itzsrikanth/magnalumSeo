import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MasterService } from './master.service';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; 
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    constructor(
        private master: MasterService
    ) { }

    canDeactivate(component: CanComponentDeactivate) {
        if (this.master.screenState)
            this.master.externalTriggerMenu$.next();
        return true;
    }

}
