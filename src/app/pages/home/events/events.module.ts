import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';

import { NzListModule } from 'ng-zorro-antd/list';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, SharedModule, EventsRoutingModule, NzListModule],
})
export class EventsModule {}
