import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaBookingInformationTableComponent } from './ba-booking-information-table.component';

describe('BaBookingInformationTableComponent', () => {
  let component: BaBookingInformationTableComponent;
  let fixture: ComponentFixture<BaBookingInformationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaBookingInformationTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaBookingInformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
