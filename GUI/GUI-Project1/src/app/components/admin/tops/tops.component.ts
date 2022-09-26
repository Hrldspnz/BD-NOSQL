import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
