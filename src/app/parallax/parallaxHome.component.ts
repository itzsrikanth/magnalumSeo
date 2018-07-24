import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { BgWatermarkComponent } from '../bgWatermark/bgWatermark.component';

@Component({
    selector: 'parallax-home',
    template: `
    <div class="page" *ngFor="let page of pages">
        <ng-container #viewContainer></ng-container>
    </div>
    `,
    styleUrls: ['./parallaxHome.component.scss']
})
export class ParallaxHomeComponent {

    @ViewChildren('viewContainer', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;
    pages: Array<any> = [
      IndexComponent,  // foreground
      BgWatermarkComponent, // background
    ];

    constructor(
        private componentFactory: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
        console.log(this.containers)
        this.containers.forEach((container, index) => {
            let factory = this.componentFactory.resolveComponentFactory(this.pages[index]);
            container.clear();
            container.createComponent(factory);
        });
    }
}
