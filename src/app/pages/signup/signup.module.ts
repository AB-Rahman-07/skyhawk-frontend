import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup/signup.component';
import { NzFormModule } from 'ng-zorro-antd/form';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [SignupComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NzFormModule,
    // NzLayoutModule,
    // NzCheckboxModule,
    // NzFormModule,
    // // NgZorroAntdModule,
    // // FormBuilder,
    // // FormGroup,
    // // Validators,
    // NzInputModule,
    // NzButtonModule,
  ],
})
export class SignupModule {}
