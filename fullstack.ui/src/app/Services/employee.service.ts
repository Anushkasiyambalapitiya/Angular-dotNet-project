import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:7001/api/Employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.apiUrl, addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  
  updateEmployee(id : string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, updateEmployeeRequest);
  }

  deleteEmployee(id:string): Observable<Employee> {
  return this.http.delete<Employee>(`${this.apiUrl}/${id}` );
  }
}
