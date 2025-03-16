import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeFacade } from '@feature/home';
import { BarComponent, BasicButtonComponent, InputTextComponent } from '@shared/ui';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    InputTextComponent,
    BasicButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    BarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  providers: [HomeFacade],
})
export class HomeComponent {
  private homeFacade = inject(HomeFacade);
  private route = inject(ActivatedRoute);

  public form = new FormGroup({
    email: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    age: new FormControl({ value: '', disabled: true }),
    exp: new FormControl({ value: '', disabled: true }),
  });

  readonly userDto = toSignal(this.route.data.pipe(map((data) => data['userDto'])));

  constructor() {
    effect(() => {
      this.form.patchValue(this.userDto());
    });
  }

  onLogout() {
    this.homeFacade.logout();
  }
}
