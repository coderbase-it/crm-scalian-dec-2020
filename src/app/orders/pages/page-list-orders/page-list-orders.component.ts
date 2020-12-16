import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public collection!: Order[];
  public headers!: string[];
  private sub: Subscription;
  constructor(private os: OrdersService) {
    this.sub = this.os.collection$.subscribe((datas) => {
      this.collection = datas;
    });
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
    this.sub.unsubscribe();
  }

  public totalHT(item: Order): number {
    console.log('total ht called');

    return item.nbJours * item.tjmHt;
  }
  public totalTTC(item: Order): number {
    console.log('total ttc called');
    return this.totalHT(item) * (1 + item.tva / 100);
  }



}
