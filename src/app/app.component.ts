import { Component, OnInit } from '@angular/core';
import { employee } from './models/employee';
import { EmployeeService } from './services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employees: employee[];
  employeeForm: boolean;
  isNewemployee: boolean;
  newemployee: any = {};
  editemployeeForm: boolean;
  editedemployee: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.getemployees();
  }

  getemployees(): employee[] {
    return this.employeeService.getEmployeeFromData()
  }

  showEditemployeeForm(employee: employee) {
    if (!employee) {
      this.employeeForm = false;
      return;
    }
    this.editemployeeForm = true;
    this.editedemployee = employee;
  }

  showAddemployeeForm() {
    // resets form if edited employee
    if (this.employees.length) {
      this.newemployee = {};
    }
    this.employeeForm = true;
    this.isNewemployee = true;

  }

  saveemployee(employee: employee) {
    if (this.isNewemployee) {
      // add a new employee
      this.employeeService.addEmployee(employee);
    }
    this.employeeForm = false;
  }

  updateemployee() {
    this.employeeService.updateEmployee(this.editedemployee);
    this.editemployeeForm = false;
    this.editedemployee = {};
  }

  removeemployee(employee: employee) {
    this.employeeService.deleteEmployee(employee);
  }

  cancelEdits() {
    this.editedemployee = {};
    this.editemployeeForm = false;
  }

  cancelNewemployee() {
    this.newemployee = {};
    this.employeeForm = false;
  }

}
