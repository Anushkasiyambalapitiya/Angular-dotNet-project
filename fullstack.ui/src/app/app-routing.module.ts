import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpliyeeListComponent } from './Components/Employee/empliyee-list/empliyee-list.component';
import { AddEmployeeComponent } from './Components/Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/Employee/edit-employee/edit-employee.component';

const routes: Routes = [

  {
    path : "",
    component : EmpliyeeListComponent
  },
  {
    path : "employee",
    component : EmpliyeeListComponent
  },
  {
    path : "employee/add",
    component : AddEmployeeComponent
  },
  {
    path : "employees/edit/:id",
    component : EditEmployeeComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
