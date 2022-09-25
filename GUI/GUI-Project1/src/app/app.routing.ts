import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClubesComponent } from './components/students/clubes/clubes.component';
import { CreateClubComponent } from './components/students/create-club/create-club.component';


const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'clubes', component: ClubesComponent },
    { path: 'create-club', component: CreateClubComponent },

    { path: '**', redirectTo: 'app', pathMatch: 'full'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
