import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUtils } from './form-utils.service';
import { GenericFormElementComponent } from './generic-form-element/generic-form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericFormElementComponent
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
