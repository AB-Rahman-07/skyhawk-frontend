import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';

import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventsRoutingModule, NzListModule],
})
export class EventsModule {}
