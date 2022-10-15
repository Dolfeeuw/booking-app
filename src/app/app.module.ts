import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaInputComponent } from './components/ba-input/ba-input.component';
import { BaFormComponent } from './components/ba-form/ba-form.component';
import { BaHeaderComponent } from './components/ba-header/ba-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaValidationFeedbackComponent } from './ba-validation-feedback/ba-validation-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    BaInputComponent,
    BaFormComponent,
    BaHeaderComponent,
    BaValidationFeedbackComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
