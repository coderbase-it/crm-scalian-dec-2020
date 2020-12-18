import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers!: string[];
  // private sub: Subscription;
  constructor(
    private os: OrdersService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.collection$ = this.os.collection$;
    // this.sub = this.os.collection$.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.headers = [
      'Action',
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

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      // traite les msg d'erreur de ton api
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  public goToEdit(item: Order): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
