import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Booking application';
  bookingData: any;

  displayData(event: any) {
    const bookingData = event?.bookingData;
    this.bookingData = bookingData;
  }
}
