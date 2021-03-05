import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { BtnComponent } from './btn.component';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ BtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test if tag a is generate when label exist', () => {
    component.label='label';
    component.route='route';
    fixture.detectChanges();
    const lien=fixture.debugElement.query(By.css('a'));
    // console.log('lien =>',lien.nativeElement.getAttribute('href'));
    expect(lien).toBeTruthy();
    expect(lien.nativeElement.getAttribute('href')).toEqual('/route');
  });

  it('should done snapshot', () => {
    component.label='label';
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

});
