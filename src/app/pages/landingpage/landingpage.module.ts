import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [LandingpageComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, LandingpageRoutingModule],
})
export class LandingpageModule {}
