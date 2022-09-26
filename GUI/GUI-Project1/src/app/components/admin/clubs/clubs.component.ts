import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  Cantidad: string;
  Categoria: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Cantidad: '18', Categoria: "Letras"},
  {position: 2, Cantidad: '13', Categoria: "sdf"},
  {position: 3, Cantidad: '11', Categoria: "rdfg"},
  {position: 4, Cantidad: '5', Categoria: "srf"},
  {position: 5, Cantidad: '3', Categoria: "sdsddsf"},
  {position: 6, Cantidad: '1', Categoria: "cdfvdfv"},
  {position: 7, Cantidad: '1', Categoria: "dfdfv"},
  {position: 8, Cantidad: '1', Categoria: "eferferf"}
];

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})
export class ClubsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Cantidad', 'Categoria'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
