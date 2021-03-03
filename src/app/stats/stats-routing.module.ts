import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';

const routes: Routes = [{path:'',component:PageStatsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
