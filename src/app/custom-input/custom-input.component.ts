// src/app/custom-input/custom-input.component.ts
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormUtils } from '../form-utils.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  message  : string;

  value: any;

  constructor(private formUtils: FormUtils) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onBlur() {
    if (this.formUtils.validateInput(this.value)) {
      this.message = 'Success';
    } else {
      // Handle validation failure
      this.message = '';
    }

    this.onTouch();
  }
}

