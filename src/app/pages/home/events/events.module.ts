import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    EventsRoutingModule,
    NzListModule,
    NzSwitchModule,
  ],
})
export class EventsModule {}
