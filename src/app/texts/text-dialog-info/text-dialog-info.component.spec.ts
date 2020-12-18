import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDialogInfoComponent } from './text-dialog-info.component';

describe('TextDialogInfoComponent', () => {
  let component: TextDialogInfoComponent;
  let fixture: ComponentFixture<TextDialogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDialogInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDialogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
