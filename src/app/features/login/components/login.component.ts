import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFacade } from '@feature/login';
import { BarComponent, BasicButtonComponent, InputPasswordComponent, InputTextComponent } from '@shared/ui';
import { CustomValidators } from '@shared/util';

@Component({
  selector: 'app-login',
  imports: [
    InputTextComponent,
    BasicButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BarComponent,
    InputPasswordComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFacade],
})
export class LoginComponent {
  private loginFacade = inject(LoginFacade);
  public form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, CustomValidators.email()],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  onSubmit() {
    if (this.form.valid) {
      this.loginFacade.userLogin();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
