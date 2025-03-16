import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemeService } from '@core/services';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BasicToggleSwitchComponent } from '../basic-toggle-switch/basic-toggle-switch.component';

@Component({
  selector: 'app-bar',
  imports: [BasicToggleSwitchComponent, TranslateModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
})
export class BarComponent {
  private themeService = inject(ThemeService);
  private translate = inject(TranslateService);
  public darkModeSwitch = new FormControl(false, { validators: [Validators.required], nonNullable: true });
  public changeLanguage = new FormControl(false, { validators: [Validators.required], nonNullable: true });

  ngOnInit(): void {
    this.themeService.initTheme();
    this.toggleTheme();
    this.toggleLanguage();
  }

  public toggleTheme(): void {
    this.darkModeSwitch.patchValue(this.themeService.getCurrentTheme() === 'dark' ? true : false);
    this.darkModeSwitch.valueChanges.subscribe((value) => {
      this.themeService.toggleTheme(value);
    });
  }

  public toggleLanguage(): void {
    this.changeLanguage.patchValue(this.translate.currentLang === 'en' ? true : false);
    this.changeLanguage.valueChanges.subscribe((value) => {
      this.translate.use(value ? 'en' : 'pl');
    });
  }
}
