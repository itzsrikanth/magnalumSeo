import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[in-view]'
})
export class InViewDirective {

    scrollTop = 0;

    constructor(
        private _er: ElementRef
    ) { }

    ngAfterViewInit() {
        let elem: HTMLElement = this._er.nativeElement.offsetParent;
        while(elem) {
            this.scrollTop += elem.offsetTop | 0;
            elem = <HTMLElement>elem.offsetParent;
        }
        console.log('in-view', this.scrollTop)
    }

}