import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaInputComponent } from './components/ba-input/ba-input.component';
import { BaFormComponent } from './components/ba-form/ba-form.component';
import { BaHeaderComponent } from './components/ba-header/ba-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BaInputComponent,
    BaFormComponent,
    BaHeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
