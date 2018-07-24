import { Component, Input, OnChanges, SimpleChanges,
  ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { MasterService } from '../master.service';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent {

  @ViewChild('wrapper', { read: ElementRef}) wrapper: ElementRef;
  @Input() transform = 'none';
  buffer = [];

  constructor(
    private master: MasterService
  ) { }

  ngOnInit() {
    this.master.transform$
      .subscribe(value => this.transform = value);
  }

  ngAfterViewInit() {
    if (this.wrapper) {
      this.master.wrapper = this.wrapper.nativeElement;
    }

    this.master.scrollTrigger  = Observable.fromEvent(this.wrapper.nativeElement, 'scroll')
        .throttleTime(100)
        .map(event => event['target'].scrollTop);
  }

}
