import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

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
    bookingCode: new FormControl('', [
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

  @Output() successfulSubmit = new EventEmitter<object>();

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  get lastName() {
    return this.bookingForm.get('lastName');
  }

  get bookingCode() {
    return this.bookingForm.get('bookingCode');
  }

  validate(value?: any) {
    const feedbackErrors = { status: value.status, errors: value.errors };
    return feedbackErrors;
  }

  submitData(inputBookingDetails: any) {
    const { bookingCode } = inputBookingDetails;
    const { lastName } = inputBookingDetails;
    this.apollo
      .watchQuery({
        variables: {
          bookingCode: bookingCode,
          lastName: lastName,
        },
        query: gql`
          query Query($bookingCode: String!) {
            booking(bookingCode: $bookingCode) {
              bookingCode
              passengers {
                id
                firstName
                lastName
                title {
                  code
                  name
                }
              }
              itinerary {
                type
                connections {
                  id
                  duration
                  origin {
                    IATACode
                    name
                    city {
                      IATACode
                      name
                      country {
                        code
                        name
                      }
                    }
                  }
                  destination {
                    IATACode
                    name
                    city {
                      IATACode
                      name
                      country {
                        code
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        const bookingDetails = result.data.booking;
        this.successfulSubmit.emit({
          bookingData: bookingDetails,
        });
      });
  }

  onFormSubmit(formData: any) {
    this.submitData(formData);
    if (this.bookingForm.invalid) {
      const formValue = this.bookingForm.value;
      this.feedback = formValue;
    }
  }
}
