import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlogService {
  url:string;

  constructor( public _http: HttpClient) { 
    this.url = "http://127.0.0.1:5000/"
  }

  getUser(username: Object): Observable<any>{
    return this._http.get(this.url+'estudiantes/'+ username);
  }
  getAdmin(username: Object): Observable<any> {
    return this._http.get(this.url+'admin/'+ username);
  }
}
