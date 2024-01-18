// src/app/generic-form-element/generic-form-element.component.ts
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormUtils } from '../form-utils.service';

@Component({
  selector: 'app-generic-form-element',
  templateUrl: './generic-form-element.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericFormElementComponent),
      multi: true,
    },
  ],
})
export class GenericFormElementComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  value: any;

  constructor(private formUtils: FormUtils) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onInput(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
  }

  onBlur() {
    if (this.formUtils.validateInput(this.value)) {
      // Additional logic if validation succeeds
    } else {
      // Handle validation failure
    }

    this.onTouch();
  }
}
