import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';


@NgModule({
  declarations: [PageStatsComponent],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
