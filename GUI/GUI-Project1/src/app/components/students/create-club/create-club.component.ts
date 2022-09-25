import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit {

  formClub: FormGroup;

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
