
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employeeList: Employee[] =[];


  constructor(private employeeService:EmployeeService, private router: Router,) { }

  ngOnInit(): void {
   
    this.employeeList = this.employeeService.getEmployees();
  }
 
 
remove(id: number) {
  this. employeeService.removeUser(id);
  this.employeeList = this.employeeService.getEmployees();
}


}
