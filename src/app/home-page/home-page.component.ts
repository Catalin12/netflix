/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { EmployeeDTO } from "../shared/employee.dto";
import { EmployeeService } from "../shared/employee.service";

@Component({
	selector: "home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent {

	public employee: EmployeeDTO[] = [];
	public employeeLoaded: number = 200;
	public rowsOnPage: number = 20;
	public totalRecords: number = 0;
	public loading: boolean = true;

	public constructor(
		private employeeService: EmployeeService,
	) { }

	public loadEmployee(event: LazyLoadEvent): void {
		this.employeeService.getNumberOfEmployee().subscribe({
			next: (token) => {
				this.totalRecords = token[0].count;
			},
			error: (error) => {
				// eslint-disable-next-line no-console
				console.log(error);
			}
		});
		this.loading = true;
		setTimeout(() => {
			this.prepareEmployee(event.first!, event.first! + event.rows!);
		}, 500);
	}

	private prepareEmployee(minId: number, maxId: number): void {
		this.employeeService.getEmployeeBetweenId(minId, maxId).subscribe({
			next: (employee) => {
				this.employee = employee;
				this.loading = false;
			},
			error: (error) => {
				// eslint-disable-next-line no-console
				console.warn(error);
			}
		});
	}

	public nextPageClick(): void {
		// eslint-disable-next-line no-console
		console.log("Next page click");
	}

	public prevPageClick(): void {

		// eslint-disable-next-line no-console
		console.log("Prev page click");
	}

	public reset(): void {
		this.prepareEmployee(1, 20);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public paginateCallback(event: any): void {
		// eslint-disable-next-line no-console
		console.log(event);
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public loadLazyCallback(event: any): void {
		// eslint-disable-next-line no-console
		console.log(event);
	}

}
