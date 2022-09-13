import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { EmployeeDTO } from "./employee.dto";

@Injectable({
	providedIn: "root"
})
export class EmployeeService {

	private apiURL: string = "http://localhost:3000/";

	public constructor(
		private http: HttpClient
	) { }

	public getAllEmployee(): Observable<EmployeeDTO[]> {
		const getAllEmployee = this.apiURL + "/all"; //not really safe
		return this.http.get<EmployeeDTO[]>(getAllEmployee);
	}

	public getEmployeeById(employeeId: number): Observable<EmployeeDTO> {
		const getEmployee = this.apiURL + "/" + employeeId;
		return this.http.get<EmployeeDTO>(getEmployee);
	}

	public getEmployeeBetweenId(minId: number, maxId: number): Observable<EmployeeDTO[]> {
		const getEmployeeAboveId = this.apiURL + "employee/pagination/" + minId + "/" + maxId;
		return this.http.get<EmployeeDTO[]>(getEmployeeAboveId);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public getNumberOfEmployee(): Observable<any> {
		const getNoOfEmployee = this.apiURL + "employee/count";
		return this.http.post(getNoOfEmployee, "");
	}

}