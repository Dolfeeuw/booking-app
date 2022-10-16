import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaValidationFeedbackComponent } from './ba-validation-feedback.component';

describe('BaValidationFeedbackComponent', () => {
  let component: BaValidationFeedbackComponent;
  let fixture: ComponentFixture<BaValidationFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaValidationFeedbackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaValidationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
