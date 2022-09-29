import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

export interface PeriodicElement {
  position: number;
  nombre: string;
  cursos: string;
}


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, nombre: '18', cursos: "Letete"},
    {position: 2, nombre: '13', cursos: "Gagaga"},
    {position: 3, nombre: '11', cursos: "rdfg"},
    
  ];
  displayedColumns: string[] = ['position', 'Nombre Completo', 'Cantidad de Cursos Propuestos'];
  dataSource = this.ELEMENT_DATA;
  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.getSuggests()
  }

  getSuggests(){
    this._adminService.getStudentsTop3().subscribe(
      result=>{
        this.ELEMENT_DATA[0].nombre=result[0].nombre
        this.ELEMENT_DATA[0].cursos=result[0].aportes
        this.ELEMENT_DATA[1].nombre=result[1].nombre
        this.ELEMENT_DATA[1].cursos=result[1].aportes
        this.ELEMENT_DATA[2].nombre=result[2].nombre
        this.ELEMENT_DATA[2].cursos=result[2].aportes
        console.log(result)
      }
    )
  }

}
