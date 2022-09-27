import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formDataUser: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,) {
      this.formDataUser = this.fb.group ({
        name: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
        section: [''],
      })

    }

  ngOnInit(): void {
  }

  addUser() {
    console.log("Hola")
  }

}
