import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-empliyee-list',
  templateUrl: './empliyee-list.component.html',
  styleUrls: ['./empliyee-list.component.css']
})
export class EmpliyeeListComponent implements OnInit {

  employees: Employee[] = []

  constructor(private employeeService : EmployeeService){}

ngOnInit(): void {
  
  this.employeeService.getAllEmployees().subscribe({
    
    next: (employees : Employee[]) => {
      console.log(employees)
      this.employees = employees;
    },
    error:(response :any)=>{
      console.error(response) ;
    }

  })
}

}
