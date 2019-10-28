import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CbasesResponse, CbaseResponse } from './cbase';
import { UsecaseResponse } from './usecase';

@Injectable({
  providedIn: 'root'
})
export class CbaseService {
  cbaseroot = "https://cbase.codefor.nl";
  httpOptions = {
    headers: new HttpHeaders({
     'Authorization': "mytoken"
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient) { }

  getCbases(): Observable<CbasesResponse> {
    return this.http.get(this.cbaseroot + "/cbases", this.httpOptions) as Observable<CbasesResponse>;
  }

  getCbase(id: string): Observable<CbaseResponse> {
    return this.http.get(this.cbaseroot + "/cbases/" + id, this.httpOptions) as Observable<CbaseResponse>;
  }

  getUsecase(uid: string): Observable<UsecaseResponse> {
    return this.http.get(this.cbaseroot + "/usecases/" + uid, this.httpOptions) as Observable<UsecaseResponse>;
  }
}
