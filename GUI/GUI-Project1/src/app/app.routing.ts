import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ClubsComponent } from './components/admin/clubs/clubs.component';
import { SuggestionsComponent } from './components/admin/suggestions/suggestions.component';
import { TopsComponent } from './components/admin/tops/tops.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClubesComponent } from './components/students/clubes/clubes.component';
import { CreateClubComponent } from './components/students/create-club/create-club.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'admin', component:AdminComponent},
    {path: 'admin/clubs', component:ClubsComponent},
    {path: 'admin/tops', component:TopsComponent},
    {path: 'admin/suggestions', component:SuggestionsComponent},
    { path: 'app/clubes', component: ClubesComponent },
    { path: 'app/create-club', component: CreateClubComponent },

    { path: '**', redirectTo: 'app', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }