// src/app/form-utils.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormUtils {
  validateInput(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }
}
