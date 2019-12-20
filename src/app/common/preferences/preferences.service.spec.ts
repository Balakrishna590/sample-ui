/* --- Angular Imports --- */
import { inject, TestBed } from '@angular/core/testing';

/* --- Interfaces --- */
import { Preferences } from '../../interfaces/preferences';

/* --- Shared Services --- */
import { PreferencesService } from './preferences.service';
import { StorageService } from '../storage/storage.service';

describe('PreferencesService', () => {

  let preferencesService: PreferencesService;

  let storageService: StorageService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [PreferencesService, StorageService]
    });

    preferencesService = TestBed.get(PreferencesService);

    storageService = TestBed.get(StorageService);

    spyOn(preferencesService, 'getPreferences').and.callThrough();

    preferencesService.getPreferences();

    spyOn(preferencesService, 'getSupportedLanguageLocales').and.callThrough();

    preferencesService.getSupportedLanguageLocales();

  });

  it('should be created', () => {

    expect(preferencesService.getPreferences).toHaveBeenCalled();

    expect(preferencesService.getSupportedLanguageLocales).toHaveBeenCalled();

  });

  it('should be able to save user preferences', () => {

    let preferences = preferencesService.getPreferences();

    spyOn(preferencesService, 'setPreferences').and.callFake((preferences: Preferences): any => {

      storageService.set('l', 'preferences', preferences);

    });

    preferencesService.setPreferences(preferences);

    expect(preferencesService.setPreferences).toHaveBeenCalledWith(preferences);

  });

});