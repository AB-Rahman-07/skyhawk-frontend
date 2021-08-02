import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEventsListItemComponent } from './components/shared-events-list-item/shared-events-list-item.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { ChartModule } from 'angular2-chartjs';
import { SharedChartjsLineComponent } from './components/chartjs-line/chartjs-line.component';
import { SharedChartjsBarComponent } from './components/chartjs-bar/chartjs-bar.component';

const components = [
  SharedChartjsLineComponent,
  SharedEventsListItemComponent,
  SharedChartjsBarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],

  imports: [
    CommonModule,
    NzCollapseModule,
    ChartModule,
    NzTagModule,
    NzButtonModule,
    NzListModule,
  ],
})
export class SharedModule {}
