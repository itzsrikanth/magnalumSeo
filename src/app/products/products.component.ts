import { Component, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

    @ViewChildren('parallelogram', { read: ElementRef }) productDivs: QueryList<ElementRef>;
    techDataBool: boolean;
    parallelogram = [
        {
            url: '/assets/img/1.18MeshMagnaliumPowder.jpg',
            text: '1.18 Mesh Magnalium Powder',
            id: 1,
            data: [{
                class: 'bug',
                value: '14-325 Mesh',
                unit: 'Mesh',
                sub: '1400-44 um',
                head: 'Paticle size',
                color: '#D34E24'
            }, {
                class: 'microchip',
                value: '99.8',
                unit: '%',
                sub: 'Virgin Aluminium',
                head: 'Raw Materials',
                color: 'teal'
            }, {
                class: 'space-shuttle',
                value: '2.7',
                unit: 'gm/cm3',
                head: 'Real Density',
                color: 'steelblue'
            }, {
                class: 'area-chart',
                value: '99',
                unit: '%',
                head: 'Composition',
                color: '#F28123'
            }],
            desc: 'the composition of the produced aluminium powder is checked using atomic emission spectroscopy and the particle size distribution is uniform throughout the product through powder metallurgical processes',
            alt: 'The Bulk density is maintained for Fireworks and Defence application'
        }, {
            url: '/assets/img/2.40MeshMagnaliumPowder.jpg',
            text: '2.40 Mesh Magnalium Powder',
            id: 2,
            data: [{
                class: 'bug',
                value: 'Variable Sizes',
                head: 'Paticle size',
                color: '#D34E24'
            }, {
                class: 'microchip',
                value: '99.8',
                unit: '%',
                sub: 'Virgin Aluminium',
                head: 'Raw Materials',
                color: 'teal'
            }, {
                class: 'space-shuttle',
                value: '2.7',
                unit: 'gm/cm3',
                head: 'Real Density',
                color: 'steelblue'
            }, {
                class: 'area-chart',
                sub: 'Aluminium',
                value: '99',
                unit: '%',
                head: 'Composition',
                color: '#F28123'
            }],
            desc: 'The composition of the produced aluminium powder is checked using atomic emission spectroscopy and the particle size distribution is uniform throughout the product through powder metallurgical processes.',
            alt: 'TThe Bulk density is maintained for light weight concrete blocks and pesticides application'
        }, {
            url: '/assets/img/2.Grade2MagnesiumPowder.jpg',
            text: 'Grade 2 Magnalium Powder',
            id: 3,
            data: [{
                class: 'bug',
                value: '15-150',
                unit: 'Mesh',
                sub: '1410-90 um',
                head: 'Paticle size',
                color: '#D34E24'
            }, {
                class: 'microchip',
                value: '99',
                unit: '%',
                sub: 'pure Ti6Al4v ingots',
                head: 'Raw Materials',
                color: 'teal'
            }, {
                class: 'space-shuttle',
                value: '4.12',
                unit: 'gm/cm3',
                head: 'Real Density',
                color: 'steelblue'
            }, {
                class: 'area-chart',
                value: '90 Ti, 6 Al, 4 V',
                unit: '%',
                head: 'Composition',
                color: '#F28123'
            }],
            desc: 'The composition of the produced aluminium powder is checked using atomic emission spectroscopy and the particle size distribution is uniform throughout the product  through powder Metallurgical process',
            alt: 'The bulk density is maintained for Fireworks and pyrotechnic applications'
        }, {
            url: '/assets/img/4.80MeshMagnaliumPowder.jpg',
            text: '4.80 Mesh Magnalium Powder',
            id: 4,
            data: []
        }, {
            url: '/assets/img/5.100MeshMagnaliumPowder.jpg',
            text: '5.100 Mesh Magnalium Powder',
            id: 5,
            data: []
        },
    ];
    productIndex = 0;

    constructor(
        private renderer: Renderer2,
        private master: MasterService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.master.keyStroke$
            .subscribe((event: KeyboardEvent) => {
                // Esc Button
                if (event.keyCode === 27) {
                    this.techDataBool = false;
                    this.productDivs.forEach(div => {
                        div.nativeElement.classList.remove('selected');
                        div.nativeElement.classList.remove('rejected');
                    })
                }
            });
    }

    ngAfterViewInit() {        
        this.route.params.subscribe(datum => {
            if (datum.id) {
                // setTimeout(() => {
                    this.productClicked(datum.id);
                // }, 1000);
            }
        });
    }

    selectProduct(productIndex) {
        console.log(productIndex);
        this.productIndex = productIndex;
    }

    productClicked(idx) {
        this.productIndex = idx;
        this.techDataBool = true;
        this.productDivs.forEach((div, index) => {
            var elem = div.nativeElement;
            if (index === +idx) {
                this.renderer.addClass(elem, 'selected');
            } else {
                this.renderer.addClass(elem, 'rejected');
            }
        })
    }
}
