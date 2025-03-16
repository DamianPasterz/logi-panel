import { UntypedFormControl } from '@angular/forms';
import { email } from './email';

describe('EmailValidator', () => {
  const emailValidator = email();
  const control = new UntypedFormControl(null);

  it('should return null if value is null', () => {
    control.setValue(null);
    expect(emailValidator(control)).toEqual(null);
  });

  it('should return null if value is empty string', () => {
    control.setValue('');
    expect(emailValidator(control)).toEqual(null);
  });

  it('should return null if value is url', () => {
    control.setValue('abc@abc.com');
    expect(emailValidator(control)).toEqual(null);
  });

  it('should return error object if value is not correct email', () => {
    control.setValue('abc');
    expect(emailValidator(control)).toEqual({ email: true });
    control.setValue('abc.com');
    expect(emailValidator(control)).toEqual({ email: true });
    control.setValue('abc@');
    expect(emailValidator(control)).toEqual({ email: true });
    control.setValue('abc@er.');
    expect(emailValidator(control)).toEqual({ email: true });
  });
});
