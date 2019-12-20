import { Component, OnInit } from '@angular/core';

import { AdminEmployeeService } from '../../services/admin-employee/admin-employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public departments : any;
  constructor(private adminEmp: AdminEmployeeService) { }

  ngOnInit() {
  }

  public getAllDepartments(): Observable<any> {
    this.departments = this.adminEmp.getAllDepartments();
    console.log(this.departments);
     return this.departments;
  }
}
