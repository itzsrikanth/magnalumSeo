import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { JumboHoverComponent } from './components/jumbo.hover/jumboHover.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// services
import { MasterService } from './master.service';
import { CanDeactivateGuard } from './canDeactivateGuard';

import { MenuComponent } from './menu/menu.component';
import { ParallaxHomeComponent } from './parallax/parallaxHome.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { TermsNConditionsComponent} from './termsNcondn/termsNcondn.component';
import { ResearchNDevelopementComponent } from './rnd/rnd.component';
import { HoverInfoComponent } from './index/hover-info/HoverInfo.component';
import { SafariBrowserComponent } from './index/safariBrowser/SafariBrowser.component';
import { BgWatermarkComponent } from './bgWatermark/bgWatermark.component';
// import { BillCounterComponent } from './components/billCounter/billCounter.component';
import { TypoAnimeDirective } from './components/typoAnime.directive';

import { InViewDirective } from './inView.directive';
import { GooeyButtonComponent } from './components/gooey-button/gooeyButton.component';

@NgModule({
  
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    AppRouting
  ],
  declarations: [ 
    AppComponent, 
    ParallaxComponent, 
    JumboHoverComponent, 
    GalleryComponent,
    MenuComponent,
    ParallaxHomeComponent,
    IndexComponent,
    ContactUsComponent,
    AboutUsComponent,
    TermsNConditionsComponent,
    ResearchNDevelopementComponent,
    ProductsComponent,
    HoverInfoComponent,
    SafariBrowserComponent,
    BgWatermarkComponent,
    // BillCounterComponent,
    TypoAnimeDirective,
    InViewDirective,
    GooeyButtonComponent
  ],
  providers: [
    MasterService,
    CanDeactivateGuard
  ],
  entryComponents: [
    IndexComponent,
    BgWatermarkComponent
  ],
})
export class AppModule { }
