import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public open$ = new BehaviorSubject(true) ;
  constructor() { }

  /**
   * this method is called to reverse property open
   * @example
   * <app-icon-nav (click)="toggle()"></app-icon-nav>
   */
  public toggle(): void {
    this.open$.next(!this.open$.value);
    // console.log(this.open$.value);

  }
}
