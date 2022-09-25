import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './components/shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClubesComponent } from './components/students/clubes/clubes.component';
import { CreateClubComponent } from './components/students/create-club/create-club.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    StudentsComponent,
    NavbarComponent,
    ClubesComponent,
    CreateClubComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
