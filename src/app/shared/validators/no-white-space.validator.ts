import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NoWhitespaceValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value: controlVal } = control;
    const isWhitespaceOnly = (controlVal || '').trim().length === 0;
    return isWhitespaceOnly ? { whitespace: 'value is only whitespace' } : null;
  };
}
