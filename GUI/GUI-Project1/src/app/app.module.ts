import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClubsComponent } from './components/admin/clubs/clubs.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin.component';
import { TopsComponent } from './components/admin/tops/tops.component';
import { SharedModule } from './components/shared/shared.module';
import { SuggestionsComponent } from './components/admin/suggestions/suggestions.component';

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
    ClubsComponent,
    NavadminComponent,
    TopsComponent,
    SuggestionsComponent,
    
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
  bootstrap: [AppComponent],
 
})
export class AppModule { }
