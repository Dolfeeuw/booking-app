import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaInputComponent } from './components/ba-input/ba-input.component';
import { BaFormComponent } from './components/ba-form/ba-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaInputComponent,
    BaFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
