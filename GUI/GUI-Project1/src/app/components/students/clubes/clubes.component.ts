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

  displayedColumns: string[] = ['position', 'name', 'weight', 'state'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _studentService: StudentsService) { }

  ngOnInit(): void {
    this.getClubes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  eliminarInteres(){
    console.log("No me interesa")
  }

  agregarInteres(){
    console.log("Me interesa")
  }

  getClubes(){
    this._studentService.getClub().subscribe(data => {
      console.log(data);
      alert("Se han guardado los datos correctamente")
    }, error => {
      alert("Error al crear Cuenta de Usuario, dirección de Correo Electrónico ya registrada o contraseña menor a 8 caracteres")
    }
    );
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, state: 'Interes'},
  {position: 2, name: 'Helium', weight: 4.0026, state: 'Interes'},
  {position: 3, name: 'Lithium', weight: 6.941, state: 'noInteres'},
  {position: 4, name: 'Beryllium', weight: 9.0122, state: 'noInteres'},
  {position: 5, name: 'Boron', weight: 10.811, state: 'Interes'},
  {position: 6, name: 'Carbon', weight: 12.0107, state: 'noInteres'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, state: 'noInteres'},
  {position: 8, name: 'Oxygen', weight: 15.9994, state: 'noInteres'},
  {position: 9, name: 'Fluorine', weight: 18.9984, state: 'noInteres'},
  {position: 10, name: 'Neon', weight: 20.1797, state: 'Interes'},
  {position: 11, name: 'Sodium', weight: 22.9897, state: 'Interes'},
  {position: 12, name: 'Magnesium', weight: 24.305, state: 'Interes'},
  {position: 13, name: 'Aluminum', weight: 26.9815, state: 'noInteres'},
  {position: 14, name: 'Silicon', weight: 28.0855, state: 'noInteres'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, state: 'noInteres'},
  {position: 16, name: 'Sulfur', weight: 32.065, state: 'Interes'},
  {position: 17, name: 'Chlorine', weight: 35.453, state: 'noInteres'},
  {position: 18, name: 'Argon', weight: 39.948, state: 'noInteres'},
  {position: 19, name: 'Potassium', weight: 39.0983, state: 'Interes'},
  {position: 20, name: 'Calcium', weight: 40.078, state: 'noInteres'},
];


