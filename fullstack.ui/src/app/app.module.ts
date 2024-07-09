import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpliyeeListComponent } from 'src/app/Components/Employee/empliyee-list/empliyee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from 'src/app/Services/employee.service';
import { AddEmployeeComponent } from './Components/Employee/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Components/Employee/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpliyeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
