import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

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

class Employee {
  id:number;
  name:string;
  gender:string;
  contactPreference:string;
  email:string;
  dateOfBirth:Date;
  department:string;
  isActive:boolean;
  photoPath:string;
}