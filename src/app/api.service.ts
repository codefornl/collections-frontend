import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cbases, Usecase, Cbase } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cbaseroot = 'https://cbase.codefor.nl';
  httpOptions = {
    headers: new HttpHeaders({
     Authorization: 'mytoken'
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient) { }

  getCbases(): Observable<Cbases> {
    return this.http.get(this.cbaseroot + '/cbases', this.httpOptions) as Observable<Cbases>;
  }

  getCbase(id: string): Observable<Cbase> {
    return this.http.get(this.cbaseroot + '/cbases/' + id, this.httpOptions) as Observable<Cbase>;
  }

  getUsecase(uid: string): Observable<Usecase> {
    return this.http.get(this.cbaseroot + '/usecases/' + uid, this.httpOptions) as Observable<Usecase>;
  }
}
