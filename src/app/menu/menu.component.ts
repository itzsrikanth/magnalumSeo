import { Component, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menuHeight', [
      state('expanded', style({
        height: '*'
      })),
      state('collapsed', style({
        height: 0
      })),
      transition('* => *', animate(300))
    ])
  ]
})
export class MenuComponent {

  menus: Observable<Array<any>>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Optional() @Inject('serverUrl') protected serverUrl: string
  ) { }

  ngOnInit() {
    let baseUrl = isPlatformBrowser(this._platformId) ? '' : this.serverUrl;
    this.menus = <Observable<Array<any>>>this.http.get(baseUrl + '/assets/data/menu.json');
  }

  menuState(menuObj) {
    if (menuObj.subsState)
      menuObj.subsState = menuObj.subsState === 'collapsed' ? 'expanded' : 'collapsed';
  }
  
}