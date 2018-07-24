
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnChanges, SimpleChanges, ViewChild, ElementRef, 
  ChangeDetectorRef , Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { MasterService } from './master.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('cursor', { read: ElementRef }) cursor: ElementRef;
  @ViewChild('modal', {read: ElementRef}) modal: ElementRef;
  @ViewChild('parallax', {read: ElementRef}) parallax: ElementRef;
  // @ViewChild('menuButton', {read: ElementRef}) menuButton: ElementRef;
  menu: boolean;            // to save state of expand / collapse menu
  transform: SafeStyle;     // to control screen transition during menu click
  constructor(
    // @Inject(@ng-toolkit/universal) private WINDOW: window, 
    @Inject(WINDOW) private window: any,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private sanitizer: DomSanitizer,
    public master: MasterService,
    private changeDetector: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.master.menu$
      .subscribe(bool => {
        this.menu = bool;
        this.master.screenState = bool;
      });

    this.master.externalTriggerMenu$
      .subscribe(() => {
        this.getMenu();
      });
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
    this.master.parallax = this.parallax;
    this.master.modalElement = <HTMLDivElement>this.modal.nativeElement;

    if (isPlatformBrowser(this._platformId)) {
      let mouseMove$ = Observable.fromEvent(this.window, 'mousemove');
      this.master.animationFrame$
        .withLatestFrom(mouseMove$, (frame, position) => position)
        .map((event: MouseEvent) => ({
          x: event.clientX,
          y: event.clientY
        }))
        .scan((start, end) => {
          let dx = end.x - start.x,
              dy = end.y - start.y;
          return {
            x: start.x + dx * .05,
            y: start.y + dy * .05
          };
        }).subscribe(coord => {
          this.cursor.nativeElement.style.left = coord.x + 5 + 'px';
          // this.cursor.nativeElement.style.left = coord.x - 10 + 'px';
          this.cursor.nativeElement.style.top = coord.y + 5 + 'px';
          // this.cursor.nativeElement.style.top = coord.y - 10 + 'px';
        });
    }
  }

  getMenu() {
    var transform;
    if (this.menu) {
      this.master.menu$.next(false);
      transform = this.sanitizer.bypassSecurityTrustStyle('none');
    } else {
      this.master.menu$.next(true);
      transform = this.sanitizer.bypassSecurityTrustStyle('scale(0.7) translateX(-30vw)');
    }
    this.master.transform$.next(transform);
  }

}
