export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export class ThemeController {
  public static get(): ThemeMode {
    const theme: string | null = localStorage.getItem('theme')
    if (!theme || (theme != ThemeMode.LIGHT && theme != ThemeMode.DARK)) return ThemeMode.LIGHT
    return theme
  }

  public static set(mode: ThemeMode): void {
    localStorage.setItem('theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
  }

  public static dark(): void {
    this.set(ThemeMode.DARK)
  }

  public static light(): void {
    this.set(ThemeMode.LIGHT)
  }

  public static followSystem(): void {
    localStorage.removeItem('theme')
    if (matchMedia('(prefers-color-scheme: dark)').matches) this.dark()
    else this.light()
  }
}
