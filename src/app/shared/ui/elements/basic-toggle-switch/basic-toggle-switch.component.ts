import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-toggle-switch',
  imports: [],
  templateUrl: './basic-toggle-switch.component.html',
  styleUrl: './basic-toggle-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicToggleSwitchComponent {
  control = input.required<FormControl>();

  toggle(): void {
    if (!this.control().disabled) {
      this.control().setValue(!this.control().value);
      this.control().markAsTouched();
    }
  }
}
