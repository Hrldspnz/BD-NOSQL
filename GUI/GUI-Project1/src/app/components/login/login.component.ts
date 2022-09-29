import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlogService } from 'src/app/services/userlog.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string ="";
  password : string ="";
  show: boolean= false;
  user:boolean=false;
  admin:boolean=false;
  pass:string=""

  constructor(private router:Router,
    private _logService: UserlogService) { }

  ngOnInit(): void {
  }

  submit(){
    this.pass=this.password
    this.isUser()
    this.isAdmin()
    this.clear();

  }
  isUser(){
    this._logService.getUser(this.username).subscribe(
      result=>{
        if(result!=null) {
          this.user=true
          if(this.pass==result.clave.toString() ){
            this.router.navigate(['/clubes'])
          }
        }
      }
    )
  }

  isAdmin(){
    this._logService.getAdmin(this.username).subscribe(
      result=>{
        
        if(result!=null) {
          this.admin=true
          
          if(this.pass==result.clave.toString()){
            this.router.navigate(['/admin']);
          }else {
            alert("Usuario o contraseña incorrectos")
          }
        }
      }
    )
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }

}
