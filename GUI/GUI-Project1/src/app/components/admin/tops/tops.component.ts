import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

export interface top {
  position: number;
  nombre: string;
  categoria: string;
  cantidad: string;
}




@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  topClubs: top[] = [
    {position: 1, nombre: '18', categoria: "Letras", cantidad:"3"},
    {position: 2, nombre: '13', categoria: "sdf", cantidad:"3"},
    {position: 3, nombre: '11', categoria: "rdfg", cantidad:"3"},
    {position: 4, nombre: '11', categoria: "rdfg", cantidad:"3"},
    {position: 5, nombre: '11', categoria: "rdfg", cantidad:"3"},
    
  ];
  bottomClubs: top[] = [
    {position: 1, nombre: 'u', categoria: "Letras", cantidad:"3"},
    {position: 2, nombre: '13', categoria: "sdf", cantidad:"3"},
    {position: 3, nombre: '11', categoria: "rdfg", cantidad:"3"},
    {position: 4, nombre: '11', categoria: "rdfg", cantidad:"3"},
    {position: 5, nombre: '11', categoria: "rdfg", cantidad:"3"},
    
  ];
  displayedColumns: string[] = ['position', 'nombre', 'categoria', 'cantidad'];
  dataSource = this.topClubs;
  dataSource2= this.bottomClubs;
  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.setTopClubs()
    this.setBottomClubs()
  }

  setTopClubs(){
    this._adminService.getTop5().subscribe(
      result=>{
        this.topClubs[0].nombre=result[0].nombre
        this.topClubs[0].categoria=result[0].categoria
        this.topClubs[0].cantidad=result[0].interesados
        this.topClubs[1].nombre=result[1].nombre
        this.topClubs[1].categoria=result[1].categoria
        this.topClubs[1].cantidad=result[1].interesados
        this.topClubs[2].nombre=result[2].nombre
        this.topClubs[2].categoria=result[2].categoria
        this.topClubs[2].cantidad=result[2].interesados
        this.topClubs[3].nombre=result[3].nombre
        this.topClubs[3].categoria=result[3].categoria
        this.topClubs[3].cantidad=result[3].interesados
        this.topClubs[4].nombre=result[4].nombre
        this.topClubs[4].categoria=result[4].categoria
        this.topClubs[4].cantidad=result[4].interesados
        
      }
    )
  }

  setBottomClubs(){
    this._adminService.getBottom5().subscribe(
      result=>{
        this.bottomClubs[0].nombre=result[0].nombre
        this.bottomClubs[0].categoria=result[0].categoria
        this.bottomClubs[0].cantidad=result[0].interesados
        this.bottomClubs[1].nombre=result[1].nombre
        this.bottomClubs[1].categoria=result[1].categoria
        this.bottomClubs[1].cantidad=result[1].interesados
        this.bottomClubs[2].nombre=result[2].nombre
        this.bottomClubs[2].categoria=result[2].categoria
        this.bottomClubs[2].cantidad=result[2].interesados
        this.bottomClubs[3].nombre=result[3].nombre
        this.bottomClubs[3].categoria=result[3].categoria
        this.bottomClubs[3].cantidad=result[3].interesados
        this.bottomClubs[4].nombre=result[4].nombre
        this.bottomClubs[4].categoria=result[4].categoria
        this.bottomClubs[4].cantidad=result[4].interesados
        
      }
    )
  }

}
