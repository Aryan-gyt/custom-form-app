import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from './form-utils.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
