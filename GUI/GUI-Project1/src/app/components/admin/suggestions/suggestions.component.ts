import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  nombre: string;
  cursos: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: '18', cursos: "Letras"},
  {position: 2, nombre: '13', cursos: "sdf"},
  {position: 3, nombre: '11', cursos: "rdfg"},
  
];
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Nombre Completo', 'Cantidad de Cursos Propuestos'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
