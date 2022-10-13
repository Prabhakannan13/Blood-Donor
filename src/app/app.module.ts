import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { RouterModule, Routes } from '@angular/router';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';
import { ViewAllDonorComponent } from './view-all-donor/view-all-donor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
    path:"",component:AdddonorComponent
  },
  {
    path:"search",component:SearchdonorComponent
  },
  {
    path:"delete",component:DeletedonorComponent
  },
  {
    path:"view-all-donor",component:ViewAllDonorComponent
  },
]
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchdonorComponent,
    AdddonorComponent,
    DeletedonorComponent,
    ViewAllDonorComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
