import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDialogWarningComponent } from './text-dialog-warning.component';

describe('TextDialogWarningComponent', () => {
  let component: TextDialogWarningComponent;
  let fixture: ComponentFixture<TextDialogWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDialogWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDialogWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
