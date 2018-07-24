// import { @ng-toolkit/universal } from 'Window';
import { WINDOW } from '@ng-toolkit/universal';
import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'jumbo-hover',
  templateUrl: './jumboHover.component.html',
  styleUrls: ['./jumboHover.component.scss']
})
export class JumboHoverComponent {

  transform: SafeStyle;

  constructor(
    // @Inject(@ng-toolkit/universal) private WINDOW: window, 
    @Inject(WINDOW) private window: any,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
    let win = {
      x: this.window.innerWidth/2,
      y: this.window.innerHeight/2
    };
    // let current = { ...win };
    // console.log(win);
    Observable.fromEvent(this.window, 'mousemove')
      .subscribe((event: MouseEvent) => {
        this.transform = this.sanitizer.bypassSecurityTrustStyle(
          'rotateY(' + +((event.clientX / win.x) - 1).toFixed(2) * 2 + 
          'deg) rotateX(' + +((event.clientY / win.y) - 1).toFixed(2) * 5 + 'deg)'
        );
      });

    Observable.fromEvent(this.window, 'resize')
      .subscribe((event: MouseEvent) => {
        win.x = this.window.innerWidth/2;
        win.y = this.window.innerHeight/2;
      });
    }
  }
}
