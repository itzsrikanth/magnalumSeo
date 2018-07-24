import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Observable, Scheduler } from 'rxjs/Rx';

@Component({
  selector: 'hover-info',
  templateUrl: './HoverInfo.component.html',
  styleUrls: [ './HoverInfo.component.scss' ]
})
export class HoverInfoComponent  {

  active: Array<boolean> = [];
  data = [
      {
          img: '/assets/icons/Archlinux-icon-crystal-64.svg.png'
      }, {
          img: '/assets/icons/headphone-icon.png'
      }, {
          img: '/assets/icons/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png'
      }, {
          img: '/assets/icons/Circle-icons-computer.svg.png'
      }
  ];

  constructor(
    // private _er: ElementRef
  ) { }

  ngOnInit() {
    this.active = Array(4).fill(false);
  }

}
