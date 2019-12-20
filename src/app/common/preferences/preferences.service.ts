/* --- Angular Imports --- */
import { Injectable } from '@angular/core';

/* --- Interfaces --- */
import { LanguageLocale } from '../../interfaces/language-locale';
import { Preferences } from '../../interfaces/preferences';

/* --- Shared Services --- */
import { StorageService } from '../storage-service/storage.service';

@Injectable()
export class PreferencesService {

  private defaultLanguageLocale: LanguageLocale;
  private defaultPreferences: Preferences;
  private preferences: Preferences;
  private supportedLanguageLocales: LanguageLocale[];

  constructor(private storageService: StorageService) {

    this.supportedLanguageLocales = [
      {
        dir: 'ltr',
        example: 'English',
        id: 'en-us',
        name: 'English'
      },
      {
        dir: 'ltr',
        example: 'Deutsche',
        id: 'de-de',
        name: 'Deutsche'
      },
      {
        dir: 'rtl',
        example: 'عربى',
        id: 'ar-ae',
        name: 'عربى'
      }
    ];

    this.defaultLanguageLocale = this.supportedLanguageLocales[0];

    this.defaultPreferences = {
      languageLocale: this.getPlatformOrDefaultLocale()
    };

    let savedPreferences: Preferences = this.storageService.get('l', 'preferences');

    this.preferences = savedPreferences || this.defaultPreferences;

    document.querySelector('html').setAttribute(
      'lang',
      this.preferences.languageLocale.id.split('-')[0]
    ); // Set lang attribute on <html> tag.

  }

  /**
   *
   * Gets either that language locale whose ID corresponds to the locale ID provided by the platform, or default language locale.
   *
   */
  private getPlatformOrDefaultLocale(): LanguageLocale {

    let platformLocaleId: string = navigator.language.toLowerCase();

    for (let languageLocale of this.supportedLanguageLocales) {

      if (languageLocale.id === platformLocaleId) {

        return languageLocale;

      }

    }

    return this.defaultLanguageLocale;

  }

  /**
   *
   * Gets the preferences.
   *
   */
  public getPreferences(): Preferences {

    return this.preferences;

  }

  /**
   *
   * Gets all supported language locales.
   *
   */
  public getSupportedLanguageLocales(): LanguageLocale[] {

    return this.supportedLanguageLocales;

  }

  /**
   *
   * Sets the preferences and reloads app.
   *
   */
  public setPreferences(preferences: Preferences): void {

    this.storageService.set('l', 'preferences', preferences);

    location.reload();

  }

}