import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabMenuModule } from "primeng/tabmenu";

import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TabMenuModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }