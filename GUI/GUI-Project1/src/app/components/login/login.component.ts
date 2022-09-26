import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string ="";
  password : string ="";
  show: boolean= false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log("user name is " + this.username)
    this.router.navigate(['/admin']);
    this.clear();

  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }

}
