import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: string;
   password: string;
   formData: FormGroup;

   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl(""),
         password: new FormControl(""),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;
      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
           
           if(data) {
           // window.location.reload();
            this.router.navigate(['/show'])
            .then(() => {
               window.location.reload();
             });
           }

      });
   }
}