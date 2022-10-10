import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-form',
  templateUrl: './ba-form.component.html',
  styleUrls: ['./ba-form.component.scss'],
})
export class BaFormComponent implements OnInit {
  title = 'Retrieve your booking';
  description =
    'You can find your booking by filling out your family name and the booking code in your booking information';
  constructor() {}

  ngOnInit(): void {}
}
