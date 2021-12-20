import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialogueComponent } from './payment-dialogue.component';

describe('PaymentDialogueComponent', () => {
  let component: PaymentDialogueComponent;
  let fixture: ComponentFixture<PaymentDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
