import { Injectable } from '@angular/core';
 import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
   providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router,) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
      

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string = localStorage.getItem('isUserLoggedIn');
         console.log("value",val)

         if(val != null && val == "true"){
            if(url == "/login"){
               // location.reload() ;
               this.router.parseUrl('/show');
               // location.reload() ;

            }
            else { 
               // location.reload() ;
               return true;}
            
         } else {
            // location.reload() ;
            return this.router.parseUrl('/login');
         }
         
      }


}
//    export class AuthGuard implements CanActivate {
//       constructor(private authService: AuthService, private router: Router) {}
//    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//       let url: string = state.url;
  
//       return this.checkLogin(url);
//     }
  
//     checkLogin(url: string): boolean {
//       if (this.authService.isUserLoggedIn) { return true; }
  
//       // Store the attempted URL for redirecting
//       this.authService.redirectUrl = url;
  
//       // Navigate to the login page with extras
//       this.router.navigate(['/login']);
//       return false;
//     }
// }
// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
//     let url: string = state.url;

//     return this.checkLogin(url);
//   }

//   checkLogin(url: string): boolean {
//     if (this.authService.isLoggedIn) { return true; }

//     // Store the attempted URL for redirecting
//     this.authService.redirectUrl = url;

//     // Navigate to the login page with extras
//     this.router.navigate(['/login']);
//     return false;
//   }