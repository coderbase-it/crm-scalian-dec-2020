import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDialogSuccessComponent } from './text-dialog-success.component';

describe('TextDialogSuccessComponent', () => {
  let component: TextDialogSuccessComponent;
  let fixture: ComponentFixture<TextDialogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDialogSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
