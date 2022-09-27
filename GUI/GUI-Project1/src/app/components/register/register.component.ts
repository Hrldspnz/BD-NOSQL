import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formDataUser: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _userService: StudentsService) {
      this.formDataUser = this.fb.group ({
        name: ['', Validators.required],
        user: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
        section: [''],
      })

    }

  ngOnInit(): void {
  }

  addUser() {
    if (this.formDataUser.value.password != this.formDataUser.value.passwordConfirm){
      alert ("Las constraseñas no coinciden")
    } else {
      const newUser: Object =
      {
        nombre: this.formDataUser.value.name,
        usuario: this.formDataUser.value.user,
        clave: this.formDataUser.value.password,
        seccion: this.formDataUser.value.section,
      };
      this._userService.addNewUser(newUser).subscribe(data => {
        console.log(data);
        alert("Se han guardado los datos correctamente")
      }, error => {
        alert("Error al crear Cuenta de Usuario, dirección de Correo Electrónico ya registrada o contraseña menor a 8 caracteres")
      }
      );
    }
  }

}
