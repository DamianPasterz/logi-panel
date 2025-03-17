import { Component, computed, effect, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input-password',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
  control = input.required<FormControl>();
  placeholder = input<string>('');

  errorKey = signal<string>('');

  constructor(private translate: TranslateService) {
    effect((onCleanup) => {
      const control = this.control();

      const subscription = control.valueChanges.subscribe(() => {
        this.updateErrorKey(control);
      });

      this.updateErrorKey(control);

      onCleanup(() => subscription.unsubscribe());
    });
  }

  private updateErrorKey(control: FormControl) {
    const errors = control.errors;

    if (errors) {
      const errorKey = Object.keys(errors)[0];
      this.errorKey.set(errorKey);
    } else {
      this.errorKey.set('');
    }
  }

  errorMessage = computed(() => {
    const errorKey = this.errorKey();
    if (errorKey) {
      const translationKey = `VALIDATION_ERROR.${errorKey}`;
      return this.translate.instant(translationKey);
    }
    return '';
  });
}
