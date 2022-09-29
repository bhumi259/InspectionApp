import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})





export class EditEmployeeComponent implements OnInit {
  id: number = 0;
  checkForm: FormGroup;
  formSubmitted : boolean = false; 

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router,
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
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.checkForm.get('id')?.setValue(params['id']);
        const data = this.employeeService.getUsersByID(this.id);
        if (data) {
          this.checkForm.setValue(data);
        }
      }
    });
  }
  save() {
    if(this.checkForm.valid){
    this.employeeService.updateUser(this.checkForm.value);
    this.router.navigate(['/show']);}
    
    else {
      this.formSubmitted = true;
    
    }


    //Redirecting to user List page after save or update


  }
}


