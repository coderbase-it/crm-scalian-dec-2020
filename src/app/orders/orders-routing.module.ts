import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCommentComponent } from './components/order-comment/order-comment.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {
    path: '',
    component: PageListOrdersComponent,
    data: {title: 'List Orders'},
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: OrderDetailsComponent },
      { path: 'comment', component: OrderCommentComponent },
    ]
  },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit/:id', component: PageEditOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
