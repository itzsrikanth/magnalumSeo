import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { MasterService } from './master.service';

@Injectable()
export class UIGuard implements CanActivate {

    // constructor(
    //     private master: MasterService
    // ) { }

    canActivate() {
        // this.master.menu$.next(false);
        return true;
    }
}
