import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly THEME_KEY = 'user-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      this.setTheme(prefersDarkScheme.matches);
      prefersDarkScheme.addEventListener('change', (event) => {
        this.setTheme(event.matches);
      });
    }
  }

  private setTheme(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(this.THEME_KEY, 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(this.THEME_KEY, 'light');
    }
  }

  public toggleTheme(isDarkMode: boolean): void {
    this.setTheme(isDarkMode);
  }

  public getCurrentTheme(): 'dark' | 'light' {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    return savedTheme === 'dark' ? 'dark' : 'light';
  }
}
