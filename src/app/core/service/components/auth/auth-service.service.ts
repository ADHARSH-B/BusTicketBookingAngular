import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  loginapi:string="http://localhost:8080/api/v1/auth/signin"
  loginUser(form:any):Observable<any>{
    const headers={ 'content-type': 'application/json'}
    return this.http.post<any>(this.loginapi,form,{'headers':headers})
  }
}
