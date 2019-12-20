import { Injectable } from '@angular/core';

/* --- Interfaces --- */
import { Preferences } from '../../interfaces/preferences';

/* --- Other Vendor Imports --- */
import { SessionStorageService } from 'ng2-webstorage';
//import * as deepDiff from 'deep-diff';
import * as lodash from 'lodash';

/* --- Shared Services --- */
import { ApiService } from '../api-service/api.service';
import { LoaderService } from '../loader-service/loader.service';
import { PreferencesService } from '../preferences/preferences.service';

import { Observable } from 'rxjs';
import { CONFIGURATION } from 'src/app/configuration/transalation.config';

export enum validationTypes {
  NUMBERS = 'number',
  NUMBERS_POSITIVE = 'posnum',
  NUMBERS_NEGATIVE = 'negnum',
  NUMBERS_POSITIVE_NEGATIVE = 'posnegnum',
  EMAIL = 'email',
  FLOAT = 'float',
  WORDS = 'words',
  ALPHA_NUMERIC = 'alphanum',
  ALPHA_NUMERIC_SPACE = 'alphanumspace',
  ALPHA_NUMERIC_UNDERSCORE = 'alphanumunderscore',
  ALPHA_NUMERIC_UNDERSCORE_SPACE = 'alphanumunderscorespace'
}
@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  public preferences: Preferences;
  public localeStrings: any;
  private pattern: RegExp;
  private regexMap = {
    number: /^[0-9]*$/g,
    posnum: /^\d*\.?\d+$/,
    negnum: /^-\d*\.?\d+$/,
    posnegnum: /^-?\d*\.?\d+$/,
    email: /^.+@.+$/,
    float: /^[+-]?([0-9]*[.])?[0-9]+$/g,
    words: /([A-z]*\\s)*/g,
    alphanum: /^[a-zA-Z0-9]*$/g,
    alphanumspace: /^[a-zA-Z0-9 ]*$/g,
    alphanumunderscore: /^[a-z0-9_]$/,
    alphanumunderscorespace: /^[a-z0-9_ ]$/
  };

  constructor(private sessionStorage: SessionStorageService,
    private preferencesService: PreferencesService
  ) { 
    this.preferences = this.preferencesService.getPreferences();

    this.localeStrings = CONFIGURATION.localeStrings[this.preferences.languageLocale.id] ||
      CONFIGURATION.localeStrings[CONFIGURATION.defaultLanguageLocaleId];

  }
}
