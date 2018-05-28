import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[];

  constructor(private EmployeeService:EmployeeService) { }

  ngOnInit() {
    this.employee = this.EmployeeService.getEmployee();
  }

}