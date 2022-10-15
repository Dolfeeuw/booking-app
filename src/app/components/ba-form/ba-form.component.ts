import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ba-form',
  templateUrl: './ba-form.component.html',
  styleUrls: ['./ba-form.component.scss'],
})
export class BaFormComponent implements OnInit {
  title = 'Retrieve your booking';
  description =
    'You can find your booking by filling out your family name and the booking code in your booking information';
  feedback?: Object;
  bookingForm = new FormGroup({
    bookingNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(6),
      Validators.min(2),
      Validators.max(9),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
      // Alphabet and space regex
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}

  get lastName() {
    return this.bookingForm.get('lastName');
  }

  get bookingNumber() {
    return this.bookingForm.get('bookingNumber');
  }

  validate(value?: any) {
    const feedbackErrors = { status: value.status, errors: value.errors };
    return feedbackErrors;
  }

  onFormSubmit() {
    if (this.bookingForm.invalid) {
      const formValue = this.bookingForm.value;
      this.feedback = formValue;
    }
  }
}
