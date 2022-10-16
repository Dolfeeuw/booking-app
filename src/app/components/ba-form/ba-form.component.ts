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
      Validators.pattern('^[a-zA-Z2-9]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
      // Alphabet and space regex
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
  });

  @Output() submitData = new EventEmitter<object>();

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  get lastName() {
    return this.bookingForm.get('lastName');
  }

  get bookingCode() {
    return this.bookingForm.get('bookingCode');
  }

  validate(value: any) {
    const feedbackErrors = {
      errors: value.errors,
    };
    return feedbackErrors;
  }

  submitInputDetails(inputBookingDetails: any) {
    const { bookingCode } = inputBookingDetails;
    const { lastName } = inputBookingDetails;
    this.apollo
      .watchQuery({
        variables: {
          bookingCode: bookingCode.toUpperCase(),
          lastName: lastName.toUpperCase(),
        },
        query: gql`
          query Query($bookingCode: String!, $lastName: String!) {
            booking(bookingCode: $bookingCode, lastName: $lastName) {
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
        if (bookingDetails) {
          this.submitData.emit({
            bookingData: bookingDetails,
          });
        } else {
          this.submitData.emit({ error: 'No data found' });
        }
      });
  }

  onFormSubmit(formData: any) {
    if (!this.bookingForm.invalid) {
      this.submitInputDetails(formData);
    }
  }
}
