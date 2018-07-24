import { Component } from '@angular/core';

@Component({
  selector: 'gooey-button',
  templateUrl: './gooeyButton.component.html',
  styleUrls: [ './gooeyButton.component.scss' ]
})
export class GooeyButtonComponent  {
  buttons = [
      {
          class: 'bug',
      }, {
        class: 'microchip',
    }, {
        class: 'bug',
    }, {
        class: 'bug',
    }, 
  ]
}
