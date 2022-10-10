import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-input',
  templateUrl: './ba-input.component.html',
  styleUrls: ['./ba-input.component.scss']
})
export class BaInputComponent implements OnInit {
  @Input() label?: string;
  @Input() id?: string;
  @Input() name?: string;

  constructor() { console.log(this.label) }

  ngOnInit(): void {
  }

}
