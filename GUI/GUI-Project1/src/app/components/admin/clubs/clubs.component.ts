import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin.service';

export interface PeriodicElement {
  position: number;
  Cantidad: string;
  Categoria: string;
}



@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})
export class ClubsComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {position:1, Cantidad:"",Categoria:"Deportes"},
    {position:2, Cantidad:"",Categoria:"Artes"},
    {position:3, Cantidad:"",Categoria:"Ingenieria"},
    {position:4, Cantidad:"",Categoria:"Idiomas"}
  ];
  displayedColumns: string[] = ['position', 'Cantidad', 'Categoria'];
  dataSource = this.ELEMENT_DATA;

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.getDeportes()
    this.getArtes()
    this.getIngenieria()
    this.getIdiomas()
  }

  getDeportes(){
    this._adminService.getDeporte().subscribe(
      result=>{
        console.log("Result de deportes",result)
        this.ELEMENT_DATA[0].Cantidad=result.contador
      }
    )
  }
  
  getArtes(){
    this._adminService.getArtes().subscribe(
      result=>{
        this.ELEMENT_DATA[1].Cantidad=result.contador
      }
    )
  }
  getIngenieria(){
    this._adminService.getIngenieria().subscribe(
      result=>{
        this.ELEMENT_DATA[2].Cantidad=result.contador
      }
    )
  }
  getIdiomas(){
    this._adminService.getIdiomas().subscribe(
      result=>{
        this.ELEMENT_DATA[3].Cantidad=result.contador
        console.log(this.ELEMENT_DATA)
      }
    )
  }

}
