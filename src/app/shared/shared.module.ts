import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEventsListItemComponent } from './components/shared-events-list-item/shared-events-list-item.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [SharedEventsListItemComponent],
  exports: [SharedEventsListItemComponent],

  imports: [
    CommonModule,
    NzCollapseModule,
    NzTagModule,
    NzButtonModule,
    NzListModule,
  ],
})
export class SharedModule {}
