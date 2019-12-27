import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENVIRONMENT } from './../../../environments/environment'
import { ApiService } from '../../common/api-service/api.service'

@Injectable({
  providedIn: 'root',
})
export class AdminEmployeeService {

  constructor(private apiService: ApiService) { }
  //public departments: any;
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
    //console.log(this.departments);
    return this.apiService.getData(getAllDeptsUrl);;
  }
  /* this.departments = this.apiService.getData(getAllDeptsUrl)
      .subscribe(departments => {
        this.departments = departments
      }, errors => {
        if (errors.status === 400) {
          console.log("400");
        } else {
          console.log("400 else");
        }
      }); */
}
