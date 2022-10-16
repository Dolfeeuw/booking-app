import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-booking-information-table',
  templateUrl: './ba-booking-information-table.component.html',
  styleUrls: ['./ba-booking-information-table.component.scss'],
})
export class BaBookingInformationTableComponent implements OnInit {
  @Input() booking?: any;
  // loading = true;
  // error: any;
  bookingCode!: String;

  constructor() {}

  get bookingData() {
    return this.booking;
  }

  ngOnInit() {}
}
