import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string;

  constructor( public _http: HttpClient) { 
    this.url = "http://127.0.0.1:5000/"
  }

  getDeporte(): Observable<any>{
    return this._http.get(this.url+'cursos/categoria/Deportes');
  }
  getArtes(): Observable<any>{
    return this._http.get(this.url+'cursos/categoria/Artes');
  }
  getIngenieria(): Observable<any>{
    return this._http.get(this.url+'cursos/categoria/Ingeniería');
  }
  getIdiomas(): Observable<any>{
    return this._http.get(this.url+'cursos/categoria/Idiomas');
  }
  
  getStudentsTop3(): Observable<any>{
    return this._http.get(this.url+'estudiantes/top3');
  }

  getTop5(): Observable<any>{
    return this._http.get(this.url+'cursos/top5M');
  }

  getBottom5(): Observable<any>{
    return this._http.get(this.url+'cursos/top5P');
  }
}
