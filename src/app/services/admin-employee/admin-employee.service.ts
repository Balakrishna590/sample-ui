import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENVIRONMENT } from './../../../environments/environment'
import { ApiService } from '../../common/api-service/api.service'

@Injectable({
  providedIn: 'root',
})
export class AdminEmployeeService {

  constructor(private apiService: ApiService) { }

  public getEmployeeDetails(): Observable<any> {
    let employeesUrl = '';
    if (ENVIRONMENT.API_MODE) {
      /* accountsUrl = `${AppSettings.API_ENDPOINT}/${AppSettings.API_ACCOUNT_DATA}/${AppSettings.API_SEARCH_BY_BIC}`
        + `?bicCode=${bicCode}`; */
      employeesUrl = `${ENVIRONMENT.API_EMPLOYEES}`;
    }
    return this.apiService.getData(employeesUrl);
  }

  public getAllDepartments(): Observable<any> {
    let getAllDeptsUrl = ''; 
      getAllDeptsUrl = `${ENVIRONMENT.API_DEPARTMENTS}`;
      console.log(getAllDeptsUrl);
    return this.apiService.getData(getAllDeptsUrl);
  }
}
