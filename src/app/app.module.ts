import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { RouterModule, Routes } from '@angular/router';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';
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
]
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchdonorComponent,
    AdddonorComponent,
    DeletedonorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
