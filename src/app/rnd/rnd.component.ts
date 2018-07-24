import { Component, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
// import * as _ from 'lodash';
import { Subscription } from 'rxjs/Rx';
import { MasterService } from '../master.service';
import { fadeStagger } from '../animations';

@Component({
    templateUrl: './rnd.component.html',
    styleUrls: ['./rnd.component.scss'],
    animations: [
        fadeStagger
    ]
})
export class ResearchNDevelopementComponent {

    @ViewChild('rndMenu', {read: ElementRef}) rndMenu: ElementRef;
    @ViewChild('contentHolder', {read: ElementRef}) contentHolder: ElementRef;
    ContentBg = [{
        text: 'PowderRange',
        link: '',
    },{
        text: 'PowderLab',
        link: '',
    },{
        text: 'PowderHub',
        link: '',
    },{
        text: 'Plasma Spheroidised Powders',
        link: '',
    },];
    imgState = 0;
    wheel: Subscription;

    constructor(
        private renderer: Renderer2,
        private master: MasterService
    ) { }

    ngOnInit() {
        this.contentHolder.nativeElement.getElementsByClassName('rnd-content')[0].style.display = 'flex';
    }
    
    ngAfterViewInit() {
        let slider = this.renderer.createElement('span')
        this.renderer.setAttribute(slider, 'id', 'rnd-slider');
        this.renderer.appendChild(this.rndMenu.nativeElement, slider);
        
        let count = this.ContentBg.length;
        this.wheel = this.master.documentWheel$
        .subscribe(value => {
            console.log(value, this.imgState)
            if (value > 0 && this.imgState < (count - 1)) {
                this.imgState++;
                }
                else if (value < 0 && this.imgState > 0) {
                    this.imgState--;
                }
                for (let i = 0; i < count; i++)
                this.contentHolder.nativeElement.getElementsByClassName('rnd-content')[i].style.display = i === this.imgState ? 'flex' : 'none';
            })
        }
        
    ngOnDestroy() {
        if (this.wheel)
            this.wheel.unsubscribe();
        }
        
    contentSlide(index) {
        this.imgState = index;
        this.rndMenu.nativeElement.style.setProperty('--default-slider-top', index * 3 + 'rem');
        let count = this.ContentBg.length;
        for (let i = 0; i < count; i++)
            this.contentHolder.nativeElement.getElementsByClassName('rnd-content')[i].style.display = i === this.imgState ? 'flex' : 'none';
    }

}
