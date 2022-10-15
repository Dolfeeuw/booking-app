import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-ba-input',
  templateUrl: './ba-input.component.html',
  styleUrls: ['./ba-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class BaInputComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() name!: string;
  @Input() form!: FormControl;
  @Input() hasFeedback?: object;

  ngOnInit(): void {}

  get feedback() {
    return this.hasFeedback;
  }
}
