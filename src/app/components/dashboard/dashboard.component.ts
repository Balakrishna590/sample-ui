import { Component, OnInit } from '@angular/core';

import { AdminEmployeeService } from '../../services/admin-employee/admin-employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public departments: any;
  public isHidden :boolean = true;
  constructor(private adminEmp: AdminEmployeeService) { }

  ngOnInit() {
  }

  public getAllDepartments(): void {
    this.departments = this.adminEmp.getAllDepartments()
      .subscribe(departments => {
        this.isHidden = false;
        this.departments = departments;
        console.log(this.departments);
      } 
    )
  }
}
