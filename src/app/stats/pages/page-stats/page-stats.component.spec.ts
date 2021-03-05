import { Injectable } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

import { PageStatsComponent } from './page-stats.component';

@Injectable()
export class MenuMockService {
  public open$ = of(1);
  constructor() {}

  /**
   * this method is called to reverse property open
   * @example
   * <app-icon-nav (click)="toggle()"></app-icon-nav>
   */
  public toggle(): void {
    // this.open$.next(!this.open$.value);
    // console.log(this.open$.value);
  }
}

describe('PageStatsComponent', () => {
  let component: PageStatsComponent;
  let fixture: ComponentFixture<PageStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: MenuService, useClass: MenuMockService }],
      declarations: [PageStatsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if observable data is ok', waitForAsync(() => {
    console.log('1');
    let service = TestBed.inject(MenuService);
    service.open$.subscribe((data) => {
      console.log('2');
      console.log('data:', data);
      if (data) {
        console.log('component.statut:', component.statut);
        expect(component.statut).toEqual('ouvert2');
      } else {
        expect(component.statut).toEqual('fermé');
      }
    });
    console.log('3');
  }));
});
