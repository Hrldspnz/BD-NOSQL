import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public url: string

  constructor( public _http: HttpClient) {
    this.url = "http://127.0.0.1:5000/"
   }

  addNewUser(dataUser: Object): Observable<any>{
    return this._http.post(this.url+'estudiantes', dataUser);
  }

  addClub(dataClub: Object): Observable<any>{
    return this._http.post(this.url+'cursos', dataClub);
  }

  getClub(): Observable<any>{
    return this._http.get(this.url+'cursos');
  }

  putInteresados(club: string, dataInter: Object){
    return this._http.put(this.url+'cursos/' + club, dataInter);
  }
  getInteresados(club: string,): Observable<any> {
    return this._http.get(this.url+'cursos/interesados/'+club);
  }

  getAportes(user: string,): Observable<any> {
    return this._http.get(this.url+'estudiantes/aportes/'+user);
  }

  putAportes(user: string, dataInter: Object){
    return this._http.put(this.url+'estudiantes/' + user, dataInter);
  }

}
