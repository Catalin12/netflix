/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";

//PrimeNG and icons imports
import { MenuItem } from "primeng/api";

@Component({
	selector: "app-home",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

	public menuItems: MenuItem[] = [];

	public constructor() {

	}

	public ngOnInit(): void {
		this.menuItems = [
			{
				label: "Main Page",
				icon: "pi pi-fw pi-home",
				expanded: true
			},
			{
				label: "Series",
				icon: "pi pi-fw pi-folder"
			},
			{
				label: "Movies",
				icon: "pi pi-fw pi-fast-forward"
			},
			{
				label: "New and Tranding",
				icon: "pi pi-fw pi-star-fill"
			},
			{
				label: "My List",
				icon: "pi pi-fw pi-database"
			}
		];
	}

	public clickOnMenuItems(varr: any): void {
		console.log(varr);
	}
}
