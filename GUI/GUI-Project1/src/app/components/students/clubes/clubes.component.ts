import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { StudentsService } from 'src/app/services/students.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  state: string;
}

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'categoria', 'interesados', 'state'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listClubes: any[] = [];
  dataSource!: MatTableDataSource<any>;
  constructor(private _studentService: StudentsService) { }

  ngOnInit(): void {
    this.getClubes();
  }


  eliminarInteres(nombreClub: string){
    console.log(nombreClub)
  }

  agregarInteres(nombreClub: string){
    console.log(nombreClub)
  }

  getClubes(){
    this._studentService.getClub().subscribe(
      result => {
        result;
        var i = 0;
        while(result[i] != undefined){
          this.listClubes.push({nombre:result[i].nombre,
                                  categoria:result[i].categoria,
                                  interesados: result[i].interesados,
                                  state:"Interes"});
          i++;
          this.dataSource = new MatTableDataSource(this.listClubes);
          this.dataSource.paginator = this.paginator;
          //this.dataSource.paginator = this.paginatorDrivers;
        }
      },
      error => {
        alert("Error al cargar la lista de Clubes")
      });
  }

}




