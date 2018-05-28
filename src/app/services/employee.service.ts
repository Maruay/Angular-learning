import { Injectable } from '@angular/core';
import { Employee } from '../models/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@maruay.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350'
    }, {
      id: 2,
      name: 'Jen',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'jane@maruay.com',
      dateOfBirth: new Date('10/11/1990'),
      department: 'Account',
      isActive: true,
      photoPath: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350'
    }
  ];

  getEmployee(): Employee[] {
    return this.listEmployees;
  }
}