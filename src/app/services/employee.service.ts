import { Injectable } from '@angular/core';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private upersons: employee[] = [
    {
      id: 1,
      firstName: 'Durgesh',
      lastName: 'Pal'
    },
    {
      id: 2,
      firstName: 'Ankur',
      lastName: 'Pal'
    }
  ];

  constructor() { }

  getEmployeeFromData(): employee[] {
    return this.upersons;
  }

  addEmployee(emp: employee) {
    emp.id = this.upersons.length + 1;
    this.upersons.push(emp);

  }
  updateEmployee(emp: employee) {
    const index = this.upersons.findIndex(u => emp.id === u.id);
    this.upersons[index] = emp;
  }
  deleteEmployee(emp: employee) {
    this.upersons.splice(this.upersons.indexOf(emp), 1);
  }

}
