import { WINDOW } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { Observable, Scheduler, Subject } from 'rxjs/Rx';

@Injectable()
export class MasterService {

  constructor(
    @Inject(WINDOW) private window: any
  ) { }

  scrollTrigger: Observable<number>;

  public wrapper: HTMLElement;
  public parallax: any;

  documentWheel$ = Observable.fromEvent(this.window, 'wheel')
    .throttleTime(400)
    .map((event: MouseWheelEvent) => event.deltaY / 125);

  keyStroke$ = Observable.fromEvent(this.window, 'keydown')
    .throttleTime(300);

  animationFrame$ = Observable.interval(0, Scheduler.animationFrame);

  transform$ = new Subject<any>();
  menu$ = new Subject<boolean>();
  externalTriggerMenu$ = new Subject<boolean>();
  // true: normal
  // false: scaled state
  screenState: boolean;

  // modal popup related variables
  modalClick$ = new Subject<any>();
  modalElement: HTMLDivElement;
  private _modalShow: boolean;
  get modalShow (): boolean {
    return this._modalShow;
  }
  set modalShow(bool) {
    this._modalShow = bool;
    if (!bool) {
      this.modalElement.style.transform = 'translateX(-100vw)';
    } else {
      this.modalElement.innerHTML = '';
      this.modalElement.style.transform = 'translateX(0vw)';
    }
  }
  
}
