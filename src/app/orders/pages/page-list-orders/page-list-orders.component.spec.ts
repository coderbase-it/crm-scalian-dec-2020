import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalPipe } from 'src/app/shared/pipes/total.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageListOrdersComponent } from './page-list-orders.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

// @Pipe({
//   name: 'total'
// })
// export class TotalMockPipe implements PipeTransform {

//   transform(value: number, coef: number, tva?: number): number {
//     return 0;
//   }

// }

describe('PageListOrdersComponent', () => {
  let component: PageListOrdersComponent;
  let fixture: ComponentFixture<PageListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PageListOrdersComponent, TotalPipe], //ajout du pipe custom ou mettre un mock (ligne 8-15 TotalMockPipe)
      schemas: [NO_ERRORS_SCHEMA], //ignore les composants enfants
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify onClick call', () => {
    const btn = fixture.debugElement.query(By.css('button.btn-click'));
    const spy = spyOn(component, 'onClick');
    btn.nativeElement.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
