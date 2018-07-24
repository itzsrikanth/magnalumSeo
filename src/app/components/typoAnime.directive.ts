import { Directive, Input, ElementRef } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';

@Directive({
    selector: '[typoAnime]'
})
export class TypoAnimeDirective {

    @Input('typoAnime') data: Array<string>;
    streamSubs$: Subscription;
    currentLine = 0;
    reset$ = new Subject<any>();

    constructor(
        private _er: ElementRef
    ) { }

    ngOnInit() {
        this.streamSubs$ = Observable.interval(100)
            .subscribe(range => {
                let tmp = this.data[this.currentLine];
                if (range < tmp.length) {
                    let tmp1 = tmp.slice(range, range + 1);
                    this._er.nativeElement.innerHTML += tmp1;
                }
                else {
                    this.currentLine++;
                    if (this.currentLine === this.data.length) {
                        this.currentLine = 0;
                    }
                    this.reset$.next();
                }
            });
        this.reset$
            .subscribe(() => {
                this.streamSubs$.unsubscribe();
                this._er.nativeElement.innerHTML = '&nbsp;';
                this.streamSubs$ = Observable.interval(100)
                    .subscribe(range => {
                        let tmp = this.data[this.currentLine];
                        if (range < tmp.length)
                        this._er.nativeElement.innerHTML += tmp.slice(range, range + 1);
                        else {
                            this.currentLine++;
                            if (this.currentLine === this.data.length) {
                                this.currentLine = 0;
                            }
                            this.reset$.next();
                        }
                    });
            });
    }

    ngOnDestroy() {
        if (this.streamSubs$)
            this.streamSubs$.unsubscribe();
    }

}
