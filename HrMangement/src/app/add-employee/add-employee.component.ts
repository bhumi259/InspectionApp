import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  checkForm: FormGroup;
  formSubmitted : boolean = false; 

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkForm = this.formBuilder.group({
      id: 0,
      name:  ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
    
  }
  get name() {
    return this.checkForm.get('name');
  } 
  employeeList: Employee[] = [];
  ngOnInit(): void {
   

    this.employeeList = this.employeeService.getEmployees();
    //var item = this.employeeService.getEmployees();
  }
  onSubmit() {
    // console.log(this.userModel);
    // console.log(this.name,this.empoloyeeID);
    if(this.checkForm.valid){

    var item = this.employeeService.getEmployees();
    console.log(this.checkForm.value);
    let a = this.checkForm.value;
  this.employeeList.push(a);
  this.router.navigate(['/show']);
} else {
  this.formSubmitted = true;

}


  }

}

