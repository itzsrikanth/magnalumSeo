import { Component, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { trigger, style, state, animate, animation, transition } from '@angular/animations';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('rotate',[
      transition('* => *', animate(400, style({
        transform: "rotateZ({{ z }}deg)"
      })), {
        params: {
          z: 90
        }
      })
    ])
  ]
})
export class GalleryComponent {

  @ViewChild('board') board: ElementRef;
  exhibits = [
    {
      url: 'https://placeimg.com/640/480/arch',
      z: 0,
    }, {
      url: 'https://placeimg.com/640/480/nature',
      z: 90,
    }, {
      url: 'https://placeimg.com/640/480/tech',
      z: -90
    }, {
      url: 'https://photoshop-kopona.com/uploads/posts/2018-03/1522188629_2.jpg',
      z: 180
    }, {
      url: 'https://placeimg.com/640/480/animals',
      z: 0
    }
  ];
  serial = 0;
  constructor(
    private el: ElementRef
  ) { }
  
  changeDet() {
    let div = <HTMLDivElement>this.board.nativeElement;
    div.className = 'esp' + this.serial;
  } 

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['serial'])
  }
}
