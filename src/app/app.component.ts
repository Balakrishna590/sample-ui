import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

/* --- Shared Services --- */
import { LoaderService } from './common/loader-service/loader.service';
import { CommonUtilityService } from './common/utility-service/common-utility.service';
import { StorageService } from './common/storage-service/storage.service';
import { ApiService } from './common/api-service/api.service';

@Component({
  providers: [ApiService, LoaderService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  title = 'User Registration';

  public displayLoader: boolean;
  public loaderSubscription: Subscription;

  public constructor(
    private router: Router,
    //private sessionStore: SessionStorageService,
    private apiService: ApiService,
    //private commonUtilityService: CommonUtilityService,
    //private cookieService: CookieService,
    private loaderService: LoaderService
  ) {

  }
  public ngOnInit(): void {
    String.prototype['format'] = function () {

      let args = arguments;

      return this.replace(/\{(\d+)\}/g, function () {

        return args[arguments[1]];

      });

    };

    Date.prototype['dd-mm-yyyy'] = function () {

      let mm = this.getMonth() + 1; // getMonth() is zero-based

      let dd = this.getDate();

      return [(dd > 9 ? '' : '0') + dd, (mm > 9 ? '' : '0') + mm, this.getFullYear()].join('-');

    };

    document.addEventListener('contextmenu', function (event) {

      event.preventDefault();

    }, false);

    document.addEventListener('keydown', function (event) {

      switch (event.keyCode) {

        case 116: // prevents F5 button

          event.returnValue = false;

          return false;

        case 82: // prevents Ctrl+R button

          if (event.ctrlKey) {

            event.returnValue = false;

            return false;

          }

        case 123: // prevents F12 button

          //event.returnValue = !ENVIRONMENT.intellect.isProduction;

          //return !ENVIRONMENT.intellect.isProduction;

        case 73: // Prevents Ctrl+Shift+I button

          if (event.ctrlKey && event.shiftKey) {

            //event.returnValue = !ENVIRONMENT.intellect.isProduction;

            //return !ENVIRONMENT.intellect.isProduction;

          }

      }

    }, false);

    this.loaderSubscription = this.loaderService.loaderCounter.subscribe((counter: number) => {

      this.displayLoader = counter !== 0;

    });

    //if (AppSettings.ARX_ENABLED && !this.cookieService.getAll()['ARMOR_TICKET']) {

      //this.router.navigateByUrl('/logout');

   // }

    /* //if (!AppSettings.ARX_ENABLED && !this.cookieService.getAll()['ARMOR_TICKET'] &&
      !!this.sessionStore.retrieve('sessionStore') &&
      Object.keys(this.sessionStore.retrieve('sessionStore')).length > 0) {

      Object.keys(this.sessionStore.retrieve('sessionStore')).map(key => {

        this.cookieService.set(key, this.sessionStore.retrieve('sessionStore')[key]);

      });

    } */

    /* this.sessionStore.store('sessionStore', this.cookieService.getAll());

    if (!AppSettings.ARX_ENABLED && (!this.sessionStore.retrieve('sessionStore')
      || !this.sessionStore.retrieve('sessionStore')['ARMOR_TICKET'])) {

      this.sessionStore.store('sessionStore', { ARMOR_TICKET: 'DEMO' });

    }

    if (this.sessionStore.retrieve('allowCIMLandingNav') === undefined || this.sessionStore.retrieve('allowCIMLandingNav') === null) {

      this.sessionStore.store('allowCIMLandingNav', true);

    } */

    /* this.cookieService.deleteAll();

    this.apiService.getData(this.staticDataUrl).subscribe(data => {

      for (let key in data) {

        if (!!data[key]) {

          this.sessionStore.store(key, data[key]);

        } else {

          this.sessionStore.store(key, null);

        }

      }

    }, errors => {

      this.cimUtilityService.handleApiErrors(errors);

    } );*/
  }

  public ngAfterViewInit(): void {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationStart) {

        this.displayLoader = true;

      } else if (
        event instanceof NavigationCancel ||
        event instanceof NavigationEnd ||
        event instanceof NavigationError
      ) {

        this.displayLoader = false;

      }

    });

  }

  public ngOnDestroy(): void {

    if (this.loaderSubscription && !this.loaderSubscription.closed) {

      this.loaderSubscription.unsubscribe();

    }

  }
}
