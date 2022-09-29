import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';


interface Datos {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  formClub: FormGroup;
  counter:number=0;
  username:any = localStorage.getItem("user");

  categorias: Datos[] = [
    {value: 'Idiomas', viewValue: 'Idiomas'},
    {value: 'Artes', viewValue: 'Artes'},
    {value: 'Deportes', viewValue: 'Deportes'},
    {value: 'Ingeniería', viewValue: 'Ingeniería'}

  ];

  constructor(private fb: FormBuilder,
    private _userService: StudentsService)
  {
    this.formClub = this.fb.group ({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  addClub() {
    const newUser: Object =
    {
      nombre: this.formClub.value.nombre,
      categoria: this.formClub.value.categoria,
      estudiante: this.username,
    };
    this._userService.addClub(newUser).subscribe(data => {
      console.log(data);
      this.addAporte()
      alert("Se han guardado los datos correctamente")
    }, error => {
      alert("Error al crear Cuenta de Usuario, dirección de Correo Electrónico ya registrada o contraseña menor a 8 caracteres")
    }
    );
  }

  addAporte(){
    this._userService.getAportes(this.username).subscribe(
      result=> {
        this.counter=result.aportes
        this.setAportes()
      }
    )
  }

  setAportes(){
    let nuevoCont=this.counter+1
    console.log("Viejo Cont:",this.counter)
    console.log("Nuevo cont:",nuevoCont)
    let data= {"aportes":nuevoCont}
    this._userService.putAportes(this.username,data).subscribe(
      result=>{
        console.log(result)
      }
    )
  }

  

}
