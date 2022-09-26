import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  categorias: Datos[] = [
    {value: 'Idiomas-0', viewValue: 'Idiomas'},
    {value: 'Artes-1', viewValue: 'Artes'},
    {value: 'Deportes-2', viewValue: 'Deportes'},
    {value: 'Ingeniería-3', viewValue: 'Ingeniería'}

  ];

  constructor(private fb: FormBuilder)
  {
    this.formClub = this.fb.group ({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  addClub(){
    console.log("Se agrego club")
  }

}
