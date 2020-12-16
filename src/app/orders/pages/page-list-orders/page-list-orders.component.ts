import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers!: string[];
  // private sub: Subscription;
  constructor(private os: OrdersService) {
    this.collection$ = this.os.collection$;
    // this.sub = this.os.collection$.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm Ht',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
