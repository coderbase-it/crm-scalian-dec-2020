import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDialogErrorComponent } from './text-dialog-error.component';

describe('TextDialogErrorComponent', () => {
  let component: TextDialogErrorComponent;
  let fixture: ComponentFixture<TextDialogErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDialogErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDialogErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
