import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function email(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      control.value === null ||
      control.value === '' ||
      // eslint-disable-next-line no-useless-escape
      /^(([\w\-]+\.[\w\-]+|[\w\-]+)|(([\w\-]+\.)*[\w\-]+\.[\w\-]{2,}))@((([\w\-]+\.)*([\w\-]+\.[\w\-]{2,}|[\w\-]+\.[\w]{2,}))|(([\w\-]+\.)+[\w]{2,}))/i.test(
        control.value
      )
    ) {
      return null;
    }
    return { email: true };
  };
}
