/* --- Interfaces --- */
import { LanguageLocale } from '../../interfaces/language-locale';
import { Preferences } from '../../interfaces/preferences';

export class MockPreferencesService {

  public getPreferences() {

    let preferences: Preferences = {
      languageLocale: {
        dir: 'ltr',
        example: 'English',
        id: 'en-us',
        name: 'English'
      },
    };

    return preferences;

  }

  public getSupportedLanguageLocales() {

    let languageLocale: LanguageLocale[] = [
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

    return languageLocale;

  }

  public setPreferences(preferences: Preferences) { }

}