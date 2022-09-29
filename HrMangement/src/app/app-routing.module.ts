import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
// import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
// import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  {path:'show',component:ShowEmployeeComponent,canActivate: [ExpenseGuard]},
  {path:'edit/:id',component:EditEmployeeComponent,canActivate: [ExpenseGuard]},
  {path:'add',component:AddEmployeeComponent,canActivate: [ExpenseGuard]},
 
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  })
export class AppRoutingModule { }
