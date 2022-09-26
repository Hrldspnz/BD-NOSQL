import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  nombre:string;
  redirect:string;
}

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {

  menu:Menu[]= []
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.menu= [
      {nombre:"Estudiantes con + sugerencias",
      redirect:"/admin/"},
      {nombre:"Top de clubes",
      redirect:"jhber"}
    ]
  }

  logout(): void{
    this.router.navigate(['/login']);
  }

  home(): void{
    this.router.navigate(['/admin/clubs']);
  }

}
