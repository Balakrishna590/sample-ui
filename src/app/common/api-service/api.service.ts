/* --- Angular Imports --- */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseContentType } from '@angular/http';
/* --- Other Vendor Imports --- */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { SessionStorageService } from 'ng2-webstorage';
import { LoaderService } from '../loader-service/loader.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    //private sessionStore: SessionStorageService,
    private loaderService: LoaderService
  ) { }
  /**
  * Get header options.
  *
  * @param {any} obj - contains headers.
  * @param {any} body - body of the request.
  * @param {string} type - type of content.
  *
  * @returns {RequestOptions}
  *
  */
  private getRequestOptions(obj: any, body: any, type?: string, responseType?: string): any {
    let httpOptions: object = {};

    obj.headers = new HttpHeaders();

    obj.headers = obj.headers.set('Access-Control-Allow-Origin', '*:*');

    obj.headers = obj.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    //obj.headers = obj.headers.set('Cache-Control', 'no-cache');

    //obj.headers = obj.headers.set('Expires', '-1');

    //obj.headers = obj.headers.set('Pragma', 'no-cache');

    if (type !== 'file') {
      obj.headers = obj.headers.set('Content-type', 'application/json;charset=utf-8');
    }
    /* if (
      this.sessionStore.retrieve('sessionStore') !== undefined &&
      this.sessionStore.retrieve('sessionStore') !== null
    ) {

      obj.headers.append('LOGGED_IN_BANK_ENTITY_ID', this.sessionStore.retrieve('sessionStore')['LOGGED_IN_BANK_ENTITY_ID']);
      obj.headers.append('ARMOR_TICKET', this.sessionStore.retrieve('sessionStore')['ARMOR_TICKET']);
      obj.headers.append('USER_ID', this.sessionStore.retrieve('sessionStore')['USER_ID']);

    } */

    //let action = 'VIEW';

    /* if (body !== null && body !== undefined && body.requestParams) {

      action = body.requestParams.action;

    } else if (body !== null && body !== undefined && body.action) {

      action = body.action;

    } */

    //obj.headers = obj.headers.set('INPUT_ACTION', action);

    if (body === null) {

      body = {};

    }

    if (responseType === 'blob') {

      httpOptions = { headers: obj.headers, body: body, responseType: ResponseContentType.Blob };

    } else {

      httpOptions = { headers: obj.headers, body: body };

    }

    return httpOptions;
  }

  /**
   * Check for JSON.
   *
   * @param {string} str - json string.
   *
   * @returns {boolean}.
   *
   */
  private isJson(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;

  }

  public deleteData(url: string = '', body: any = {}): Observable<any> {
    let options = this.getRequestOptions(this, body);
    this.loaderService.show();
    return this.http.delete(url, options)
      .pipe(
        map(
          (response: any) => {
            this.loaderService.hide();
            return response;
          }
        )
      );
  }

  public getData(url: string = ''): Observable<any> {
    let options = this.getRequestOptions(this, null);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    this.loaderService.show();
    return this.http.get(url, httpOptions)
      .pipe(
        map(
          (response: any) => {
            this.loaderService.hide();
            console.log(response);
            return response;
          }
        )
      )
  }
  /* mapToResponse(): Observable<any> {
    this.getData.pipe(
      map((response: any) => response.map(object => client.object))
    )
  } */
}
/* let options = this.getRequestOptions(this,null);
return this.http.get(url,options).subscribe(responseData => {
  console.log(responseData)
  return responseData;
}); */
