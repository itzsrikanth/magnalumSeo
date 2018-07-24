import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UIGuard } from './UI.guard';
import { CanDeactivateGuard } from './canDeactivateGuard';
import { ParallaxHomeComponent } from './parallax/parallaxHome.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { TermsNConditionsComponent } from './termsNcondn/termsNcondn.component';
import { ResearchNDevelopementComponent } from './rnd/rnd.component';
const routes: Routes = [
    { path: 'home', component: ParallaxHomeComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'products', component: ProductsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'products/:id', component: ProductsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'contactus', component: ContactUsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'terms-conditions', component: TermsNConditionsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'about-us', component: AboutUsComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'research-development', component: ResearchNDevelopementComponent, canDeactivate: [CanDeactivateGuard] },
    { path: '**', component: ParallaxHomeComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }