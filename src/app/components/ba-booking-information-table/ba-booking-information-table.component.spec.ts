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
    component.booking = {
      bookingCode: 'PZIGZ3',
      passengers: {
        firstName: 'RUUD',
        lastName: 'HESP',
      },
      itinerary: {
        connections: [
          {
            origin: {
              name: 'Schiphol',
              city: {
                name: 'Amsterdam',
                country: {
                  name: 'The Netherlands',
                },
              },
            },
            destination: {
              name: "Cote D'Azur Airport",
              city: {
                name: 'Nice',
                country: {
                  name: 'France',
                },
              },
            },
          },
        ],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
