import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FooterComponent } from '../login/components/footer/footer.component';
import { NavbarComponent } from '../login/components/navbar/navbar.component';

@NgModule({
  declarations: [LandingpageComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, LandingpageRoutingModule],
})
export class LandingpageModule {}
