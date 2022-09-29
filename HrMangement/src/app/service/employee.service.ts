// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: Employee[] =[{
    id:1,
    name:'Demoo',
    email:'demo@gmail.com',
    mobile:'8855221144',
    gender:'Male'

  }];

  constructor(private router: Router) { }
  getEmployees(){
    return this.employeeList
  }
  removeUser(id: number) {
    this.employeeList = this.employeeList.filter(x => x.id != id);
}
updateUser(Employee: Employee) {
  const userIndex = this.employeeList.findIndex(x => x.id == Employee.id);
  if (userIndex != null && userIndex != undefined) {
      this.employeeList[userIndex] = Employee;
  }
}
getUsersByID(id: number) {
  return this.employeeList.find(x => x.id == id)
}
// updateEmployee(id: number){
//   this.router.navigate(['edit-employee', id]);
// }
}
