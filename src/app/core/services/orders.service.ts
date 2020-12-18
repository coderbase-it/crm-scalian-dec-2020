import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public item$: BehaviorSubject<Order> = new BehaviorSubject(new Order());
  private pCollection$: Subject<Order[]> = new Subject();
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshSubject();
  }

  public refreshSubject(): void {
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe(datas => {
      this.item$.next(datas[0]);
      this.collection$.next(datas);
    });
  }

  // get collection$
  get collection$(): Subject<Order[]> {
    return this.pCollection$;
  }

  // set collection$
  set collection$(col: Subject<Order[]>) {
    this.pCollection$ = col;
  }

  // changeState
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item }; // spread oprator
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collection
  public delete(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`);
  }

  // get item by id
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
