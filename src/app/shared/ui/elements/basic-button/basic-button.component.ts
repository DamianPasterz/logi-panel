import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-button',
  imports: [TranslateModule],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicButtonComponent {
  label = input.required<string>();
  bgColor = input<string>('#fff');
}
