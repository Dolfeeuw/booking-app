import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Booking application';
  bookingData?: any;

  displayData(event: any) {
    if (event.bookingData) {
      this.bookingData = event.bookingData;
    }
    if (event.error) {
      this.bookingData = event.error;
    }
  }
}
