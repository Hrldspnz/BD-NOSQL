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
  counter:number=0;
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listClubes: any[] = [];
  dataSource!: MatTableDataSource<any>;
  indexRow:number=0;
  textRow:string="Interes"

  constructor(private _studentService: StudentsService) { }

  ngOnInit(): void {
    this.getClubes();
    
    
  }


  eliminarInteres(nombreClub: string, index:any){
    console.log(nombreClub)
    this._studentService.getInteresados(nombreClub).subscribe(
      result=> {
        this.counter=result.interesados

        console.log("Contador en quitar es:",this.counter)
        
        this.listClubes[index].state="Interes"
        this.indexRow=index
        this.textRow= "Interes"
        this.enviarContador(nombreClub, this.counter-1)
      }
    )
  }

  agregarInteres(nombreClub: string, index:any){
    console.log(nombreClub)
    console.log(index)
    this._studentService.getInteresados(nombreClub).subscribe(
      result=> {
        this.counter=result.interesados
        console.log("Contador en agregar es:",this.counter)
        
        this.listClubes[index].state="noInteres"
        this.indexRow=index
        this.textRow= "noInteres"
        this.enviarContador(nombreClub, this.counter+1)
        
        
      }
    )
  }

  enviarContador(nombreClub:string, contador:number){
    console.log("Nuevo contador es:",contador)
    let data= {"interesados":contador}
    this._studentService.putInteresados(nombreClub,data).subscribe(
      result=>{
        console.log(result)
        this.getClubes()
      }
    )
  }

  getClubes(){
    this._studentService.getClub().subscribe(
      result => {
        result;
        var i = 0;
        this.listClubes=[]
        while(result[i] != undefined){
          this.listClubes.push({nombre:result[i].nombre,
                                  categoria:result[i].categoria,
                                  interesados: result[i].interesados,
                                  state:"Interes"});
          i++;
        }
        this.listClubes[this.indexRow].state=this.textRow
        this.dataSource = new MatTableDataSource(this.listClubes);
        this.dataSource.paginator = this.paginator;
        
      },
      error => {
        alert("Error al cargar la lista de Clubes")
      });
  }

}




